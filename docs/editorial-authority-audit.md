# Editorial Authority Audit (Phase 5)

**Date:** 2026-06-25  
**Scope:** 10 launch blog articles, 5 visa pillars, editorial knowledge graph  
**References:** [`docs/editorial-knowledge-graph.md`](./editorial-knowledge-graph.md), [`lib/content/editorial-knowledge-graph.ts`](../lib/content/editorial-knowledge-graph.ts)

---

## Executive summary

The launch editorial ecosystem is **complete and graph-validated**. All 10 blog articles are published, wired to the frozen `relatedSlugs` graph, and backlinked from visa hubs. Automated validation covers TOC sync, visa image policy, and knowledge graph integrity.

**Overall authority status:** Ready for production traffic with two non-blocking follow-ups (hero images, OG assets).

---

## Graph integrity

| Check | Status |
|-------|--------|
| 10/10 articles in `editorialArticleRoles` | Pass |
| `relatedSlugs` match frozen graph | Pass (`validate:editorial-graph`) |
| Hub `relatedArticleSlugs` include cluster-primary articles | Pass |
| Elite cluster archive `/blog/cluster/elite` | Pass |
| Keep reading = blog articles only | Pass (prior implementation) |

---

## Search intent ownership

| Article | Intent | Overlap risk | Status |
|---------|--------|--------------|--------|
| best-visa-for-living-in-thailand | Route selection | vs comparisons | Low — delegates forks |
| business-visa-vs-work-permit-thailand | Visa vs permit | vs business hub | Low — definitional only on hub |
| retirement-visa-o-vs-o-a-thailand | O vs O-A | vs dtv-vs-retirement | None — different question |
| thailand-elite-visa-worth-it | Elite ROI | vs elite-vs-retirement | Low — hierarchy enforced |
| change-visa-type-in-thailand | Conversion paths | vs re-entry | Low — cross-linked |
| dtv-visa-rejection-reasons | Refusal taxonomy | vs dtv-vs-tourist | Low — post-denial vs route choice |
| dtv-vs-retirement-visa-thailand | DTV vs retirement | vs o-vs-o-a | None |
| thailand-elite-visa-vs-retirement-visa | Elite vs retirement | vs elite-worth-it | Low |
| re-entry-permit-thailand | Travel compliance | vs change-visa | Low |
| dtv-visa-vs-tourist-visa-thailand | DTV vs tourist | vs best-visa FAQ | Low — hub delegates |

---

## Duplication audit

| Risk area | Resolution |
|-----------|------------|
| Hub comparison table vs article tables | Hub = requirements; articles = decision dimensions only |
| Elite worth-it vs elite vs retirement | Worth-it delegates comparison; table removed in consistency pass |
| DTV rejection vs DTV vs tourist | Distinct intents; cross-linked |
| Re-entry on multiple articles | Single owner; one-line warnings elsewhere |
| Employment authorization boilerplate | Canonical link to business-vs-work-permit article |

---

## SEO / AEO

| Item | Status | Notes |
|------|--------|-------|
| Primary query in meta brief | Pass | All 10 articles |
| Quick Answer in `meta.answer` | Pass | Rendered via ArticleQuickAnswer |
| FAQ schema source in meta | Pass | 5–10 per article |
| `seo.title` clarifiers | Pass | Colon pattern on comparisons |
| JSON-LD featured images | Follow-up | 8 articles lack `heroImage`; fallback OG used |
| Entity vocabulary consistency | Pass | Phase 3 meta terminology pass |

---

## Terminology (Section 0 compliance)

| Area | Status |
|------|--------|
| New article body copy | Pass — visa page / article |
| Hub + business meta (`lead`, `answer`, FAQ) | Pass — updated Phase 3 |
| `related` category labels | Pass — Article topic |
| Legacy `contentType: "guide"` in meta | Acceptable — internal enum only |
| `golden-authority-guide-template.md` filename | Legacy — no rename required |

---

## Reader journeys

All seven planned journeys (A–G) plus hub-first are supported with live URLs and in-body links. See knowledge graph doc §6.

---

## Prioritized follow-ups (post-launch)

| Priority | Item | Impact |
|----------|------|--------|
| P1 | Assign editorial hero images to 8 new articles | Social/AI preview quality |
| P2 | Production OG image (`public/og/default.png`) | Share cards |
| P3 | Education cluster blog article when scoped | Closes education hub gap |
| P4 | Tourist visa pillar publish → enable link from dtv-vs-tourist | SERP completeness |
| P5 | Sync `EDITORIAL_WORKFLOW.md` with knowledge graph doc | Writer onboarding |

---

## Validation commands

```bash
npm run validate:articles
npm run validate:editorial-graph
npm run build
```

All three pass as of this audit.
