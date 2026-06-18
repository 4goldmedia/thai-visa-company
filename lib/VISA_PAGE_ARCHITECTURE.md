# VISA PAGE ARCHITECTURE

## Routing & SEO (centralized)

```
lib/visas/
  registry.ts              → visaRegistry (all visa pages)
  content/<slug>.ts        → page content + seo block
  layout.ts                → Blueprint v3 section order
  section-ids.ts           → stable landmark ids per section
  sections/render.tsx      → section renderer registry
  related-resources.ts     → hub → cluster link merger
  topic.ts                 → topicId + clusterHref resolution
  routing/
    visas.ts               → resolveVisaPageContext(slug)
    seo.ts                 → metadata + JSON-LD
  schema/
    visa.ts                → WebPage + Service + HowTo + ItemList
    item-list.ts           → checklist ItemList builder
```

App routes:

| Route | Entry |
|-------|--------|
| `app/visas/[slug]/page.tsx` | `resolveVisaPageContext` (dtv, elite, business, education) |
| `app/visas/retirement/page.tsx` | Same context resolver for retirement |

`resolveVisaPageContext` returns: `visa`, `metadata`, `breadcrumbs`, `relatedVisas`, `relatedResources`, `clusterHref`, `ctaLinks`.

## Blueprint v3 section order

See `lib/visas/layout.ts` → `DEFAULT_VISA_PAGE_LAYOUT`.

Authority sections render only when typed content is present on `VisaPageContent`.

Canonical policy: [`docs/content/visa-hub-canonical-policy.md`](../docs/content/visa-hub-canonical-policy.md).

## Content model

All section types live in `lib/content/types.ts` under visa landing page types.

Key hub fields:

- `topicId`, `relatedArticleSlugs`, `clusterHref`
- `answer`, `hero.definition`
- `lastReviewed` (reviewerName, reviewerTitle, reviewerCredentials, reviewDate, reviewerUrl)
- Authority sections: `officialSources`, `feesAndTimelines`, `governmentProcess`, `pitfalls`, `compliance`, `legalBoundaries`, `entityGlossary`, `practiceInsights`, `embassyVarianceTable`, `decisionGuides`

Checklist groups support `pathwayId` linking to `requirements.pathways[].id`.

## Schema

Visa JSON-LD graph (`lib/visas/schema/visa.ts`):

- `WebPage` with `datePublished`, `dateModified`, `author`, `reviewedBy`, optional `speakable`
- `Service`
- `BreadcrumbList`
- `HowTo` when `governmentProcess` is populated
- `ItemList` when `checklist` is populated
- `FAQPage` via `VisaFaqSection` (separate script)

## Internal linking

`resolveVisaRelatedResources` merges manual links, explicit slugs, auto-scored blog+guide articles, and cluster archive URL.

`resolveRelatedArticlesForVisa` searches **blog and guides** by default.

## Phase workflow

- **Phase 0:** Types, registry, render paths, schema, linking (no hub content)
- **Phase 1+:** Populate `lib/visas/content/dtv.ts` per DTV Authority Upgrade Plan v3
