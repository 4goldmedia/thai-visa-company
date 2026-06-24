# Retirement Visa — Content Strategy Refinement

**Phase:** 2B.2  
**Date:** 2026-06  
**Status:** Approved planning refinement before implementation  
**Scope:** Retirement content strategy only (architecture frozen)  
**Inputs:** [`docs/retirement-authority-audit.md`](./retirement-authority-audit.md), [`docs/retirement-visa-template-mapping.md`](./retirement-visa-template-mapping.md), [`docs/golden-visa-page-template.md`](./golden-visa-page-template.md), [`content/articles/guides/how-to-get-thailand-retirement-visa/meta.ts`](../content/articles/guides/how-to-get-thailand-retirement-visa/meta.ts), [`content/articles/guides/how-to-get-thailand-retirement-visa/content.mdx`](../content/articles/guides/how-to-get-thailand-retirement-visa/content.mdx)

---

## Objective

Raise predicted Retirement hub authority from **8.1 / 10** to **9.0+ / 10** without any architectural change to the Golden Template.

This refinement locks content hierarchy, ownership boundaries, FAQ scope, and cluster priorities before writing production content.

---

## 1) O-A vs Non-O clarity mandate

### Outcome required

A first-time user must understand all three points within the **first 25%** of the page:

1. What **Non-Immigrant O-A** is
2. What **Non-Immigrant O** is (in retirement context)
3. Which route is generally appropriate

### Recommended content hierarchy by section

| Section | O-A vs Non-O responsibility | Priority |
|---------|-----------------------------|----------|
| **Hero** | Introduce “Retirement Visa” umbrella; indicate two common routes exist | High |
| **Definition** | Primary explanation of route distinction in plain English | Critical |
| **Key Facts** | One scannable “Common routes” card + route-level summary facts | Critical |
| **Requirements** | Qualification logic by route (where you apply, insurance timing, proof style) | Critical |
| **FAQ** | Decision edge case: “Should I apply for O-A or Non-O?” | High |

### Placement rules (first 25% target)

- **Hero overview:** mention that retirement visas are commonly structured as **O-A or Non-O route choices**.
- **Definition paragraph 2 or 3:** explain route distinction in simple decision framing:
  - O-A: commonly applied from abroad; stronger upfront documentation/insurance burden.
  - Non-O retirement route: commonly starts differently and often shifts to extension workflow in Thailand.
- **Key Facts item (top 4 cards):** include “Common routes: O-A and Non-O” with one-line selection cue.

If a user scrolls only Hero + Definition + top Key Facts, they should already know route options and likely fit.

### Decision framing to enforce

Use this hierarchy in Retirement content:

1. **Intent fit first:** “Are you genuinely retiring long term in Thailand?”
2. **Route fit second:** “Are you applying abroad with full documentation, or via a Non-O retirement path?”
3. **Proof fit third:** “Can you satisfy funds/income/insurance for your route and embassy?”

Avoid route ambiguity language such as “equivalent long-stay route” without naming O-A and Non-O explicitly.

---

## 2) Key Facts vs Requirements governance (anti-duplication)

### Ownership model

| Surface | Owns | Must not own |
|---------|------|--------------|
| **Key Facts** | Headline numbers and route labels at a glance | Detailed proof mechanics, exceptions, document caveats |
| **Requirements** | Qualification rules, route-specific conditions, evidence logic | Repeating full metric cards or comparison-table statements |

### Key Facts content contract

Key Facts should include only:

- Visa type and route framing (Retirement, O-A / Non-O)
- Minimum age threshold
- Financial routes at high level (savings / pension / combination)
- Initial validity and extension cadence
- Work restriction
- Insurance high-level requirement signal
- Typical timing and fee signal with qualifiers

**Format rule:** one-line value + one-line detail. No long conditional branches.

### Requirements content contract

Requirements should include:

- Exact qualification logic by route
- Savings route details (account expectations, high-level holding logic)
- Pension route details (proof type and consistency)
- Combination route eligibility logic
- Insurance requirement distinctions by route
- Passport validity and core admissibility expectations
- Embassy and nationality variance caveat

**Format rule:** bullets and qualification logic, not “stat card” repetition.

### Duplication guardrails

1. If a sentence starts with a number and no condition, it likely belongs in **Key Facts**.
2. If a sentence includes “depends on route/post/nationality/proof type,” it likely belongs in **Requirements**.
3. FAQ must point to Key Facts/Requirements for core rules, not restate them.

---

## 3) FAQ optimization (target ~9)

Source set reviewed from Phase 2B plan (12 proposed items).

### Disposition matrix

| Proposed FAQ topic | Decision | Action |
|--------------------|----------|--------|
| Embassy-specific thresholds by nationality | **Keep** | Keep concise; defer country specifics to cluster |
| Bank seasoning period | **Move** | Move primary depth to cluster article; optional one-line hub reference |
| Pension vs savings vs combination | **Remove** | Covered in requirements ownership |
| Health insurance provider acceptance | **Move** | Keep only high-level insurance answer on hub; provider detail in cluster |
| Apply abroad vs convert in Thailand | **Keep** | High-value edge case |
| Spouse age exceptions | **Keep** | Keep as dependent edge case |
| Annual extension timing and documents | **Merge** | Merge into extension refusal/renewal risk framing |
| Re-entry permit vs multiple entry | **Keep** | Keep; common confusion |
| 90-day reporting mechanics | **Move** | Keep reminder in compliance; mechanics in procedures cluster |
| Work / volunteer boundaries | **Keep** | Keep; anxiety-heavy, high intent |
| Prior overstay impact | **Keep** | Keep; links to pitfalls |
| Tax residency | **Move** | Move to Living-in-Thailand cluster |

### Final recommended hub FAQ set (9)

1. Do I need to be 50 to apply?
2. Should I apply for O-A or Non-O?
3. How much money do I need to show?
4. Is health insurance required for my route?
5. Can I apply from inside Thailand?
6. Can my spouse apply with me?
7. What is a re-entry permit and when do I need one?
8. Can I work or volunteer on a retirement visa?
9. What happens if my extension is refused?

### FAQ quality rules

- Every FAQ answer must add new edge-case value.
- If answer duplicates Key Facts or Requirements, remove or merge.
- Keep FAQ answers short, self-contained, and link outward for procedural depth.

---

## 4) First three Retirement cluster articles after launch

Prioritized for search demand + authority gain + internal linking value.

### 1) **O-A vs Non-O Thailand Retirement Visa: Which Route Fits You?**

- **Target intent:** route selection for retirees comparing application paths.
- **Why priority:** highest confusion point, highest competitive gap versus ExpatDen/Siam Legal.
- **Hub link value:** supports Definition, Requirements, and FAQ route decision.

### 2) **Thailand Retirement Visa Insurance Requirements (O-A): Coverage, Providers, and Common Rejections**

- **Target intent:** insurance obligations and provider acceptance concerns.
- **Why priority:** major anxiety trigger and refusal driver; high practical value.
- **Hub link value:** supports Key Facts insurance card, Requirements insurance logic, Pitfalls insurance rejection card.

### 3) **Thailand Retirement Visa Bank Seasoning Rules: Savings, Pension, and Combination Proof**

- **Target intent:** financial proof mechanics and holding-period confusion.
- **Why priority:** frequent refusal cause; strong long-tail potential.
- **Hub link value:** supports Key Facts financial summary, Requirements proof routes, FAQ threshold variance question.

---

## 5) Existing guide cannibalization plan

Target guide: [`/guides/how-to-get-thailand-retirement-visa`](../content/articles/guides/how-to-get-thailand-retirement-visa/content.mdx)

### Canonical ownership

- **Hub (`/visas/retirement`) owns:** head intent, definition, eligibility summary, key facts, checklist summary, route comparison, compliance summary, conversion CTA.
- **Guide owns:** procedural narrative, preparation workflow, common filing mistakes in process order, practical “before you submit” depth.

### What remains on guide

- Step-by-step workflow narrative
- Preparation timeline and sequencing
- Practical document assembly advice
- “What to check before paying fees/transferring funds”
- High-level pointers to extension/reporting/insurance deep dives

### What moves to hub (or is de-emphasized in guide)

- Primary “what is retirement visa” definition
- Core age + funds + insurance eligibility summary
- Head FAQ questions currently duplicated (`guide-age`, `guide-money`, `guide-spouse`, `guide-inside-thailand`)
- Canonical requirements framing for O-A vs Non-O selection

### Internal linking strategy

In guide:

- Add above-fold contextual link to `/visas/retirement` as canonical requirements page.
- Link from procedural sections back to exact hub ownership surfaces:
  - Requirements decisions
  - Checklist summary
  - Compliance summary
  - FAQ

In hub:

- Reference guide where user needs process detail (without adding forbidden related-resources section).
- Use FAQ and requirements clarifications to route users to guide when they need operational depth.

### Metadata and intent alignment

- Keep guide title focused on “how to get” procedural intent.
- Ensure hub metadata targets “retirement visa requirements / O-A / Non-O” head-intent terms.

---

## 6) Updated authority projection (post-refinement)

Projected after implementing this refinement in Phase 2B content writing.

| Dimension | Pre-refinement | Expected post-refinement | Why it improves |
|-----------|----------------|--------------------------|-----------------|
| User understanding | 7.5 | **9.2** | O-A vs Non-O appears in first quarter; tighter ownership reduces duplication |
| Trust | 8.5 | **9.1** | Route clarity + explicit caveats + refusal-linked cluster depth |
| Conversion | 8.0 | **9.0** | Faster fit diagnosis reduces bounce; clearer “next step” path |
| SEO | 8.5 | **9.1** | Better intent separation hub vs guide; reduced cannibalization |
| AEO | 8.5 | **9.2** | Better extractable route answer and deduplicated FAQ |
| Competitive differentiation | 7.5 | **9.0** | Beats competitors on clarity + scannability + lifecycle guidance |

**Expected composite score:** **9.1 / 10**

---

## Final verdict

### **A — Proceed directly to Retirement implementation**

### Reasoning

1. Required authority refinements are now explicit and implementation-ready.
2. No architectural or template change is needed.
3. The two major blockers from 2B.1 (route clarity and FAQ duplication) are resolved in planning.
4. Hub/guide/cluster ownership is now clear enough to avoid immediate cannibalization.
5. Predicted score exceeds the 9.0 target while preserving frozen architecture.

---

## Implementation constraints reaffirmed

- Do not modify Golden Template.
- Do not modify DTV.
- No section additions, deletions, or reordering.
- No component, style, layout, or route changes.
- Retirement implementation remains content-only in `lib/visas/content/retirement.ts`.

---

*End of Phase 2B.2 — Retirement Content Strategy Refinement*
