#!/usr/bin/env node
'use strict';
/*
 * Regenerates SITE_CONTENT.md from index.html.
 *
 * index.html is the single source of truth for the site. This script never
 * edits it — it only reads it and produces a plain-Markdown mirror of every
 * piece of content (personas, objects, North Star metrics, JTBD map) so the
 * content is queryable by an LLM (e.g. a Claude Project) without needing to
 * execute or screenshot the page.
 *
 * Run after any content change to index.html:
 *   cd tools && node extract-content.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { JSDOM } = require('jsdom');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'index.html');
const OUT = path.join(ROOT, 'SITE_CONTENT.md');

const PERSONA_ORDER = ['sharon', 'emilie', 'owen', 'dana', 'me'];
const OBJECT_ORDER = ['booking', 'planning', 'operations', 'financials', 'intelligence', 'event'];
const STAGE_LABEL_BY_OBJ = { booking: 'Sales', planning: 'Planning', operations: 'Operations', financials: 'Financial', intelligence: 'Leadership', event: 'End-to-End' };

const html = fs.readFileSync(SRC, 'utf8');

// ─── 1. Pull the JS data objects out of the inline <script> via vm ───
// These are top-level `const` bindings, so they're lexically scoped rather
// than attached to the global object. We append a trailer that copies them
// onto a `var` (which DOES attach to the vm context's global) so we can read
// them back out after execution.
function extractDataObjects(rawHtml) {
  const scripts = [...rawHtml.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const mainScript = scripts.sort((a, b) => b.length - a.length)[0];
  const names = [
    'PERSONAS_DETAIL', 'VERTICAL_ATTRS', 'SECONDARY_PERSONAS',
    'STAGES', 'PERSONAS_J', 'SHORT', 'MAP', 'OPPS_ACTIONS', 'LAYER_INFO',
    'MOMENTUS_OFFERING', 'OFFER_CARD_META', 'PRODUCT_META', 'PRODUCT_ORDER',
    'MOMENTUS_VISION', 'MOMENTUS_VISION_UMBRELLA',
  ];
  const trailer = `\nvar __DATA__ = {${names.join(',')}};\n`;

  // index.html runs a handful of `build*()` calls at the bottom of the
  // script to populate the DOM on load (buildPersonaCards, buildJTBDGrid).
  // We don't need their output (we read the same source data directly),
  // but they must not throw. A permissive fake element swallows any
  // property get/set or method call so those init calls run harmlessly.
  function fakeElement() {
    const target = {
      style: new Proxy({}, { get: () => '', set: () => true }),
      classList: { add() {}, remove() {}, contains: () => false, toggle() {} },
      dataset: {},
      querySelector: () => null,
      querySelectorAll: () => [],
      addEventListener() {}, removeEventListener() {},
      removeAttribute() {}, setAttribute() {}, getAttribute: () => null,
      appendChild: (x) => x, cloneNode: () => fakeElement(),
      closest: () => null, focus() {}, click() {},
    };
    return new Proxy(target, {
      get: (t, prop) => (prop in t ? t[prop] : () => fakeElement()),
      set: (t, prop, value) => { t[prop] = value; return true; },
    });
  }

  const sandbox = {
    document: {
      addEventListener() {}, removeEventListener() {},
      documentElement: fakeElement(),
      activeElement: fakeElement(),
      getElementById: () => fakeElement(),
      createElement: () => fakeElement(),
      querySelector: () => null,
      querySelectorAll: () => [],
    },
    localStorage: { getItem: () => null, setItem() {} },
    navigator: {},
    console,
  };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(mainScript + trailer, sandbox, { filename: 'index.html-inline-script' });
  return sandbox.__DATA__;
}

// ─── 2. Parse the static (non-JS-generated) HTML sections via jsdom ───
// North Star cards and Semantic Layer object cards are hand-authored markup,
// not JS data — jsdom lets us query them the same way a browser would,
// independent of exact whitespace/formatting.
function extractStaticContent(rawHtml) {
  const dom = new JSDOM(rawHtml);
  const doc = dom.window.document;
  const clean = (s) => (s || '').replace(/\s+/g, ' ').trim();

  function northStar(id) {
    const root = doc.getElementById('ns-' + id);
    if (!root) return null;
    const card = root.querySelector('.star-card');
    const metricEl = card.querySelector('.star-metric');
    const abbrEl = metricEl.querySelector('.star-abbr');
    const abbr = abbrEl ? clean(abbrEl.textContent) : '';
    const metricName = clean(metricEl.childNodes[0].textContent);
    const def = clean(card.querySelector('.star-def').textContent);
    const badges = [...card.querySelectorAll('.chip-label')].map((el) => clean(el.textContent));
    const stripEl = root.querySelector('.persona-strip');
    const persona = stripEl
      ? {
        role: clean(stripEl.querySelector('.pname').textContent),
        archetype: clean(stripEl.querySelector('.prole').textContent).replace(/^—\s*/, ''),
      }
      : null;
    const inputs = [...root.querySelectorAll('.ic')].map((ic) => ({
      dimension: clean(ic.querySelector('.ic-dim').textContent),
      name: clean(ic.querySelector('.ic-name').textContent),
      def: clean(ic.querySelector('.ic-def').textContent),
    }));
    const rationale = [...root.querySelectorAll('.rationale')].map((r) => ({
      q: clean(r.querySelector('.rat-q').textContent),
      a: clean(r.querySelector('.rat-a').textContent),
    }));
    return { abbr, metricName, def, badges, persona, inputs, rationale };
  }

  function primaryObject(objId) {
    const root = doc.getElementById('pb-' + objId);
    if (!root) return null;
    const name = clean(root.querySelector('.st-card-name').textContent);
    const columns = [...root.querySelectorAll('.attr-col')].map((col) => {
      const headerEl = col.querySelector('.attr-header');
      const subEl = headerEl.querySelector('.sub');
      const subText = subEl ? clean(subEl.textContent) : '';
      const headerLabel = clean(headerEl.textContent.replace(subEl ? subEl.textContent : '', ''));
      const items = [...col.querySelectorAll('.attr-item')].map((li) => ({
        name: clean(li.querySelector('.attr-name').textContent),
        note: clean(li.querySelector('.attr-note') ? li.querySelector('.attr-note').textContent : ''),
      }));
      return { label: headerLabel, sub: subText, items };
    });
    const actions = [...root.querySelectorAll('.act-chip')].map((chip) => ({
      name: clean(chip.textContent),
      desc: clean(chip.getAttribute('data-desc')),
    }));
    return { name, columns, actions };
  }

  function textById(id) {
    const el = doc.getElementById(id);
    return el ? clean(el.textContent) : null;
  }

  return {
    northStars: Object.fromEntries(['me', ...PERSONA_ORDER.filter((p) => p !== 'me')].map((id) => [id, northStar(id)])),
    primaryObjects: Object.fromEntries(OBJECT_ORDER.map((id) => [id, primaryObject(id)])),
    productVision: textById('product-vision-text'),
    productVisionSlogan: textById('product-vision-slogan'),
    productWhy: textById('product-why-text'),
    productWhySlogan: textById('product-why-slogan'),
  };
}

function htmlToMd(s) {
  return (s || '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<strong>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<em>(.*?)<\/em>/gi, '*$1*')
    .replace(/<[^>]+>/g, '')
    .trim();
}

function bulletList(items) {
  return items.map((i) => `- ${i}`).join('\n');
}

// ─── 3. Render Markdown ───
function render(data, staticContent) {
  const lines = [];
  const h = (n, text) => lines.push(`${'#'.repeat(n)} ${text}`, '');
  const p = (text) => lines.push(text, '');

  h(1, 'Momentus Event Lifecycle Map — Full Content Reference');
  p('_Auto-generated from `index.html` — do not hand-edit. Regenerate with `cd tools && node extract-content.js` after changing the map._');
  p('This document is a complete, plain-text mirror of every piece of content in the Event Lifecycle Map: personas, primary objects, North Star metrics, and the full Jobs-to-Be-Done map. It exists so any coworker can ask an LLM (e.g. a Claude Project loaded with this file) detailed questions about the map\'s content without needing to open or screenshot the live site. For how the map is *structured* — the schema, naming conventions, and where new content belongs — see `ARCHITECTURE.md` instead.');

  h(2, 'The Four Layers');
  p('The map has four layers, always in this order: Semantic → Human → Innovation → Strategy.');
  for (const [id, label] of [['semantic', 'Semantic Layer'], ['human', 'Human Layer'], ['innov', 'Innovation Layer'], ['strat', 'Strategy Layer']]) {
    p(`**${label}**: ${htmlToMd(data.LAYER_INFO[id]).replace(/^.*?\n/, '')}`);
  }

  // ── Personas ──
  h(2, 'Personas (Human Layer)');
  for (const pid of PERSONA_ORDER) {
    const d = data.PERSONAS_DETAIL[pid];
    const role = d.role;
    h(3, `${role} ("${d.archetype}")`);
    p(`**Product area:** ${d.product}  \n**Primary object:** ${d.object}  \n**Quote:** "${d.quote.replace(/[“”]/g, '')}"  \n**Interaction grammar:** ${d.grammarPills.join(' · ')} — *${d.interaction}*`);
    h(4, 'Fixed Conditions');
    p(bulletList(d.fixed));
    h(4, 'Dynamic States');
    p(bulletList(d.dynamic));
    h(4, 'Structural Status');
    p(bulletList(d.structural));

    const verticals = data.VERTICAL_ATTRS[pid] || {};
    if (Object.keys(verticals).length) {
      h(4, `Vertical-specific variants of ${role}`);
      for (const [vertical, v] of Object.entries(verticals)) {
        if (v.emptyNote) {
          h(5, `${vertical}: not yet documented`);
          p(v.emptyNote);
          continue;
        }
        h(5, `${vertical}: ${v.persona} ("${v.archetype}")`);
        p(`**Fixed Conditions**\n${bulletList(v.fixed)}\n\n**Dynamic States**\n${bulletList(v.dynamic)}\n\n**Structural Status**\n${bulletList(v.structural)}`);
      }
    }

    const secondaries = data.SECONDARY_PERSONAS[pid] || [];
    if (secondaries.length) {
      h(4, `Secondary / adjacent personas around ${role}`);
      for (const s of secondaries) {
        h(5, `${s.role} (${s.orgLevel}) · "${s.archetype}"`);
        p(`**Relationship to ${role}:** ${s.relationship}`);
        p(`**Fixed Conditions**\n${bulletList(s.fixed)}\n\n**Dynamic States**\n${bulletList(s.dynamic)}\n\n**Structural Status**\n${bulletList(s.structural)}`);
      }
    }
  }

  // ── Primary Objects ──
  h(2, 'Primary Objects (Semantic Layer)');
  p('Each object is defined by three attribute types (Fixed Conditions, Dynamic States, Structural Status) and supports Create / Update / Delete actions.');
  for (const objId of OBJECT_ORDER) {
    const o = staticContent.primaryObjects[objId];
    h(3, `${o.name} (${STAGE_LABEL_BY_OBJ[objId]})`);
    for (const col of o.columns) {
      h(4, `${col.label}${col.sub ? ' ' + col.sub : ''}`);
      p(bulletList(col.items.map((i) => `**${i.name}**${i.note ? ' — ' + i.note : ''}`)));
    }
    h(4, 'Actions');
    p(bulletList(o.actions.map((a) => `**${a.name}**: ${a.desc}`)));
  }
  p('_Note: each object card also has a "Secondary Objects" slot in the UI (`sec-objs-*`) that is currently an empty placeholder — not yet wired to data. See ARCHITECTURE.md._');

  // ── Strategy and North Stars ──
  h(2, 'Strategy and North Stars (Strategy Layer)');
  if (staticContent.productVision) p(`**Vision** — ${staticContent.productVision}`);
  if (staticContent.productVisionSlogan) p(`**Vision Slogan** — ${staticContent.productVisionSlogan}`);
  if (staticContent.productWhy) p(`**Why We Do It** — ${staticContent.productWhy}`);
  if (staticContent.productWhySlogan) p(`**Why We Do It Slogan** — ${staticContent.productWhySlogan}`);
  p('Each product area is headed "Momentus <Area>" — its Primary Object/Persona/Job, then its own Mission, Vision, and Why We Do It, then the North Star metric that proves the strategy is working, then Key Input Metrics. A Golden Circle (Why/How/What) read of the product org\'s 3-year vision. Finance has no supporting GTM deck yet, unlike Sales/Planning/Operations/Events — its Why/Mission/Vision are grounded only in Event Lifecycle Map research, a known gap. See `MOMENTUS_GOLDEN_CIRCLE_PROJECT_BRIEF.md` for full sourcing and the style rules behind this copy.');
  h(3, 'Momentus Events North Star');
  p('**Event and venue management professionals\' expertise amplified**');
  p('Momentus Events core value is delivered to event and venue management professionals when their expertise is amplified. Built from five teams working as one — Sales, Planning, Operations, Finance, and Leadership — Momentus Events signals that the entire journey, from first opportunity through final reconciliation, completes end to end, entirely inside the platform, without falling back to outside tools at any handoff. When the key input metrics below are all moving in the right direction, it means the full event lifecycle is delivering its value inside Momentus, start to finish.');
  for (const pid of PERSONA_ORDER) {
    const ns = staticContent.northStars[pid];
    const v = data.MOMENTUS_VISION[pid];
    const areaLabel = data.OFFER_CARD_META[pid].eyebrow;
    const areaTitle = `Momentus ${areaLabel}`;
    const pJob = data.PERSONAS_J.find((x) => x.id === pid);
    h(3, areaTitle);
    p(`The strategic approach Momentus has chosen for ${areaLabel}. The mission and vision driving it, the product area North Star metric that proves it's working, and the specific signals tracked to measure progress. This North Star ladders up into Momentus Events (ME), the company-wide measure of the full event lifecycle.`);
    if (pJob) p(`**Primary object:** ${pJob.object}`);
    if (ns.persona) p(`**Primary persona:** ${ns.persona.role} — ${ns.persona.archetype}`);
    if (pJob) p(`**Primary job:** ${pJob.mainAction}`);
    if (v) {
      p(`**Mission:** ${v.slogan}`);
      p(`**Vision:** ${v.vision}`);
      p(`**Why We Do It:** ${v.why}`);
    }
    const primaryRole = pJob ? pJob.role : 'Venue Director';
    const coreValueTag = `Momentus ${areaLabel} core value is delivered to the ${primaryRole} when their expertise is amplified.`;
    h(4, `Product Area North Star Metric — ${ns.metricName} ${ns.abbr} (core value)`);
    p(`**${primaryRole}'s expertise amplified**`);
    p(`${coreValueTag} ${v && v.coreValueNarrative ? v.coreValueNarrative : ''}`);
    p(`_Full metric definition:_ ${ns.def}`);
    if (ns.badges.length) p(ns.badges.map((b) => `\`${b}\``).join('  '));
    h(4, 'Key Input Metrics');
    for (const i of ns.inputs) p(`**${i.dimension} — ${i.name}**  \n${i.def}`);
    if (ns.rationale.length) {
      h(4, 'Rationale');
      for (const r of ns.rationale) p(`**${r.q}**  \n${r.a}`);
    }
  }

  // ── Momentus Offering ──
  h(2, 'Momentus Offering (Strategy Layer)');
  p('A capability matrix showing which Momentus products serve each stage of the event lifecycle — "stage" here means Sales/Planning/Operations/Financial/Leadership, not the 8 JTBD stages used elsewhere on this site. Rows are generic capability names, ordered from broadest (found across the most products) to narrowest (product-specific). Each area section below shows only capabilities tagged to that area, plus universal (cross-area) ones; the Leadership section shows every capability. "Inferred" flags a piece-to-capability assignment that is this map\'s own judgment call rather than a literal statement in the source. A "Third-Party" line lists non-Momentus tools customers use for that capability where known.');
  function capBreadth(cap) {
    return data.PRODUCT_ORDER.filter((prod) => cap.products[prod]).length;
  }
  for (const pid of PERSONA_ORDER) {
    const meta = data.OFFER_CARD_META[pid];
    const rows = data.MOMENTUS_OFFERING
      .filter((c) => !meta.areas || c.area === 'universal' || meta.areas.includes(c.area))
      .slice()
      .sort((a, b) => capBreadth(b) - capBreadth(a) || a.capability.localeCompare(b.capability));
    h(3, `${meta.label} (${meta.eyebrow})`);
    if (!rows.length) {
      p('_No offerings mapped yet for this area._');
      continue;
    }
    for (const cap of rows) {
      h(4, `${cap.capability} (${capBreadth(cap)}/${data.PRODUCT_ORDER.length} products)`);
      if (cap.personaUse && cap.personaUse[pid]) {
        p(`_How the ${data.PERSONAS_DETAIL[pid].role} uses this: ${cap.personaUse[pid]}_`);
      }
      const lines = [];
      for (const prod of data.PRODUCT_ORDER) {
        const entry = cap.products[prod];
        if (!entry) continue;
        lines.push(`- **${data.PRODUCT_META[prod].label} — ${entry.module}** — ${entry.desc}${entry.inferred ? ' _(inferred)_' : ''} _(source: ${entry.source})_`);
      }
      if (cap.thirdParty && cap.thirdParty.length) {
        for (const tp of cap.thirdParty) {
          lines.push(`- **Third-Party — ${tp.name}** — ${tp.desc}`);
        }
      }
      p(lines.join('\n'));
    }
  }

  // ── JTBD Map ──
  h(2, 'Jobs to Be Done Map (Innovation Layer)');
  p(htmlToMd(data.LAYER_INFO.innov).split('\n').slice(1).join('\n'));
  h(3, 'The 8 lifecycle stages (apply to every persona)');
  p(bulletList(data.STAGES.map((s) => `**${s.num} · ${s.label}** (${s.verbs})`)));

  for (const p_ of data.PERSONAS_J) {
    h(3, `${p_.mainAction} — ${p_.role} ("${p_.archetype}")`);
    p(`**Product area:** ${p_.product} · **Primary object:** ${p_.object}  \n**Functional job:** ${p_.job}`);
    p(`**JTBD statement** — When ${p_.jtbd.when}, I want to ${p_.jtbd.want}, so I can ${p_.jtbd.soCan}.`);
    for (const stage of data.STAGES) {
      const cell = data.MAP[p_.id][stage.id];
      h(4, `${stage.num} · ${stage.label} — ${data.SHORT[p_.id][stage.id]}`);
      p(`*Verbs: ${stage.verbs}*`);
      p(cell.step);
      if (cell.researchOpps) p(`**Research opportunity:** ${cell.researchOpps}`);
      if (cell.productDocOpps) p(`**Product documentation opportunity:** ${cell.productDocOpps}`);
      p('**Desired outcomes:**');
      p(cell.outcomes.map((o, i) => `${i + 1}. ${o.dir} ${o.metric} ${o.obj} — when ${o.when}`).join('\n'));
    }
  }

  // ── Curated opportunity actions ──
  h(2, 'Curated Opportunity Actions (reference data)');
  p('_This data (`OPPS_ACTIONS` in index.html) maps each persona/stage to short, curated opportunity statements, each linked to one of the desired outcomes above by index. As of the last regeneration, this data is defined in the code but is **not currently rendered anywhere in the live UI** (the "opportunities summary" panel that displayed it was removed — see git history for `index.html`). Kept here for reference in case the feature is revived; skip this section when answering questions about what a user currently sees on the site._');
  for (const pid of PERSONA_ORDER) {
    const stageMap = data.OPPS_ACTIONS[pid] || {};
    h(3, `${pid}`);
    for (const [stageId, sources] of Object.entries(stageMap)) {
      for (const [src, entry] of Object.entries(sources)) {
        const outcome = data.MAP[pid]?.[stageId]?.outcomes?.[entry.outcomeIdx];
        const outcomeText = outcome ? `${outcome.dir} ${outcome.metric} ${outcome.obj}` : '(no linked outcome)';
        p(`- **${stageId} / ${src}:** ${entry.action} — _targets:_ ${outcomeText}`);
      }
    }
  }

  return lines.join('\n');
}

const data = extractDataObjects(html);
const staticContent = extractStaticContent(html);
const md = render(data, staticContent);
fs.writeFileSync(OUT, md, 'utf8');
console.log(`Wrote ${OUT} (${(md.length / 1024).toFixed(1)} KB)`);
