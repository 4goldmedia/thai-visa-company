import { cache } from "react"

import { getPublishedArticleSlugs } from "@/lib/content/articles"
import { loadContentArticleBySlug } from "@/lib/content/registry"
import { toGuideArticlePageProps } from "@/lib/content/collections/guides"
import { resolveArticleSeriesNav } from "@/lib/content/series"
import {
  getGuideArticleCategoryBreadcrumb,
  resolveGuideCrossLinks,
} from "@/lib/content/guides-related"
import {
  buildGuideArticleMetadata,
  getGuideArticleRouteBreadcrumbs,
} from "@/lib/content/routing/seo"
import type {
  ResolvedGuideArticlePageContext,
  ResolvedGuideArticleRoute,
  GuideArticleStaticParam,
} from "@/lib/content/routing/guides-types"

const MAX_RELATED = 3

export const resolveGuideArticleRoute = cache(
  async (slug: string): Promise<ResolvedGuideArticleRoute | null> => {
    const module = await loadContentArticleBySlug("guides", slug)

    if (!module?.meta.published || module.meta.collection !== "guides") {
      return null
    }

    const page = toGuideArticlePageProps(module.meta)

    return {
      slug,
      module: module as ResolvedGuideArticleRoute["module"],
      page,
      MdxContent: module.default,
    }
  },
)

export async function getGuideArticleStaticParams(): Promise<GuideArticleStaticParam[]> {
  const slugs = await getPublishedArticleSlugs("guides")
  return slugs.map((slug) => ({ slug }))
}

export const resolveGuideArticlePageContext = cache(
  async (slug: string): Promise<ResolvedGuideArticlePageContext | null> => {
    const route = await resolveGuideArticleRoute(slug)
    if (!route) return null

    const [crossLinks, seriesNav] = await Promise.all([
      resolveGuideCrossLinks({
        collection: "guides",
        slug: route.page.slug,
        related: route.page.related,
        relatedSlugs: route.page.relatedSlugs,
        tags: route.page.tags,
        category: route.page.metadata.category,
        categoryId: route.page.index?.categoryId,
        topicId: route.page.topicId,
        pillarSlug: route.page.pillarSlug,
        max: MAX_RELATED,
      }),
      resolveArticleSeriesNav({
        collection: "guides",
        slug: route.page.slug,
        series: route.page.series,
        topicId: route.page.topicId,
        publishedAt: route.page.publishedAt,
      }),
    ])

    const categoryCrumb = getGuideArticleCategoryBreadcrumb(route.module.meta)

    return {
      route,
      metadata: buildGuideArticleMetadata(route.module.meta),
      breadcrumbs: getGuideArticleRouteBreadcrumbs({
        title: route.page.title,
        path: route.page.path,
        categoryLabel: categoryCrumb.label,
        categoryPath: categoryCrumb.href,
      }),
      related: crossLinks.articles,
      relatedVisas: crossLinks.visas,
      topicHub: crossLinks.topicHub,
      seriesNav,
    }
  },
)
