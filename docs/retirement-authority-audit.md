# Retirement Visa — Authority & Content Strategy Audit

**Phase:** 2B.1 — Planning exercise  
**Date:** 2026-06  
**Inputs:** [Golden Template v1.0](./golden-visa-page-template.md), [Phase 2B implementation plan](file:///Users/jochemploy/.cursor/plans/retirement_visa_phase_2b_4854a522.plan.md), [Phase 2A mapping](./retirement-visa-template-mapping.md), [Content strategy](./content-strategy.md), [Visa hub canonical policy](./content/visa-hub-canonical-policy.md)  
**Constraint:** No code changes. No content generation. No implementation.

---

## Executive summary

The Phase 2B implementation plan is **architecturally sound** and will produce a compliant Golden Template page. To become the **strongest Retirement Visa resource in the market**, the plan needs **minor content-strategy refinements** before writing begins.

The single largest authority gap across competitors and the current plan is **route clarity**: most retirees search “retirement visa” but must choose between **Non-Immigrant O-A** (apply abroad, insurance-heavy, 1-year upfront) and **Non-Immigrant O** (often 90-day entry then 1-year extension in Thailand, different insurance timing). Competitors that win trust (notably ExpatDen, Siam Legal) explain this fork early. The Phase 2B plan mentions O-A but does not yet mandate O vs O-A routing as a hub-level decision surface.

**Final recommendation:** **B — Make minor planning adjustments first**, then proceed to implementation.

---

## 1. Search intent audit

### Query intent map

| Query cluster | Primary intent | Secondary intent | Long-tail intent |
|---------------|----------------|------------------|------------------|
| **Thailand Retirement Visa** | What is it? Who qualifies? Is it right for me? | How to apply; cost; timeline | Retirement vs Elite vs DTV; best visa for retirees 2026 |
| **Non-Immigrant O-A Visa** | Official category definition; O-A vs “retirement visa” label | Financial + insurance requirements; documents | TGIA-approved insurance; police clearance; medical certificate validity |
| **Retirement Visa Thailand Requirements** | Age 50+; financial proof; document list | O-A vs O route; embassy checklist | Nationality-specific thresholds; bank seasoning months |
| **Thailand Retirement Visa Financial Requirements** | 800,000 THB / 65,000 THB monthly / combination | How long funds must sit in bank; Thai vs foreign account | Pension letter format; joint accounts; currency conversion proof |
| **Thailand Retirement Visa Extension** | Annual extension at immigration; when to apply | Financial proof for renewal (3-month seasoning) | Extension documents; address proof; overstay recovery before extension |
| **Thailand Retirement Visa Insurance** | Is insurance required? | O-A 3,000,000 THB coverage rule | TGIA portal; approved providers; international policies; renewal coverage gaps |

### Intent ownership: Hub (A) vs Cluster (B)

#### A — On `/visas/retirement` (hub)

| Intent | Hub surface |
|--------|-------------|
| What is the Thailand Retirement Visa? | `definition`, `answer`, hero |
| Am I eligible (age, funds, intent)? | `keyFacts`, `requirements` |
| What documents do I need (summary)? | `checklist` Core Documents + applicant group |
| How much money do I need (head numbers)? | `keyFacts` financial card |
| O-A vs O retirement route (decision summary) | `definition` ¶3, `requirements.eligibility`, `comparison` row |
| Common refusal reasons | `pitfalls` |
| What happens after approval (validity, extension cycle, reporting)? | `compliance` |
| Retirement vs Elite / DTV / Tourist (head comparison) | `comparison` |
| Edge-case FAQ (8–10 items) | `faq` |
| Agency support and next steps | `process`, `finalCta` |

#### B — Cluster articles (supporting depth)

| Intent | Recommended cluster owner | Example slug (future) |
|--------|---------------------------|------------------------|
| O-A vs Non-O deep dive (pros/cons, insurance trade-off) | Retirement cluster | `retirement-visa-o-a-vs-non-o` |
| Bank seasoning (2 vs 3 months; renewal rules) | Retirement cluster | `retirement-visa-bank-seasoning-requirements` |
| Insurance deep dive (TGIA, 3M THB, providers) | Retirement cluster | `retirement-visa-insurance-requirements` |
| Annual extension step-by-step | Immigration procedures or Retirement | `retirement-visa-extension-guide` |
| Re-entry permits | Immigration procedures | `thailand-re-entry-permit-guide` |
| 90-day reporting mechanics | Immigration procedures | `thailand-90-day-reporting-guide` |
| Dependent spouse rules | Retirement cluster | `retirement-visa-spouse-dependent-guide` |
| Tax residency for retirees | Living in Thailand | `thailand-tax-residency-retirees` |
| Country/embassy-specific filing (UK, US, AU, etc.) | Retirement cluster | `retirement-visa-uk-requirements` |
| In-country conversion from tourist | Retirement cluster | `convert-tourist-to-retirement-visa-thailand` |
| Non-Immigrant O-X (10-year) | Retirement cluster or hub comparison mention | `thailand-non-immigrant-ox-visa` |
| Police clearance / medical certificate detail | Retirement cluster | `retirement-visa-police-clearance-medical-certificate` |

### Cannibalization risk

An existing guide already lives at `/guides/how-to-get-thailand-retirement-visa`. After hub launch:

- **Hub** owns head terms and canonical summary.
- **Guide** must shrink to procedural depth and link prominently to `/visas/retirement` for requirements, checklists, and FAQs.
- Deduplicate overlapping FAQ (`guide-age`, `guide-money`, `guide-spouse`, `guide-inside-thailand`) per [visa hub canonical policy](./content/visa-hub-canonical-policy.md).

---

## 2. Competitive authority audit

### Competitor profiles

| Competitor | Content strengths | Authority strengths | Gaps / UX weaknesses |
|------------|-------------------|---------------------|----------------------|
| **MFA / official sources** | Legally authoritative O-A criteria; exact financial wording | Primary source credibility | Not actionable; no refusal patterns; no agency path; poor scannability |
| **Siam Legal** | Service-oriented; documents list; application routes (abroad vs in Thailand) | Brand trust; lawyer positioning | Dense prose; mixes O and O-A without crisp decision tree; sales-forward |
| **ExpatDen** | **O vs O-A comparison**; practical financial options; insurance distinction | Community trust; plain language | Long page; dated UX; light on post-approval compliance; weak conversion path |
| **ThaiEmbassy.com / embassy sites** | Post-specific checklists | Local authority per embassy | Fragmented by post; no holistic retirement journey; no comparison across routes |
| **Thai Visa Centre / agents** | Simple eligibility summaries | Fast answers | Thin on pitfalls, compliance, and AI-quotable structure; generic |
| **Law firms (Lexology, etc.)** | 2026 policy framing; compliance emphasis | Professional tone | Academic; not scannable; no checklists or conversion |
| **Thailand Expat Hub** | Insurance/TGIA depth | Niche authority on O-A insurance | Narrow focus; not a full hub |

### Where Thai Visa Company can be materially better

1. **Decision clarity first** — Answer “O-A or Non-O?” in plain English before document lists. Most competitors mention both but bury the fork.

2. **Scannable authority band** — Dark key facts grid with age, funds, validity, extension, work ban, insurance, timing in one glance. Competitors spread these across long prose.

3. **Operational refusal insight** — Pitfalls with remedies (seasoning, wrong proof type, insurance gaps) from filing experience. Official sites and thin agents rarely cover this well.

4. **Post-approval lifecycle** — Compliance section on annual extension, re-entry, 90-day reporting, insurance maintenance. ExpatDen touches this; most agent pages stop at approval.

5. **AEO-native structure** — `answer` field, definition, key facts, comparison table, deduplicated FAQ. Optimized for AI extraction without sacrificing human scan.

6. **Premium UX** — Editorial layout, metric cards, pathway-free checklist groups, comparison highlight. Competitors are overwhelmingly wall-of-text WordPress.

7. **Honest embassy deferral** — Specific numbers with qualifiers (“embassy-specific”, “typically”) beats false precision.

**Avoid competing on:** exhaustive embassy-by-embassy tables on the hub (cluster job), TGIA insurance product listings (cluster job), tax law treatises (Living cluster).

---

## 3. Hub vs cluster strategy

### Ownership map

```
/visas/retirement (HUB — canonical money URL)
├── Identity & eligibility summary
├── Key facts (head numbers + qualifiers)
├── Agency process (how we help)
├── Document checklist (universal + applicant/dependent groups)
├── Requirements (single-route bullets; O vs O-A decision summary)
├── Refusal patterns + remedies
├── Route comparison (Retirement vs Elite vs Tourist vs DTV)
├── Post-approval compliance summary
├── FAQ (8–10 edge cases only)
├── Related visa cards
└── Consultation CTA

/guides/how-to-get-thailand-retirement-visa (CLUSTER — procedural depth)
├── Step-by-step application narrative
├── Timeline and preparation sequence
└── Links back to hub for requirements/checklist/FAQ

Future cluster articles (link TO hub)
├── retirement-visa-o-a-vs-non-o
├── retirement-visa-bank-seasoning-requirements
├── retirement-visa-insurance-requirements
├── retirement-visa-extension-guide
├── retirement-visa-uk-requirements (and other nationalities)
├── convert-tourist-to-retirement-visa-thailand
└── thailand-90-day-reporting-guide (immigration-procedures cluster)
```

### What must stay on the hub

| Topic | Rationale |
|-------|-----------|
| Age 50+ eligibility | Head intent; key facts + requirements |
| 800k / 65k / combination (summary) | Head intent; financial requirements query |
| O-A vs Non-O (summary, not treatise) | Primary decision; competitors win here today |
| Core document checklist | Head intent; checklist section |
| Insurance required for O-A (summary) | Insurance query lands on hub; depth in cluster |
| Annual extension cycle (summary) | Extension query; compliance cards |
| 90-day reporting (reminder) | Compliance reminders; detail in procedures cluster |
| Re-entry permit (summary) | Compliance card; detail in procedures cluster |
| Refusal patterns | Information gain; pitfalls section |
| vs Elite / DTV / Tourist | Comparison intent |

### What must leave the hub

| Topic | Cluster owner |
|-------|---------------|
| TGIA portal walkthrough, approved insurer lists | `retirement-visa-insurance-requirements` |
| 2-month vs 3-month bank seasoning rules | `retirement-visa-bank-seasoning-requirements` |
| Extension appointment step-by-step, address proof list | `retirement-visa-extension-guide` |
| Re-entry permit types and fees detail | `thailand-re-entry-permit-guide` |
| Tax residency rules | `thailand-tax-residency-retirees` |
| UK/US/AU embassy-specific checklists | `retirement-visa-{country}-requirements` |
| Police clearance jurisdiction edge cases | `retirement-visa-police-clearance-medical-certificate` |
| O-X 10-year visa full guide | Dedicated article; hub comparison row only |

---

## 4. FAQ audit

### Phase 2B proposed FAQ (12 items) — disposition

| Proposed question theme | Disposition | Rationale |
|-------------------------|-------------|-----------|
| Embassy-specific thresholds by nationality | **FAQ (keep)** | Edge case; cannot table on hub |
| Bank seasoning period | **Cluster primary; FAQ one-liner** | Depth belongs in seasoning article; FAQ defers with link |
| Pension vs savings vs combination | **Requirements section** | Core eligibility; FAQ duplicates key facts/requirements if answered fully |
| Health insurance provider acceptance | **Cluster primary; FAQ stub** | TGIA detail is cluster; FAQ confirms O-A needs coverage |
| Apply abroad vs convert in Thailand | **FAQ (keep)** | High-value edge case; partially in definition |
| Spouse age exceptions | **FAQ (keep)** | Dependent edge case |
| Annual extension timing and documents | **Compliance + cluster** | Summary on hub; FAQ only for timing edge cases |
| Re-entry permit vs multiple entry | **FAQ (keep)** | Common confusion; compliance card + FAQ |
| 90-day reporting mechanics | **Compliance reminder + cluster** | Hub reminder only; mechanics in procedures article |
| Work / volunteer boundaries | **FAQ (keep)** | Not fully covered elsewhere; high anxiety question |
| Prior overstay impact | **FAQ (keep)** | Edge case; pitfalls adjacent |
| Tax residency | **Cluster only** | Off-hub intent; link from FAQ if included at all |

### Recommended hub FAQ (8–10 items)

Target **9 items** — high value, non-duplicative:

1. **Do I need to be 50 to apply?** (dependent nuance)
2. **Should I apply for O-A or Non-O?** *(add — missing from Phase 2B plan; highest authority item)*
3. **How much money do I need in the bank?** (defer to key facts; embassy variance)
4. **Is health insurance required?** (O-A yes; Non-O timing difference)
5. **Can I apply from inside Thailand?** (conversion edge case)
6. **Can my spouse come with me?** (dependent rules)
7. **What is a re-entry permit and do I need one?**
8. **Can I work or volunteer on a retirement visa?**
9. **What happens if my extension is refused?** (bridges to pitfalls + consultation)

**Remove from hub FAQ** (or never add):

- Pension vs savings vs combination (cover in requirements bullets)
- 90-day reporting step-by-step (cluster)
- Tax residency (cluster)
- Annual extension document list (compliance + cluster)

### Duplication guardrails

| Content | Owner | FAQ rule |
|---------|-------|----------|
| 800k / 65k numbers | `keyFacts` | FAQ may reference, not restate |
| O vs O-A decision | `definition` + `requirements` | FAQ gives short answer + pointer |
| Comparison vs Elite/DTV | `comparison` | FAQ does not repeat table rows |
| Refusal patterns | `pitfalls` | FAQ addresses “what if refused” only |

---

## 5. Conversion audit

### Flow evaluation for a genuine retiree

| Stage | Retiree mindset | Section | Verdict |
|-------|-----------------|---------|---------|
| 1 | “Is this the right visa?” | Hero + Definition | Strong — answer-first |
| 2 | “What are the hard numbers?” | Key Facts | Strong — scannable |
| 3 | “Can someone help me?” | How We Help | Good — builds trust before detail |
| 4 | “What papers do I need?” | Checklist | Good — but ensure O vs O-A doc differences visible in groups |
| 5 | “Do I qualify?” | Requirements | Strong — if O vs O-A routing is explicit |
| 6 | “What goes wrong?” | Pitfalls | Strong — differentiation vs competitors |
| 7 | “Is Elite/DTV better?” | Comparison | Good — slightly late but acceptable after qualification |
| 8 | “What about year 2+?” | Compliance | Strong — retirees care deeply about extensions |
| 9 | “Odd questions” | FAQ | Good if trimmed to 8–10 |
| 10 | “What else exists?” | Related Visas | Good |
| 11 | Close | Final CTA | Strong |

### Friction points

| Friction | Severity | Mitigation (planning adjustment) |
|----------|----------|----------------------------------|
| **O vs O-A not visible until Requirements** | **High** | Add route summary to `definition` ¶3 and a key facts card (“Common routes: O-A and Non-O”) |
| Process before qualification may feel sales-heavy | Medium | Keep template order; make step 1 explicitly “free eligibility review” tone |
| Financial thresholds in key facts AND requirements AND FAQ | Medium | Enforce role split: facts = numbers; requirements = proof types; FAQ = variance only |
| Comparison at section 8 — some retirees want it earlier | Low | Accept template order; ensure comparison row “best for” is decisive |
| No visible link to cluster depth (forbidden `relatedResources` on hub) | Medium | Use FAQ answers to reference `/guides/how-to-get-thailand-retirement-visa` and future articles inline |
| Insurance anxiety under-addressed on hub | Medium | Key facts insurance card + pitfalls card; link to future insurance cluster article |
| 12 sections = long scroll on mobile | Low | Template design handles via scannable cards; monitor scroll-to-CTA |

**Overall conversion verdict:** Flow will convert a genuine retiree **if** O vs O-A clarity appears before checklist and FAQ is deduplicated. Without that adjustment, retirees may bounce to ExpatDen for route clarity.

---

## 6. Retirement authority score (pre-implementation prediction)

Scores predict **Phase 2B plan as written**. Adjustments in §7 would raise scores.

| Dimension | Predicted score | Strengths | Weaknesses |
|-----------|-----------------|-----------|------------|
| **User understanding** | **7.5 / 10** | Answer-first definition; key facts; comparison; pitfalls | O vs O-A routing under-specified; financial proof types may duplicate |
| **Trust** | **8.5 / 10** | Embassy deferral; pitfalls with remedies; `lastReviewed`; no false precision | Insurance and seasoning need cluster links to feel complete |
| **Conversion** | **8 / 10** | Process early; clarification CTA; compliance builds year-2 trust; final CTA | Sales-before-qualify tone risk in process; no cluster links on hub |
| **SEO** | **8.5 / 10** | Strong head-term coverage; H1/H2 structure; internal links via comparison/related | Cannibalization risk with existing guide; meta must mention O-A explicitly |
| **AEO** | **8.5 / 10** | `answer`, definition, key facts, comparison, FAQ JSON-LD | AI will ask O vs O-A first; thin answer there loses citations to ExpatDen |
| **Competitive differentiation** | **7.5 / 10** | UX, pitfalls, compliance, scannable facts | Beats agents on structure; does not yet beat ExpatDen on route decision clarity |

**Composite (average): 8.1 / 10** — below the Phase 2B target of 9/10+.

### Path to 9/10+ (planning adjustments only)

| Adjustment | Dimensions lifted |
|------------|-------------------|
| Mandate O vs O-A summary in definition + key facts + requirements | User understanding, AEO, competitive differentiation |
| Add FAQ item “O-A or Non-O?” | AEO, competitive differentiation |
| Enforce key facts vs requirements role split | User understanding, SEO |
| Trim FAQ to 9 items; reassign others | User understanding, AEO |
| Plan cluster backlog (insurance, seasoning, extension) with hub links | Trust, competitive differentiation |
| Update existing guide to pillar subordinate to hub | SEO |

With adjustments: **predicted composite 9.0–9.3 / 10**.

---

## 7. Final recommendation

### **B — Make minor planning adjustments first**

Then proceed to Phase 2B implementation.

### Reasoning

**Why not A (proceed immediately):**

- Predicted composite authority score is **8.1 / 10**, under the 9/10+ target.
- The highest-value competitor content pattern (O vs O-A routing) is **underrepresented** in the Phase 2B plan.
- FAQ plan at 10–12 items risks duplication and dilutes JSON-LD focus.
- Existing `/guides/how-to-get-thailand-retirement-visa` creates **cannibalization risk** without a documented deduplication pass.

**Why not C (major rework):**

- Golden Template architecture requires **no changes** — Phase 2A and 2B plan clone validation remain valid.
- All 12 sections fit retirement naturally; weaknesses are **content placement and emphasis**, not structure.
- No new hub sections, components, or template version bump needed.

### Required planning adjustments (before implementation)

1. **O vs O-A routing mandate** — Add to implementation plan:
   - `definition` ¶3: two common retirement routes (O-A abroad vs Non-O with in-country extension)
   - `keyFacts`: card for “Common routes” or equivalent
   - `requirements.eligibility`: bullets distinguishing route prerequisites (insurance timing, where you apply)
   - `comparison`: ensure “best for” row helps retirees self-select
   - FAQ item: “Should I apply for O-A or Non-O?”

2. **FAQ trim to 9 items** — Adopt recommended list in §4; remove duplication with key facts, requirements, comparison, compliance.

3. **Content role contract** — Document in implementation brief:
   - Key facts = numbers and one-line rules
   - Requirements = proof types and eligibility logic
   - Pitfalls = rejection patterns
   - FAQ = edge cases only

4. **Cluster backlog** — Prioritize three articles to support hub authority:
   - `retirement-visa-o-a-vs-non-o`
   - `retirement-visa-insurance-requirements`
   - `retirement-visa-bank-seasoning-requirements`

5. **Guide deduplication plan** — Update `how-to-get-thailand-retirement-visa` after hub launch: shorten overlapping sections, link to hub anchors, remove duplicate FAQ.

6. **SEO meta** — Ensure title includes both “Retirement Visa” and “Non-Immigrant O-A” where natural; description mentions O vs O-A choice.

### Clone validation (unchanged)

**YES** — Retirement still fits Golden Template v1.0 without architectural changes. These adjustments are **content strategy only**; no template amendment required.

---

## Appendix: Phase 2B plan gap checklist

| Plan element | Status | Action |
|--------------|--------|--------|
| 12-section golden layout | Ready | None |
| Single-route requirements | Ready | Add O vs O-A bullets |
| Checklist 2 groups (no pathwayId) | Ready | Note O-A-only docs in insurance category |
| 9 key facts cards | Ready | Add or refine “common routes” card |
| 6 process steps | Ready | Step 1 mentions route selection |
| 5 pitfalls | Ready | Include insurance + seasoning |
| 4-column comparison | Ready | Verify “best for” row |
| 4 compliance cards | Ready | None |
| 10–12 FAQ items | **Adjust** | Reduce to 9; add O vs O-A |
| Related visas (elite, dtv, ltr) | Ready | None |
| Empty overview / relatedResources stubs | Ready | None |
| Authority audit 9/10+ | **Blocked** | Apply §7 adjustments first |

---

*End of Phase 2B.1 — Retirement Visa Authority & Content Strategy Audit*
