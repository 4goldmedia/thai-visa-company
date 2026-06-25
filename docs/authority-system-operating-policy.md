# Authority System Operating Policy

**Operating Policy Version:** 1.0  
**Status:** Approved  
**Effective date:** 2026-06-25  

**Supplements (does not replace):**

- [`docs/golden-authority-guide-template.md`](golden-authority-guide-template.md) v1.0
- [`docs/thailand-visa-search-intent-governance.md`](thailand-visa-search-intent-governance.md)
- [`docs/authority-guide-prioritization.md`](authority-guide-prioritization.md)
- [`docs/content/visa-hub-canonical-policy.md`](content/visa-hub-canonical-policy.md)
- [`docs/golden-authority-system-audit.md`](golden-authority-system-audit.md)

**Golden reference implementation:**

- [`content/articles/guides/business-visa-vs-work-permit-thailand/`](../content/articles/guides/business-visa-vs-work-permit-thailand/)

This document is the **operational handbook** for creating every future Authority Guide. It marks the transition from system design to system execution.

---

## Authority Content System — Frozen Status

| Field | Value |
| --- | --- |
| **System** | Authority Content System |
| **Status** | Approved |
| **Template version** | Golden Authority Guide Template v1.0 |
| **Operating policy version** | 1.0 |
| **Architecture** | Frozen |
| **Reference pattern** | Golden (`business-visa-vs-work-permit-thailand`) |

### Change control

Future architectural changes require **all** of the following:

1. Documented rationale with impact on SEO, AEO, conversion, trust, or maintenance.
2. Governance review and approval by architecture owner.
3. Evidence that the change improves **at least five future Authority Guides**.
4. Version increment (template and/or operating policy).

**Editorial improvements alone do not trigger architecture changes.**

---

# 1. Article-Type Profiles

Authority Guides must declare one `primaryIntent` profile before writing. Profiles determine which template sections and components are required, optional, or prohibited.

### Layer boundaries (non-negotiable)

| Content type | Canonical owner | Authority Guide? |
| --- | --- | --- |
| Requirements head terms (`requirements`, `cost`, `eligibility`, route overview) | **Visa Hub** (`/visas/{slug}`) | **No** |
| Procedural step-by-step (`extension documents`, `WP3 checklist`, `TM47 filing`) | **Supporting Guide** | **No** |
| Comparison, decision, troubleshooting, compliance overview, route transition | **Authority Guide** (`/guides/{slug}`) | **Yes** |
| Embassy variance, filing notes, nationality long-tail | **Blog / cluster** (`/blog/{slug}`) | **No** |

**Procedure articles belong in Supporting Guides.**  
**Requirements content belongs primarily to Visa Hubs.**

---

## Profile: Comparison

| Field | Specification |
| --- | --- |
| **Purpose** | Resolve parallel-option confusion between two or more routes, documents, or statuses. |
| **Supported search intent** | `X vs Y`, `difference between`, `which is better for [scenario]` |
| **primaryIntent value** | `comparison` |

**Required template sections:** Hero, Quick Answer (`meta.answer`), Key Takeaways, Parent Hub Link Block, Main Explanation, Decision Framework, Comparison, Common Mistakes, FAQ, Related links, Final CTA.

**Optional sections:** ProcessSteps / Timeline (when sequence matters), Warning box, mid-page ConsultationCta.

**Prohibited patterns:**

- Full requirements tables or hub-level checklists.
- Owning hub head terms (e.g. `thailand business visa requirements`).
- Publishing a second authority for the same `vs` intent family (merge instead).

**Examples:**

- `business visa vs work permit thailand` (golden reference)
- `retirement visa o vs o-a thailand`
- `dtv vs retirement visa`
- `thailand elite visa vs retirement visa`

**Reference:** [`business-visa-vs-work-permit-thailand`](../content/articles/guides/business-visa-vs-work-permit-thailand/)

---

## Profile: Decision

| Field | Specification |
| --- | --- |
| **Purpose** | Help reader decide whether a route, product, or path is right for their profile (`worth it`, `best`, `should I`). |
| **Supported search intent** | `worth it`, `best visa for`, `should I get`, `is X right for me` |
| **primaryIntent value** | `decision` |

**Required template sections:** Hero, Quick Answer, Key Takeaways, Parent Hub Link Block, Main Explanation, Decision Framework, Comparison **or** decision matrix (one required), Common Mistakes, FAQ, Related links, Final CTA.

**Optional sections:** ProcessSteps, Warning box, ConsultationCta after Decision Framework.

**Prohibited patterns:**

- Duplicating hub pricing/key-facts tables (link to hub instead).
- Generic marketing copy disguised as education.
- Requirements-style checklist as primary content.

**Examples:**

- `thailand elite visa worth it`
- `best visa for living in thailand`

---

## Profile: Troubleshooting

| Field | Specification |
| --- | --- |
| **Purpose** | Explain why failures happen and how to reduce risk before/after a negative outcome. |
| **Supported search intent** | `rejection reasons`, `why denied`, `refused what to do`, `common mistakes` at scale |
| **primaryIntent value** | `troubleshooting` |

**Required template sections:** Hero, Quick Answer, Key Takeaways, Parent Hub Link Block, Main Explanation, Common Mistakes, FAQ, Related links, Final CTA.

**Optional sections:** Checklist (evidence prep), ProcessSteps (reapply sequence), Warning box, Decision Framework (only if route branching exists).

**Prohibited patterns:**

- Owning hub rejection-pattern sections verbatim.
- Full reapply playbook as authority (delegate tactical steps to Supporting Guide).
- Comparison table unless comparing denial categories.

**Examples:**

- `dtv visa rejection reasons`

**Supporting articles enabled later:** `dtv visa rejected what to do`, embassy-variance reapply notes.

---

## Profile: Compliance

| Field | Specification |
| --- | --- |
| **Purpose** | Clarify ongoing obligations, reporting, travel rules, and compliance risk for existing visa holders. |
| **Supported search intent** | `90 day report`, `re-entry permit`, `reporting rules`, `what happens if I leave` |
| **primaryIntent value** | `compliance` |

**Required template sections:** Hero, Quick Answer, Key Takeaways, Parent Hub Link Block, Main Explanation, Common Mistakes (or misconceptions), FAQ, Related links, Final CTA.

**Optional sections:** ProcessSteps / Timeline, Warning box, **embedded comparison subsection** (e.g. TM30 vs 90-day inside one authority — not a separate authority).

**Prohibited patterns:**

- Standalone comparison authority for pairs merged in Phase 0B (TM30 vs 90-day merges into 90-day authority).
- Duplicating immigration procedure hub checklists.
- Decision Framework unless route transition is central.

**Examples:**

- `thailand 90 day report` (may include TM30 vs 90-day subsection)
- `re-entry permit thailand`

---

## Profile: Transition

| Field | Specification |
| --- | --- |
| **Purpose** | Guide high-risk route changes, in-country pivots, and status conversions. |
| **Supported search intent** | `change visa type`, `convert visa`, `switch from X to Y`, `apply from inside thailand` |
| **primaryIntent value** | `transition` |

**Required template sections:** Hero, Quick Answer, Key Takeaways, Parent Hub Link Block, Main Explanation, Decision Framework, Common Mistakes, FAQ, Related links, Final CTA.

**Optional sections:** ProcessSteps / Timeline, Warning box, Comparison (when choosing between transition paths), cross-hub links.

**Prohibited patterns:**

- Presenting transition as guaranteed (always scope by post and current status).
- Owning requirements for destination routes (link to target hub).
- Procedural micro-guides as authority (Supporting layer).

**Examples:**

- `change visa type in thailand`

---

## Profile summary matrix

| Section / component | Comparison | Decision | Troubleshooting | Compliance | Transition |
| --- | --- | --- | --- | --- | --- |
| Decision Framework | Required | Required | Optional | Omit | Required |
| Comparison table | Required | Matrix or table | Omit | Subsection only | Optional |
| ProcessSteps | Optional | Optional | Optional | Optional | Optional |
| Checklist | Optional | Optional | Optional | Optional | Optional |
| Warning box | Optional | Optional | Optional | Recommended | Recommended |
| Mid-page CTA | Optional | Optional | Optional | Optional | Optional |

---

# 2. Pre-Publish Intent Checklist

**Mandatory before every Authority Guide is published.** No exceptions.

Complete this checklist in the editorial brief or PR description. All items must pass.

### A. Intent ownership

- [ ] **One primary search intent** declared (`primaryQuery` in brief/meta).
- [ ] **`primaryIntent` profile** selected: `comparison` | `decision` | `troubleshooting` | `compliance` | `transition`.
- [ ] **Canonical owner confirmed** as Authority Guide (not Hub, Supporting, or Blog).
- [ ] **Phase 0A registry checked** — no duplicate primary owner for this query family.
- [ ] **Merge rule applied** — near-duplicate intents combined into one page (per Phase 0B).

### B. Cannibalization controls

- [ ] **No hub head-term targeting** (requirements, cost, eligibility as primary intent).
- [ ] **No hub FAQ duplication** — guide FAQ uses edge-case angles only.
- [ ] **No hub tables/checklists recreated** — link to hub anchors instead.
- [ ] **Supporting article boundaries respected** — procedural depth deferred to Supporting layer.

### C. Internal linking plan

- [ ] **Parent hub** identified (`pillarSlug` + Parent Hub Link Block).
- [ ] **Secondary hubs** listed for cross-route guides (if any).
- [ ] **2–4 related authority/guide links** planned in `meta.related`.
- [ ] **Hub backlink** planned (see Section 4).
- [ ] **Topic hub discoverability** confirmed (`topicId` matches `/guides/topic/{topic}`).

### D. CTA alignment

- [ ] **Final CTA** (`meta.cta`) is intent-specific, not generic.
- [ ] **Maximum two CTAs** (one optional mid-page + one final).
- [ ] **No CTA before Quick Answer.**

### E. Metadata completeness

- [ ] `slug`, `title`, `description`, `seo.title`, `seo.description`, `seo.keywords`
- [ ] `publishedAt`, `updatedAt`, `topicId`, `pillarSlug`
- [ ] `headingId`, `eyebrow`, `lead`, `answer`
- [ ] `tableOfContents` matches all `##` headings in MDX
- [ ] `faq` (5–12 items), `related`, `cta`
- [ ] `author`, `reviewedBy` for policy-sensitive content
- [ ] `sources` for policy-sensitive content
- [ ] `heroImage` from visa gallery where applicable

### F. Schema readiness

- [ ] FAQ items use stable `value` ids for JSON-LD.
- [ ] Article renders via `/guides/[slug]` with `ArticleJsonLd`.
- [ ] Breadcrumbs and topic hub strip populate from routing.

### G. AI extraction readiness (three-layer validation)

- [ ] **Primary Search Query** declared in `primaryQuery`; matches dominant search behaviour.
- [ ] **H1** is short, human-readable, and clearly represents search intent (on-page title; not required to match HTML `<title>` exactly).
- [ ] **Canonical Question** declared in editorial brief; captures the user's real question.
- [ ] **`meta.answer`** answers the Canonical Question directly (2–4 sentences; answer in first sentence).
- [ ] **Opening answer** stands alone as an authoritative reference; does not introduce the topic.
- [ ] **Remainder of article** expands on the answer (evidence, comparison, guidance) rather than delaying it.
- [ ] **Key Takeaways** (`<KeyFacts>`) add decision criteria, not duplicate `meta.answer` verbatim.
- [ ] **H2 sections** open with direct answer sentences.
- [ ] **FAQ answers** are 2–4 sentences, standalone-quotable.
- [ ] **Comparison or matrix** present when profile requires it.

### H. Build validation

- [ ] `npm run sync:articles` (if new article)
- [ ] `npm run validate:articles` passes
- [ ] `npm run build` passes

### I. Golden template compliance

- [ ] Frozen section order followed (no reordering).
- [ ] Article-type profile respected (required/optional sections).
- [ ] Golden Authority Guide Template v1.0 quality gate passed.

---

# 3. Legacy Content Policy

Pre-template content exists in the repository. It must not define the architecture for new work.

### Classification definitions

| Class | Meaning | Use as reference? |
| --- | --- | --- |
| **Legacy** | Published before Golden Authority Guide Template v1.0; does not follow frozen architecture or ownership rules. | **No** |
| **Migrated** | Legacy content updated to Golden template and ownership rules; reclassified after review. | **Yes** (once migrated) |
| **Golden** | Created under Template v1.0 + this operating policy. | **Yes** |
| **Deprecated** | Scheduled for redirect, merge, or unpublish; superseded by Golden or hub content. | **No** |

### Legacy identification criteria

Content is **Legacy** if any of the following apply:

- Published before 2026-06-25 without Golden template compliance.
- Primary intent is requirements-style and overlaps a Visa Hub head term.
- Missing Parent Hub Link Block, `meta.answer`, or profile-appropriate structure.
- Used as a procedural checklist where Supporting Guide is the correct layer.

### Explicit legacy classification

| Article | Path | Class | Reason |
| --- | --- | --- | --- |
| How to Get a Thailand Retirement Visa | `/guides/how-to-get-thailand-retirement-visa` | **Legacy** | Requirements-style guide; predates Golden Template; overlaps `/visas/retirement` hub head-term intent. **Do not use as architectural reference.** |
| Business Visa vs Work Permit | `/guides/business-visa-vs-work-permit-thailand` | **Golden** | Reference implementation; Template v1.0; comparison profile. |

### Legacy handling workflow

1. **Identify** — Tag legacy articles in editorial tracker (do not modify code registry).
2. **Quarantine** — Do not link to legacy articles as "how to write guides" examples.
3. **Review** — Decide per article: migrate to Golden, reclassify as Supporting, merge into hub, or deprecate.
4. **Migrate** — Rewrite to Template v1.0 + correct profile, or move procedural content to Supporting layer.
5. **Deprecate** — Redirect or unpublish only after governance review and hub backlink updates.

**New Authority Guides must not copy legacy patterns.**

---

# 4. Hub Backlink Workflow

Every Authority Guide must be discoverable from its parent Visa Hub. Auto-discovery from `pillarSlug` alone is insufficient today; manual curation is required at publish time.

### Publication workflow

When a new Authority Guide is published, complete this checklist:

#### Step 1 — Verify parent Visa Hub

- [ ] Confirm `pillarSlug` matches the correct hub (e.g. `business` → `/visas/business`).
- [ ] For cross-route guides, declare `secondaryHubs` in brief and link from body copy.

#### Step 2 — Add hub backlink

- [ ] Open hub content file: `lib/visas/content/{slug}.ts`
- [ ] Add authority to `relatedResources.items` **or** `relatedArticleSlugs` (published guides only).
- [ ] Use editorial card title/description that reflects comparison/decision intent, not requirements.

Example target fields in hub content:

- `relatedResources.items[]` with `href: "/guides/{slug}"`
- `relatedArticleSlugs: ["{slug}"]`

#### Step 3 — Verify related resources on the guide

- [ ] `meta.related` includes parent hub as first entry.
- [ ] 2–4 sibling/alternate route links present.
- [ ] `/guides/topic/{topicId}` linked where appropriate.

#### Step 4 — Verify related guides (auto + manual)

- [ ] `relatedSlugs` set for explicit siblings when known.
- [ ] Auto cross-links via `lib/content/related.ts` will supplement (not replace) manual curation.

#### Step 5 — Verify supporting guide relationships

- [ ] If Supporting Guides exist, link downward from authority in Main Explanation or Related section.
- [ ] If Supporting Guides do not yet exist, note planned slugs in editorial tracker for future linking.

#### Step 6 — Verify navigation discoverability

- [ ] Guide appears on `/guides` index (published).
- [ ] Guide appears under `/guides/topic/{topic}`.
- [ ] Guide appears under `/guides/category/visa-comparisons` or appropriate category.
- [ ] Hub related resources surface the guide after hub content update.

### Hub backlink publication checklist (quick reference)

```
[ ] pillarSlug correct
[ ] hub relatedResources or relatedArticleSlugs updated
[ ] guide meta.related includes hub
[ ] topic hub path valid
[ ] build passes
```

---

# 5. Quick Answer Governance

### Single-source rule

**Quick Answer must exist in exactly one place per Authority Guide.**

### Canonical implementation

| Source | Role |
| --- | --- |
| **`meta.answer`** | **Canonical Quick Answer** — rendered in article header (`data-article-answer`) for AEO and featured extraction. |
| **`<ArticleQuickAnswer>` in MDX** | **Do not use** when `meta.answer` is present. |

### Rules

1. Write the Quick Answer once in `meta.answer` (2–4 sentences; direct answer in first sentence).
2. Do **not** duplicate the same sentences in MDX via `<ArticleQuickAnswer>`.
3. **Key Takeaways** (`<KeyFacts>`) may restate themes but must add **decision criteria or scannable facts**, not copy `meta.answer` verbatim.
4. The `## Key takeaways` H2 may include one bridging sentence; it must not repeat the full Quick Answer paragraph.
5. FAQ, Comparison, and Decision Framework sections must not re-open with the same Quick Answer text.

### Exception process

Use `<ArticleQuickAnswer>` only if `meta.answer` cannot be used (rare). Requires documented exception in editorial brief and governance note. Default: **always use `meta.answer`.**

### Anti-patterns

- Quick Answer in header + `<ArticleQuickAnswer>` in body with identical text.
- Three answer summaries (answer + KeyFacts bullets + lead) saying the same sentence.
- FAQ first item repeating Quick Answer word-for-word.

---

# 6. Three-Layer Content Model

Permanent governance rule of the Authority Content System. Formalizes the distinction between Primary Search Query, H1, and Canonical Question. Strengthens the answer-first principle without changing frozen section order.

Every Authority Guide defines **three independent layers**. Each layer has a distinct purpose. They may be identical when appropriate, but should **never** be forced to match.

### Why Three Layers Exist

Each layer serves a different audience and purpose:

- **Primary Search Query** — defines search intent and ownership for search engines and internal governance.
- **H1** — presents that search intent as a short, clear, human-readable page title.
- **Canonical Question** — captures the exact question users are trying to answer; answered immediately by the Quick Answer (`meta.answer`); suitable for Google AI Overviews, ChatGPT, Claude, Gemini, Perplexity, and other AI retrieval systems.

The three layers are intentionally independent. Each exists because it serves a different function.

### Layer 1 — Primary Search Query

| Field | Specification |
| --- | --- |
| **Purpose** | Dominant search phrase users type into search engines; primarily an SEO entity. |
| **Requirements** | Based on real search behaviour; used for metadata, keyword targeting, intent ownership, internal governance. |
| **Implementation** | `primaryQuery` in brief/meta; `seo.keywords`. |

The Primary Search Query does **not** have to be used verbatim as the H1.

### Layer 2 — H1

| Field | Specification |
| --- | --- |
| **Purpose** | Primary page title displayed to users on the page. |
| **Requirements** | Short, clean, human-readable; closely reflects Primary Search Query; recognizable at a glance; evergreen. Do not artificially lengthen for SEO; do not force question form. |
| **Implementation** | On-page hero title (rendered H1). |

The H1 does **not** have to match the HTML `<title>` (`meta.title`) exactly. The HTML `<title>` may extend or optimize wording for search engines while the H1 remains concise for readers.

**H1 vs HTML `<title>` example:**

| Layer | Wording |
| --- | --- |
| H1 | Business Visa vs Work Permit in Thailand |
| HTML `<title>` | Business Visa vs Work Permit in Thailand \| Key Differences Explained |

### Layer 3 — Canonical Question

| Field | Specification |
| --- | --- |
| **Purpose** | Exact question the article answers. |
| **Requirements** | Represents the user's real problem; drives opening answer; supports AI retrieval systems. |
| **Implementation** | Editorial brief field `canonicalQuestion`; answered by `meta.answer` (Quick Answer) immediately beneath H1. |

The Canonical Question does **not** have to appear as the H1.

The opening answer must:

- answer the Canonical Question immediately,
- stand on its own without requiring the reader to continue,
- be complete enough to serve as an authoritative reference,
- be suitable for AI retrieval and Google AI Overviews,
- be written in clear, natural language,
- avoid unnecessary introductions or background information.

The opening answer must **never** simply introduce the topic.

### Applies to all profiles

Comparison · Decision · Troubleshooting · Compliance · Transition

### Three-layer examples

| Primary Search Query | H1 | Canonical Question |
| --- | --- | --- |
| `business visa vs work permit thailand` | Business Visa vs Work Permit in Thailand | Do I need both a Business Visa and a Work Permit to work legally in Thailand? |
| `thailand elite visa worth it` | Thailand Elite Visa Worth It | Is the Thailand Elite Visa worth the cost for my situation? |
| `re-entry permit thailand` | Re-Entry Permit Thailand | Do I need a Re-Entry Permit before leaving Thailand? |
| `retirement visa o vs o-a thailand` | Retirement Visa O vs O-A Thailand | What is the difference between an O visa and an O-A retirement visa in Thailand? |
| `dtv visa rejection reasons` | DTV Visa Rejection Reasons | Why was my DTV visa application rejected? |

### Relationship (mandatory)

```
Primary Search Query  →  defines search intent and ownership
H1                    →  presents intent as short, human-readable page title
Canonical Question    →  states exact user question
Quick Answer          →  answers Canonical Question directly (meta.answer)
Body                  →  expands through evidence, comparisons, FAQs, links
```

### Mandatory pattern

1. **Primary Search Query** — declared in brief and `primaryQuery`.
2. **H1** — short, clean on-page title reflecting search intent.
3. **Canonical Question** — declared in editorial brief; drives Quick Answer.
4. **Immediate answer** — `meta.answer` (Quick Answer single-source rule, Section 5).
5. **Structured expansion** — frozen template sections from Key Takeaways through Final CTA.

All three layers are reviewed independently during publication.

### Pre-publication validation (mandatory)

- [ ] Primary Search Query matches dominant search behaviour.
- [ ] H1 is short, human-readable, and clearly represents the search intent.
- [ ] Canonical Question captures the user's real question.
- [ ] Quick Answer immediately answers the Canonical Question.
- [ ] The remainder of the article expands upon the answer rather than delaying it.

### Relationship to Quick Answer governance

The Three-Layer Content Model defines **what** each layer owns and **what** the opening answer must resolve (Canonical Question). Quick Answer governance (Section 5) defines **where** it lives (`meta.answer` only). Both rules apply together.

---

# 7. System Freeze (Formal)

The Authority Content System is **formally frozen** as of this document.

```
Authority Content System
Status:                    Approved
Template Version:          Golden Authority Guide Template v1.0
Operating Policy Version:  1.0
Architecture:              Frozen
Execution Phase:           Authorized
```

### What is frozen

- 12-section Authority Guide architecture (order and ownership).
- Hub → Authority → Supporting → Cluster hierarchy.
- Engine split: `/visas/*` (hubs), `/guides/*` (evergreen authority), `/blog/*` (freshness/long-tail).
- Component inventory mapped in Golden Template.
- Article-type profiles defined in this policy.
- Pre-publish checklist (mandatory).
- Quick Answer single-source rule.
- Three-Layer Content Model (Primary Search Query, H1, Canonical Question).
- Hub backlink workflow.

### What may change without architecture version bump

- Copy, examples, FAQ items, comparison rows within existing sections.
- Related links and supporting article references.
- Images and `updatedAt` on policy changes.
- Phase 0A intent registry entries (governance maintenance).

### What requires version increment

- Section reordering or new mandatory sections.
- New content engine or URL pattern for authorities.
- Component inventory changes affecting all guides.
- Weakening hub-canonical ownership rules.

### Approved launch layer

Implement remaining guides per [`docs/authority-guide-final-launch-roadmap.md`](authority-guide-final-launch-roadmap.md) (frozen):

1. ~~`business visa vs work permit thailand`~~ (complete — golden reference)
2. `retirement visa o vs o-a thailand`
3. `thailand elite visa worth it`
4. `best visa for living in thailand`
5. `change visa type in thailand`
6. `dtv visa rejection reasons`
7. `dtv vs retirement visa`
8. `thailand elite visa vs retirement visa`
9. `re-entry permit thailand`
10. `dtv vs tourist visa thailand`

Post-launch Authority #11: `thailand 90 day report`

**Removed:** `elite visa vs ltr thailand` — LTR not offered by Thai Visa Company.

---

# 8. Final Readiness

### Governance refinements from Phase 2B — incorporated

| Audit recommendation | Status in this policy |
| --- | --- |
| Article-Type Profiles | Section 1 — formalized |
| Pre-publish intent checklist | Section 2 — mandatory |
| Legacy content policy | Section 3 — with retirement guide classified |
| Hub backlink workflow | Section 4 — publication checklist |
| Quick Answer single-source rule | Section 5 — canonical rule |
| Three-Layer Content Model | Section 6 — Primary Search Query, H1, Canonical Question |
| System freeze | Section 7 — formal |

### Readiness determination

The Authority Content System is **ready to move from planning into execution.**

Evidence:

- Architecture validated by reference implementation and Phase 2B audit.
- Template v1.0 remains valid; no redesign required.
- Governance gaps identified in audit are now codified in this operating policy.
- Legacy content is classified and quarantined from reference use.
- Publication workflow documented.
- No code, layout, or component changes required.

### Recommendation

**Proceed with implementation of the remaining launch Authority Guides.**

No additional planning documents are required before implementation. Future work should focus on producing high-quality Authority Guides using:

1. [`docs/golden-authority-guide-template.md`](golden-authority-guide-template.md) v1.0 (structure)
2. This operating policy (profiles, checklists, workflows)
3. [`content/articles/guides/business-visa-vs-work-permit-thailand/`](../content/articles/guides/business-visa-vs-work-permit-thailand/) (golden reference only)

---

## Document map

| Need | Document |
| --- | --- |
| Section structure and components | Golden Authority Guide Template v1.0 |
| Intent ownership registry | Thailand Visa Search Intent Governance (Phase 0A) |
| Launch priority order | Authority Guide Prioritization (Phase 0B) |
| Hub vs cluster roles | Visa Hub Canonical Policy |
| Architecture audit record | Golden Authority System Audit (Phase 2B) |
| Day-to-day publishing rules | **This document** |
| Three-layer model + answer-first pattern | **This document** (Section 6) + Golden Template Section 3 |

---

## Amendment log

| Version | Date | Change | Approved by |
| --- | --- | --- | --- |
| 1.0 | 2026-06-25 | Initial operating policy; system freeze; Phase 2C governance refinements | Thai Visa Company |
| 1.0 | 2026-06-25 | Canonical Question Rule added (Section 6; pre-publish checklist) | Governance refinement; no architecture version increment | Thai Visa Company |
| 1.0 | 2026-06-25 | Three-Layer Content Model formalized (Section 6; pre-publish checklist) | Governance refinement; separates Primary Search Query, H1, and Canonical Question; no version increment | Thai Visa Company |

---

*This document marks the transition from system design to system execution.*
