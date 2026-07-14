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
const OBJECT_ORDER = ['booking', 'planning', 'operations', 'financials', 'event'];
const STAGE_LABEL_BY_OBJ = { booking: 'Sales', planning: 'Planning', operations: 'Operations', financials: 'Financial', event: 'End-to-End' };

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
    'HISTORIC_CONTEXT', 'HC_CARD_META',
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
        name: clean(stripEl.querySelector('.pname').textContent),
        role: clean(stripEl.querySelector('.prole').textContent).replace(/^—\s*/, ''),
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

  return {
    northStars: Object.fromEntries(['me', ...PERSONA_ORDER.filter((p) => p !== 'me')].map((id) => [id, northStar(id)])),
    primaryObjects: Object.fromEntries(OBJECT_ORDER.map((id) => [id, primaryObject(id)])),
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
    const [name, role] = d.role.split(' · ');
    h(3, `${name} — ${role} ("${d.archetype}")`);
    p(`**Product area:** ${d.product}  \n**Primary object:** ${d.object}  \n**Quote:** "${d.quote.replace(/[“”]/g, '')}" — ${d.quoteSrc}  \n**Interaction grammar:** ${d.grammarPills.join(' · ')} — *${d.interaction}*`);
    h(4, 'Fixed Conditions');
    p(bulletList(d.fixed));
    h(4, 'Dynamic States');
    p(bulletList(d.dynamic));
    h(4, 'Structural Status');
    p(bulletList(d.structural));

    const verticals = data.VERTICAL_ATTRS[pid] || {};
    if (Object.keys(verticals).length) {
      h(4, `Vertical-specific variants of ${name}`);
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
      h(4, `Secondary / adjacent personas around ${name}`);
      for (const s of secondaries) {
        h(5, `${s.name} — ${s.role} (${s.vertical}) · "${s.archetype}"`);
        p(`**Relationship to ${name}:** ${s.relationship}`);
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

  // ── North Star ──
  h(2, 'North Star Framework (Strategy Layer)');
  for (const pid of ['me', ...PERSONA_ORDER.filter((x) => x !== 'me')]) {
    const ns = staticContent.northStars[pid];
    h(3, `${ns.metricName} ${ns.abbr}`);
    p(ns.def);
    if (ns.badges.length) p(ns.badges.map((b) => `\`${b}\``).join('  '));
    if (ns.persona) p(`**Primary persona:** ${ns.persona.name} — ${ns.persona.role}`);
    h(4, 'Key Input Metrics');
    for (const i of ns.inputs) p(`**${i.dimension} — ${i.name}**  \n${i.def}`);
    if (ns.rationale.length) {
      h(4, 'Rationale');
      for (const r of ns.rationale) p(`**${r.q}**  \n${r.a}`);
    }
  }

  // ── Historic Context ──
  h(2, 'Historic Context (Strategy Layer)');
  p('Company/product/customer history timeline. Each area card below shows only entries tagged to that area; the End-to-End card shows every entry, including universal (company-wide) ones.');
  for (const pid of PERSONA_ORDER) {
    const meta = data.HC_CARD_META[pid];
    const items = data.HISTORIC_CONTEXT
      .filter((e) => !meta.areas || meta.areas.includes(e.area))
      .slice()
      .sort((a, b) => b.sort.localeCompare(a.sort));
    h(3, `${meta.label} (${meta.eyebrow})`);
    if (!items.length) {
      p('_No entries yet for this area._');
      continue;
    }
    p(items.map((e) => `- **${e.dateLabel}** [${e.category}] ${e.title} — ${e.desc} _(source: ${e.source})_`).join('\n'));
  }

  // ── JTBD Map ──
  h(2, 'Jobs to Be Done Map (Innovation Layer)');
  p(htmlToMd(data.LAYER_INFO.innov).split('\n').slice(1).join('\n'));
  h(3, 'The 8 lifecycle stages (apply to every persona)');
  p(bulletList(data.STAGES.map((s) => `**${s.num} · ${s.label}** (${s.verbs})`)));

  for (const p_ of data.PERSONAS_J) {
    h(3, `${p_.mainAction} — ${p_.name}, ${p_.role} ("${p_.archetype}")`);
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
