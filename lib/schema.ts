/**
 * Schema.org JSON-LD architecture for the Thailand visa platform.
 *
 * @example
 * import {
 *   buildPageSchemaGraph,
 *   buildOrganization,
 *   buildFaqPage,
 *   JsonLdScript,
 * } from "@/lib/schema"
 *
 * const graph = buildPageSchemaGraph({
 *   nodes: [buildOrganization(), buildFaqPage(faqItems)],
 * })
 * return <JsonLdScript data={graph} />
 */

// Types
export { SCHEMA_CONTEXT } from "@/lib/schema/types"
export type {
  AggregateRatingInput,
  ArticleInput,
  BreadcrumbItem,
  ContactPointInput,
  FaqItemInput,
  JsonLdGraphDocument,
  JsonLdNode,
  JsonLdSingleDocument,
  LocalBusinessInput,
  OrganizationInput,
  PostalAddressInput,
  ReviewItemInput,
  ServiceInput,
  WebPageInput,
} from "@/lib/schema/types"

// Business profile (name, contacts, reviews, expertise)
export {
  getPlatformSameAsUrls,
  googleReviewsUrl,
  platformBusinessProfile,
} from "@/lib/schema/business-profile"
export { buildPlatformBusinessSchemaGraph } from "@/lib/schema/business-graph"
export { buildContactPoint, buildPlatformContactPoints } from "@/lib/schema/contact"

// Site defaults & entity ids
export {
  getDefaultLocalBusinessInput,
  getDefaultOrganizationInput,
  getSchemaEntityIds,
} from "@/lib/schema/site"

// Utilities
export {
  buildJsonLdDocument,
  buildJsonLdGraph,
  compactNode,
  serializeJsonLd,
  toAbsoluteUrl,
} from "@/lib/schema/utils"

// Builders
export { buildArticle } from "@/lib/schema/article"
export {
  buildArticleImageObject,
  getArticleFeaturedImagePath,
  resolveArticleFeaturedImageUrl,
} from "@/lib/schema/article-images"
export {
  buildDefaultArticleAuthor,
  buildResourceArticleSchema,
  buildResourceArticleSchemaGraph,
  toArticleInputFromResourceArticle,
} from "@/lib/schema/article-schema"
export type { ResourceArticleSchemaGraphInput } from "@/lib/schema/article-schema"
export type { ArticleAuthorInput } from "@/lib/schema/types"
export { buildBreadcrumbList } from "@/lib/schema/breadcrumb"
export { buildBreadcrumbSchemaGraph } from "@/lib/schema/breadcrumb-schema"
export {
  buildFaqAnswer,
  buildFaqPage,
  buildFaqQuestion,
} from "@/lib/schema/faq"
export type { BuildFaqPageOptions } from "@/lib/schema/faq"
export {
  buildFaqSchemaGraph,
  buildHomepageFaqSchemaGraph,
  buildResourceArticleFaqSchemaGraph,
  buildVisaPageFaqSchemaGraph,
  normalizeFaqItems,
} from "@/lib/schema/faq-schema"
export type {
  FaqSchemaGraphInput,
  HomepageFaqSchemaInput,
  ResourceArticleFaqSchemaInput,
  VisaPageFaqSchemaInput,
} from "@/lib/schema/faq-schema"
export { buildLocalBusiness } from "@/lib/schema/local-business"
export {
  buildOrganization,
  buildOrganizationReference,
} from "@/lib/schema/organization"
export {
  buildAggregateRating,
  buildEntityWithReviews,
  buildReview,
} from "@/lib/schema/review"
export type { EntityWithReviewsInput } from "@/lib/schema/review"
export { buildService } from "@/lib/schema/service"
export {
  buildCollectionPage,
  buildItemList,
  buildWebPage,
  buildWebSite,
} from "@/lib/schema/web"

// Graph composers
export {
  buildArticlePageSchemaGraph,
  buildPageSchemaGraph,
} from "@/lib/schema/graph"
export type {
  BuildArticlePageSchemaInput,
  BuildPageSchemaInput,
} from "@/lib/schema/graph"

// React
export { JsonLdScript } from "@/lib/schema/json-ld-script"
export { FaqJsonLd } from "@/components/seo/faq-json-ld"
export type { FaqJsonLdProps } from "@/components/seo/faq-json-ld"
export { ArticleJsonLd } from "@/components/seo/article-json-ld"
export type { ArticleJsonLdProps } from "@/components/seo/article-json-ld"
export { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld"

export {
  getResourceArticleBreadcrumbs,
  getVisaPageBreadcrumbs,
  breadcrumbsToSchemaItems,
} from "@/lib/breadcrumbs"
export type { BreadcrumbLink } from "@/lib/breadcrumbs"

// ---------------------------------------------------------------------------
// Backward compatibility — article content pipeline
// ---------------------------------------------------------------------------

export {
  buildArticlePageSchemaGraph as buildArticleJsonLdGraph,
} from "@/lib/schema/graph"

export type { BuildArticlePageSchemaInput as BuildArticleJsonLdInput } from "@/lib/schema/graph"
export type { JsonLdNode as ContentJsonLdNode } from "@/lib/schema/types"
