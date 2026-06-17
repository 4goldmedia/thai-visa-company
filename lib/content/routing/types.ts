import type { Metadata } from "next"

import type {
  ResourceArticleModule,
  ResourceArticlePageProps,
} from "@/lib/content/collections/resources"
import type { ArticleSeriesNav } from "@/lib/content/series"
import type { RelatedResourceItem } from "@/lib/content/types"
import type { BreadcrumbLink } from "@/lib/breadcrumbs/types"

/** Dynamic segment for `app/resources/[slug]` */
export type ResourceArticleRouteParams = {
  slug: string
}

export type ResourceArticleStaticParam = ResourceArticleRouteParams

/**
 * Resolved article ready for the App Router page  -  MDX component + layout props.
 * Cached per request via `resolveResourceArticleRoute`.
 */
export type ResolvedResourceArticleRoute = {
  slug: string
  module: ResourceArticleModule
  page: ResourceArticlePageProps
  MdxContent: ResourceArticleModule["default"]
}

/**
 * Full page context for `/resources/[slug]`  -  route, SEO metadata, UI breadcrumbs, related.
 * Produced once per request via `resolveResourceArticlePageContext`.
 */
export type ResolvedResourceArticlePageContext = {
  route: ResolvedResourceArticleRoute
  metadata: Metadata
  breadcrumbs: ReadonlyArray<BreadcrumbLink>
  related: ReadonlyArray<RelatedResourceItem>
  seriesNav: ArticleSeriesNav
}
