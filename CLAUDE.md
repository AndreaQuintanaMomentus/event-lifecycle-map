# Momentus Event Lifecycle Map — Claude Context

## What This Project Is
The **Momentus Event Lifecycle Map** is a strategic alignment tool for PM, Engineering, and Design — a shared vision of the human value Momentus is meant to deliver. It is:

- **Value-driven and human/user-centric** — grounded in personas, jobs-to-be-done, and desired outcomes
- **Product-agnostic and holistic** — maps the full event management lifecycle, not a single product
- **Strategic** — surfaces Momentus' current value delivery coverage, gaps (integration gaps, third-party tool usage, pain points), and opportunities

Its purpose is to align teams around: where we are today, where we want to go, and how we get there together.

## Primary Artifact
- **`index.html`** — the interactive map, a single-file plain HTML/CSS/JS application
- Hosted on GitHub Pages so changes are immediately shareable via URL
- This file is the source of truth — all design and content work happens here

## Companion Docs (generated from `index.html`, for LLM/coworker consumption)
- **`SITE_CONTENT.md`** — a full plain-text mirror of every piece of content on the site (personas, objects, North Star metrics, full JTBD map). Auto-generated — never hand-edit. Upload this to a Claude Project so any coworker can ask deep content questions without needing to open or screenshot the live site.
- **`ARCHITECTURE.md`** — documents the content *model*: the schema behind personas/objects/JTBD/North Star, ID conventions, and exactly where new validated content belongs. Read this before adding content or guiding a coworker's contribution.
- **Regenerate after any content change:** `cd tools && node extract-content.js` rewrites `SITE_CONTENT.md` from the current `index.html`. Re-upload it to the Claude Project afterward. The `tools/` folder (a small Node script + jsdom) is a maintenance utility only — it's not part of the shipped site.

## Personas
Four core user personas plus the cross-cutting End-to-End track, each with an assigned color used consistently across the map. Canonical order everywhere they appear as a sequence: Sales → Planning → Operations → Financial → End-to-End — the "main 3" (Sales/Planning/Operations) stay first and together by design.
- **Sharon** (Alex Smith, Sales) — `#34d399` (green)
- **Emilie** (Sam Evans, Planning) — `#60a5fa` (blue)
- **Owen** (Jordan Olsen, Operations) — `#f97316` (orange)
- **Dana** (Casey Lindgren, Financial) — `#eab308` (yellow) — added 2026-07-06, see Session Log
- **E3 / North Star metric** (Morgan Rivera, End-to-End) — `#a78bfa` (purple) — reserved exclusively for this

## Design System (defined in `:root` CSS variables)
- **Fonts:** IBM Plex Sans (body), IBM Plex Mono (data/code), Sora (display/headings)
- **Background:** `#0d0f14` (dark)
- **Surface layers:** `#13161e`, `#1a1e2a`
- **Attribute type colors:** Fixed Conditions (purple), Dynamic States (sky blue), Structural Status (orange)
- **North Star input metric colors:** Adoption (green), Engagement (sky), Retention (orange), Efficiency (fuchsia), Effectiveness (purple)
- All color tokens are defined as CSS custom properties — always use variables, never hardcode hex values

## Project Stage & Workflow
- **Living document** — continuously refined as stakeholders contribute expertise and feedback
- Andrea conducts regular **validation interviews** with stakeholders; Claude helps synthesize insights and apply feedback to the map
- No Jira or Confluence for this project — all context and inputs are provided directly in conversation

## Supporting Files (reference only, do not modify)
- `Event Lifecycle & Verticals.pptx` — source presentation material
- `PMO-Booking Manager_ KPI & North Star Metric*.pdf`, `PMO-Event Coordinator_ KPI & North Star Metric*.pdf` — North Star metric definitions per persona
- `Amplitude-The-North-Star-Playbook.pdf`, `North-Star_how-to-Guide_2024.pdf` — methodology references
- `UX_Magic_SemanticIxD_Summary.doc` — semantic IxD methodology reference
- `jobs_to_be_done_book.pdf`, `jtbd canvas.webp` — JTBD methodology references
- `EAB Executive Advisory Board & Executive Track/` — executive input materials

## How to Work on This Project
- **Editing the map:** Modify `index.html` directly. Keep all styles in the `<style>` block and all logic in the `<script>` block — single-file constraint must be maintained for GitHub Pages compatibility
- **After any content edit:** regenerate `SITE_CONTENT.md` (`cd tools && node extract-content.js`) and re-upload it to the Claude Project used for coworker Q&A. See `ARCHITECTURE.md` for the content schema and where new content belongs.
- **Synthesizing interviews:** When Andrea shares interview notes, extract themes, map them to existing lifecycle phases/personas/jobs, and surface actionable changes to the map
- **Design decisions:** Respect the established color system and design tokens. Propose changes clearly before implementing
- **Confirm before making significant structural changes** to the map's content model (phases, personas, jobs, metrics)

## Session Log

### 2026-07-01 — Built the content-export system
**Problem:** Andrea tried loading `index.html` into a Claude Project so coworkers could ask it questions about the map, but Claude asked for screenshots — the site's real content lives inside ~20 JS data objects in the `<script>` block, not as visible static text, so the raw file wasn't queryable as-is. She also wants Claude to deeply understand the map's structure so it can add new validated content to the right place and guide coworkers through contributing.

**What was built:**
- `SITE_CONTENT.md` — full plain-text export of every persona (+ vertical variants + secondary personas), all 4 primary objects, all 4 North Star metrics, and the entire JTBD map (4 personas × 8 stages × 300+ desired-outcome statements). This is what should be uploaded to the Claude Project for coworker Q&A.
- `ARCHITECTURE.md` — the content model/schema: ID conventions, the ODI outcome grammar, and exactly where each type of new content belongs. Read this before adding content or guiding a contribution.
- `tools/extract-content.js` (+ `tools/package.json`, needs `npm install` once) — regenerates `SITE_CONTENT.md` from `index.html` on demand, so the export stays in sync as Andrea keeps editing the map. Uses Node's `vm` to read the JS data objects and `jsdom` to parse the static HTML (North Star cards, Semantic Layer object cards). Run via `cd tools && node extract-content.js`.

**Decisions made:** Chose auto-regeneration over a one-time manual snapshot, since Andrea edits `index.html` often and a static doc would drift.

**Discovered along the way (not yet acted on):**
- The hidden `.zi-grid` persona cards in `#sec-personas` (`display:none`) contain stale/superseded quotes that don't match the live persona modals — candidate for cleanup, not touched.
- `OPPS_ACTIONS` data still exists in the code but isn't rendered anywhere in the current UI (the feature that displayed it was removed at some point).

**State at end of session:** Nothing committed to git — `SITE_CONTENT.md`, `ARCHITECTURE.md`, and `tools/` are new untracked files, same as everything else in this working directory. `SITE_CONTENT.md` has not yet been uploaded to the Claude Project — that's the next step for Andrea to do manually.

### 2026-07-06 — Added the Historic Context section, then a full 4th product area ("Financial")

**Part 1 — Historic Context (Strategy Layer)**
Built a new section below North Stars: 4 cards (mirroring the North Star card/modal shell) that open a vertical, filterable timeline of Momentus/Ungerboeck company history, categorized Industry/Market · Customer · Product (Andrea's own draft categorization, kept as-is).
- Sources: `gomomentus.com/ungerboeck` (the only source with real pre-2023 dates — founding 1985 through the 2023 Momentus rebrand and WeTrack acquisition), the 2023 Event Technology Awards blog post, and all pre-existing local docs (PMO strategy PDFs, EAB/Illuminate docs, `Event Lifecycle & Verticals.pptx`). The blog's other ~98 posts are evergreen SEO content, not history — not mined.
- Data model: a new `HISTORIC_CONTEXT` JS array (`{sort, dateLabel, category, area, title, desc, source, sourceUrl}` per entry) plus `openHcModal()`/`hcFilter()` — chosen over the North Star pattern's hidden-DOM cloning because this list will keep growing. Each entry has a source citation (real link for the 2 public-web-sourced facts; plain-text filename citation for internal docs, since those aren't hosted anywhere public).
- The Sales/Planning/Operations cards show ONLY entries tagged to that specific functional area (not the universal/company-wide ones) — Andrea asked for this explicitly to reduce noise since she plans to keep feeding in more area-specific source material. The End-to-End card shows everything. Sorted newest-first.
- Card icons: each area's real Semantic-Layer object icon (contract/clipboard/checklist/calendar) with a small clock badge in the corner — same treatment as the North Star cards' star badge, swapped for a clock to signal "history."
- **Gap:** Sales has 6 area-specific entries, Operations 8, Planning only 2 — genuinely thin, not padded. More sources from Andrea will fill these in.

**Part 2 — Added "Financial" as a full 4th product area**
Andrea provided 6 new files (`financials_persona.md/.docx/.pptx`, `financials_ai_opportunities.docx`, `FinanicalsSurveyQuestions.docx`, `FinanicalsSurveyResults.docx`) and asked for a full persona/object/JTBD/North Star build, positioned **Sales → Planning → Operations → Financial → End-to-End** (the "main 3" stay first/together — this ordering is now the documented convention, see `ARCHITECTURE.md`).
- **Source quality note:** all 3 underlying interviews (Laura Knott/Raleigh CC, Gary Firlit/Rochester Floreano CC, Stacey Church/Georgia World Congress Center) are Convention Center customers — single-vertical, n=3, qualitative. Same "not every persona has every vertical populated" state the original 3 personas started in. No `VERTICAL_ATTRS` or `SECONDARY_PERSONAS` entries exist yet for `dana` — that's an honest gap, not an oversight.
- **Identity (confirmed with Andrea before implementing):** internal id `dana`, display name **Casey Lindgren**, title **Finance Director**, archetype **"The Financial Steward"** (verbatim from the source doc), object **"Event Financials"** (Andrea's refinement of my draft), North Star **"Momentus Financials (MF)"** — defined as full financial closeout completed entirely inside Momentus without falling back to PeopleSoft/spreadsheets. Color yellow (`--dana: #eab308` dark / `#a16207` light).
- **Important, deliberate decision:** MF is a **peer metric** alongside MO/MP/MW — I did **not** edit the existing ME (End-to-End North Star) definition or rationale text to require financial closeout. If Andrea later wants ME redefined to include Financial, that's a separate, bigger content change — flag it explicitly, don't assume.
- **JTBD:** full 8-stage map built (44 outcome statements total, unevenly distributed — e.g. Locate/Confirm are thin at 4 each, Conclude is richest at 8 — because that's what the actual research supports; not padded to match the other personas' uniform 8-per-stage).
- Implementation touched all 4 layers plus ~20 mechanical ordering locations (North Star/Human Layer/Stages-View cards, `PERSONAS_J`/`SHORT`/`MAP` array order — which drives the JTBD grid column order directly — icon lookup tables, gradient connectors, `tools/extract-content.js`'s own hardcoded persona/object order). Swept the file systematically for every hardcoded 4-item lookup keyed by persona/object id rather than assuming the plan's initial location list was exhaustive — it wasn't; found several more (`objMeta` in `openObjectModal`, `PERSONA_ICONS` in `openPersonaModal`, `pIcons` in the JTBD grid builder) during a `grep`-driven sweep after the "planned" locations were done.
- **Icon iterations** (Andrea gave feedback across several follow-up turns): Event Financials object icon went dollar-sign → receipt-with-$ → coin (circle+$), settling on the coin to match the persona-icon motif already used elsewhere for Financial. The North Star card's icon had the coin and the star badge overlapping/illegible — fixed by dropping the $ from that specific icon and keeping just the star centered in the coin.
- **Process note for future sessions:** a general-purpose Explore agent asked only to report the *existing* code schema went off-brief and fabricated an entirely different, ungrounded persona (name "Taylor Morgan," object "Event Financial Record," North Star "Momentus Profitability," purple color). Caught by re-reading the real source docs and the real `index.html` myself before writing anything — don't trust sub-agent output for creative/content decisions without verification, even when the ask was "just report the schema."

**State at end of session:** Both features fully implemented in `index.html`, JS syntax-verified, `SITE_CONTENT.md` regenerated (and `tools/extract-content.js` updated to know about `dana`/`financials` going forward). Still to do: re-upload the regenerated `SITE_CONTENT.md` to the Claude Project; a live browser click-through (the in-session preview tooling had port-config issues this session, so verification was static/code-level, not visual — worth an actual look before treating this as fully done); decide whether Financial should get a Historic Context card too (not requested, not built). Nothing committed to git.

### 2026-07-06 (cont'd) — Added the Financial ("Dana") card to Historic Context

Answered the previous session's open question yes — built the 4th Historic Context card, following the exact pattern of the Sales/Planning/Operations cards.

- **3 new `HISTORIC_CONTEXT` entries, `area:'financial'`:** Apr 2024 Enterprise Accounting adoption/NPS-by-module snapshot (from `PMO-Enterprise Accounting & Financials - Product strategy.pdf`, same doc already used for 2 existing `universal` entries); Mar 2026 EAB session theme *"We do not know how much we're worth"* / True Event Profitability (from `illuminate_2026_internal_synthesis_1.docx` — this doc had only been mined for Sales-AI/GDPR content before; the profitability theme was sitting in it unused); Jul 2026 AI-Powered Opportunities strategy for the Financial persona (from `financials_ai_opportunities.docx`, a source not previously used anywhere on the site). All read directly from source docs myself, not delegated to a sub-agent, per the process note above.
- **New card:** `hcpb-dana`, positioned between Operations and End-to-End (Sales → Planning → Operations → Financial → End-to-End order), added `dana` to `HC_CARD_META`. Icon reuses Dana's coin motif; the coin's `$` path was then removed because it visually collided with the clock badge overlay — same fix already applied to the North Star card's coin+star icon last session. Kept only the plain coin ring + clock badge.
- **Bug found and fixed, unrelated to Financial specifically:** `tools/extract-content.js` never had `HISTORIC_CONTEXT`/`HC_CARD_META` in its vm-extraction `names` list, so the *entire* Historic Context feature (including the original Sales/Planning/Operations cards from earlier this session) was silently absent from `SITE_CONTENT.md` since it was built. Added both names to the extraction list and a new "Historic Context (Strategy Layer)" render section (grouped by card, same area-filter logic as `renderHcModal()` in the page itself, universal entries only surface on the End-to-End card). Regenerated and spot-checked the output.
- **Preview tooling:** the OneDrive root `.claude/launch.json` only had an unrelated `mwo-home` config (a different local project on port 5555). Added an `event-lifecycle-map` entry (serves this folder via `npx serve` on port 4173) alongside it, rather than replacing it. Verified live in-browser this time — card position/styling, modal open, category filter chips, and the End-to-End card picking up the new entries all confirmed working via screenshots.

**State at end of session:** `index.html` and `tools/extract-content.js` changes are in place, `SITE_CONTENT.md` regenerated to include Historic Context for the first time. Not yet uploaded to the Claude Project. Nothing committed to git. **Andrea's explicit next-session ask:** verify *all* existing site content against the available local source docs (not just Financial), and add "no data yet" empty states — modeled on the Historic Context pattern — wherever content on the site isn't actually source-backed. This is a big cross-cutting content-audit task, not yet started.

### 2026-07-07 — Ran the content audit; fixed one real bug, added one empty state

Ran the cross-cutting audit Andrea asked for at the end of the previous session. Converted all `.docx`/`.pptx`/`.rtf` sources to plain text (`textutil` + a small pptx-slide-XML extraction script, scratch folder deleted after), then ran 5 parallel sub-agents (one per persona area) to cross-reference every layer (persona/verticals/secondary personas, Semantic object, North Star, Historic Context, JTBD) against the source docs, each reporting a Strong/Partial/Thin/None confidence rating with citations.

**Process note:** two sub-agent findings turned out to be wrong and were caught by re-checking primary sources directly myself, consistent with the standing rule from the 2026-07-06 session — don't trust sub-agent output on content/factual judgments without verification, even for "just verify this" tasks:
- One agent claimed "Owen Olsen doesn't exist in the Stadiums & Arenas source material at all." False — he has his own real Private Events–track content (own quotes, own pain points) in `Momentus Personas by Vertical.docx`; the agent had only found the separate Public Events track (Bennett Bailey / Paige Pepper's world) and missed Owen's actual section.
- Another agent claimed the Financial Historic Context card's customer/NPS figures (746 total, 45%/27%/28%, NPS −16/−4/+4) were unverifiable, sitting in un-extractable chart images. False — opened `PMO-Enterprise Accounting & Financials - Product strategy.pdf` directly and confirmed every figure verbatim in plain-text tables (pages 5–6). The *other* agent auditing that same card had actually gotten this one right.

**Real bug found and fixed:** the site's Stadiums & Arenas variant of Owen Olsen (`VERTICAL_ATTRS.owen['Stadiums & Arenas']`) had misattributed content — it used Bennett Bailey/Paige Pepper's Public Events (game-day) pain points (static game-manifest PDF, change tracking, mobile gaps) under Owen's name, and overstated his scope as covering "both private events and public events." Rewrote fixed/dynamic/structural to use Owen's own sourced Private Events content (manual work orders, translating event needs into work orders by hand, end-of-day actuals close-out) and corrected the scope claim to make clear Public Events/game-day is a separate role Owen doesn't own. Also fixed Hank Henry's (`SECONDARY_PERSONAS.owen`) structural-status line, which incorrectly named "operations (Owen)" as one of the three functions risk spans — changed to a generic reference to the separate building-ops/game-day role since Bennett Bailey isn't modeled as an actual secondary persona on the site (deliberately didn't invent a bracketed name-reference to a non-existent card).

**Empty state added:** `openPersonaModal()` (`index.html` ~line 3540) rendered a "Secondary Personas" section header with a blank row underneath for Dana, since `SECONDARY_PERSONAS.dana` is genuinely empty (no verticals/secondary personas exist yet for Financial — a known, already-documented gap). Added a conditional dashed-border placeholder ("No secondary personas documented yet — not yet covered by validation interviews.") so the section reads as an intentional gap rather than a broken/missing render. Verified live in-browser (screenshot) alongside a regression check that Sharon's real secondary-persona cards still render normally.

**Other audit findings surfaced to Andrea, not yet acted on (her call):**
- All 5 primary personas' "quote" fields (Alex/Sam/Jordan/Casey/Morgan) are presented as direct speech but don't exist verbatim in any source — they're composites of the vertical variants (expected/by-design), but the quote framing implies literal speech. Flagged for Andrea to decide: relabel as illustrative, or swap in a real verbatim quote from a variant.
- MO North Star's name/definition diverges from the one directly-relevant KPI source (`PMO-Booking Manager_ KPI & North Star Metric.pdf`, which proposes "Net Booking Velocity" instead) — could be an intentional strategic reframe, needs Andrea's confirmation either way.
- Historic Context's ~9 pre-2023 entries citing `gomomentus.com/ungerboeck` aren't locally re-verifiable — confirmed `article.html` in the project root is NOT a saved copy of that page (it's an unrelated snapshot titled "Momentus Business & Product Strategy"). Not necessarily wrong, just can't be re-checked without a live fetch.
- JTBD desired-outcome statements across all 5 personas: stage *themes* are well-grounded, but individual ODI-grammar sentences are synthesized rather than transcribed from research — expected given the methodology, just worth knowing the actual granularity of "sourced" here.
- Everything else audited came back Strong or Partial — vertical variants and secondary personas (except the Owen bug above) verbatim-match `Momentus Personas by Vertical.docx`; the Financial area is the best-sourced of all five end to end.

**State at end of session:** Both fixes live in `index.html`, verified in-browser. `SITE_CONTENT.md` regenerated to reflect the Owen Olsen text change. Not yet uploaded to the Claude Project. Nothing committed to git. Remaining audit findings (quote framing, MO metric name, unverifiable pre-2023 history citations) are surfaced above but intentionally left for Andrea to decide on, not auto-fixed.

### 2026-07-07 (cont'd) — Acted on the 3 remaining audit findings

Andrea decided on all three open items from earlier in the session:

1. **Relabeled the persona quotes.** All 5 primary personas' `quote` fields are composite/synthesized, not verbatim — added a small caption directly under the quote in `openPersonaModal()` (`index.html` ~line 3566): "Composite voice — synthesized across validated interviews, not a direct quote." One shared render function serves all 5 personas, so this single change covers Alex/Sam/Jordan/Casey/Morgan at once. Left the existing `quoteSrc` data field (`'Alex Smith'` etc.) untouched — it's already unused/dead in rendering, out of scope for this fix.
2. **Folded velocity into MO's definition, kept the MO name.** The one directly-relevant KPI source (`PMO-Booking Manager_ KPI & North Star Metric.pdf`) proposed a different metric name ("Net Booking Velocity") entirely — Andrea's call was to keep "Momentus Opportunities (MO)" as the name/framework but fold the velocity concept (rate of qualified-inquiry-to-signed-contract conversion) into what MO actually measures, rather than adopt the source's name or add a separate metric. Edited the `.star-def` text for `#ns-sharon` (`index.html` ~line 1592) to combine the existing "entirely inside Momentus" framing with "the velocity of that conversion: the elapsed time from qualified inquiry to signed contract." Left the 5 key-input-metric cards and rationale Q&As untouched — didn't expand scope beyond the definition itself.
3. **Filled the exact gap the audit flagged:** fetched `https://gomomentus.com/ungerboeck` live (WebFetch) and saved its full timeline content as a new local reference doc, `gomomentus-ungerboeck-history.docx` — this URL is cited by ~9 Historic Context entries but had no local copy to verify against (confirmed `article.html` in the project root is unrelated). Generated via `docx` (docx-js), verified by round-tripping through `textutil -convert txt` since the skill's Python `validate.py` failed locally on a `match` statement (Python 3.9 vs. the 3.10+ syntax it needs — an environment issue, not a doc-generation issue). This is a supporting/reference file per the "Supporting Files" convention in this doc — not wired into `extract-content.js`, not meant to be cited from JS, just a locally-verifiable copy of what Historic Context already cites by URL.

**State at end of session:** All 3 changes live in `index.html`, `SITE_CONTENT.md` regenerated again, `gomomentus-ungerboeck-history.docx` added to the project root. Not yet uploaded to the Claude Project. Nothing committed to git.

### 2026-07-07 (cont'd) — Moved Secondary Personas out of the persona dialog onto the page

Andrea asked (referring to it as "the Semantic Layer," but the actual target — confirmed by inspecting the code — is the Human Layer's `#sec-personas` section, since Secondary Personas are Human Layer content; the Semantic Layer only holds the 4 primary objects) to stop hiding Secondary Personas inside the primary persona's dialog and instead show them, styled consistently with the primary persona cards, below each area's primary card.

- **Layout:** the single 5-wide `.product-row` of primary cards is now 5 `.persona-col` columns (Sales/Planning/Operations/Financial/End-to-End). Each column keeps the existing primary `.product-block` on top and adds a `.sec-persona-list` below it, populated by the new `buildSecondaryPersonaTiles()` (called once at page load, alongside `buildJTBDGrid()`). Dana's (Financial) column has no secondary personas yet, so it shows the existing dashed-border "not yet covered by validation interviews" placeholder inline instead of only inside a dialog.
- **Interaction (Andrea's explicit choice):** each `.sec-persona-tile` opens its own dialog (`openSecondaryPersonaModal()`) reusing the same `persona-modal` shell/overlay as the primary persona dialog, just labeled "`<Area>` Secondary Persona" instead of "Primary Persona," showing the secondary persona's `relationship` prose (in place of a quote) and a `vertical` tag badge, then the same Fixed/Dynamic/Structural attribute grid.
- `openPersonaModal()` no longer renders a "Secondary Personas" section at all — `toggleSecCard()` (the old in-dialog expand/collapse) was removed and replaced by the new modal function. `_attrGrid()` and `PERSONA_ICONS` were hoisted out of `openPersonaModal()` to module scope so both persona modal functions can share them.
- Removed the now-fully-dead `.sec-card`/`.sec-card-role`/`.sec-card-name`/`.sec-card-arch`/`.sec-card-rel` CSS (only ever used by the old in-dialog secondary cards). Kept `.sec-card-row`/`.sec-attrs-wrap` — those are still used by the unrelated, unwired Secondary Objects placeholder in the Semantic Layer (see "Semantic Layer — Primary Objects" in `ARCHITECTURE.md`).
- No underlying content changed (`SECONDARY_PERSONAS` data itself is untouched), so `SITE_CONTENT.md` does not need regenerating — `tools/extract-content.js` reads the JS data directly, not the modal markup.
- Verified live in-browser (screenshots): 5-column layout renders correctly in dark and light themes, primary dialog no longer shows secondary personas, a secondary tile (Owen/Operations → Paige Pepper) opens its own correctly-labeled dialog with relationship text + vertical tag + attributes, Dana's empty-state placeholder shows inline. No console errors.

**State at end of session:** Change is live in `index.html`, `ARCHITECTURE.md` updated to describe the new render location. Nothing committed to git.

**Follow-up same session — tile content reformatted:** Andrea asked the on-page `.sec-persona-tile` content to show `"Secondary Persona"` (static label) / role / vertical instead of role/name/archetype. Updated `buildSecondaryPersonaTiles()` so `.sec-persona-tile-role` now holds the literal string `"Secondary Persona"`, `.sec-persona-tile-name` holds `sp.role`, and `.sec-persona-tile-arch` holds `sp.vertical` — reused the existing three CSS classes/visual hierarchy, just remapped which field fills each slot. `sp.name` and `sp.archetype` are no longer shown on the tile (still visible after clicking through to `openSecondaryPersonaModal()`, which is unchanged). Verified live in-browser, no console errors.
