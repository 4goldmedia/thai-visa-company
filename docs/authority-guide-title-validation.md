# Authority Guide Title Validation (Final)

**Status:** Approved — frozen implementation queue  
**Validation date:** 2026-06-25  
**Scope:** Title and primary-query wording only. Topics, roadmap order, architecture, template, and governance are unchanged.

**Evidence sources:** Phase 0A intent registry, approved launch roadmap, implemented reference guide (`business-visa-vs-work-permit-thailand`), Google SERP competitor titles (Siam Legal, Pattaya Visa Help, Vera Visa, Issa Compass, ThaiEmbassy.com, Immigration Bureau), PAA patterns, and AI-style question phrasing.

**Title rules applied:**

- H1 matches dominant search phrasing, not marketing headlines
- `seo.title` may add a short clarifier after a colon; H1 stays query-faithful
- Country suffix (`Thailand`) included when geo intent is part of the query family
- Hyphenation follows official terms (`re-entry`, not `reentry`)
- Question-form queries (`worth it`, `which is better`) use statement H1 unless the question stem is the dominant SERP title

---

## Per-Article Validation

### 1. Business Visa vs Work Permit Thailand *(benchmark — implemented)*

| Field | Value |
| --- | --- |
| **Current roadmap title** | Business Visa vs Work Permit in Thailand |
| **Dominant search phrasing** | `business visa vs work permit thailand`; `thailand business visa vs work permit` |
| **Alternative phrasings** | `non-immigrant b visa thailand work permit` (merged intent family); `do i need a work permit with business visa` (PAA) |
| **Google-style wording** | Business visa vs work permit Thailand |
| **AI-style wording** | What is the difference between a Thailand business visa and a work permit? |
| **Recommended H1** | Business Visa vs Work Permit in Thailand |
| **Primary search query** | `business visa vs work permit thailand` |
| **Verdict** | **No change recommended.** |
| **Why** | Implemented H1 mirrors dominant `vs` comparison phrasing. Both document names appear in full. `in Thailand` matches geo-scoped queries. Reference implementation validates the pattern for all remaining guides. |
| **Confidence** | **99%** |

---

### 2. Retirement Visa O vs O-A Thailand

| Field | Value |
| --- | --- |
| **Current roadmap title** | Retirement Visa O vs O-A Thailand |
| **Dominant search phrasing** | `retirement visa o vs o-a`; `o vs o-a retirement visa thailand`; `non-o vs o-a thailand` |
| **Alternative phrasings** | `thailand retirement visa o vs o-a vs o-x` (longer, three-way); `non-immigrant o vs o-a retirement` (formal, lower volume) |
| **Google-style wording** | Retirement visa O vs O-A Thailand |
| **AI-style wording** | What is the difference between Non-Immigrant O and O-A retirement visa in Thailand? |
| **Recommended H1** | Retirement Visa O vs O-A Thailand |
| **Primary search query** | `retirement visa o vs o-a thailand` |
| **Verdict** | **No change recommended.** |
| **Why** | `O vs O-A` is the dominant shorthand in SERP titles (Siam Visa Pro, Pattaya Visa Help) and forums. Prefixing `Retirement Visa` anchors route context without requiring formal `Non-Immigrant` taxonomy. O-X is out of scope for this authority (narrower audience). |
| **Confidence** | **95%** |

---

### 3. Thailand Elite Visa Worth It

| Field | Value |
| --- | --- |
| **Current roadmap title** | Thailand Elite Visa Worth It |
| **Dominant search phrasing** | `thailand elite visa worth it`; `is thailand elite visa worth it`; `thailand privilege visa worth it` |
| **Alternative phrasings** | `is the thailand elite visa worth it in 2026` (year-stamped, avoid in H1); `thailand privilege card worth it` (rebrand variant) |
| **Google-style wording** | Thailand elite visa worth it |
| **AI-style wording** | Is the Thailand Elite Visa worth the cost? |
| **Recommended H1** | Thailand Elite Visa Worth It |
| **Primary search query** | `thailand elite visa worth it` |
| **Verdict** | **No change recommended.** |
| **Why** | `worth it` is the decision-intent stem in autocomplete and PAA. Users still search `elite visa` far more than `privilege visa`; hub can clarify rebrand in body copy. Statement H1 (without leading "Is") matches benchmark pattern and remains extractable by AI systems. |
| **Confidence** | **94%** |

---

### 4. Best Visa for Living in Thailand

| Field | Value |
| --- | --- |
| **Current roadmap title** | Best Visa for Living in Thailand |
| **Dominant search phrasing** | `best visa for living in thailand`; `best visa for long stay in thailand` |
| **Alternative phrasings** | `move to thailand visa options` (merged into this owner); `which visa is best for thailand` (PAA variant) |
| **Google-style wording** | Best visa for living in Thailand |
| **AI-style wording** | What is the best visa for living in Thailand long term? |
| **Recommended H1** | Best Visa for Living in Thailand |
| **Primary search query** | `best visa for living in thailand` |
| **Verdict** | **No change recommended.** |
| **Why** | Phase 0A canonical query uses `living` not `long stay`. `living` reflects relocation intent (commercial). `long stay` is valid secondary keyword only. |
| **Confidence** | **93%** |

---

### 5. Change Visa Type in Thailand

| Field | Value |
| --- | --- |
| **Current roadmap title** | Change Visa Type in Thailand |
| **Dominant search phrasing** | `change visa type in thailand`; `changing visa type in thailand` |
| **Alternative phrasings** | `how to change your visa type in thailand` (procedural variant — Supporting layer); `visa conversion thailand` (lower volume) |
| **Google-style wording** | Change visa type in Thailand |
| **AI-style wording** | Can you change your visa type while in Thailand? |
| **Recommended H1** | Change Visa Type in Thailand |
| **Primary search query** | `change visa type in thailand` |
| **Verdict** | **No change recommended.** |
| **Why** | Matches Thai government phrasing (`changing the type of visa`) and Issa Compass topic framing. Noun/imperative form fits transition authority profile; `how to` belongs in Supporting procedural depth. |
| **Confidence** | **92%** |

---

### 6. DTV Visa Rejection Reasons

| Field | Value |
| --- | --- |
| **Current roadmap title** | DTV Visa Rejection Reasons |
| **Dominant search phrasing** | `dtv visa rejection reasons`; `dtv visa rejected`; `why dtv applications get rejected` |
| **Alternative phrasings** | `dtv visa thailand rejection reasons` (geo variant); `dtv visa rejected what to do` (Supporting layer) |
| **Google-style wording** | DTV visa rejection reasons |
| **AI-style wording** | Why do Thailand DTV visa applications get rejected? |
| **Recommended H1** | DTV Visa Rejection Reasons |
| **Primary search query** | `dtv visa rejection reasons` |
| **Verdict** | **No change recommended.** |
| **Why** | Post-denial search behaviour uses `rejection reasons` stem (StampStay, DTV Visa Thai, ThaiKru). `DTV Visa` prefix is standard in SERP titles. `thailand` optional in H1 because route is geo-scoped by site; retain in `seo.keywords`. |
| **Confidence** | **91%** |

---

### 7. DTV vs Retirement Visa

| Field | Value |
| --- | --- |
| **Current roadmap title** | DTV vs Retirement Visa |
| **Dominant search phrasing** | `dtv vs retirement visa`; `dtv visa vs retirement visa` |
| **Alternative phrasings** | `destination thailand visa vs retirement visa` (low volume); `dtv vs retirement visa thailand` (geo suffix) |
| **Google-style wording** | DTV visa vs retirement visa |
| **AI-style wording** | DTV or retirement visa — which is right for me in Thailand? |
| **Recommended H1** | **DTV Visa vs Retirement Visa** |
| **Primary search query** | `dtv vs retirement visa` |
| **Verdict** | **H1 refinement recommended.** Primary query unchanged. |
| **Why** | SERP competitors (One Stop Huahin, Terms.law) use symmetric `DTV Visa vs Retirement Visa`. Benchmark guide (#1) uses full nouns on both sides (`Business Visa vs Work Permit`). Adding `Visa` after DTV improves parity and AI extraction without changing the canonical query family. |
| **Confidence** | **90%** |

---

### 8. Thailand Elite Visa vs Retirement Visa

| Field | Value |
| --- | --- |
| **Current roadmap title** | Thailand Elite Visa vs Retirement Visa |
| **Dominant search phrasing** | `thailand elite visa vs retirement visa`; `elite visa vs retirement visa`; `retirement visa vs elite visa` |
| **Alternative phrasings** | `thailand privilege visa vs retirement visa` (rebrand variant); `retirement visa vs thailand elite` (inverted order) |
| **Google-style wording** | Thailand elite visa vs retirement visa |
| **AI-style wording** | Thailand Elite Visa or retirement visa — which should I choose? |
| **Recommended H1** | Thailand Elite Visa vs Retirement Visa |
| **Primary search query** | `thailand elite visa vs retirement visa` |
| **Verdict** | **No change recommended.** |
| **Why** | Dominant competitor H1 pattern (Siam Legal, EarlyRetireAbroad, Thailand Elite Visas). Leading with `Thailand Elite Visa` matches higher-volume stem. Both routes are commercially supported (LTR comparison correctly excluded). |
| **Confidence** | **92%** |

---

### 9. Re-Entry Permit Thailand

| Field | Value |
| --- | --- |
| **Current roadmap title** | Re-Entry Permit Thailand |
| **Dominant search phrasing** | `re-entry permit thailand`; `thailand re-entry permit`; `tm8 re-entry permit` |
| **Alternative phrasings** | `reentry permit thailand` (no hyphen — lower formality); `do i need a re-entry permit thailand` (PAA) |
| **Google-style wording** | Re-entry permit Thailand |
| **AI-style wording** | Do I need a re-entry permit before leaving Thailand? |
| **Recommended H1** | Re-Entry Permit Thailand |
| **Primary search query** | `re-entry permit thailand` |
| **Verdict** | **No change recommended.** |
| **Why** | Hyphenated form matches Immigration Bureau official term (`Re-entry Permit`). TM8 is Supporting-layer detail, not H1. Statement form preferred over question for evergreen authority. |
| **Confidence** | **91%** |

---

### 10. DTV vs Tourist Visa Thailand

| Field | Value |
| --- | --- |
| **Current roadmap title** | DTV vs Tourist Visa Thailand |
| **Dominant search phrasing** | `dtv visa vs tourist visa thailand`; `dtv vs tourist visa thailand` |
| **Alternative phrasings** | `destination thailand visa vs tourist visa` (low volume); `dtv vs tourist visa` (without Thailand) |
| **Google-style wording** | DTV visa vs tourist visa Thailand |
| **AI-style wording** | DTV or tourist visa — which is better for remote workers in Thailand? |
| **Recommended H1** | **DTV Visa vs Tourist Visa Thailand** |
| **Primary search query** | `dtv visa vs tourist visa thailand` |
| **Verdict** | **H1 and primary query refinement recommended.** |
| **Why** | Top-ranking competitor URL and title use `DTV Visa vs Tourist Visa Thailand` (Vera Visa). Symmetric `Visa` on both sides matches benchmark #1 pattern. Slug should be `dtv-visa-vs-tourist-visa-thailand` to align with query. |
| **Confidence** | **89%** |

---

## Summary of Title Changes

| Rank | Change | Detail |
| --- | --- | --- |
| 1 | None | Benchmark — validated |
| 2–6, 8–9 | None | Roadmap wording already optimal |
| 7 | H1 only | `DTV vs Retirement Visa` → **DTV Visa vs Retirement Visa** |
| 10 | H1 + primary query | H1 → **DTV Visa vs Tourist Visa Thailand**; primary query → `dtv visa vs tourist visa thailand` |

All other articles: **No change recommended.**

---

## Frozen Canonical Implementation Queue

| Rank | Final H1 / title | Primary search query | Slug (proposed) | Parent Visa Hub | Article type | Confidence |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Business Visa vs Work Permit in Thailand | `business visa vs work permit thailand` | `business-visa-vs-work-permit-thailand` | `/visas/business` | comparison | 99% |
| 2 | Retirement Visa O vs O-A Thailand | `retirement visa o vs o-a thailand` | `retirement-visa-o-vs-o-a-thailand` | `/visas/retirement` | comparison | 95% |
| 3 | Thailand Elite Visa Worth It | `thailand elite visa worth it` | `thailand-elite-visa-worth-it` | `/visas/elite` | decision | 94% |
| 4 | Best Visa for Living in Thailand | `best visa for living in thailand` | `best-visa-for-living-in-thailand` | All hubs | decision | 93% |
| 5 | Change Visa Type in Thailand | `change visa type in thailand` | `change-visa-type-in-thailand` | Procedures cluster | transition | 92% |
| 6 | DTV Visa Rejection Reasons | `dtv visa rejection reasons` | `dtv-visa-rejection-reasons` | `/visas/dtv` | troubleshooting | 91% |
| 7 | DTV Visa vs Retirement Visa | `dtv vs retirement visa` | `dtv-vs-retirement-visa-thailand` | `/visas/dtv` + `/visas/retirement` | comparison | 90% |
| 8 | Thailand Elite Visa vs Retirement Visa | `thailand elite visa vs retirement visa` | `thailand-elite-visa-vs-retirement-visa` | `/visas/elite` + `/visas/retirement` | comparison | 92% |
| 9 | Re-Entry Permit Thailand | `re-entry permit thailand` | `re-entry-permit-thailand` | Procedures cluster | compliance | 91% |
| 10 | DTV Visa vs Tourist Visa Thailand | `dtv visa vs tourist visa thailand` | `dtv-visa-vs-tourist-visa-thailand` | `/visas/dtv` | comparison | 89% |

**Post-launch Authority #11:** `thailand 90 day report` — H1: **Thailand 90 Day Report** (validated; deferred from launch layer)

---

## Implementation Notes for Writers

1. **H1 = `meta.title`** — query-faithful statement; no year stamps; no marketing suffixes.
2. **`seo.title`** — may append clarifier after colon (see benchmark: `Business Visa vs Work Permit in Thailand: What You Actually Need`).
3. **`meta.answer`** — single-source Quick Answer; do not duplicate in MDX.
4. **Slug** — derived from primary query; use table above for ranks #7 and #10 refinements.
5. **Comparison articles** — use full document names on both sides of `vs` where applicable (benchmark pattern).

---

## Final Verdict

The launch roadmap is **ready for implementation**.

Two minor title refinements are supported by observable SERP behaviour (ranks #7 and #10). No topic changes. No roadmap reordering. No architecture, template, or governance changes.

**The launch roadmap is now frozen. Remaining work is implementation only.**

---

## Amendment Log

| Version | Date | Change |
| --- | --- | --- |
| 1.0 | 2026-06-25 | Final title validation; frozen canonical implementation queue |
