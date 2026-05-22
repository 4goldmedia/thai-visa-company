import { cache } from "react"

import {
  resolveCtaLinkOpportunities,
  resolveRelatedArticlesForVisa,
  resolveRelatedVisas,
} from "@/lib/content/related"
import { getVisaFromRegistry, isVisaSlug, getRegisteredVisaSlugs } from "@/lib/visas/registry"
import {
  buildVisaPageMetadata,
  getVisaPageRouteBreadcrumbs,
} from "@/lib/visas/routing/seo"
import type {
  ResolvedVisaPageContext,
  VisaPageStaticParam,
} from "@/lib/visas/routing/types"
import type { VisaSlug } from "@/lib/visas/types"

/**
 * Resolve a visa page from the registry.
 * Cached per request so `generateMetadata` and the page share one lookup.
 */
export const resolveVisaPageContext = cache(
  async (slug: string): Promise<ResolvedVisaPageContext | null> => {
    if (!isVisaSlug(slug)) {
      return null
    }

    const visa = getVisaFromRegistry(slug)
    const relatedArticles = await resolveRelatedArticlesForVisa(visa)

    return {
      visa,
      metadata: buildVisaPageMetadata(visa),
      breadcrumbs: getVisaPageRouteBreadcrumbs(visa),
      relatedVisas: resolveRelatedVisas(visa),
      relatedArticles,
      ctaLinks: resolveCtaLinkOpportunities({
        sourceType: "visa",
        tags: [...(visa.seo.keywords ?? []), visa.slug],
        visaSlug: visa.slug,
      }),
    }
  },
)

/** `generateStaticParams` for `app/visas/[slug]` */
export function getVisaPageStaticParams(): VisaPageStaticParam[] {
  return getRegisteredVisaSlugs()
    .filter((slug) => slug !== "retirement")
    .map((slug) => ({ slug }))
}

export function getVisaPagePaths(): ReadonlyArray<`/visas/${VisaSlug}`> {
  return getRegisteredVisaSlugs().map(
    (slug) => `/visas/${slug}` as `/visas/${VisaSlug}`,
  )
}
