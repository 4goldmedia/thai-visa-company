# Authority Guide Final Launch Roadmap

**Status:** Approved for implementation  
**Roadmap version:** 1.0 (frozen)  
**Validation date:** 2026-06-25  
**Supersedes:** Launch ordering in [`docs/authority-guide-prioritization.md`](authority-guide-prioritization.md) Section 8 where this document differs  

**Governance inputs (unchanged):**

- [`docs/thailand-visa-search-intent-governance.md`](thailand-visa-search-intent-governance.md) (Phase 0A — primary research baseline)
- [`docs/golden-authority-guide-template.md`](golden-authority-guide-template.md) v1.0
- [`docs/authority-system-operating-policy.md`](authority-system-operating-policy.md) v1.0
- [`docs/content/visa-hub-canonical-policy.md`](content/visa-hub-canonical-policy.md)
- [`docs/content-strategy.md`](content-strategy.md)

**Title validation:** [`docs/authority-guide-title-validation.md`](authority-guide-title-validation.md) — frozen H1 and primary-query wording (2026-06-25)

**Research note:** The original Phase 0 search-intent research file (`thailand-visa-search-intent-research.md`) was never committed. Phase 0A governance, Phase 0B validation, CONTENT_ROADMAP cluster research, competitor SERP patterns, and live search-behaviour checks (2026-06-25) serve as the evidence base for this final validation.

---

## Validation Objective

Challenge the entire launch roadmap one final time. Do not assume the Phase 0B Top 10 remains optimal.

**Business constraint applied:** Thai Visa Company does **not** offer the LTR Visa. Any authority article whose primary purpose is to compare, promote, or support LTR must be removed.

**Business objective:** Maximize qualified Thailand Visa consultation leads — not traffic alone.

---

## Methodology

Each candidate was re-scored using:

| Signal source | Application |
| --- | --- |
| Phase 0A intent registry | Canonical ownership and query-family boundaries |
| Phase 0B commercial/authority scores | Baseline scoring framework |
| Google SERP / competitor titles | Title phrasing validation (Siam Legal, ExpatDen, ThaiEmbassy.com, Pattaya Visa Help, Vera Visa) |
| Autocomplete / PAA patterns | Dominant question forms (`vs`, `worth it`, `o vs o-a`, `rejection reasons`) |
| AI Overview / citation patterns | Comparison tables, decision matrices, rejection taxonomies |
| Reddit / Quora (Phase 0A collection) | Confusion clusters: business vs work permit, O vs O-A, DTV eligibility |
| CONTENT_ROADMAP cluster priorities | Cross-cluster comparison queue |
| Consultation funnel logic | New-applicant decision intent weighted above DIY compliance |

**Scoring formula (unchanged from Phase 0B):**

`Overall Priority = (CommercialValue × 0.55) + (AuthorityScore × 0.25) + (HubImpact × 0.20)`

---

## Changes From Previous Roadmap (Phase 0B)

| Change | Previous | Final | Evidence |
| --- | --- | --- | --- |
| **Remove** | `elite visa vs ltr thailand` (#8) | — | LTR not offered; article would promote unsupported product and dead-end consultation paths. LTR hub is unpublished stub (`lib/visas/content/ltr.ts`). |
| **Add** | — | `thailand elite visa vs retirement visa` (#8) | Both routes offered; high affluent-segment consultation; strong SERP pattern; Phase 0A registered intent; replaces LTR comparison without losing elite-hub authority depth. |
| **Add** | — | `dtv vs tourist visa thailand` (#10) | Strong new-applicant DTV funnel; P2 in CONTENT_ROADMAP; competitors rank dedicated DTV vs tourist pages; higher consultation yield than DIY compliance topics. |
| **Defer** | `thailand 90 day report` (#10) | Post-launch Authority #11 | High AIO value (authority score 96) but lower commercial score (63); existing-holder DIY intent; remains must-publish but after route-decision layer. TM30 comparison still merges as subsection. |
| **Reorder** | Elite worth it #5 | Elite worth it **#3** | Direct purchase-decision intent outranks umbrella evaluation for consultation conversion. |
| **Reorder** | Change visa type #7 | Change visa type **#5** | High-risk transition intent with direct service relevance; outranks post-denial troubleshooting in consultation yield. |

**Unchanged:** Ranks #1–2, #6–7, #9 (business vs work permit, O vs O-A, DTV rejection, DTV vs retirement, re-entry permit).

---

## Final Top 10 Authority Articles (Ranked)

### 1. `business visa vs work permit thailand`

| Field | Value |
| --- | --- |
| **Canonical article title** | Business Visa vs Work Permit in Thailand |
| **Why this wording** | Dominant SERP and PAA phrasing; "vs" signals comparison intent; "thailand" scopes geo; matches reference implementation and Phase 0A registry. Alternate `non-immigrant b visa thailand work permit` merges here (one owner). |
| **Search intent** | Comparison / decision (`primaryIntent: comparison`) |
| **Parent Visa Hub** | `/visas/business` |
| **Commercial value** | **Very high** (94) |
| **Consultation potential** | **Very high** — employer-sponsored work eligibility confusion is the #1 pre-filing consultation trigger in business cluster |
| **Google SEO opportunity** | High — medium SERP saturation; structured comparison + employer pathway clarity can outrank generic explainer posts |
| **Google AI Overview opportunity** | **Very high** — AIO frequently surfaces "business visa vs work permit" definitional answers |
| **ChatGPT / Claude / Perplexity citation potential** | **Very high** — canonical two-document distinction is ideal extraction format |
| **Internal linking value** | **Very high** — anchors business cluster; enables WP3, employer document, extension supporting guides |
| **Future cluster articles enabled** | WP3 employer documents, BOI route branch, employer-change workflow, extension timeline (10–12 supporting) |
| **Cannibalization assessment** | **Low risk** — hub owns `thailand business visa requirements`; guide owns comparison only. Monitor `thailand work permit requirements` as secondary keyword only. |
| **Confidence** | **98%** — reference implementation validated; highest-scoring candidate in all phases |

**Status:** Complete (golden reference).

---

### 2. `retirement visa o vs o-a thailand`

| Field | Value |
| --- | --- |
| **Canonical article title** | Retirement Visa O vs O-A Thailand |
| **Why this wording** | Competitors use "Non-O vs O-A" and "O vs O-A"; Phase 0A registry uses `retirement visa thailand o vs o-a`. "O vs O-A" is the dominant user phrasing in search boxes and forums; "retirement visa" prefix anchors route context. |
| **Search intent** | Comparison / decision (`comparison`) |
| **Parent Visa Hub** | `/visas/retirement` |
| **Commercial value** | **Very high** (93) |
| **Consultation potential** | **Very high** — insurance requirement, apply-abroad vs in-country, and financial proof timing drive assisted filings |
| **Google SEO opportunity** | **High** — competitors win on O vs O-A clarity (ExpatDen, Siam Legal, Pattaya Visa Help); underserved structured decision surface |
| **Google AI Overview opportunity** | **Very high** — persistent PAA: "What is the difference between O and O-A retirement visa?" |
| **ChatGPT / Claude / Perplexity citation potential** | **Very high** — policy-sensitive fork with table-friendly attributes (insurance, where to apply, re-entry) |
| **Internal linking value** | **High** — unlocks insurance, financial proof, extension, route-switch supporting guides |
| **Future cluster articles enabled** | Insurance by route, 800k bank vs 65k income, extension scenarios, O-A to O transition (8–10 supporting) |
| **Cannibalization assessment** | **Low risk** — hub owns `thailand retirement visa requirements`; guide owns route-branch decision only |
| **Confidence** | **96%** — must-win per retirement authority audit; highest retirement consultation intent |

---

### 3. `thailand elite visa worth it`

| Field | Value |
| --- | --- |
| **Canonical article title** | Thailand Elite Visa Worth It |
| **Why this wording** | Exact decision-query pattern; outperforms editorial variants ("Is the Thailand Elite Visa Worth It in 2026?") for title tag alignment. "Worth it" is the dominant autocomplete stem for elite/privilege route evaluation. |
| **Search intent** | Decision (`decision`) |
| **Parent Visa Hub** | `/visas/elite` |
| **Commercial value** | **Very high** (91) |
| **Consultation potential** | **Very high** — premium route qualification before 650k–5M THB commitment |
| **Google SEO opportunity** | Medium-high — saturated but winnable with decision framework vs fee-table competitors |
| **Google AI Overview opportunity** | High — AIO answers "is thailand elite visa worth it" with cost/benefit summaries |
| **ChatGPT / Claude / Perplexity citation potential** | High — profile-based worth-it matrices are highly quotable |
| **Internal linking value** | **High** — elite cluster anchor; links to vs-retirement and hub cost tables |
| **Future cluster articles enabled** | Family package value, tier comparison, benefit-priority scenarios (6–8 supporting) |
| **Cannibalization assessment** | **Low risk** — hub owns `thailand elite visa cost`; guide owns evaluation intent |
| **Confidence** | **94%** — promoted from #5; direct purchase decision beats umbrella route selection for elite consultation |

---

### 4. `best visa for living in thailand`

| Field | Value |
| --- | --- |
| **Canonical article title** | Best Visa for Living in Thailand |
| **Why this wording** | Phase 0A canonical query; dominant umbrella evaluation phrasing; `move to thailand visa options` merges here as one owner. Matches how applicants frame the problem before knowing visa taxonomy. |
| **Search intent** | Evaluation / decision (`decision`) |
| **Parent Visa Hub** | All published hubs (canonical route-selection authority) |
| **Commercial value** | **High** (84) |
| **Consultation potential** | **High** — upstream funnel qualifier before hub-specific engagement |
| **Google SEO opportunity** | **High** — medium-high saturation; profile-based chooser can beat generic listicles |
| **Google AI Overview opportunity** | High — AIO frequently lists visa options for long-stay living |
| **ChatGPT / Claude / Perplexity citation potential** | **Very high** — multi-route comparison is core AI answer pattern |
| **Internal linking value** | **Very high** — links to all hubs and sibling authorities; highest cross-hub leverage |
| **Future cluster articles enabled** | Scenario variants (remote worker, retiree, family, frequent traveler) (8–12 supporting) |
| **Cannibalization assessment** | **Low–medium** — must remain evaluation-only; link to hubs for requirements; never host requirement tables |
| **Confidence** | **92%** — promoted in Phase 0B; essential upstream funnel |

---

### 5. `change visa type in thailand`

| Field | Value |
| --- | --- |
| **Canonical article title** | Change Visa Type in Thailand |
| **Why this wording** | Exact Phase 0A query; matches immigration procedure phrasing used in forums and consulate contexts. Prefer over "convert visa" or "switch visa" (lower search volume). |
| **Search intent** | Transition (`transition`) |
| **Parent Visa Hub** | Immigration procedures cluster (cross-links all relevant hubs) |
| **Commercial value** | **High** (85) |
| **Consultation potential** | **Very high** — high-risk pivots require case-specific guidance |
| **Google SEO opportunity** | Medium-high — fragmented SERP; trustworthy route-specific guidance is underserved |
| **Google AI Overview opportunity** | High — AIO cautions on in-country conversion limits |
| **ChatGPT / Claude / Perplexity citation potential** | High — if/then decision branches by current status and destination route |
| **Internal linking value** | **Very high** — bridges all commercial hubs |
| **Future cluster articles enabled** | Route-specific conversion playbooks, exception handling (8–10 supporting) |
| **Cannibalization assessment** | **Low risk** — transition intent distinct from hub requirements |
| **Confidence** | **91%** — promoted from #7; direct service relevance |

---

### 6. `dtv visa rejection reasons`

| Field | Value |
| --- | --- |
| **Canonical article title** | DTV Visa Rejection Reasons |
| **Why this wording** | Phase 0A registry uses `dtv visa thailand rejection reasons`; shorter form `dtv visa rejection reasons` matches PAA and post-denial search behaviour. Drop "thailand" in title when slug already geo-scopes via site context; keep in `seo.keywords`. |
| **Search intent** | Troubleshooting (`troubleshooting`) |
| **Parent Visa Hub** | `/visas/dtv` |
| **Commercial value** | **High** (86) |
| **Consultation potential** | **High** — post-denial assistance and reapplication strategy |
| **Google SEO opportunity** | Medium-high — growing DTV denial content; taxonomy approach can differentiate |
| **Google AI Overview opportunity** | **Very high** — rejection-reason lists are prime AIO extraction |
| **ChatGPT / Claude / Perplexity citation potential** | **Very high** — structured denial categories highly quotable |
| **Internal linking value** | **High** — DTV cluster depth; links to hub requirements |
| **Future cluster articles enabled** | Reapply workflow, embassy variance matrix, evidence checklists (8–10 supporting) |
| **Cannibalization assessment** | **Low risk** — distinct from `dtv visa thailand requirements` (hub-owned) |
| **Confidence** | **90%** — anxiety-driven high-assistance intent |

---

### 7. `dtv vs retirement visa`

| Field | Value |
| --- | --- |
| **Canonical article title** | DTV vs Retirement Visa |
| **Why this wording** | Phase 0A canonical form; dominant comparison phrasing for 50+ remote-worker segment. Prefer over "destination thailand visa vs retirement" (low volume). |
| **Search intent** | Comparison (`comparison`) |
| **Parent Visa Hub** | `/visas/dtv` (primary); `/visas/retirement` (secondary) |
| **Commercial value** | **High** (83) |
| **Consultation potential** | **High** — wrong-route selection is costly; dual-hub qualification |
| **Google SEO opportunity** | Medium-high — bridge comparison with dual commercial hubs |
| **Google AI Overview opportunity** | High — age/income/activity comparison tables surface in AIO |
| **ChatGPT / Claude / Perplexity citation potential** | **High** — profile-based route matcher |
| **Internal linking value** | **Very high** — dual-hub bridge |
| **Future cluster articles enabled** | Profile decision matrix, tax/day-count support articles (6–8 supporting) |
| **Cannibalization assessment** | **Low–medium** — strict comparison framing required; no requirements tables |
| **Confidence** | **89%** — essential DTV–retirement bridge |

---

### 8. `thailand elite visa vs retirement visa`

| Field | Value |
| --- | --- |
| **Canonical article title** | Thailand Elite Visa vs Retirement Visa |
| **Why this wording** | Dominant competitor title pattern (Siam Legal, Thailand Elite Visas, EarlyRetireAbroad); includes country + both product names. Replaces `elite visa vs ltr thailand`. Alternate phrasing `retirement visa vs thailand elite` is valid slug variant but title should lead with higher-volume "elite visa vs retirement" stem. |
| **Search intent** | Comparison (`comparison`) |
| **Parent Visa Hub** | `/visas/elite` (primary); `/visas/retirement` (secondary) |
| **Commercial value** | **High** (82) |
| **Consultation potential** | **Very high** — affluent 50+ segment choosing between premium membership and retirement route; both services offered |
| **Google SEO opportunity** | Medium-high — competitors rank but often fee-table heavy; decision framework opportunity |
| **Google AI Overview opportunity** | **High** — frequent AIO comparison for age 50+ long-stay options |
| **ChatGPT / Claude / Perplexity citation potential** | **High** — convenience vs cost comparison is standard AI answer |
| **Internal linking value** | **High** — elite ↔ retirement hub bridge |
| **Future cluster articles enabled** | Decision matrix by age/income, family package scenarios, hidden cost comparison (5–7 supporting) |
| **Cannibalization assessment** | **Low risk** — distinct from `thailand elite visa worth it` (decision vs comparison) and hub head terms |
| **Confidence** | **88%** — **replaces LTR comparison**; both routes commercially supported |

---

### 9. `re-entry permit thailand`

| Field | Value |
| --- | --- |
| **Canonical article title** | Re-Entry Permit Thailand |
| **Why this wording** | Phase 0A exact query; hyphenation variant `re-entry permit` dominates over "reentry permit". Country suffix required for geo intent. |
| **Search intent** | Compliance (`compliance`) |
| **Parent Visa Hub** | Immigration procedures cluster (cross-hub) |
| **Commercial value** | **Medium-high** (72) |
| **Consultation potential** | **Medium-high** — travel-risk mistakes trigger extension and filing assistance |
| **Google SEO opportunity** | Medium — winnable with visa-type-specific travel-risk clarity |
| **Google AI Overview opportunity** | High — "do I need re-entry permit thailand" is common PAA |
| **ChatGPT / Claude / Perplexity citation potential** | High — consequence-focused answers (visa lapse risk) |
| **Internal linking value** | **Very high** — cross-links all long-stay hubs |
| **Future cluster articles enabled** | Travel-risk by visa type, single vs multiple re-entry (6–8 supporting) |
| **Cannibalization assessment** | **Low risk** — procedures layer; not duplicated on visa hubs |
| **Confidence** | **85%** — strong cross-hub utility; consultation adjacency on errors |

---

### 10. `dtv vs tourist visa thailand`

| Field | Value |
| --- | --- |
| **Canonical article title** | DTV vs Tourist Visa Thailand |
| **Why this wording** | CONTENT_ROADMAP P2 slug `dtv-vs-tourist-visa-thailand`; competitor pattern (Vera Visa, Siam Visa Pro). Replaces `thailand 90 day report` in launch layer due to higher new-applicant consultation yield. Prefer over "destination thailand visa vs tourist visa" (low search volume). |
| **Search intent** | Comparison (`comparison`) |
| **Parent Visa Hub** | `/visas/dtv` |
| **Commercial value** | **High** (76) |
| **Consultation potential** | **High** — prevents wrong-route tourist misuse; strong DTV qualification funnel |
| **Google SEO opportunity** | Medium-high — dedicated comparison pages rank; remote-worker segment actively searches this |
| **Google AI Overview opportunity** | High — work-rights and stay-duration comparison surfaces in AIO |
| **ChatGPT / Claude / Perplexity citation potential** | High — remote work legality angle is highly quotable |
| **Internal linking value** | **High** — DTV hub strengthening; links to rejection and vs-retirement siblings |
| **Future cluster articles enabled** | Remote work proof, visa-run risk explainer, financial proof prep (4–6 supporting) |
| **Cannibalization assessment** | **Low risk** — comparison intent; hub owns DTV requirements |
| **Confidence** | **84%** — **new to launch layer**; replaces 90-day report slot for commercial focus |

---

## Launch Roadmap Summary Table

| Rank | Primary query | Profile | Parent hub | Commercial | Authority | Confidence | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | `business visa vs work permit thailand` | comparison | `/visas/business` | 94 | 100 | 98% | **Done** |
| 2 | `retirement visa o vs o-a thailand` | comparison | `/visas/retirement` | 93 | 100 | 96% | Pending |
| 3 | `thailand elite visa worth it` | decision | `/visas/elite` | 91 | 80 | 94% | Pending |
| 4 | `best visa for living in thailand` | decision | All hubs | 84 | 88 | 92% | Pending |
| 5 | `change visa type in thailand` | transition | Procedures | 85 | 80 | 91% | Pending |
| 6 | `dtv visa rejection reasons` | troubleshooting | `/visas/dtv` | 86 | 92 | 90% | Pending |
| 7 | `dtv vs retirement visa` | comparison | `/visas/dtv` + `/visas/retirement` | 83 | 84 | 89% | Pending |
| 8 | `thailand elite visa vs retirement visa` | comparison | `/visas/elite` + `/visas/retirement` | 82 | 76 | 88% | Pending |
| 9 | `re-entry permit thailand` | compliance | Procedures | 72 | 80 | 85% | Pending |
| 10 | `dtv vs tourist visa thailand` | comparison | `/visas/dtv` | 76 | 78 | 84% | Pending |

---

## Gap Analysis

### Why each article earned its position

| Rank | Rationale |
| --- | --- |
| 1 | Highest commercial + authority score; validated reference; resolves #1 business confusion |
| 2 | Must-win retirement fork; competitors win on O vs O-A today |
| 3 | Direct premium purchase decision; highest elite consultation intent |
| 4 | Upstream funnel qualifying all routes before hub engagement |
| 5 | High-risk transition with direct service conversion |
| 6 | Post-denial assistance intent; DTV cluster depth |
| 7 | Dual-hub bridge for 50+ remote-worker overlap |
| 8 | Replaces unsupported LTR comparison; both routes offered; affluent segment |
| 9 | Cross-hub compliance with consultation adjacency on travel errors |
| 10 | DTV new-applicant funnel; prevents costly tourist-route mistakes |

### Why lower-ranked candidates were excluded from launch layer

| Candidate | Exclusion reason | Future layer |
| --- | --- | --- |
| **`elite visa vs ltr thailand`** | **Removed** — LTR not offered; promotes unsupported product | Do not publish while LTR is unsupported |
| **`thailand 90 day report`** | Lower commercial score (63); DIY existing-holder intent | **Post-launch Authority #11** (first after launch layer) |
| **`tm30 vs 90 day report thailand`** | Merged into 90-day authority as subsection (Phase 0B) | Supporting guide beneath #11 |
| **`tm30 thailand`** | Lower consultation yield; deferred | Phase-2 compliance authority |
| **`elite visa vs retirement visa`** (duplicate row) | N/A — now **#8** | — |
| **`muay thai education visa requirements`** | Niche; lower year-one commercial yield | Phase-2 education authority |
| **`language school visa thailand attendance`** | Education compliance; lower funnel priority | Phase-2 education authority |
| **`thailand overstay fine ban`** | High citation, low qualified lead quality | Phase-2 compliance authority |
| **`non-immigrant b visa thailand work permit`** | Merged into #1 | — |
| **`move to thailand visa options`** | Merged into #4 | — |
| **`ed visa language school vs university`** | Narrower than cross-route priorities | Phase-2 education |
| **`how-to-get-thailand-retirement-visa`** | **Legacy** — pre-template; overlaps hub | Migrate or deprecate; not launch pattern |

### Supporting Articles (not Authority launch layer)

| Authority parent | Supporting articles to publish after parent goes live |
| --- | --- |
| Business vs work permit | WP3 employer documents, employer tax pack, can-you-work-with-visa-only |
| O vs O-A | Insurance by route, 800k vs 65k income proof, extension timeline |
| Elite worth it | Family cost breakdown, tier benefit priority |
| Best visa for living | Profile scenario variants (remote worker, retiree, family) |
| Change visa type | Route-specific conversion playbooks |
| DTV rejection | Reapply after rejection, embassy variance matrix |
| DTV vs retirement | Profile decision matrix |
| Elite vs retirement | Hidden cost comparison, convenience factor breakdown |
| Re-entry permit | Single vs multiple re-entry, travel-risk by visa type |
| DTV vs tourist | Remote work proof pack, visa-run risk explainer |

### Post-launch Authority Articles (ranked queue)

| Priority | Primary query | Reason |
| --- | --- | --- |
| **#11** | `thailand 90 day report` | Highest AIO authority score (96); procedures cluster anchor; TM30 merge target |
| **#12** | `tm30 thailand` | Standalone compliance after 90-day authority live |
| **#13** | `thailand overstay fine ban` | High citation; lower commercial priority |
| **#14** | `language school visa thailand attendance` | Education compliance authority |
| **#15** | `muay thai education visa requirements` | Education niche branch |

**Do not publish:** `elite visa vs ltr thailand` or any LTR-primary authority while LTR is not offered.

---

## LTR Exclusion Policy

| Rule | Application |
| --- | --- |
| No LTR-primary authority guides | Remove `elite visa vs ltr thailand` from all launch queues |
| LTR in comparison tables | May appear as **text-only non-hub column** on hub pages where template requires (e.g. DTV comparison table) — no link, no CTA, no consultation path to LTR |
| LTR hub stub | Remains unpublished (`lib/visas/content/ltr.ts`) |
| Replacement pattern | When affluent comparison needed, use **elite vs retirement** (both offered) |

---

## Final Recommendation

### 1. Final Top 10 (ranked)

1. `business visa vs work permit thailand` — **Done**
2. `retirement visa o vs o-a thailand`
3. `thailand elite visa worth it`
4. `best visa for living in thailand`
5. `change visa type in thailand`
6. `dtv visa rejection reasons`
7. `dtv vs retirement visa`
8. `thailand elite visa vs retirement visa`
9. `re-entry permit thailand`
10. `dtv vs tourist visa thailand`

### 2. Confidence scores

See summary table above. Range: **84%–98%**. Lowest-confidence inclusion (#10 DTV vs tourist) still exceeds defer threshold due to DTV funnel commercial value.

### 3. Changes from previous roadmap

| # | Change | Evidence |
| --- | --- | --- |
| 1 | **Remove** `elite visa vs ltr thailand` | Business constraint: LTR not offered |
| 2 | **Add** `thailand elite visa vs retirement visa` | Replacement comparison; both routes supported; SERP-validated |
| 3 | **Add** `dtv vs tourist visa thailand` | Higher new-applicant consultation than 90-day DIY compliance |
| 4 | **Defer** `thailand 90 day report` to post-launch #11 | Commercial vs citation trade-off; still must-publish |
| 5 | **Promote** `thailand elite visa worth it` to #3 | Direct purchase decision intent |
| 6 | **Promote** `change visa type in thailand` to #5 | High conversion transition intent |

### 4. Final verdict

**These are the ten strongest Authority Articles to launch first based on real search intent, commercial value, AI visibility, and the approved Thailand Visa Content System.**

After approval of this document:

- **No further roadmap planning** is required.
- **Remaining work is implementation only** — publish ranks #2–10 using Golden Authority Guide Template v1.0 and [`docs/authority-system-operating-policy.md`](authority-system-operating-policy.md).
- **Post-launch Authority #11** (`thailand 90 day report`) should be the first authority published after the launch layer is complete.

---

## Implementation Sequence

```mermaid
flowchart LR
  done[Rank1_Done]
  ret[Rank2_OvsOA]
  elite[Rank3_EliteWorthIt]
  best[Rank4_BestVisa]
  change[Rank5_ChangeVisa]
  reject[Rank6_DTVRejection]
  dtvRet[Rank7_DTVvsRetirement]
  eliteRet[Rank8_EliteVsRetirement]
  reentry[Rank9_ReEntry]
  dtvTour[Rank10_DTVvsTourist]
  post11[PostLaunch_90Day]

  done --> ret --> elite --> best --> change
  change --> reject --> dtvRet --> eliteRet --> reentry --> dtvTour
  dtvTour --> post11
```

---

## Amendment Log

| Version | Date | Change |
| --- | --- | --- |
| 1.0 | 2026-06-25 | Final launch validation; LTR exclusion; elite vs retirement and DTV vs tourist added; 90-day deferred to post-launch |

---

*This document is the frozen implementation roadmap for Authority Guide publishing. Architecture, template, and governance remain unchanged.*
