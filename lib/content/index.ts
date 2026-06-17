/**
 * Content platform  -  types, collections, registry, and article retrieval API.
 */

export { resourceMetaToIndexCard } from "@/lib/content/adapters"

export {
  defineResourceArticle,
  toResourceArticlePageProps,
  type ResourceArticleDefinition,
  type ResourceArticleIndexMeta,
  type ResourceArticleMeta,
  type ResourceArticleModule,
  type ResourceArticlePageContent,
  type ResourceArticlePageProps,
} from "@/lib/content/collections/resources"

export {
  defineVisaGuideArticle,
  toVisaGuideArticlePageProps,
  type VisaGuideArticleMeta,
} from "@/lib/content/collections/visa-guides"

export {
  contentCollections,
  getArticlePath,
  getCollectionConfig,
  toContentArticleKey,
} from "@/lib/content/collections"

export { contentCollectionIds } from "@/lib/content/types"

export {
  getPublishedKeysForCollection,
  getPublishedPathsForCollection,
  getRegistryKeysForCollection,
  isRegisteredContentArticleKey,
  loadArticleMeta,
  loadContentArticle,
  loadContentArticleBySlug,
  parseContentArticleKey,
  registeredContentArticleKeys,
  type RegisteredContentArticleKey,
} from "@/lib/content/registry"

export {
  compareArticlesByDate,
  getArticleKey,
  getArticleSummariesForCollection,
  getArticlesByCategory,
  getArticlesByTag,
  getPublishedArticlePaths,
  getPublishedArticleSlugs,
  getPublishedArticleSummaries,
  getPublishedResourceIndexArticles,
  getResourceArticlesByCategoryId,
  getResourceIndexArticles,
  getResourceIndexArticlesSync,
  groupArticlesByCategory,
  groupArticlesByTag,
  groupResourceArticlesByCategoryId,
  isArticleRegistered,
  loadArticleMetaBySlug,
  loadArticleModule,
  loadArticleModuleBySlug,
  loadResourceArticleBySlug,
  loadResourceArticleModule,
  sortArticlesByDate,
  toArticleSummary,
  type ContentArticleGroup,
  type ContentArticleSummary,
} from "@/lib/content/articles"

export { defineContentSeo, toArticleLayoutMetadata } from "@/lib/content/schema"
export {
  buildDefaultArticleAuthor,
  buildResourceArticleSchema,
  buildResourceArticleSchemaGraph,
  toArticleInputFromResourceArticle,
  type ResourceArticleSchemaGraphInput,
} from "@/lib/content/schema/article"
export { buildArticleJsonLdGraph } from "@/lib/content/schema/json-ld"
export type {
  BuildArticleJsonLdInput,
  ContentArticleSchemaType,
  ContentJsonLdNode,
} from "@/lib/content/schema/json-ld"

export type {
  ContentArticleBase,
  ContentArticleKey,
  ContentArticleLayoutMeta,
  ContentArticleModule,
  ContentArticlePath,
  ContentArticleRegistryEntry,
  ContentArticleSchema,
  ContentArticleTocItem,
  ContentCollectionId,
  ContentCta,
  ContentFaqId,
  ContentFaqItem,
  ContentFaqSection,
  ContentFeaturedImage,
  ContentHeadingId,
  ContentIsoDate,
  ContentPublishable,
  ContentRelatedLink,
  ContentRelatedSection,
  ContentSeo,
  ContentSlug,
  ContentVisaFinalCta,
  ContentVisaPageBase,
  ContentVisaPageSeo,
  ContentVisaPath,
  ContentVisaProcessStep,
  RelatedResourceItem,
} from "@/lib/content/types"

export type { ContentArticleTocItem as ResourceArticleTocItem } from "@/lib/content/types"

export async function loadResourceContentArticle(slug: string) {
  const { loadResourceArticleModule } = await import("@/lib/content/articles")
  return loadResourceArticleModule(slug)
}

export async function getPublishedGuideArticlePaths(): Promise<string[]> {
  const { getPublishedArticlePaths } = await import("@/lib/content/articles")
  return getPublishedArticlePaths("guides")
}

export async function getPublishedBlogArticlePaths(): Promise<string[]> {
  const { getPublishedArticlePaths } = await import("@/lib/content/articles")
  return getPublishedArticlePaths("blog")
}

/** @deprecated Use `getPublishedGuideArticlePaths` */
export async function getPublishedResourceArticlePaths(): Promise<string[]> {
  return getPublishedGuideArticlePaths()
}

export async function getPublishedResourceArticleSlugs(): Promise<string[]> {
  const { getPublishedArticleSlugs } = await import("@/lib/content/articles")
  return getPublishedArticleSlugs("resources")
}

export {
  getPublishedKeysForCollection as getPublishedResourceArticleKeys,
} from "@/lib/content/registry"

export {
  contentTopicTaxonomy,
  contentTopicIds,
  defaultRelatedVisaSlugs,
  groupLinksByTag,
  groupLinksByTopic,
  filterPublishedRelatedLinks,
  isPublishedBlogHref,
  isPublishedResourceHref,
  mergeRelatedLinks,
  mergeScoredRelatedLinks,
  normalizeCategory,
  normalizeTag,
  rankRelatedArticles,
  rankRelatedVisas,
  resolveArticleCrossLinks,
  resolveCtaLinkOpportunities,
  resolveRelatedArticles,
  resolveRelatedArticlesForVisa,
  resolveRelatedVisas,
  resolveRelatedVisasForArticle,
  resolveVisaCrossLinks,
  scoreArticleToArticle,
  scoreArticleToVisa,
  scoreVisaToArticle,
  getSharedTopics,
  getTopicsForCategory,
  getTopicsForTags,
  getTopicsForVisaSlug,
  getVisaSlugsForTopics,
  articleSummaryToRelatedLink,
  visaToRelatedLink,
  type ArticleLinkSource,
  type ContentTopicDefinition,
  type ContentTopicId,
  type CtaLinkIntent,
  type CtaLinkOpportunity,
  type LinkScoreReason,
  type ResolveRelatedArticlesInput,
  type ResolveRelatedVisasInput,
  type ResolvedCrossLinks,
  type ScoredRelatedLink,
  type VisaLinkSource,
} from "@/lib/content/related"

export {
  buildResourceArticleMetadata,
  buildResourceArticleRouteSchemaGraph,
  getResourceArticleRouteBreadcrumbs,
  getResourceArticleStaticParams,
  resolveResourceArticlePageContext,
  resolveResourceArticleRelated,
  resolveResourceArticleRoute,
  type ResolvedResourceArticlePageContext,
  type ResolvedResourceArticleRoute,
  type ResourceArticleRouteParams,
  type ResourceArticleStaticParam,
} from "@/lib/content/routing"

export {
  defineGuideArticle,
  toGuideArticlePageProps,
  type GuideArticleMeta,
  type GuideArticlePageProps,
} from "@/lib/content/collections/guides"

export {
  resolveGuideCrossLinks,
  resolveBlogCrossLinks,
  type ResolvedGuideCrossLinks,
  type ResolvedBlogCrossLinks,
} from "@/lib/content/cross-links"
