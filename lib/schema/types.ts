/**
 * Schema.org JSON-LD types for the Thailand visa platform.
 * Nodes omit `@context` — added by `buildJsonLdGraph`.
 */

export const SCHEMA_CONTEXT = "https://schema.org" as const

export type SchemaContext = typeof SCHEMA_CONTEXT

/** Reference another node in the same graph by `@id` */
export type JsonLdEntityRef = {
  "@id": string
  "@type"?: string | string[]
}

/** Any schema.org entity in a graph */
export type JsonLdNode = {
  "@type"?: string | string[]
  "@id"?: string
  [key: string]: unknown
}

export type JsonLdGraphDocument = {
  "@context": SchemaContext
  "@graph": JsonLdNode[]
}

export type JsonLdSingleDocument = JsonLdNode & {
  "@context": SchemaContext
}

export type BreadcrumbItem = {
  name: string
  /** App path, e.g. `/resources/foo` */
  path: string
}

export type FaqItemInput = {
  question: string
  answer: string
}

export type ReviewItemInput = {
  author: string
  reviewBody: string
  /** 1–5 */
  ratingValue: number
  /** ISO date */
  datePublished?: string
  location?: string
}

export type AggregateRatingInput = {
  ratingValue: number
  reviewCount: number | string
  bestRating?: number
  worstRating?: number
}

export type PostalAddressInput = {
  streetAddress?: string
  addressLocality?: string
  addressRegion?: string
  postalCode?: string
  addressCountry?: string
}

export type GeoCoordinatesInput = {
  latitude: number
  longitude: number
}

export type ContactPointInput = {
  contactType?: string
  telephone?: string
  email?: string
  url?: string
  availableLanguage?: string[]
  areaServed?: string | string[]
  contactOption?: string
}

export type OrganizationInput = {
  name?: string
  description?: string
  /** Short brand line — maps to schema.org `slogan` */
  tagline?: string
  url?: string
  logo?: string
  image?: string
  sameAs?: string[]
  areaServed?: string | string[]
  contactEmail?: string
  contactPoint?: ReadonlyArray<ContactPointInput | JsonLdNode>
  knowsAbout?: string | string[]
  /** e.g. ProfessionalService expertise label */
  serviceType?: string
}

export type LocalBusinessInput = OrganizationInput & {
  telephone?: string
  priceRange?: string
  address?: PostalAddressInput
  geo?: GeoCoordinatesInput
  openingHours?: string[]
  aggregateRating?: AggregateRatingInput
  reviews?: ReadonlyArray<ReviewItemInput>
  /** Google Maps / Business profile URL */
  googleReviewsUrl?: string
}

export type ArticleAuthorInput = {
  name: string
  url?: string
  /** Defaults to Organization */
  type?: "Organization" | "Person"
}

export type ArticleInput = {
  slug?: string
  /** Canonical app path, e.g. `/resources/my-article` */
  path: string
  headline: string
  /** Meta / SEO description */
  description: string
  /** Lead paragraph — maps to `abstract` for AI extraction */
  abstract?: string
  datePublished: string
  dateUpdated?: string
  tags?: string[]
  /** Display category, e.g. Visa guide */
  articleSection?: string
  /** App or absolute path; placeholder resolved in `resolveArticleFeaturedImageUrl` */
  featuredImage?: string
  /** Defaults to Article */
  type?: "Article" | "HowTo" | "TechArticle" | "NewsArticle"
  author?: JsonLdNode | ArticleAuthorInput
  publisher?: JsonLdNode
}

export type ServiceInput = {
  name: string
  description: string
  path: string
  serviceType?: string
  areaServed?: string | string[]
  provider?: JsonLdNode
}

export type WebPageInput = {
  path: string
  name: string
  description: string
}
