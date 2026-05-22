export {
  buildResourceArticleMetadata,
  buildResourceArticleRouteSchemaGraph,
  getResourceArticleRouteBreadcrumbs,
  type BuildResourceArticleRouteSchemaInput,
} from "@/lib/content/routing/seo"

export {
  getResourceArticleStaticParams,
  resolveResourceArticlePageContext,
  resolveResourceArticleRelated,
  resolveResourceArticleRoute,
} from "@/lib/content/routing/resources"

export type {
  ResolvedResourceArticlePageContext,
  ResolvedResourceArticleRoute,
  ResourceArticleRouteParams,
  ResourceArticleStaticParam,
} from "@/lib/content/routing/types"

export {
  buildDefaultArticleAuthor,
  buildResourceArticleSchema,
  buildResourceArticleSchemaGraph,
  toArticleInputFromResourceArticle,
  type ResourceArticleSchemaGraphInput,
} from "@/lib/content/schema/article"
