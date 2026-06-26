export {
  buildArticleMetadata,
  buildArticleRouteSchemaGraph,
  buildBlogArticleMetadata,
  buildResourceArticleMetadata,
  getBlogArticleRouteBreadcrumbs,
  buildResourceArticleRouteSchemaGraph,
  getResourceArticleRouteBreadcrumbs,
  type BuildResourceArticleRouteSchemaInput,
} from "@/lib/content/routing/seo"

export {
  getBlogArticleStaticParams,
  resolveBlogArticlePageContext,
  resolveBlogArticleRoute,
} from "@/lib/content/routing/blog"

export type {
  BlogArticleRouteParams,
  BlogArticleStaticParam,
  ResolvedBlogArticlePageContext,
  ResolvedBlogArticleRoute,
} from "@/lib/content/routing/blog-types"

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
