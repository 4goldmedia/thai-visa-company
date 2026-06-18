import { cache } from "react"

import {
  resolveCtaLinkOpportunities,
  resolveRelatedVisas,
} from "@/lib/content/related"
import { resolveVisaRelatedResources } from "@/lib/visas/related-resources"
import {
  getVisaFromRegistry,
  isVisaSlug,
  isVisaPublished,
} from "@/lib/visas/registry"
import { getPublishedVisaSlugs } from "@/lib/visas/publish"
import {
  buildVisaPageMetadata,
  getVisaPageRouteBreadcrumbs,
} from "@/lib/visas/routing/seo"
import { resolveVisaClusterHref } from "@/lib/visas/topic"
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
    if (!isVisaPublished(visa)) {
      return null
    }

    const relatedResources = await resolveVisaRelatedResources(visa)

    return {
      visa,
      metadata: buildVisaPageMetadata(visa),
      breadcrumbs: getVisaPageRouteBreadcrumbs(visa),
      relatedVisas: resolveRelatedVisas(visa),
      relatedResources,
      clusterHref: resolveVisaClusterHref(visa),
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
  return getPublishedVisaSlugs()
    .filter((slug) => slug !== "retirement")
    .map((slug) => ({ slug }))
}

export function getVisaPagePaths(): ReadonlyArray<`/visas/${VisaSlug}`> {
  return getPublishedVisaSlugs().map(
    (slug) => `/visas/${slug}` as `/visas/${VisaSlug}`,
  )
}
