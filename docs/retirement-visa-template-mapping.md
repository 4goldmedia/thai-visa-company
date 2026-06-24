# Retirement Visa — Golden Template v1.0 Stress Test

**Phase:** 2A — Template validation exercise  
**Date:** 2026-06  
**Template source:** [`docs/golden-visa-page-template.md`](./golden-visa-page-template.md) (Version 1.0, frozen)  
**Constraint:** DTV page treated as non-existent. No copy generated. No code changes.

---

## Purpose

Prove that Golden Template v1.0 can be applied to Retirement Visa — a categorically different route from activity-based long-stay visas — without architectural changes.

This document maps **content categories** only. It does not produce production copy or content files.

---

## Retirement Visa — Content Domain Summary

Retirement Visa (typically Non-Immigrant O-A or equivalent long-stay retirement category) is a **single-intent, age-gated, financially qualified** long-stay route. Core dimensions:

| Dimension | Content category (not copy) |
|-----------|---------------------------|
| Eligibility | Minimum age (typically 50+); dependent/spouse rules |
| Financial proof | Savings threshold, monthly pension/income, or combination — embassy-specific |
| Health coverage | Insurance minimums where required by post |
| Application location | Abroad at embassy/consulate vs in-country conversion (where permitted) |
| Initial validity | Typically 1 year; renewable |
| Post-approval | Annual extension at immigration; 90-day reporting; re-entry permit for travel |
| Work restrictions | No employment in Thailand |
| Dependents | Spouse and qualifying dependents (rules vary) |
| Documentation | Passport, financial evidence, police clearance, medical/insurance, forms, photos |
| Refusal patterns | Insufficient seasoning of funds, wrong proof type, insurance gaps, embassy checklist mismatch |
| Alternatives | Elite, LTR (wealth/pension), DTV (different intent), Tourist (short stay) |

---

## Section-by-Section Validation

For each of the 12 golden sections: fit assessment, content categories, and awkward-fit analysis.

---

### 1. Hero (`hero`)

| Question | Answer |
|----------|--------|
| **Natural fit?** | **Yes** |
| **Why** | Retirement is a named visa product with clear search intent. Hero fields (`eyebrow`, `title`, `overview`, trust bullets, hero image) map directly. No pathway or activity framing required. |

**Retirement-specific content categories:**

- Visa category label (e.g. long-stay retirement / Non-Immigrant O-A framing)
- Page H1 identity
- One-sentence value proposition (age-qualified long-stay retirement in Thailand)
- Trust bullets (licensed specialists, clear requirements, responsive support)
- Hero photography (retirement lifestyle / Thailand long-stay — not work or activity imagery)

**Awkward content forced?** No.

Template hero guidance is visa-agnostic. Generic H1 example in template (`"Thailand Retirement Visa"`) already anticipates this route.

---

### 2. Definition (`definition`)

| Question | Answer |
|----------|--------|
| **Natural fit?** | **Yes** |
| **Why** | Retirement needs answer-first definitional prose: what the visa is, who it is for, how it differs from tourist or premium routes. Matches `definition.body` (2–4 paragraphs) and page-level `answer` for AEO. |

**Retirement-specific content categories:**

- Official visa category name and plain-English definition
- Purpose: long-term residence for retirees (not employment, not short tourism)
- Age and financial qualification in summary form (detail deferred to key facts / requirements)
- Distinction from Tourist, Elite, LTR, and activity-based long-stay routes
- Embassy deferral note (rules vary by nationality and post)

**Awkward content forced?** No.

---

### 3. Key Facts (`keyFacts`)

| Question | Answer |
|----------|--------|
| **Natural fit?** | **Yes** |
| **Why** | Retirement has strong scannable metrics: age, financial thresholds, validity, extension cycle, work rules, dependents, fees, processing time. Fits 6–9 metric cards with `highlight: true`. |

**Retirement-specific content categories:**

- Visa type / official category name
- Minimum age requirement
- Financial proof options (savings, pension/income, combination — with embassy-variance qualifier)
- Initial validity period
- Extension / renewal cycle (annual)
- Work permission (none)
- Dependent inclusion rules
- Government fee (embassy-specific note)
- Typical processing time
- Health insurance requirement (where applicable)

**Awkward content forced?** No.

No DTV-specific assumptions (remote work, 180-day stays, 5-year validity) apply. All values are retirement-native.

**Minor guidance gap (document only — do not amend template):** Template does not prescribe which of several financial proof *types* belongs in key facts vs requirements. Implementers may duplicate savings vs pension detail across key facts and requirements bullets.

---

### 4. How We Help (`process`)

| Question | Answer |
|----------|--------|
| **Natural fit?** | **Yes** |
| **Why** | Agency service steps are visa-agnostic. Retirement applicants benefit from the same deliverables: eligibility review, personalized checklist, document review, filing guidance, post-approval support. Template explicitly places this before checklist/requirements. |

**Retirement-specific content categories:**

- Eligibility review (age, nationality, application location, financial route)
- Personalized document checklist (embassy-specific)
- Financial evidence formatting and seasoning review
- Application filing guidance (embassy appointment or in-country conversion)
- Post-arrival support (extension, reporting, re-entry permit — as ongoing service)
- Insurance and police clearance coordination

**Awkward content forced?** No.

Process section is explicitly **agency** steps, not government filing steps. Retirement's multi-year lifecycle (initial application → annual extensions) fits naturally in step descriptions without needing a `governmentProcess` section.

---

### 5. Document Checklist (`checklist`)

| Question | Answer |
|----------|--------|
| **Natural fit?** | **Partial** |
| **Why** | Checklist structure (`summary` + `groups` with `categories`) fits retirement documents. Template checklist guidance is **pathway-oriented** (groups tied to `pathwayId`), which reflects multi-route visas. Retirement is recommended as **single-route** with 1–2 groups (applicant; optional dependent) per Appendix D — workable but requires implementer to interpret pathway language as optional. |

**Retirement-specific content categories:**

**Core Documents (summary):**

- Valid passport
- Completed application forms and photos
- Proof of age
- Primary financial evidence (statements, pension letters, or deposits)
- Health insurance (when required)
- Police clearance (when required)

**Group: Applicant**

- Categories: Passport & identity, Financial evidence, Insurance, Background checks, Application forms

**Group: Dependent (optional)**

- Categories: Relationship proof, passport, dependency evidence, supplementary financial proof if required

**Awkward content forced?** **Partial** — pathway assumption in generic checklist guidance.

| Issue | Explanation | Proposed template improvement (document only) |
|-------|-------------|-----------------------------------------------|
| Pathway-grouped checklist framing | Section 2 checklist guidelines emphasize `pathwayId` matching `requirements.pathways[].id` and DTV-style multi-pathway cards | Add explicit note: single-route visas use `groups` **without** `pathwayId`; groups may represent applicant vs dependent, not qualification pathways |
| Financial proof variants | Savings vs pension vs combination could be modeled as pathways or as categories within one group | Template already recommends single-route bullet blocks for requirements; extend same guidance to checklist: use categories (e.g. "Financial evidence") not separate pathway cards unless routes are genuinely distinct application types |

Retirement **can** be implemented within v1.0 using Appendix D (1–2 groups, no pathways). Awkwardness is interpretive, not architectural.

---

### 6. Requirements (`requirements`)

| Question | Answer |
|----------|--------|
| **Natural fit?** | **Yes** |
| **Why** | Template explicitly names Retirement as a **single-route** visa using `requirements`, `eligibility`, and `documents` bullet blocks (Appendix D, §8 migration notes). No pathway grid required. |

**Retirement-specific content categories:**

**`requirements` block:**

- Age threshold
- Financial proof options and embassy-specific thresholds
- Health insurance minimums
- Passport validity and background requirements
- Application location constraints (abroad vs in-country)

**`eligibility` block:**

- Genuine retirement intent
- No disqualifying immigration history
- Dependent eligibility rules
- Nationality-specific variations (high-level; detail in FAQ)

**`documents` block:**

- Document list aligned with checklist (no contradiction)
- Embassy deferral

**`clarification` (optional):**

- Consultation CTA for uncertain financial route or embassy choice

**Awkward content forced?** **Partial** — qualification routing language.

| Issue | Explanation | Proposed template improvement (document only) |
|-------|-------------|-----------------------------------------------|
| "Qualification routing — which pathway fits" framing | Section heading purpose text assumes pathway selection | Reframe generically as "qualification criteria — who qualifies and how" for single-route visas |
| Savings vs pension vs combination | Three financial proof methods may tempt implementers to create `pathways` | Template already says not to use pathways unless split into multiple qualification routes; financial variants are **eligibility bullets**, not separate pathways, unless embassy treats them as distinct application types (product decision) |

---

### 7. Refusal Reasons (`pitfalls`)

| Question | Answer |
|----------|--------|
| **Natural fit?** | **Yes** |
| **Why** | Retirement has well-documented rejection patterns with actionable remedies. Fits `rejections` cards (4–5) with title, description, remedy, icon. |

**Retirement-specific content categories:**

- Insufficient financial evidence or seasoning period
- Wrong proof type for embassy (savings shown when pension required, etc.)
- Health insurance below embassy minimum or wrong coverage period
- Police clearance issues (age, jurisdiction, timing)
- Embassy-specific checklist items missed
- Inconsistent application story or prior overstay flags

**Awkward content forced?** No.

DTV-specific pitfalls (activity proof, enrolment documentation) do not apply. Retirement-native refusal patterns map cleanly.

---

### 8. Compare Visa Routes (`comparison`)

| Question | Answer |
|----------|--------|
| **Natural fit?** | **Yes** |
| **Why** | Retirement is commonly compared to Elite, LTR, Tourist, and other long-stay routes. Template comparison table (`columns`, `rows`, `highlightColumnId`) supports this. |

**Retirement-specific content categories:**

**Columns (up to 4):**

- Retirement (highlighted)
- Elite (published hub)
- Tourist (text-only or hub)
- LTR or DTV (published hub when available)

**Row dimensions (6–8):**

- Primary purpose / best for
- Age requirement
- Financial threshold (high-level)
- Initial validity
- Extension model
- Work permission
- Dependents
- Complexity / cost positioning

**Awkward content forced?** No.

Comparison row guidance (stay, entry, work, funds, family, complexity, best for) applies directly. Retirement does not require activity-based comparison dimensions.

---

### 9. Post-Approval / Compliance (`compliance`)

| Question | Answer |
|----------|--------|
| **Natural fit?** | **Yes** |
| **Why** | Retirement has substantial post-approval mechanics: annual extension, 90-day reporting, re-entry permits, insurance renewal. Fits 4 metric cards + optional `reminders` (max 3). |

**Retirement-specific content categories:**

**Cards (4):**

- Initial visa validity
- Extension / renewal cycle (annual at immigration)
- Re-entry permit requirement for leaving Thailand
- Stay conditions (reporting, insurance maintenance)

**Reminders (up to 3):**

- 90-day reporting obligation
- Thailand Digital Arrival Card (TDAC) / arrival reporting
- Rule changes and annual extension preparation

**Awkward content forced?** No.

Template compliance guidance is visa-agnostic (validity, stay, extension, re-entry, obligations). Retirement's annual extension cycle is a natural fit — more central to retirement than to some other routes, but not awkward.

**Minor guidance gap:** Template does not specify whether annual extension **steps** belong in compliance cards vs FAQ vs cluster articles. Retirement implementers may split extension procedure detail across compliance (what) and FAQ (edge cases).

---

### 10. FAQ (`faq`)

| Question | Answer |
|----------|--------|
| **Natural fit?** | **Yes** |
| **Why** | Retirement generates many edge-case questions: embassy variance, in-country conversion, tax implications, spouse rules, overstay recovery, insurance providers, bank seasoning. Fits 8–15 accordion items with JSON-LD. |

**Retirement-specific content categories:**

- Embassy-specific financial thresholds by nationality
- Savings seasoning period
- Pension vs savings vs combination qualification
- Health insurance provider acceptance
- Applying from abroad vs converting in Thailand
- Spouse / dependent inclusion and age exceptions
- Annual extension timing and requirements
- Re-entry permit vs single-entry
- 90-day reporting mechanics
- Tax residency (high-level; defer detail to cluster)
- Work restrictions and volunteer activity boundaries
- Prior overstay impact

**Awkward content forced?** No.

FAQ purpose (edge cases not covered above) aligns well. Deduplication rules prevent restating key facts and comparison rows.

---

### 11. Related Visa Options (`relatedVisas`)

| Question | Answer |
|----------|--------|
| **Natural fit?** | **Yes** |
| **Why** | Retirement applicants commonly evaluate Elite (premium), LTR (wealth/pension), and DTV or Business (if still working). Max 3 cards with auto-enriched hero images fits. |

**Retirement-specific content categories:**

- Elite Visa (premium long-stay alternative)
- LTR Visa (wealth / pension category)
- DTV or Tourist (different intent — downgrade or wrong-fit redirect)

Manual `relatedVisas.items` or `relatedVisaSlugs` for copy control.

**Awkward content forced?** No.

---

### 12. Final CTA (`finalCta`)

| Question | Answer |
|----------|--------|
| **Natural fit?** | **Yes** |
| **Why** | Terminal consultation conversion is visa-agnostic. `headline`/`title`, `description`, `buttonLabel` map directly. |

**Retirement-specific content categories:**

- Retirement-specific consultation headline
- Value prop (eligibility clarity, document support, extension guidance)
- Default button: "Book a consultation"

**Awkward content forced?** No.

---

## Retirement Mapping — Consolidated Table

| # | Section | Content type | Required data (from template) | Special Retirement considerations |
|---|---------|--------------|-------------------------------|-----------------------------------|
| 1 | Hero | `VisaPageHeroContent` | `eyebrow`, `title`, `overview`, hero image, trust bullets | Age/long-stay framing; avoid work/activity imagery |
| 2 | Definition | `ContentVisaDefinitionSection` | `title` (H2 question), `body` (2–4 ¶), optional `eyebrow` | Distinguish from tourist and premium routes; align `answer` field |
| 3 | Key Facts | `ContentVisaKeyFactsSection` | `highlight: true`, 6–9 `items`, `title`, `description` | Age, funds, insurance, validity, extension cycle, work ban, dependents, fees, timing |
| 4 | How We Help | `process` object | 4–6 `steps`, eyebrow "How we help" | Emphasize financial review, embassy checklist, extension support |
| 5 | Document Checklist | `ContentVisaDocumentChecklistSection` | `summary` (Core Documents), `groups[]` with `categories[]` | 1–2 groups (applicant, dependent); no `pathwayId` unless pathways used |
| 6 | Requirements | `requirements` object | Single-route: `requirements`, `eligibility`, `documents` bullets; optional `clarification` | Financial proof variants as bullets, not pathways; embassy deferral |
| 7 | Refusal Reasons | `ContentVisaPitfallsSection` | 4–5 `rejections`; optional `summary` | Financial seasoning, insurance, police clearance, embassy mismatch |
| 8 | Compare Visa Routes | `ContentVisaComparisonSection` | `columns` (≤4), `rows` (6–8), highlight `retirement` | vs Elite, LTR, Tourist; age and extension model rows |
| 9 | Compliance | `ContentVisaComplianceSection` | 4 `cards`, optional `reminders` (≤3) | Annual extension, 90-day reporting, re-entry permit, insurance maintenance |
| 10 | FAQ | `ContentFaqSection` | 8–15 `items` with unique `value` | Embassy variance, conversion, dependents, tax, extension edge cases |
| 11 | Related Visas | `relatedVisas` / `relatedVisaSlugs` | Max 3 cards | Elite, LTR, DTV/Tourist as alternatives |
| 12 | Final CTA | `ContentVisaFinalCta` | `headline`/`title`, `description`, `buttonLabel` | Retirement-specific close |

### Page shell (required alongside sections)

| Field | Retirement notes |
|-------|------------------|
| `layout` | `GOLDEN_VISA_PAGE_LAYOUT` — 12 sections, exact order |
| `overview` | Empty stub (Appendix C) |
| `relatedResources` | `{ items: [] }` (Appendix C) |
| `lastReviewed` | Reviewer attribution for schema |
| `publishedAt` / `updatedAt` | Schema dates |
| `seo` | Title, description, keywords — retirement head terms |
| `topicId` | `"retirement"` |

---

## Architecture Review

**Can Retirement Visa be built from Template v1.0 without modifying section order, component inventory, design system, or page architecture?**

### **YES**

**Reasoning:**

1. **Section order:** All 12 sections map naturally to retirement content. No section reordering, insertion, or removal required.

2. **Component inventory:** Every section uses existing components listed in template §7. Single-route `requirements` bullet blocks and non-pathway checklist groups are already supported by `VisaRequirementsSection` and `VisaDocumentChecklistSection`. No new renderer sections needed.

3. **Design system:** Retirement uses the same bands (ivory definition/checklist/compliance, dark key facts, white process/requirements/pitfalls/comparison/FAQ/related), card types, and spacing tokens. No retirement-specific visual treatment required.

4. **Page architecture:** `GOLDEN_VISA_PAGE_LAYOUT` + `VisaPageContent` + empty `overview`/`relatedResources` stubs (Appendix C) + Appendix D field checklist provide a complete implementation path without architectural amendment.

5. **Appendix D** was written for Retirement and matches this stress test outcome.

The **Partial** fit scores on checklist and requirements reflect **guidance wording** biased toward multi-pathway visas, not component or layout gaps. Implementers following Appendix D can build without code changes.

---

## Template Weaknesses

Documented for future governance consideration. **Do not fix in this phase.**

### Missing or thin content types

| Weakness | Impact |
|----------|--------|
| No `governmentProcess` section | Annual extension procedure detail must live in compliance cards, FAQ, or cluster articles — risk of thin compliance or bloated FAQ |
| No embassy variance table | Nationality-specific financial thresholds only in FAQ/key facts — may feel incomplete for high-variance retirement posts |
| No multi-year lifecycle section | Initial application + years of extensions is a retirement-specific narrative arc; template spreads it across process, compliance, and FAQ |

### Ambiguous guidance

| Area | Risk |
|------|------|
| Pathway vs single-route checklist | Implementers may add unnecessary `pathwayId` groups for savings/pension/combination |
| Pathway vs bullet blocks for financial variants | Same ambiguity in requirements — could over-engineer pathways |
| Key facts vs requirements overlap | Age and financial thresholds may be duplicated without clear boundary |
| Compliance cards vs FAQ for extension steps | Unclear how deep post-approval procedure should go on-hub |
| `process` eyebrow | Template mandates "How we help"; legacy retirement content may use "How it works" — minor consistency drift |

### Inconsistent implementation risk

| Area | Drift scenario |
|------|----------------|
| Checklist group count | 1 group (applicant only) vs 2 (applicant + dependent) — no template rule for when dependent group is mandatory |
| Comparison columns | Mix of linked hubs vs text-only columns may vary between implementers |
| FAQ count | 8 vs 15 items — retirement has many edge cases; deduplication discipline varies |
| Financial proof framing | Some pages may use pathways; others bullets — visual inconsistency across visa hubs |
| Cluster article depth | How much extension/reporting detail stays on hub vs `/guides/*` — content strategy dependent |

### Areas likely to drift between visa pages

- Requirements section visual layout (pathway cards vs three-column bullets)
- Checklist structure (pathway cards vs applicant/dependent groups)
- Key facts card count and which metrics are prioritized
- Comparison row dimensions and column selection
- FAQ depth vs hub concision target

None of these require v1.0 amendment for Retirement to ship. They are consistency risks for cross-hub polish.

---

## Fit Summary

| Section | Fit |
|---------|-----|
| 1. Hero | Yes |
| 2. Definition | Yes |
| 3. Key Facts | Yes |
| 4. How We Help | Yes |
| 5. Document Checklist | Partial |
| 6. Requirements | Yes (Partial guidance wording) |
| 7. Refusal Reasons | Yes |
| 8. Compare Visa Routes | Yes |
| 9. Compliance | Yes |
| 10. FAQ | Yes |
| 11. Related Visas | Yes |
| 12. Final CTA | Yes |

**10 Yes · 2 Partial · 0 No**

---

## Final Verdict

### **A — Template is ready for Retirement generation**

**Reasoning:**

1. All 12 sections have a clear, implementable mapping with no architectural blockers.
2. Appendix D already provides a Retirement-specific field checklist aligned with this stress test.
3. Partial fits on checklist and requirements are **guidance clarity** issues, not missing components or wrong section order. Appendix D and §8 migration notes resolve them for implementers.
4. Architecture review is **YES** — no section order, component, design system, or page architecture changes required.
5. Identified weaknesses are consistency and depth-allocation risks, not structural failures. They can be addressed in content authoring or a future template **1.1** governance pass without blocking Retirement production.

**Not B** because no amendment is *required* before generation — an implementer following v1.0 + Appendix D can produce a compliant page.

**Not C** because no section fails to fit and no major revision to the 12-section model is needed.

---

## Next Step (out of scope for Phase 2A)

Phase 2B: Generate production Retirement Visa content in `lib/visas/content/retirement.ts` using Golden Template v1.0 and this mapping as input — subject to separate approval.

---

*End of Phase 2A — Retirement Visa Template Stress Test*
