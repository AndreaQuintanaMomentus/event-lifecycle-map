# Event Lifecycle Map — Content Architecture

This document explains *how the map is structured* — the content model, ID conventions, and exactly where new validated content belongs. It's written for two audiences:

1. **Claude sessions** (in this repo, or a Claude Project loaded with this file) that need to add content, suggest improvements, or guide a coworker through contributing new validated information.
2. **Andrea**, as a reference for the schema she's designed so edits stay consistent as the map grows.

For *what the map currently says* (the actual persona text, metric definitions, JTBD outcomes), see [`SITE_CONTENT.md`](SITE_CONTENT.md) — a full plain-text mirror of the site, auto-generated from `index.html`. For design tokens, fonts, and colors, see [`CLAUDE.md`](CLAUDE.md).

Everything in this document describes structures inside the single `index.html` file — there is no other source file. Line-number references will drift as the file is edited; search for the `const NAME` or `id="..."` strings named below instead.

## The four-layer model

The map's core idea: every persona, product area, and stage of the event lifecycle can be described through the same four layers, always in this order:

| # | Layer | Framework | Answers |
|---|-------|-----------|---------|
| 01 | **Semantic** | Rosenberg Semantic IxD + Barry Smith ontology | What *objects* exist, and what can be done to them? |
| 02 | **Human** | Ontological Persona Definition (OPD) | Who experiences this lifecycle? |
| 03 | **Innovation** | Ulwick Jobs-to-Be-Done + ODI | Where is value being left on the table? |
| 04 | **Strategy** | Amplitude North Star Playbook | How do we know we're delivering value? |

Each layer has one section in `index.html` (`#sec-grammar`, `#sec-personas`, `#sec-jtbd`, `#sec-northstar`), plus a per-persona "Stages View" (`#sec-stage-sharon` etc.) that shows all four layers filtered to one persona/product area. **Any new content belongs to exactly one layer** — deciding which layer a piece of feedback belongs to is usually the first step in triaging a contribution.

## Core IDs (used consistently across every data structure)

- **Persona IDs:** `sharon` (Alex Smith, Sales), `emilie` (Sam Evans, Planning), `owen` (Jordan Olsen, Operations), `dana` (Casey Lindgren, Financial), `e3` (Morgan Rivera, End-to-End / Venue Director). These are internal keys only — the display names are Alex/Sam/Jordan/Casey/Morgan, not Sharon/Emilie/Owen/Dana. `e3` means "the end-to-end / North Star" track and is reserved exclusively for cross-cutting content (see `CLAUDE.md` for the color rule). Canonical order everywhere the 5 areas appear as a sequence: Sales → Planning → Operations → Financial → End-to-End (the "main 3" — Sales/Planning/Operations — stay first and together by design; Financial and End-to-End follow).
- **Object IDs:** `booking` (Event Opportunity, Sales), `planning` (Event Plan, Planning), `operations` (Event Work, Operations), `financials` (Event Financials, Financial), `event` (Event, End-to-End). Note the object id ≠ the object's display name.
- **Stage IDs (JTBD, 8 per persona):** `define`, `locate`, `prepare`, `confirm`, `execute`, `monitor`, `modify`, `conclude` — always in this order, always the same 8 for every persona.
- **North Star metric IDs:** MO (Momentus Opportunities, sharon), MP (Momentus Plans, emilie), MW (Momentus Work, owen), MF (Momentus Financials, dana), ME (Momentus Events, e3 / end-to-end). MF is a **peer metric** alongside MO/MP/MW, not folded into ME's definition — ME's own text still describes the MO→MP→MW chain only. If a future session is asked to make Financial "complete" ME, that's a deliberate, bigger content change to confirm first, not an oversight.

## Content model, layer by layer

### Semantic Layer — Primary Objects

Static HTML (not JS data), one `<div class="product-block" id="pb-<objectId>">` per object under `#sec-grammar`. Each block has:
- `.attr-grid` → three `.attr-col` (`fixed-col` / `dynamic-col` / `structural-col`), each with a list of `.attr-item` → `.attr-name` + `.attr-note`.
- `.actions-row` → three `.act-chip` elements (Create / Update / Delete), each carrying its description in a `data-desc` attribute.
- A `.sec-card-row` container (`id="sec-objs-<objectId>"`) for "Secondary Objects" — **this exists in the markup but is currently an empty, unwired placeholder.** If a future contribution needs to define a secondary/derived object (e.g. a Service Order under Event Plan), this is where it would go, but the render logic to populate it from data doesn't exist yet — it would need to be added alongside the content.

**To add a new attribute to an object:** add an `<li class="attr-item">` to the relevant `.attr-col` in the matching `pb-<objectId>` block, following the existing `attr-name` / `attr-note` pattern.

**To add a new primary object:** duplicate a full `product-block` (there are exactly 4, one per product area) and pick a new object id; also add matching entries to the JS lookups keyed by object id (`OBJECT_PATHS`, `CHIP_OBJECT_ICONS` are derived automatically from `OBJECT_PATHS`) so persona/stage pages can reference it.

### Human Layer — Personas

Three JS data structures, all top-level `const` in the `<script>` block:

- **`PERSONAS_DETAIL`** — one entry per persona id (`sharon`/`emilie`/`owen`/`e3`). Fields: `product`, `archetype`, `role` (`"Name · Job Title"`), `quote`, `quoteSrc`, `object`/`objId`/`objClass` (links to the Semantic Layer), `fixed[]`, `dynamic[]`, `structural[]` (the three OPD attribute lists — plain sentences, not name/note pairs like objects), `grammarPills[]`, `interaction`. **This is the authoritative, currently-rendered persona content** (used by `openPersonaModal()`).
- **`VERTICAL_ATTRS`** — `VERTICAL_ATTRS[personaId][verticalName]` → a vertical-specific persona variant: `persona` (name + title), `archetype`, `fixed[]`, `dynamic[]`, `structural[]`. Verticals in use today: Arts & Culture, Convention Centers, Corporate, Higher Ed, Stadiums & Arenas — not every persona has every vertical populated yet.
- **`SECONDARY_PERSONAS`** — `SECONDARY_PERSONAS[personaId]` → array of adjacent/secondary personas who interact with that primary persona's world but aren't the primary actor. Each entry: `name`, `role`, `archetype`, `vertical`, `relationship` (prose describing how they relate to the primary persona), plus the same `fixed[]`/`dynamic[]`/`structural[]` triad. Rendered as `.sec-persona-tile` cards directly on the page (`buildSecondaryPersonaTiles()`, `#sec-tiles-<personaId>`) below each primary persona's card — no longer inside `openPersonaModal()`. Each tile opens its own dialog (`openSecondaryPersonaModal()`), reusing the same `persona-modal` shell as the primary persona dialog but labeled "Secondary Persona."

**To add a new vertical persona variant:** add a keyed entry to `VERTICAL_ATTRS[personaId]`.
**To add a new secondary persona:** push a new object into the `SECONDARY_PERSONAS[personaId]` array.
**To edit a primary persona's core identity:** edit `PERSONAS_DETAIL[personaId]` directly — this is high-blast-radius since it's the North Star / Stages View / JTBD chips all reference this record; confirm with Andrea before changing `object`/`objId` links or archetype names.

> **Known dead content:** `#sec-personas` also contains a hidden (`display:none`) `.zi-grid` block with its own quotes and attribute text per persona. It is legacy markup no longer rendered (superseded by `PERSONAS_DETAIL` via `openPersonaModal()`) and its quotes have drifted from the live ones — don't treat it as current when answering questions, and it's a reasonable candidate for cleanup.

### Innovation Layer — Jobs to Be Done

The largest and most structured part of the map. Four JS data structures work together:

- **`STAGES`** — the 8 lifecycle stage definitions (id, number, label, verbs). Shared across all personas.
- **`PERSONAS_J`** — one entry per persona for the JTBD context: `mainAction`, `job` (the functional job statement), `jtbd: { when, want, soCan }` (the formal JTBD statement), plus display fields duplicated from `PERSONAS_DETAIL` (color, object, role) for convenience.
- **`SHORT`** — `SHORT[personaId][stageId]` → a short 2-4 word label shown in the JTBD grid cell (e.g. "Qualify event fit & feasibility").
- **`MAP`** — `MAP[personaId][stageId]` → the actual content per cell:
  - `step` (string) — what happens at this stage. Convention: if the sentence contains an em dash (` — `), everything after the dash is a **gap/opportunity note** appended to the step description (the UI splits on this dash to style them differently, but treat it as one continuous thought when reading).
  - `researchOpps` (string, optional) — a paragraph naming specific product opportunities surfaced by vertical research.
  - `productDocOpps` (string, optional) — a paragraph naming a specific, more concrete product documentation opportunity (usually more tactical/scoped than `researchOpps`).
  - `outcomes` — array of **ODI desired outcome statements**, each `{ dir, metric, obj, when }`. This follows Ulwick's Outcome-Driven Innovation grammar exactly: **Direction** (`Minimize` / `Maximize` / `Increase`) + **Metric** (e.g. "the time it takes to") + **Object of control** (what's being acted on) + **Contextual Clarifier** (the `when` — the situation that makes this outcome matter). All four parts are required for a valid outcome statement.

**To add a new desired outcome:** append `{dir, metric, obj, when}` to `MAP[personaId][stageId].outcomes`, following the ODI grammar above. This is the single most common type of contribution from stakeholder interviews — a validated pain point or opportunity almost always becomes one outcome statement here.

**To add a new research or product-doc opportunity:** set/append to `researchOpps` or `productDocOpps` on the relevant `MAP[personaId][stageId]` cell.

**To change what stages exist:** don't, without confirming with Andrea first — all 4 personas assume exactly these same 8 stages; changing them means updating `STAGES`, every `SHORT[*]` entry, and every `MAP[*][stageId]` cell.

### Curated Opportunity Actions (`OPPS_ACTIONS`) — currently inert

`OPPS_ACTIONS[personaId][stageId][source]` (`source` is `gap` / `research` / `productdoc`) maps to `{ action, outcomeIdx }` — a short curated action label plus a pointer (by array index) into that cell's `MAP[...].outcomes`. **This data is defined but not currently rendered anywhere in the live UI** — the "opportunities summary" feature that displayed it was removed (see `git log index.html`). Leave it alone unless you're specifically reviving that feature; don't assume it reflects anything a user currently sees.

### Strategy Layer — North Star

Static HTML (not JS data) under `#sec-northstar`, one `.tab-view` per metric (`#ns-e3`, `#ns-sharon`, `#ns-emilie`, `#ns-owen`). Each contains:
- `.star-card` → eyebrow, `.star-metric` (name + `.star-abbr` like "(MO)"), `.star-def` (the full metric definition), `.chip-label` badges.
- `.persona-strip` (sharon/emilie/owen only) linking to the owning primary persona.
- `.inputs-grid` → exactly 5 `.ic` cards, one per input-metric dimension, always in this order: **Adoption** (active user) → **Engagement** (feature usage) → **Retention** (return rate) → **Efficiency** (time to value) → **Effectiveness** (task success). Each has `.ic-name` + `.ic-def`.
- A variable number of `.rationale` Q&A pairs (`.rat-q` / `.rat-a`) justifying the metric.

**To add a new rationale Q&A:** add a `.rationale` block (with `.rat-q` and `.rat-a`) to the relevant `#ns-<id>` section — any number is fine, there's no fixed cap.
**To change an input metric definition:** edit the matching `.ic-name`/`.ic-def` pair — don't add/remove `.ic` cards, since the 5-dimension structure is fixed by the North Star framework itself.

### Layer descriptions

`LAYER_INFO[layerId]` (`semantic`/`human`/`innov`/`strat`) — the short HTML shown in each layer's "ⓘ" popover. Edit these if the framework attribution or one-line description of a layer changes.

## Keeping `SITE_CONTENT.md` in sync

`SITE_CONTENT.md` is generated, not hand-written. After **any** content change to `index.html` (new outcome, new persona, new rationale, anything under "content model" above):

```
cd tools && node extract-content.js
```

This re-parses `index.html` (via a sandboxed read of its JS data plus a DOM parse of its static HTML — see `tools/extract-content.js` for details) and rewrites `SITE_CONTENT.md`. Re-upload the regenerated file to any Claude Project used for Q&A on the map. The script has no side effects on `index.html` itself — it only reads it.

## Guiding a coworker's contribution

When someone wants to add validated information (e.g. a new stakeholder-interview finding):

1. **Identify the layer.** A pain point or opportunity almost always becomes a JTBD desired outcome (Innovation Layer). A new stakeholder role becomes a secondary persona (Human Layer). A new metric justification becomes North Star rationale (Strategy Layer). A new system entity becomes a Semantic Layer object/attribute.
2. **Identify the persona and stage** (for JTBD content) or **persona and vertical** (for persona content) it belongs to.
3. **Shape it into the right grammar** — ODI outcome statement for JTBD, Fixed/Dynamic/Structural attribute for personas or objects, Q&A pair for North Star rationale.
4. **Confirm before large structural changes** (new persona, new object, new stage, new vertical) — per `CLAUDE.md`, small additions within the existing schema don't need pre-approval, but new categories do.
5. Implement in `index.html`, regenerate `SITE_CONTENT.md`, and re-upload it wherever coworkers ask questions about the map.
