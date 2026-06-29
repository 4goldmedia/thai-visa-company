# Editorial Knowledge Graph

Canonical map of the Thai Visa Company blog authority ecosystem. Machine-readable source: [`lib/content/editorial-knowledge-graph.ts`](../lib/content/editorial-knowledge-graph.ts). Governance: [`rules/content/internal-linking.mdc`](../rules/content/internal-linking.mdc).

**Publication type:** Everything under `/blog/*` is a **blog article**. Visa requirements live on **visa pages** (`/visas/*`). Do not call our content "guides."

---

## 1. Node taxonomy

| Role | Purpose | Launch articles |
|------|---------|-----------------|
| **DecisionHub** | Cross-pillar route selection | `best-visa-for-living-in-thailand` |
| **ComparisonArticle** | Two-option fork | `business-visa-vs-work-permit-thailand`, `retirement-visa-o-vs-o-a-thailand`, `dtv-vs-retirement-visa-thailand`, `thailand-elite-visa-vs-retirement-visa`, `dtv-visa-vs-tourist-visa-thailand` |
| **DecisionArticle** | Single-route worth-it | `thailand-elite-visa-worth-it` |
| **TroubleshootingArticle** | Post-failure recovery | `dtv-visa-rejection-reasons` |
| **TransitionArticle** | Status change paths | `change-visa-type-in-thailand` |
| **ComplianceArticle** | Ongoing obligation | `re-entry-permit-thailand` |
| **AuthorityArticle** | Definitive work-authorization explainer | `can-i-work-in-thailand-without-a-work-permit` |
| **LifestyleHub** | Upstream lifestyle / relocation question | `can-foreigners-live-in-thailand-permanently` |
| **VisaPillar** | Requirements + service | `/visas/{dtv,retirement,elite,business,education}` |
| **ClusterArchive** | Blog index | `/blog/cluster/{id}` |
| **Commercial** | Conversion | `/consultation` |

---

## 2. Frozen `relatedSlugs` graph

Validated by `npm run validate:editorial-graph`.

```
best-visa → [business-vs-work-permit, dtv-vs-retirement, elite-worth-it, o-vs-o-a]
business-vs-work-permit → [best-visa]
o-vs-o-a → [best-visa, dtv-vs-retirement]
elite-worth-it → [best-visa, elite-vs-retirement]
change-visa-type → [best-visa, re-entry-permit]
dtv-rejection → [best-visa, dtv-vs-tourist]
dtv-vs-retirement → [best-visa, o-vs-o-a, elite-vs-retirement]
elite-vs-retirement → [best-visa, elite-worth-it, dtv-vs-retirement]
re-entry-permit → [best-visa, change-visa-type]
dtv-vs-tourist → [best-visa, dtv-rejection]
can-i-work-without-permit → [business-vs-work-permit, best-visa, can-foreigners-live-permanently]
can-foreigners-live-permanently → [best-visa, dtv-vs-retirement, elite-worth-it, can-i-work-without-permit]
best-visa → [can-foreigners-live-permanently, business-vs-work-permit, dtv-vs-retirement, can-i-work-without-permit]
```

(Slugs use full filenames in `lib/content/editorial-knowledge-graph.ts`.)

Manual `related` arrays and in-body links carry additional obligations from the linking matrix.

---

## 3. Visa hub backlinks

Each hub `relatedArticleSlugs` must include `best-visa-for-living-in-thailand` plus cluster-primary articles:

| Hub | Primary blog articles |
|-----|------------------------|
| `/visas/dtv` | `dtv-visa-rejection-reasons`, `dtv-visa-vs-tourist-visa-thailand`, `dtv-vs-retirement-visa-thailand` |
| `/visas/retirement` | `retirement-visa-o-vs-o-a-thailand`, `dtv-vs-retirement-visa-thailand`, `thailand-elite-visa-vs-retirement-visa` |
| `/visas/elite` | `thailand-elite-visa-worth-it`, `thailand-elite-visa-vs-retirement-visa` |
| `/visas/business` | `business-visa-vs-work-permit-thailand`, `can-i-work-in-thailand-without-a-work-permit` |
| `/visas/education` | *(decision hub only until education article ships)* |

---

## 4. Entity vocabulary (canonical)

| Use | Not for our content |
|-----|---------------------|
| blog article | guide, authority guide |
| visa page | visa guide (our pages) |
| Related articles / Keep reading | related guides |
| Read article | Read guide |
| Thailand DTV Visa / DTV | digital nomad visa (H1 only in tags) |
| Work Permit | work visa (alone) |
| Re-Entry Permit | reentry permit |

Full table: see plan Section 3 or `editorialEntityTerms` in the graph module.

---

## 5. Single-owner topics

| Topic | Owner | Others |
|-------|-------|--------|
| Route selection (which visa fits) | `best-visa-for-living-in-thailand` | Link upstream |
| Business visa vs work permit | `business-visa-vs-work-permit-thailand` | Hub: 2-sentence split |
| O vs O-A retirement | `retirement-visa-o-vs-o-a-thailand` | Hub: summary + link |
| DTV vs retirement (50+ remote) | `dtv-vs-retirement-visa-thailand` | No overlap with O vs O-A |
| Elite worth it | `thailand-elite-visa-worth-it` | vs-retirement = route comparison only |
| Elite vs retirement | `thailand-elite-visa-vs-retirement-visa` | Distinct from worth-it |
| DTV vs tourist | `dtv-visa-vs-tourist-visa-thailand` | No `/visas/tourist` link (unpublished) |
| DTV rejection taxonomy | `dtv-visa-rejection-reasons` | Hub: top patterns + link |
| Change visa type | `change-visa-type-in-thailand` | Hubs: conversion FAQ → link |
| Re-entry permit | `re-entry-permit-thailand` | Hubs: one compliance bullet + link |
| Fees, checklists, thresholds | `/visas/{pillar}` | Articles: one-line + link |

---

## 6. Reader journeys

**A — Umbrella:** best visa → comparison article → visa page → consultation

**B — Employment:** business vs work permit → `/visas/business` → consultation

**C — Retirement fork:** O vs O-A → `/visas/retirement` → consultation

**D — DTV funnel:** DTV vs tourist → `/visas/dtv` OR rejection article → consultation

**E — Affluent 50+:** elite worth it → elite vs retirement → `/visas/elite` or retirement → consultation

**F — Compliance:** re-entry permit → current visa page → consultation

**G — Visa change:** change visa type → target visa page → consultation (early)

**Hub-first:** `/visas/{pillar}` → supporting article when confusion detected → consultation

---

## 7. Clusters

Defined in [`lib/blog/content/clusters.ts`](../lib/blog/content/clusters.ts). Elite cluster added at `/blog/cluster/elite` with `pillarHref: /visas/elite`.

---

## Amendment log

| Date | Change |
|------|--------|
| 2026-06-25 | Phase 1 knowledge graph frozen; graph module + validation added |
| 2026-06-25 | Phase 2: 10 launch blog articles wired to graph |
| 2026-06-25 | Articles 11–12: work permit authority + permanent living lifestyle hub |
