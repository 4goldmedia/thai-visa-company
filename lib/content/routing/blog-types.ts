import type { Metadata } from "next"

import type { BlogArticleModule, BlogArticlePageProps } from "@/lib/content/collections/blog"
import type { ArticleSeriesNav } from "@/lib/content/series"
import type { ContentRelatedLink } from "@/lib/content/types"
import type { BreadcrumbLink } from "@/lib/breadcrumbs/types"

export type BlogArticleRouteParams = {
  slug: string
}

export type BlogArticleStaticParam = BlogArticleRouteParams

export type ResolvedBlogArticleRoute = {
  slug: string
  module: BlogArticleModule
  page: BlogArticlePageProps
  MdxContent: BlogArticleModule["default"]
}

export type ResolvedBlogArticlePageContext = {
  route: ResolvedBlogArticleRoute
  metadata: Metadata
  breadcrumbs: ReadonlyArray<BreadcrumbLink>
  related: ReadonlyArray<ContentRelatedLink>
  relatedVisas: ReadonlyArray<ContentRelatedLink>
  relatedGuide?: ContentRelatedLink
  topicHub?: ContentRelatedLink
  seriesNav: ArticleSeriesNav
}
