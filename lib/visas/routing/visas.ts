import { cache } from "react"

import { getGuideTopicHubForTopicId } from "@/lib/guides"
import {
  filterPublishedRelatedLinks,
  getTopicsForVisaSlug,
  mergeRelatedLinks,
  resolveCtaLinkOpportunities,
  resolveRelatedArticlesForVisa,
  resolveRelatedVisas,
} from "@/lib/content/related"
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

    const relatedArticles = await resolveRelatedArticlesForVisa(visa)
    const topicIds = getTopicsForVisaSlug(visa.slug)
    const topicHub = topicIds[0]
      ? getGuideTopicHubForTopicId(topicIds[0])
      : undefined
    const topicHubLink = topicHub
      ? {
          category: "Guides",
          title: topicHub.title,
          description: topicHub.description,
          href: topicHub.path,
        }
      : undefined
    const resourceGuideItems = (
      await filterPublishedRelatedLinks(
        mergeRelatedLinks(
          topicHubLink ? [topicHubLink] : [],
          visa.relatedResources.items,
          relatedArticles,
        ),
      )
    ).slice(0, 4)

    return {
      visa,
      metadata: buildVisaPageMetadata(visa),
      breadcrumbs: getVisaPageRouteBreadcrumbs(visa),
      relatedVisas: resolveRelatedVisas(visa),
      relatedArticles,
      resourceGuideItems,
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
