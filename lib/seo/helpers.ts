import type { Metadata } from "next"

import {
  getDefaultDocumentTitle,
  getDefaultOgImagePath,
  getSiteUrlObject,
  getTitleTemplate,
  siteBrand,
  siteMetadata,
  siteLocale,
  siteSocial,
} from "@/lib/site/config"

import {
  getHomepageDocumentTitle,
  homepageAiCopy,
} from "@/lib/seo/ai-search"
import type {
  ArticlePageMetadataInput,
  OpenGraphBuildOptions,
  PageMetadataInput,
  PageTitle,
  RobotsOptions,
  SocialMetadataContext,
  VisaPageMetadataInput,
} from "@/lib/seo/types"

// -----------------------------------------------------------------------------
// Canonical URLs — single resolver tied to `lib/site/config`
// -----------------------------------------------------------------------------

export function getSiteUrl(): URL {
  return getSiteUrlObject()
}

export function resolveCanonicalUrl(path: string): URL {
  const normalized = path.startsWith("/") ? path : `/${path}`
  return new URL(normalized, getSiteUrl())
}

export function resolveCanonicalUrlString(path: string): string {
  return resolveCanonicalUrl(path).toString()
}

// -----------------------------------------------------------------------------
// Titles & descriptions
// -----------------------------------------------------------------------------

export const defaultTitle = getDefaultDocumentTitle()
export const titleTemplate = getTitleTemplate()
export const siteKeywords = siteMetadata.keywords

export type SiteKeyword = (typeof siteKeywords)[number]

export function resolvePageTitle(title: PageTitle): string {
  return typeof title === "string" ? title : title.absolute
}

export function resolvePageDescription(description?: string): string {
  return description ?? siteMetadata.defaultDescription
}

export function mergePageKeywords(
  pageKeywords?: ReadonlyArray<string>,
): string[] | undefined {
  if (!pageKeywords?.length) return undefined
  return [...siteKeywords, ...pageKeywords]
}

// -----------------------------------------------------------------------------
// Open Graph images
// -----------------------------------------------------------------------------

export function resolveOgImageUrl(imagePath?: string): string | undefined {
  const path = imagePath ?? getDefaultOgImagePath()
  if (!path) return undefined

  return path.startsWith("http")
    ? path
    : new URL(path, getSiteUrl()).toString()
}

export function buildOpenGraphImages(imagePath?: string) {
  const imageUrl = resolveOgImageUrl(imagePath)
  if (!imageUrl) return undefined

  return [
    {
      url: imageUrl,
      width: 1200,
      height: 630,
      alt: siteMetadata.openGraphImageAlt,
    },
  ]
}

// -----------------------------------------------------------------------------
// Robots defaults
// -----------------------------------------------------------------------------

export function isProductionDeployment(): boolean {
  return process.env.NODE_ENV === "production"
}

export function buildRobots(options: RobotsOptions = {}): NonNullable<Metadata["robots"]> {
  const { noIndex = false } = options
  const allowIndexing = isProductionDeployment() && !noIndex

  if (!allowIndexing) {
    return { index: false, follow: false }
  }

  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
}

// -----------------------------------------------------------------------------
// Open Graph & Twitter
// -----------------------------------------------------------------------------

export function buildOpenGraph(
  input: OpenGraphBuildOptions,
): NonNullable<Metadata["openGraph"]> {
  const images = buildOpenGraphImages(input.image)

  return {
    type: input.type ?? "website",
    locale: siteLocale.openGraph,
    url: resolveCanonicalUrl(input.path),
    siteName: siteBrand.name,
    title: input.title,
    description: input.description,
    ...(images ? { images } : {}),
    ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
    ...(input.modifiedTime ? { modifiedTime: input.modifiedTime } : {}),
    ...(input.tags?.length ? { tags: input.tags } : {}),
  }
}

export function buildTwitterCard(
  input: SocialMetadataContext,
): NonNullable<Metadata["twitter"]> {
  const imageUrl = resolveOgImageUrl(input.image)

  return {
    card: imageUrl ? "summary_large_image" : "summary",
    title: input.title,
    description: input.description,
    ...(siteSocial.twitterHandle ? { creator: siteSocial.twitterHandle } : {}),
    ...(imageUrl ? { images: [imageUrl] } : {}),
  }
}

export function buildSocialMetadata(
  context: SocialMetadataContext,
): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: buildOpenGraph(context),
    twitter: buildTwitterCard(context),
  }
}

// -----------------------------------------------------------------------------
// Core metadata assembly
// -----------------------------------------------------------------------------

function assemblePageMetadata(input: {
  title: PageTitle
  description: string
  path: string
  keywords?: ReadonlyArray<string>
  noIndex?: boolean
  image?: string
}): Metadata {
  const resolvedTitle = resolvePageTitle(input.title)

  return {
    title: input.title,
    description: input.description,
    keywords: mergePageKeywords(input.keywords),
    alternates: {
      canonical: resolveCanonicalUrl(input.path),
    },
    robots: buildRobots({ noIndex: input.noIndex }),
    ...buildSocialMetadata({
      title: resolvedTitle,
      description: input.description,
      path: input.path,
      image: input.image,
    }),
  }
}

// -----------------------------------------------------------------------------
// Page factories — homepage, visas, articles, future routes
// -----------------------------------------------------------------------------

/** Generic page — contact, resources index, legal, future dynamic routes */
export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
  image,
}: PageMetadataInput): Metadata {
  return assemblePageMetadata({
    title,
    description: resolvePageDescription(description),
    path,
    keywords,
    noIndex,
    image,
  })
}

/** Root layout — `metadataBase`, title template, site-wide defaults */
export function createRootMetadata(): Metadata {
  const description = siteMetadata.defaultDescription

  return {
    metadataBase: getSiteUrl(),
    title: {
      default: defaultTitle,
      template: titleTemplate,
    },
    description,
    applicationName: siteBrand.name,
    authors: [{ name: siteBrand.name, url: getSiteUrl() }],
    creator: siteBrand.name,
    publisher: siteBrand.name,
    category: siteMetadata.category,
    keywords: [...siteKeywords],
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: buildRobots(),
    ...buildSocialMetadata({
      title: defaultTitle,
      description,
      path: "/",
    }),
  }
}

/** Homepage — topic-first title and extractable summary for AI Overviews */
export function createHomeMetadata(): Metadata {
  return createPageMetadata({
    title: { absolute: getHomepageDocumentTitle() },
    description: homepageAiCopy.extractableSummary,
    path: "/",
  })
}

/** Visa landing pages from `lib/visas/content/*` */
export function createVisaPageMetadata(input: VisaPageMetadataInput): Metadata {
  return createPageMetadata({
    title: input.seo.title,
    description: input.seo.description,
    path: input.path,
    keywords: input.seo.keywords,
    image: input.image,
    noIndex: input.noIndex,
  })
}

/** Resource / MDX articles — article Open Graph + published times */
export function createArticlePageMetadata(
  input: ArticlePageMetadataInput,
): Metadata {
  const title = input.seo.ogTitle ?? input.seo.title
  const description = resolvePageDescription(
    input.seo.ogDescription ?? input.seo.description,
  )
  const resolvedTitle = resolvePageTitle(title)

  const base = createPageMetadata({
    title,
    description,
    path: input.path,
    keywords: input.seo.keywords,
    noIndex: input.seo.noIndex,
    image: input.image,
  })

  return {
    ...base,
    openGraph: buildOpenGraph({
      type: "article",
      title: resolvedTitle,
      description,
      path: input.path,
      image: input.image,
      publishedTime: input.publishedAt,
      modifiedTime: input.updatedAt ?? input.publishedAt,
      tags: input.tags ? [...input.tags] : undefined,
    }),
    twitter: base.twitter,
  }
}

// -----------------------------------------------------------------------------
// Prebuilt exports for App Router `export const metadata`
// -----------------------------------------------------------------------------

export const rootMetadata = createRootMetadata()
export const homeMetadata = createHomeMetadata()
