import type { Metadata } from "next"

import type { GuideArticleModule, GuideArticlePageProps } from "@/lib/content/collections/guides"
import type { ArticleSeriesNav } from "@/lib/content/series"
import type { ContentRelatedLink } from "@/lib/content/types"
import type { BreadcrumbLink } from "@/lib/breadcrumbs/types"

export type GuideArticleRouteParams = {
  slug: string
}

export type GuideArticleStaticParam = GuideArticleRouteParams

export type ResolvedGuideArticleRoute = {
  slug: string
  module: GuideArticleModule
  page: GuideArticlePageProps
  MdxContent: GuideArticleModule["default"]
}

export type ResolvedGuideArticlePageContext = {
  route: ResolvedGuideArticleRoute
  metadata: Metadata
  breadcrumbs: ReadonlyArray<BreadcrumbLink>
  related: ReadonlyArray<ContentRelatedLink>
  relatedVisas: ReadonlyArray<ContentRelatedLink>
  topicHub?: ContentRelatedLink
  seriesNav: ArticleSeriesNav
}
