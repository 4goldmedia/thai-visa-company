import { cache } from "react"

import { getPublishedArticleSlugs } from "@/lib/content/articles"
import { loadContentArticleBySlug } from "@/lib/content/registry"
import { toBlogArticlePageProps } from "@/lib/content/collections/blog"
import { resolveArticleSeriesNav } from "@/lib/content/series"
import {
  buildBlogClusterTopicHubLink,
  getBlogArticleClusterBreadcrumb,
  resolveBlogCrossLinks,
} from "@/lib/content/blog-related"
import {
  buildBlogArticleMetadata,
  getBlogArticleRouteBreadcrumbs,
} from "@/lib/content/routing/seo"
import type {
  ResolvedBlogArticlePageContext,
  ResolvedBlogArticleRoute,
  BlogArticleStaticParam,
} from "@/lib/content/routing/blog-types"

const MAX_RELATED = 3

export const resolveBlogArticleRoute = cache(
  async (slug: string): Promise<ResolvedBlogArticleRoute | null> => {
    const module = await loadContentArticleBySlug("blog", slug)

    if (!module?.meta.published || module.meta.collection !== "blog") {
      return null
    }

    const page = toBlogArticlePageProps(module.meta)

    return {
      slug,
      module: module as ResolvedBlogArticleRoute["module"],
      page,
      MdxContent: module.default,
    }
  },
)

export async function getBlogArticleStaticParams(): Promise<BlogArticleStaticParam[]> {
  const slugs = await getPublishedArticleSlugs("blog")
  return slugs.map((slug) => ({ slug }))
}

export async function resolveBlogArticleCrossLinks(
  article: ResolvedBlogArticleRoute["page"],
) {
  return resolveBlogCrossLinks({
    collection: "blog",
    slug: article.slug,
    related: article.related,
    relatedSlugs: article.relatedSlugs,
    tags: article.tags,
    category: article.metadata.category,
    clusterId: article.index?.clusterId,
    topicId: article.topicId,
    pillarSlug: article.pillarSlug,
    max: MAX_RELATED,
  })
}

export const resolveBlogArticlePageContext = cache(
  async (slug: string): Promise<ResolvedBlogArticlePageContext | null> => {
    const route = await resolveBlogArticleRoute(slug)
    if (!route) return null

    const [crossLinks, seriesNav] = await Promise.all([
      resolveBlogArticleCrossLinks(route.page),
      resolveArticleSeriesNav({
        collection: "blog",
        slug: route.page.slug,
        series: route.page.series,
        topicId: route.page.topicId,
        publishedAt: route.page.publishedAt,
      }),
    ])

    const clusterCrumb = getBlogArticleClusterBreadcrumb(route.module.meta)
    const topicHub = buildBlogClusterTopicHubLink(route.module.meta)

    return {
      route,
      metadata: buildBlogArticleMetadata(route.module.meta),
      breadcrumbs: getBlogArticleRouteBreadcrumbs({
        title: route.page.title,
        path: route.page.path,
        categoryLabel: clusterCrumb.label,
        categoryPath: clusterCrumb.href,
      }),
      related: crossLinks.articles,
      relatedVisas: crossLinks.visas,
      relatedGuide: crossLinks.relatedGuide,
      topicHub,
      seriesNav,
    }
  },
)
