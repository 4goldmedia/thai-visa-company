# Golden Template Audit — DTV Visa Page (Phase 0)

**Date:** June 2026  
**Subject:** Architectural review of `/visas/dtv` as the candidate Golden Visa Page Template  
**Scope:** Visible sections only (`DTV_PHASE2_LAYOUT` in `lib/visas/content/dtv.ts`)  
**Status:** Review only — no code or content changes made

---

## Executive summary

The DTV page is a strong candidate for golden template status. It replaces the legacy Blueprint v3 default (20+ optional sections) with a **12-section, high-signal hub** that matches the canonical visa policy: answer-first, scannable facts, service process, documents, risks, comparison, post-approval, FAQ, cross-links, and conversion.

**Verdict:** **Yes, after minor adjustments** (see [Final Recommendation](#final-recommendation)).

Primary adjustments before freeze:

1. **Reorder** `requirements` before `checklist` (qualify → then document).
2. **Resolve redundancy** between definition, key facts, Core Documents, and pathway checklists.
3. **Trim FAQ** to edge cases only; remove questions already answered above the fold.
4. **Remove dead content** from `dtv.ts` (`officialSources`, `feesAndTimelines`, empty `overview`) or document that layout is the sole gate.
5. **Consider** a lightweight fees/timing row in key facts only (already partially there) — do not restore a separate fees section.

---

## Audit method

- **Visible structure:** `DTV_PHASE2_LAYOUT` (12 sections)
- **Rendered via:** `components/templates/visa-page.tsx` → `lib/visas/sections/render.tsx`
- **Compared against:** `DEFAULT_VISA_PAGE_LAYOUT` in `lib/visas/layout.ts`, legacy pages (e.g. Retirement), and `docs/content/visa-hub-canonical-policy.md`
- **Not audited as visible:** Content present in `dtv.ts` but excluded by layout (`officialSources`, `feesAndTimelines`, empty `overview`)

---

## Section-by-section audit

### 1. Hero

| Field | Assessment |
|-------|------------|
| **Purpose** | Establish visa identity, plain-English value prop, immediate contact path, and trust signals |
| **Decision** | **Keep** |
| **Reasoning** | Single H1, outcome imagery via `resolveVisaHeroMedia`, messaging CTAs (desktop), and three trust bullets set the premium operational tone. Matches brand system without resort aesthetics |
| **SEO** | Strong — primary H1, `data-page-summary` on lead, hero title in meta and schema |
| **Conversions** | High — LINE/WhatsApp CTAs above the fold on desktop; sticky bar covers mobile |
| **Understanding** | High — eyebrow + title + one-line overview answer intent in seconds |
| **Trust** | High — licensed specialists, clear requirements, fast replies |

**DTV-specific:** Visa name, hero image (`/images/visas/dtv-remote-work.jpg`), trust bullet copy.  
**Template behavior:** Hero shell, trust bullet pattern, imagery from `visaGalleryPhotography[slug]`.

**Improve:** None critical. Optional: ensure `hero.definition` or `answer` field alignment for speakable/AEO (currently `answer` exists separately from definition body).

---

### 2. Definition (“What is the Thailand DTV Visa?”)

| Field | Assessment |
|-------|------------|
| **Purpose** | Answer-first definitional content for humans and AEO; ivory band creates visual rhythm after hero |
| **Decision** | **Keep** |
| **Reasoning** | Three short paragraphs explain what DTV is, why Thailand offers it, and how it differs from tourist routes — without duplicating the key facts grid |
| **SEO** | High — speakable selector target, supports `answer` field and FAQ deduplication policy |
| **Conversions** | Medium — educates before ask; no hard CTA (appropriate) |
| **Understanding** | High — fills “what is this?” intent before mechanics |
| **Trust** | Medium-high — factual, non-sales tone |

**DTV-specific:** Body copy, official name, pathway references.  
**Template behavior:** `VisaDefinitionSection` with `band`, 2–4 paragraphs max.

**Improve:** Minor — first paragraph overlaps slightly with hero overview and `answer` field. Template rule: hero = one line; definition = full answer; `answer` = citable extract (40–60 words) aligned with paragraph one.

---

### 3. Key Facts (“DTV visa key facts”)

| Field | Assessment |
|-------|------------|
| **Purpose** | Scannable authority band with visa mechanics (validity, stay, funds, work rules, timing) |
| **Decision** | **Keep** |
| **Reasoning** | Dark highlight band (`highlight: true`) is a strong editorial anchor. Nine metric cards cover essentials without a separate fees/timelines section |
| **SEO** | High — structured facts for crawlers and speakable; absorbs fee/timing signals that would otherwise need `feesAndTimelines` |
| **Conversions** | Medium — qualifies/disqualifies visitors early (e.g. remote work only, 500k THB) |
| **Understanding** | Very high — best “at a glance” section on the page |
| **Trust** | High — specific numbers with qualifying detail notes |

**DTV-specific:** Card labels/values (5 years, 180 days, 500k THB, etc.).  
**Template behavior:** `highlight: true` mandatory for golden template; 6–9 cards; include fee and timing as cards where relevant.

**Improve:** None structural. For simpler visas (Tourist), fewer cards acceptable.

---

### 4. Process (“How we help with your DTV application”)

| Field | Assessment |
|-------|------------|
| **Purpose** | Service differentiation — how Thai Visa Company helps, not government filing steps |
| **Decision** | **Keep** (position: **Improve**) |
| **Reasoning** | Six clear agency steps from eligibility review to ongoing support. Correctly separates *our* process from embassy process |
| **SEO** | Low-medium — not primary ranking content; supports E-E-A-T indirectly |
| **Conversions** | **High** — strongest service pitch on the page |
| **Understanding** | High — sets expectations for engagement |
| **Trust** | High — concrete deliverables (personalized checklist, document review) |

**DTV-specific:** Step copy, six-step depth.  
**Template behavior:** `VisaProcessSection` with 4–6 agency steps.

**Improve:** **Section order.** Currently appears *before* checklist and requirements. For golden template, consider placing after qualification (requirements) or after checklist so users understand *what* before *how we help*. Alternative: keep early if conversion is priority over self-serve flow. **Recommended:** move to position 5–6 (after requirements or after checklist).

---

### 5. Document Checklist (“DTV visa document checklist”)

| Field | Assessment |
|-------|------------|
| **Purpose** | Pathway-grouped document lists with Core Documents summary and icon-led scan pattern |
| **Decision** | **Keep** (content: **Improve**) |
| **Reasoning** | Premium editorial checklist with pathway cards linked via `pathwayId`. Ivory band matches definition/checklist rhythm |
| **SEO** | High — ItemList schema when populated; strong document-intent coverage |
| **Conversions** | Medium-high — complexity signals need for help; drives consultation |
| **Understanding** | High for prepared users; can overwhelm if seen before pathway selection |
| **Trust** | High — embassy deferral in description; pathway-specific lists |

**DTV-specific:** Three pathways, Muay Thai/cooking examples, 500k THB references.  
**Template behavior:** `summary` (Core Documents) + `groups` with `pathwayId`; `VisaDocumentChecklistSection` with `band`.

**Improve:**
- **Redundancy:** Core Documents repeat items inside each pathway card (passport, financial evidence, etc.). Template rule: Core Documents = universal only; pathway cards = delta documents only.
- **Order:** Should follow `requirements` so users pick a pathway first.
- **Length:** Three full pathway cards is correct for DTV; simpler visas may need only one group.

---

### 6. Requirements (“Do you qualify for a DTV visa?”)

| Field | Assessment |
|-------|------------|
| **Purpose** | Pathway selection — three qualification routes with badges and consultation clarification CTA |
| **Decision** | **Keep** (position: **Improve**) |
| **Reasoning** | Pathway cards are the right pattern for multi-route visas. Clarification block with “Request a consultation” is a mid-page conversion point |
| **SEO** | Medium — supports “do I qualify” intent; pathway headings are useful H3s |
| **Conversions** | **High** — consultation link in clarification block |
| **Understanding** | Very high — answers “which route am I?” |
| **Trust** | Medium-high — badges (“Most common DTV route”) aid routing without hype |

**DTV-specific:** Remote work / approved activity / family pathways.  
**Template behavior:** `requirements.pathways` with `id` matching checklist `pathwayId`; optional `clarification` CTA.

**Improve:** Move **before** checklist in golden template order. For single-route visas (e.g. Retirement), use simplified requirements (bullet blocks) without pathway grid — component already supports legacy `requirements`/`eligibility`/`documents` blocks.

---

### 7. Pitfalls (“Why DTV applications are refused”)

| Field | Assessment |
|-------|------------|
| **Purpose** | Rejection patterns with risk/remedy card pattern — operational information gain |
| **Decision** | **Keep** |
| **Reasoning** | Five cards with icon, risk (red X), and remedy (green check) are distinctive and high-trust. Summary intro sets context without bloating |
| **SEO** | Medium — long-tail rejection intent; differentiate from generic competitor pages |
| **Conversions** | High — fear of refusal drives expert help |
| **Understanding** | High — practical filing insight |
| **Trust** | **Very high** — demonstrates real filing experience |

**DTV-specific:** Refusal reasons (financial evidence, activity proof, etc.).  
**Template behavior:** `pitfalls.rejections` (4–5 cards); optional `summary`; no `mistakes` subsection required on golden template.

**Improve:** None structural. Ensure remedy copy stays actionable, not generic.

---

### 8. Comparison (“DTV vs other Thailand visa routes”)

| Field | Assessment |
|-------|------------|
| **Purpose** | Side-by-side route comparison to support route selection and internal linking |
| **Decision** | **Keep** |
| **Reasoning** | Table compares DTV vs tourist, Non-B, LTR with highlighted current column. Business column links to `/visas/business` |
| **SEO** | Medium-high — comparison queries (“DTV vs tourist”, “DTV vs retirement”) |
| **Conversions** | Medium — may divert to better-fit visa (good for trust) or confirm DTV fit |
| **Understanding** | Very high — decision support |
| **Trust** | High — honest “best for” row |

**DTV-specific:** Column set, row values, DTV highlighted.  
**Template behavior:** `comparison` with `highlightColumnId: visa.slug`; 4 columns max; 6–8 rows; link related visa columns where published.

**Improve:** For non-flagship visas, comparison columns should swap (highlight self, compare to DTV/retirement/etc.). Tourist/LTR columns may be text-only if no hub page exists.

---

### 9. Compliance (“What happens after your DTV is approved?”)

| Field | Assessment |
|-------|------------|
| **Purpose** | Post-approval expectations — validity, stay, extension, re-entry, reminders |
| **Decision** | **Keep** |
| **Reasoning** | Four metric cards + reminder list close the lifecycle loop. Ivory band (`band`) separates from comparison above |
| **SEO** | Medium — “after approval” and extension intent |
| **Conversions** | Low-medium — reduces post-sale anxiety; indirect retention |
| **Understanding** | High — answers “what happens next?” |
| **Trust** | High — TDAC and 90-day reporting reminders show operational completeness |

**DTV-specific:** 5-year validity, 180-day stay, extension rules.  
**Template behavior:** `compliance.cards` (4 metrics) + optional `reminders`; `band` background.

**Improve:** None critical. Keep reminders short (3 items max).

---

### 10. FAQ (“DTV visa FAQ”)

| Field | Assessment |
|-------|------------|
| **Purpose** | Edge-case questions not fully covered in structured sections |
| **Decision** | **Keep** (content: **Improve**) |
| **Reasoning** | 13 Q&As with FAQ schema. Description correctly defers to on-page sections |
| **SEO** | High — FAQ rich results when eligible |
| **Conversions** | Medium — resolves objections before CTA |
| **Understanding** | High for edge cases; **some duplication** with sections above |
| **Trust** | Medium-high — honest tax/overstay answers |

**DTV-specific:** All Q&A pairs.  
**Template behavior:** Max 10–15 items; unique `value` slugs; edge cases only.

**Improve:**
- **Redundant items:** e.g. spouse/children questions overlap compliance/family pathway content; Muay Thai/medical repeat activity pathway; DTV vs retirement overlaps comparison table.
- **Template rule:** FAQ owns embassy edge cases, tax, conversion from other visas, and timing nuance — not restatements of key facts.
- Target **8–10 items** after deduplication.

---

### 11. Related Visas (“Related Thailand visa options”)

| Field | Assessment |
|-------|------------|
| **Purpose** | Cross-sell alternative routes with visual continuity (hero images on cards) |
| **Decision** | **Keep** |
| **Reasoning** | Three cards (Retirement, Business, Elite) with category, title, description, CTA. Images reuse destination page heroes |
| **SEO** | Medium — internal linking hub mesh |
| **Conversions** | Medium — may route away (trust) or reinforce ecosystem |
| **Understanding** | High — “what else should I consider?” |
| **Trust** | High — helps wrong-fit visitors find better route |

**DTV-specific:** Manual `relatedVisas.items` + `relatedVisaSlugs`.  
**Template behavior:** Max 3 cards; `enrichRelatedLinkWithVisaHero`; manual copy override auto links.

**Improve:** None structural. Ensure each future visa defines sensible `relatedVisaSlugs`.

---

### 12. Final CTA (“Ready to Start Your Thailand DTV Application?”)

| Field | Assessment |
|-------|------------|
| **Purpose** | Primary consultation conversion close |
| **Decision** | **Keep** |
| **Reasoning** | `PremiumCtaSection` with headline, description, “Book a consultation” — consistent site-wide |
| **SEO** | Low — intentional |
| **Conversions** | **Very high** — terminal CTA |
| **Understanding** | N/A |
| **Trust** | Medium — professional close without pressure |

**DTV-specific:** Headline copy.  
**Template behavior:** Always last section; `finalCta` required.

**Improve:** None.

---

## Content present but NOT visible (layout-excluded)

These exist in `dtv.ts` but are **not rendered** on the live DTV page. Important for template policy:

| Data block | Decision | Reasoning |
|------------|----------|-----------|
| `overview` (empty) | **Remove** from content files | Superseded by definition + key facts |
| `officialSources` (6 items) | **Forbidden** on golden template | Heavy bibliography belongs in cluster articles; hub defers to embassy in copy |
| `feesAndTimelines` (4+4 rows) | **Forbidden** as section | Redundant with key facts cards; separate section adds length without gain |
| `relatedResources` (empty) | **Optional / off by default** | Cluster depth via blog/guides linking to hub; auto-scoring can populate but DTV correctly omits |
| `lastUpdated` | **Optional** | `updatedAt` + `lastReviewed` still feed schema; visible strip not required on golden template |

---

## What should become permanent template behavior

| Pattern | Source on DTV |
|---------|----------------|
| 12-section curated layout (not `DEFAULT_VISA_PAGE_LAYOUT`) | `DTV_PHASE2_LAYOUT` |
| Section-driven rendering (`layout` array gates visibility) | `lib/visas/layout.ts` |
| Hero with imagery, trust bullets, messaging CTAs | `VisaHeroSection` |
| Definition ivory band | `VisaDefinitionSection` + `band` |
| Dark highlight key facts band | `keyFacts.highlight: true` |
| Agency process (not government process) | `process` section |
| Pathway requirements + linked checklist | `pathwayId` linking |
| Pitfalls risk/remedy cards | `VisaPitfallsSection` |
| Comparison table with highlighted column | `VisaComparisonSection` |
| Post-approval compliance band | `VisaComplianceSection` + `band` |
| Edge-case FAQ with JSON-LD | `VisaFaqSection` |
| Related visas with hero images (max 3) | `VisaRelatedVisasSection` |
| Terminal premium CTA | `VisaFinalCtaSection` |
| Plain English, embassy deferral, no legal disclaimer blocks | Copy patterns throughout |
| `answer` + `lastReviewed` for schema | `dtv.ts` metadata |

---

## What is DTV-specific (not template behavior)

- All visa names, thresholds (500k THB), stay rules (180 days), pathway types (remote work, Muay Thai, dependents)
- Comparison column set (tourist, LTR as non-hub columns)
- Pitfall card titles and remedies
- FAQ question set
- Hero image and alt text
- `topicId: "dtv"` and cluster article slugs
- Nine key fact cards (count varies by visa complexity)
- Three pathway checklist groups

---

## What feels redundant, weak, outdated, or unnecessary

| Issue | Severity | Recommendation |
|-------|----------|----------------|
| Checklist before requirements | Medium | Swap order in golden template |
| Core Documents duplicate pathway items | Medium | Universal-only core list |
| Definition / hero / `answer` field overlap | Low | Align copy roles in content guidelines |
| FAQ repeats pathway/comparison content | Medium | Trim to 8–10 edge-case items |
| `officialSources` + `feesAndTimelines` in content file but not shown | Low | Delete from golden pages or document as dead fields |
| Process before documents/qualification | Medium | Move process later or accept as conversion-first tradeoff |
| 13 FAQ items | Low | Trim per hub canonical policy (15–30 max, non-duplicative) |
| No visible `lastUpdated` despite `updatedAt` | Low | Optional strip; schema still covered |
| Retirement page still uses legacy layout | N/A | Future migration target, not DTV defect |

---

## Recommended Golden Template

### Section order (proposed freeze — one adjustment from live DTV)

| # | Section ID | Status | Notes |
|---|------------|--------|-------|
| 1 | `hero` | **Mandatory** | Single H1, hero image, trust bullets |
| 2 | `definition` | **Mandatory** | Answer-first; ivory band |
| 3 | `keyFacts` | **Mandatory** | `highlight: true`; 6–9 cards |
| 4 | `requirements` | **Mandatory** | Pathways or simplified blocks; clarification CTA optional |
| 5 | `checklist` | **Mandatory** | Core summary + pathway groups; ivory band |
| 6 | `process` | **Mandatory** | Agency steps only; 4–6 steps |
| 7 | `pitfalls` | **Mandatory** | 4–5 rejection cards |
| 8 | `comparison` | **Optional** | Required for flagship/competitive visas (DTV, Retirement, Business); optional for niche routes |
| 9 | `compliance` | **Mandatory** | Post-approval metrics + reminders |
| 10 | `faq` | **Mandatory** | 8–15 edge-case items max |
| 11 | `relatedVisas` | **Mandatory** | Max 3 cards |
| 12 | `finalCta` | **Mandatory** | Always last |

**Change from live DTV:** `requirements` → `checklist` → `process` (DTV currently has `process` before `checklist` and `requirements`).

### Optional sections (use only with justification)

| Section ID | When allowed |
|------------|--------------|
| `comparison` | Skip for dependent/tourist if no meaningful comparison value |
| `relatedResources` | Never on golden template first ship; cluster handles depth |
| `lastUpdated` | Visible strip if freshness signaling is a product priority |

### Forbidden sections (never on golden template pages)

| Section ID | Reason |
|------------|--------|
| `overview` | Superseded by definition + key facts |
| `bestFor` | Overlaps comparison and requirements |
| `officialSources` | Too long for hub; use cluster articles |
| `entityGlossary` | Niche; clutters hub |
| `feesAndTimelines` | Absorb into key facts |
| `governmentProcess` | Government steps → cluster; hub uses agency `process` |
| `practiceInsights` | Cluster / blog information gain |
| `embassyVarianceTable` | Cluster; forbidden embassy comparison tables on hub |
| `legalBoundaries` | Legal disclaimer sections hurt scan and feel defensive |
| `decisionGuides` | Duplicates requirements + comparison decision trees |
| `eeat` | Editorial standards sections — schema covers `lastReviewed` |
| `relatedResources` | Resource grids duplicate cluster strategy (default off) |

---

## Excluded sections (full list)

Never part of future golden visa hub pages:

1. **Editorial standards / EEAT** (`eeat`)
2. **Legal boundaries / disclaimers** (`legalBoundaries`)
3. **Embassy variance comparison tables** (`embassyVarianceTable`)
4. **Decision guides / decision trees** (`decisionGuides`)
5. **Official sources bibliography** (`officialSources`)
6. **Separate fees and timelines** (`feesAndTimelines`) — use key facts
7. **Government process timeline** (`governmentProcess`) — use agency `process`
8. **Practice insights** (`practiceInsights`) — cluster only
9. **Entity glossary** (`entityGlossary`)
10. **Overview blocks** (`overview`) — legacy duplicate
11. **Best for / not ideal** (`bestFor`) — use comparison + requirements
12. **Related resources grid** (`relatedResources`) — default forbidden on hub
13. **Getting started** (if present) — absorbed into hero + process
14. **Duplicate qualification sections** — one requirements surface only
15. **Duplicate checklist surfaces** — one checklist section only

Long-tail depth belongs in `/blog/*` and `/guides/*` per `docs/content/visa-hub-canonical-policy.md`.

---

## Final Recommendation

### **Yes, after minor adjustments**

**Promote DTV to Golden Template status** once the following are agreed (documentation-only; no requirement to change DTV itself):

1. **Freeze section order** with `requirements` → `checklist` → `process` (improved from live DTV).
2. **Codify forbidden sections** so future pages cannot drift back to Blueprint v3 bloat.
3. **Content rules** for deduplication (Core Documents, FAQ, definition/answer).
4. **Optional comparison** for non-flagship visas.

**Why yes:**

- **User understanding:** Progressive flow from what → facts → qualify → documents → help → risks → compare → after approval → FAQ → alternatives → CTA.
- **Trust:** Pitfalls, embassy deferrals, post-approval compliance, and dark key facts band signal operational expertise without EEAT prose sections.
- **SEO:** Strong hub architecture aligned with canonical policy — answer-first, FAQ schema, ItemList for checklist, speakable targets, internal linking via comparison and related visas.
- **Conversions:** Multiple intentional CTAs (hero messaging, requirements clarification, final CTA) without aggressive mid-page sales blocks.
- **Maintainability:** 12 sections vs 20+; layout array is the gate; components already exist.

**Why not immediate yes without adjustments:**

- Live DTV order puts service process before qualification/documents — slightly conversion-first at the cost of self-serve clarity.
- Checklist/requirements redundancy and FAQ overlap create avoidable scroll length.
- Dead content blocks in `dtv.ts` (`officialSources`, `feesAndTimelines`) risk confusion for future authors if not documented as anti-patterns.

**Why not no:**

- DTV is materially ahead of legacy pages (e.g. Retirement still on `DEFAULT_VISA_PAGE_LAYOUT` with overview, related resources, no definition/pitfalls/comparison).
- The page matches brand system, hub canonical policy, and premium editorial CSS.
- No other visa page currently offers a better reference implementation.

---

## Next step (Phase 1)

After approval of this audit, create `docs/golden-visa-page-template.md` as the build specification — using the **recommended order** above, not necessarily the live DTV order verbatim.

**Do not modify** `lib/visas/content/dtv.ts` unless product explicitly scopes a DTV refresh separate from template freeze.
