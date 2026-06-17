import { cache } from "react"

import { getPublishedArticleSlugs } from "@/lib/content/articles"
import { loadResourceArticleModule } from "@/lib/content/articles"
import { resolveArticleSeriesNav } from "@/lib/content/series"
import { resolveRelatedArticles } from "@/lib/content/related"
import { toResourceArticlePageProps } from "@/lib/content/collections/resources"

import {
  buildResourceArticleMetadata,
  getResourceArticleRouteBreadcrumbs,
} from "@/lib/content/routing/seo"
import type {
  ResolvedResourceArticlePageContext,
  ResolvedResourceArticleRoute,
  ResourceArticleStaticParam,
} from "@/lib/content/routing/types"

const MAX_RELATED = 3

/**
 * Load and normalize a published resource article for App Router routing.
 * Cached per request so `generateMetadata` and the page share one MDX load.
 */
export const resolveResourceArticleRoute = cache(
  async (slug: string): Promise<ResolvedResourceArticleRoute | null> => {
    const module = await loadResourceArticleModule(slug)

    if (!module?.meta.published) {
      return null
    }

    const page = toResourceArticlePageProps(module.meta)

    return {
      slug,
      module,
      page,
      MdxContent: module.default,
    }
  },
)

/** `generateStaticParams` for `app/resources/[slug]`  -  registry published slugs only */
export async function getResourceArticleStaticParams(): Promise<
  ResourceArticleStaticParam[]
> {
  const slugs = await getPublishedArticleSlugs("resources")
  return slugs.map((slug) => ({ slug }))
}

export async function resolveResourceArticleRelated(
  article: Pick<
    ResolvedResourceArticleRoute["page"],
    "related" | "relatedSlugs" | "slug" | "tags" | "metadata" | "index"
  >,
) {
  return resolveRelatedArticles({
    collection: "resources",
    slug: article.slug,
    related: article.related,
    relatedSlugs: article.relatedSlugs,
    tags: article.tags,
    category: article.metadata.category,
    resourceCategoryId: article.index.categoryId,
    max: MAX_RELATED,
  })
}

/**
 * Full `/resources/[slug]` context  -  route, metadata, breadcrumbs, related articles.
 * Single entry point for the dynamic article page.
 */
export const resolveResourceArticlePageContext = cache(
  async (slug: string): Promise<ResolvedResourceArticlePageContext | null> => {
    const route = await resolveResourceArticleRoute(slug)

    if (!route) {
      return null
    }

    const [related, seriesNav] = await Promise.all([
      resolveResourceArticleRelated(route.page),
      resolveArticleSeriesNav({
        collection: "resources",
        slug: route.page.slug,
        series: route.page.series,
        topicId: route.page.topicId,
        publishedAt: route.page.publishedAt,
      }),
    ])

    return {
      route,
      metadata: buildResourceArticleMetadata(route.module.meta),
      breadcrumbs: getResourceArticleRouteBreadcrumbs(route.page),
      related,
      seriesNav,
    }
  },
)
