// -----------------------------------------------------------------------------
// Collections
// -----------------------------------------------------------------------------

export const contentCollectionIds = ["resources", "visa-guides"] as const

export type ContentCollectionId = (typeof contentCollectionIds)[number]

// -----------------------------------------------------------------------------
// SEO
// -----------------------------------------------------------------------------

import type { ContentJsonLdNode } from "@/lib/schema"
import type { ArticleInput } from "@/lib/schema/types"

type ContentArticleSchemaType = NonNullable<ArticleInput["type"]>

export type ContentSeo = {
  /** Page `<title>` and JSON-LD headline (can match `title`) */
  title: string
  /** Meta description and social preview copy */
  description: string
  keywords?: string[]
  ogTitle?: string
  ogDescription?: string
  /** When true, sets noindex on the page */
  noIndex?: boolean
}

/** Optional structured data extensions per article */
export type ContentArticleSchema = {
  primaryType?: ContentArticleSchemaType
  /**
   * Featured image path under `public/`, e.g. `/images/articles/<slug>.jpg`.
   * When omitted, schema uses the per-slug placeholder pattern.
   */
  featuredImage?: string
  additionalNodes?: ReadonlyArray<ContentJsonLdNode>
}

// -----------------------------------------------------------------------------
// Shared article frontmatter
// -----------------------------------------------------------------------------

/**
 * Base metadata every article exports from `content/articles/<collection>/<slug>/meta.ts`.
 * Collection-specific types extend this shape.
 */
export type ContentArticleBase = {
  collection: ContentCollectionId
  slug: string
  title: string
  description: string
  /** ISO date — `YYYY-MM-DD` */
  publishedAt: string
  /** ISO date — `YYYY-MM-DD` */
  updatedAt?: string
  /** Display category, e.g. "Visa guide" */
  category: string
  tags: string[]
  published: boolean
  seo: ContentSeo
  /** Optional schema.org extensions for JSON-LD `@graph` */
  schema?: ContentArticleSchema
}

export type ContentArticlePath = `/${string}`

export type ContentArticleTocItem = {
  id: string
  label: string
}

export type ContentArticleModule<TMeta extends ContentArticleBase = ContentArticleBase> =
  {
    default: React.ComponentType
    meta: TMeta
  }

/** Registry lookup key: `<collection>/<slug>` */
export type ContentArticleKey = `${ContentCollectionId}/${string}`

export type ContentArticleRegistryEntry<TMeta extends ContentArticleBase> = {
  collection: TMeta["collection"]
  slug: string
  load: () => Promise<ContentArticleModule<TMeta>>
}
