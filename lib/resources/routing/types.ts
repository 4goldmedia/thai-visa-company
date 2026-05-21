import type { ResourceArticleModule, ResourceArticlePageProps } from "@/lib/content"

/** Dynamic segment for `app/resources/[slug]` */
export type ResourceArticleRouteParams = {
  slug: string
}

export type ResourceArticleStaticParam = ResourceArticleRouteParams

/**
 * Resolved article ready for the App Router page — MDX component + layout props.
 * Produced once per request via `resolveResourceArticleRoute`.
 */
export type ResolvedResourceArticleRoute = {
  slug: string
  module: ResourceArticleModule
  page: ResourceArticlePageProps
  MdxContent: ResourceArticleModule["default"]
}
