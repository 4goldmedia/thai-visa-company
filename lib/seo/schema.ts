/**
 * JSON-LD schema automation  -  single entry for structured data.
 *
 * Integrates:
 * - `lib/site/config.ts`  -  brand, contact, location (via `platformBusinessProfile`)
 * - `lib/seo/helpers.ts`  -  canonical URLs (`getSiteUrl`, `toAbsoluteUrl`)
 *
 * @example
 * import { buildVisaPageSchemaGraph, JsonLdScript } from "@/lib/seo/schema"
 *
 * <JsonLdScript data={buildVisaPageSchemaGraph(visa)} id={`schema-visa-${visa.slug}`} />
 */

import { homepageAiCopy } from "@/lib/seo/ai-search"
import { siteBrand } from "@/lib/site/config"
import { buildBreadcrumbList } from "@/lib/schema/breadcrumb"
import {
  buildFaqSchemaGraph,
} from "@/lib/schema/faq-schema"
import { buildPageSchemaGraph } from "@/lib/schema/graph"
import { buildService } from "@/lib/schema/service"
import {
  buildCollectionPage,
  buildItemList,
  buildWebPage,
  buildWebSite,
} from "@/lib/schema/web"
import type {
  ArticleInput,
  BreadcrumbItem,
  FaqItemInput,
  JsonLdGraphDocument,
  JsonLdNode,
  JsonLdSingleDocument,
  ServiceInput,
  WebPageInput,
} from "@/lib/schema/types"

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export { SCHEMA_CONTEXT } from "@/lib/schema/types"
export type {
  AggregateRatingInput,
  ArticleAuthorInput,
  ArticleInput,
  BreadcrumbItem,
  ContactPointInput,
  FaqItemInput,
  JsonLdEntityRef,
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

// -----------------------------------------------------------------------------
// Utilities  -  absolute URLs from site config + SEO helpers
// -----------------------------------------------------------------------------

export {
  buildJsonLdDocument,
  buildJsonLdGraph,
  compactNode,
  serializeJsonLd,
  toAbsoluteUrl,
} from "@/lib/schema/utils"

// -----------------------------------------------------------------------------
// Entity registry  -  stable `@id` anchors from site origin
// -----------------------------------------------------------------------------

export {
  getDefaultLocalBusinessInput,
  getDefaultOrganizationInput,
  getSchemaEntityIds,
} from "@/lib/schema/site"

export {
  getPlatformSameAsUrls,
  googleReviewsUrl,
  platformBusinessProfile,
} from "@/lib/schema/business-profile"

// -----------------------------------------------------------------------------
// Core schema builders
// -----------------------------------------------------------------------------

export { buildContactPoint, buildPlatformContactPoints } from "@/lib/schema/contact"
export { buildOrganization, buildOrganizationReference } from "@/lib/schema/organization"
export { buildLocalBusiness } from "@/lib/schema/local-business"
export {
  buildFaqAnswer,
  buildFaqPage,
  buildFaqQuestion,
} from "@/lib/schema/faq"
export type { BuildFaqPageOptions } from "@/lib/schema/faq"
export { buildArticle } from "@/lib/schema/article"
export {
  buildArticleImageObject,
  getArticleFeaturedImagePath,
  resolveArticleFeaturedImageUrl,
} from "@/lib/schema/article-images"
export { buildBreadcrumbList } from "@/lib/schema/breadcrumb"
export { buildBreadcrumbSchemaGraph } from "@/lib/schema/breadcrumb-schema"
export { buildService } from "@/lib/schema/service"
export {
  buildAggregateRating,
  buildEntityWithReviews,
  buildReview,
} from "@/lib/schema/review"
export type { EntityWithReviewsInput } from "@/lib/schema/review"
export {
  buildCollectionPage,
  buildItemList,
  buildWebPage,
  buildWebSite,
} from "@/lib/schema/web"

// -----------------------------------------------------------------------------
// Graph composers
// -----------------------------------------------------------------------------

export {
  buildArticlePageSchemaGraph,
  buildPageSchemaGraph,
} from "@/lib/schema/graph"
export type {
  BuildArticlePageSchemaInput,
  BuildPageSchemaInput,
} from "@/lib/schema/graph"

// -----------------------------------------------------------------------------
// FAQ automation
// -----------------------------------------------------------------------------

export {
  buildFaqSchemaGraph,
  normalizeFaqItems,
} from "@/lib/schema/faq-schema"
export type { FaqSchemaGraphInput } from "@/lib/schema/faq-schema"

export type HomepageFaqSchemaInput = {
  items: ReadonlyArray<FaqItemInput>
  description?: string
}

export type VisaPageFaqSchemaInput = {
  visaTitle: string
  path: string
  items: ReadonlyArray<FaqItemInput>
  description?: string
}

export type ResourceArticleFaqSchemaInput = {
  title: string
  path: string
  items: ReadonlyArray<FaqItemInput>
  description?: string
}

/** Homepage FAQ  -  branded name and description from site config */
export function buildHomepageFaqSchemaGraph(
  input: HomepageFaqSchemaInput,
): JsonLdGraphDocument | null {
  return buildFaqSchemaGraph({
    items: input.items,
    name: `${siteBrand.name} FAQ`,
    path: "/",
    description:
      input.description ??
      `Frequently asked questions about Thailand visas from ${siteBrand.name}.`,
  })
}

/** Visa page FAQ section */
export function buildVisaPageFaqSchemaGraph(
  input: VisaPageFaqSchemaInput,
): JsonLdGraphDocument | null {
  return buildFaqSchemaGraph({
    items: input.items,
    name: `${input.visaTitle} FAQ`,
    path: input.path,
    description:
      input.description ??
      `Common questions about ${input.visaTitle} requirements, timelines, and application support.`,
  })
}

/** Resource article inline FAQ */
export function buildResourceArticleFaqSchemaGraph(
  input: ResourceArticleFaqSchemaInput,
): JsonLdGraphDocument | null {
  return buildFaqSchemaGraph({
    items: input.items,
    name: `${input.title}: FAQ`,
    path: input.path,
    description:
      input.description ??
      `Answers to common questions about ${input.title.toLowerCase()}.`,
  })
}

// -----------------------------------------------------------------------------
// Article automation (resource guides)
// -----------------------------------------------------------------------------

export {
  buildDefaultArticleAuthor,
  buildResourceArticleSchema,
  buildResourceArticleSchemaGraph,
  toArticleInputFromResourceArticle,
} from "@/lib/content/schema/article"
export type { ResourceArticleSchemaGraphInput } from "@/lib/content/schema/article"

export { buildResourceArticleRouteSchemaGraph } from "@/lib/content/routing/seo"

// -----------------------------------------------------------------------------
// Site-wide business graph (root layout  -  render once)
// -----------------------------------------------------------------------------

import { buildPlatformBusinessSchemaGraph as buildPlatformBusinessSchemaGraphImpl } from "@/lib/schema/business-graph"

export function buildPlatformBusinessSchemaGraph(): JsonLdGraphDocument {
  return buildPlatformBusinessSchemaGraphImpl()
}

/** @alias buildPlatformBusinessSchemaGraph */
export { buildPlatformBusinessSchemaGraph as buildSiteBusinessSchemaGraph }

// -----------------------------------------------------------------------------
// Page-level automation  -  homepage, visas, resources, future routes
// -----------------------------------------------------------------------------

/** Homepage WebSite + WebPage  -  FAQ rendered separately by `FaqSection` */
export function buildHomepageSchemaGraph(): JsonLdGraphDocument {
  return buildPageSchemaGraph({
    nodes: [
      buildWebSite(),
      buildWebPage({
        path: "/",
        name: homepageAiCopy.webPageName,
        description: homepageAiCopy.extractableSummary,
      }),
    ],
  })
}

export {
  buildVisaPageSchemaGraph,
  type VisaPageSchemaGraphInput,
} from "@/lib/visas/schema/visa"

export { buildVisaPageRouteSchemaGraph } from "@/lib/visas/routing/seo"

export type ResourcesIndexSchemaInput = {
  path?: string
  name: string
  description: string
  articles: ReadonlyArray<{ name: string; path: string }>
  breadcrumbs?: ReadonlyArray<BreadcrumbItem>
}

/** Guides index  -  CollectionPage + ItemList + breadcrumbs */
export function buildGuidesIndexSchemaGraph(
  input: ResourcesIndexSchemaInput,
): JsonLdGraphDocument {
  const path = input.path ?? "/guides"

  return buildPageSchemaGraph({
    nodes: [
      buildCollectionPage({
        path,
        name: input.name,
        description: input.description,
      }),
      buildItemList({ items: [...input.articles] }),
      buildBreadcrumbList(
        input.breadcrumbs ?? [
          { name: "Home", path: "/" },
          { name: "Guides", path },
        ],
      ),
    ],
  })
}

/** Blog index  -  CollectionPage + ItemList + breadcrumbs */
export function buildBlogIndexSchemaGraph(
  input: ResourcesIndexSchemaInput,
): JsonLdGraphDocument {
  const path = input.path ?? "/blog"

  return buildPageSchemaGraph({
    nodes: [
      buildCollectionPage({
        path,
        name: input.name,
        description: input.description,
      }),
      buildItemList({ items: [...input.articles] }),
      buildBreadcrumbList(
        input.breadcrumbs ?? [
          { name: "Home", path: "/" },
          { name: "Blog", path },
        ],
      ),
    ],
  })
}

/** @deprecated Use `buildBlogIndexSchemaGraph` */
export function buildResourcesIndexSchemaGraph(
  input: ResourcesIndexSchemaInput,
): JsonLdGraphDocument {
  const path = input.path ?? "/resources"

  return buildPageSchemaGraph({
    nodes: [
      buildCollectionPage({
        path,
        name: input.name,
        description: input.description,
      }),
      buildItemList({ items: [...input.articles] }),
      buildBreadcrumbList(
        input.breadcrumbs ?? [
          { name: "Home", path: "/" },
          { name: "Resources", path },
        ],
      ),
    ],
  })
}

/** Generic marketing page WebPage node */
export function buildMarketingWebPageSchema(input: WebPageInput): JsonLdGraphDocument {
  return buildPageSchemaGraph({
    nodes: [buildWebPage(input)],
  })
}

/** Standalone service node wrapped in a graph */
export function buildServiceSchemaGraph(
  input: ServiceInput,
): JsonLdGraphDocument {
  return buildPageSchemaGraph({
    nodes: [buildService(input)],
  })
}

// -----------------------------------------------------------------------------
// Breadcrumb helper  -  from app breadcrumb presets
// -----------------------------------------------------------------------------

export {
  breadcrumbsToSchemaItems,
  getContactPageBreadcrumbs,
  getResourceArticleBreadcrumbs,
  getVisaPageBreadcrumbs,
} from "@/lib/breadcrumbs"

// -----------------------------------------------------------------------------
// React output
// -----------------------------------------------------------------------------

export { JsonLdScript } from "@/lib/schema/json-ld-script"

// -----------------------------------------------------------------------------
// Backward compatibility aliases
// -----------------------------------------------------------------------------

export {
  buildArticlePageSchemaGraph as buildArticleJsonLdGraph,
} from "@/lib/schema/graph"
export type {
  BuildArticlePageSchemaInput as BuildArticleJsonLdInput,
} from "@/lib/schema/graph"
export type { JsonLdNode as ContentJsonLdNode } from "@/lib/schema/types"
