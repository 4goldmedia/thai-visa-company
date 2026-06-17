import type { ContentJsonLdNode } from "@/lib/schema"
import type { ArticleInput } from "@/lib/schema/types"
import type { ContentTopicId } from "@/lib/content/topics"
import type { VisaSlug } from "@/lib/visas/types"

// -----------------------------------------------------------------------------
// Collections  -  MDX article registry
// -----------------------------------------------------------------------------

export const contentCollectionIds = [
  "resources",
  "guides",
  "blog",
  "visa-guides",
] as const

export type ContentCollectionId = (typeof contentCollectionIds)[number]

/** App Router path segment for an article, e.g. `how-to-get-thailand-retirement-visa` */
export type ContentSlug = string

export type ContentArticlePath = `/${string}`

/** Registry lookup key: `<collection>/<slug>` */
export type ContentArticleKey = `${ContentCollectionId}/${string}`

// -----------------------------------------------------------------------------
// Primitives
// -----------------------------------------------------------------------------

/** ISO calendar date for publish metadata  -  `YYYY-MM-DD` */
export type ContentIsoDate = string

/** Stable id for accordion / FAQ schema (`value` in Radix, FAQPage) */
export type ContentFaqId = string

/** In-page anchor id for MDX headings and table of contents */
export type ContentHeadingId = string

// -----------------------------------------------------------------------------
// SEO  -  shared by visa pages, articles, and index content
// -----------------------------------------------------------------------------

export type ContentSeo = {
  /** Page `<title>` segment or absolute title */
  title: string
  /** Meta description, Open Graph, and JSON-LD description */
  description: string
  keywords?: ReadonlyArray<string>
  /** Social title override */
  ogTitle?: string
  /** Social description override */
  ogDescription?: string
  /** When true, metadata helpers set noindex */
  noIndex?: boolean
}

/** Minimal SEO block for visa landing pages (no OG overrides by default) */
export type ContentVisaPageSeo = Pick<
  ContentSeo,
  "title" | "description" | "keywords"
>

// -----------------------------------------------------------------------------
// FAQ  -  visible UI + FAQPage JSON-LD (must match)
// -----------------------------------------------------------------------------

export type ContentFaqItem = {
  value: ContentFaqId
  question: string
  answer: string
}

export type ContentFaqSection = {
  title?: string
  description?: string
  eyebrow?: string
  items: ReadonlyArray<ContentFaqItem>
}

// -----------------------------------------------------------------------------
// Related content & navigation links
// -----------------------------------------------------------------------------

export type ContentRelatedLink = {
  category: string
  title: string
  description: string
  href: string
}

/** @alias ContentRelatedLink  -  used by `RelatedResources` section */
export type RelatedResourceItem = ContentRelatedLink

export type ContentRelatedSection = {
  title?: string
  description?: string
  eyebrow?: string
  items: ReadonlyArray<ContentRelatedLink>
  /** Link to resources index or hub */
  indexHref?: string
}

// -----------------------------------------------------------------------------
// CTA blocks  -  article sidebars and closing sections
// -----------------------------------------------------------------------------

export type ContentCta = {
  title: string
  description: string
  eyebrow?: string
  footnote?: string
  /** When true, MDX may render a mid-article consultation CTA */
  midArticle?: boolean
}

// -----------------------------------------------------------------------------
// Featured image  -  MDX / schema placeholders
// -----------------------------------------------------------------------------

/**
 * Featured image path under `public/`, e.g. `/images/articles/<slug>.jpg`.
 * Omit to use the per-slug placeholder pattern in JSON-LD.
 */
export type ContentFeaturedImage = string

type ContentArticleSchemaType = NonNullable<ArticleInput["type"]>

export type ContentArticleSchema = {
  primaryType?: ContentArticleSchemaType
  featuredImage?: ContentFeaturedImage
  additionalNodes?: ReadonlyArray<ContentJsonLdNode>
}

// -----------------------------------------------------------------------------
// Publishable document base
// -----------------------------------------------------------------------------

export type ContentPublishable = {
  slug: ContentSlug
  title: string
  description: string
  publishedAt: ContentIsoDate
  updatedAt?: ContentIsoDate
  published: boolean
}

// -----------------------------------------------------------------------------
// MDX article frontmatter (collection meta)
// -----------------------------------------------------------------------------

export type ContentArticleTocItem = {
  id: string
  label: string
}

/** Article byline  -  maps to Person or Organization in JSON-LD */
export type ContentArticleAuthor = {
  name: string
  role?: string
  url?: string
  type?: "Person" | "Organization"
}

/** Optional editorial reviewer for trust signals and schema */
export type ContentArticleReviewedBy = {
  name: string
  url?: string
}

/** External citation for E-E-A-T and sources section */
export type ContentSourceRef = {
  title: string
  href: string
  accessedAt?: string
}

/** Ordered cluster navigation within a named series */
export type ContentArticleSeries = {
  id: string
  title: string
  order: number
}

/**
 * Base metadata every MDX article exports from
 * `content/articles/<collection>/<slug>/meta.ts`.
 */
export type ContentArticleBase = ContentPublishable & {
  collection: ContentCollectionId
  /** Canonical URL path, e.g. `/resources/<slug>` */
  path: ContentArticlePath
  /** Display category, e.g. "Visa guide" */
  category: string
  tags: ReadonlyArray<string>
  seo: ContentSeo
  schema?: ContentArticleSchema
}

export type ContentArticleModule<TMeta extends ContentArticleBase = ContentArticleBase> =
  {
    default: React.ComponentType
    meta: TMeta
  }

export type ContentArticleRegistryEntry<TMeta extends ContentArticleBase> = {
  collection: TMeta["collection"]
  slug: ContentSlug
  load: () => Promise<ContentArticleModule<TMeta>>
}

// -----------------------------------------------------------------------------
// MDX article layout fields (resources, visa guides)
// -----------------------------------------------------------------------------

export type ContentArticleLayoutMeta = {
  eyebrow: string
  lead: string
  headingId: ContentHeadingId
  readingTime?: string
  /** Short AEO answer  -  optional direct response above the lead */
  answer?: string
  /** Byline author  -  optional; defaults to organization in schema */
  author?: ContentArticleAuthor
  /** Editorial reviewer  -  optional; surfaced in byline and JSON-LD */
  reviewedBy?: ContentArticleReviewedBy
  /** Hero image path under `public/`  -  falls back to schema.featuredImage */
  heroImage?: ContentFeaturedImage
  /** Semantic cluster  -  drives related linking and series fallback */
  topicId?: ContentTopicId
  /** Explicit visa pillar for contextual linking */
  pillarSlug?: VisaSlug
  /** External sources rendered in a Sources section */
  sources?: ReadonlyArray<ContentSourceRef>
  /** Ordered navigation within a named content series */
  series?: ContentArticleSeries
  tableOfContents: ReadonlyArray<ContentArticleTocItem>
  faq: ReadonlyArray<ContentFaqItem>
}

// -----------------------------------------------------------------------------
// Visa landing pages  -  typed content model (data in `lib/visas/content/*`)
// -----------------------------------------------------------------------------

export type ContentVisaProcessStep = {
  step: number
  title: string
  description: string
}

export type ContentVisaKeyFact = {
  label: string
  value: string
  detail?: string
}

export type ContentVisaKeyFactsSection = {
  title?: string
  description?: string
  eyebrow?: string
  items: ReadonlyArray<ContentVisaKeyFact>
}

export type ContentVisaFitList = {
  title?: string
  items: ReadonlyArray<string>
}

export type ContentVisaBestForSection = {
  title?: string
  description?: string
  eyebrow?: string
  goodFit: ContentVisaFitList
  notIdeal: ContentVisaFitList
}

export type ContentVisaComparisonColumn = {
  id: string
  label: string
  href?: string
}

export type ContentVisaComparisonRow = {
  label: string
  cells: ReadonlyArray<string>
}

export type ContentVisaComparisonSection = {
  title?: string
  description?: string
  eyebrow?: string
  columns: ReadonlyArray<ContentVisaComparisonColumn>
  rows: ReadonlyArray<ContentVisaComparisonRow>
  footnote?: string
}

export type ContentVisaChecklistItem = {
  text: string
  note?: string
}

export type ContentVisaChecklistGroup = {
  title: string
  intro?: string
  items: ReadonlyArray<ContentVisaChecklistItem>
}

export type ContentVisaDocumentChecklistSection = {
  title?: string
  description?: string
  eyebrow?: string
  groups: ReadonlyArray<ContentVisaChecklistGroup>
}

/** Pathway-first qualification card  -  "Which category am I?" */
export type ContentVisaQualificationPathway = {
  id: string
  title: string
  description: string
  badge?: string
}

export type ContentVisaDocumentOverviewItem = {
  title: string
  description: string
}

export type ContentVisaRequirementsDocumentsOverview = {
  title: string
  description: string
  items: ReadonlyArray<ContentVisaDocumentOverviewItem>
}

export type ContentVisaRequirementsClarification = {
  title: string
  description: string
  linkLabel: string
  linkHref?: string
}

export type ContentVisaLastReviewed = {
  reviewedBy?: string
}

/** Conversion-focused block  -  replaces off-site application directions on visa pages */
export type ContentVisaGettingStarted = {
  eyebrow?: string
  title: string
  description: string
  buttonLabel?: string
}

/** Visa page final CTA  -  dark premium block on visa pages */
export type ContentVisaFinalCta = ContentCta & {
  headline?: string
  buttonLabel?: string
}

export type ContentVisaPath = `/visas/${string}`

export type ContentVisaPageBase = ContentPublishable & {
  path: ContentVisaPath
  seo: ContentVisaPageSeo
  finalCta: ContentVisaFinalCta
}
