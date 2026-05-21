import type { Metadata, Viewport } from "next"

import { siteConfig } from "@/lib/site"

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

/** Page title — strings use the root template; `absolute` bypasses it */
export type PageTitle = string | { absolute: string }

export type PageSeoInput = {
  title: PageTitle
  /** Defaults to `siteConfig.defaultDescription` */
  description?: string
  /** App Router path for canonical + Open Graph URL, e.g. `/visas/business` */
  path: string
  /** Merged with site defaults — keep short and page-specific */
  keywords?: string[]
  /** Set on drafts, thank-you pages, or internal routes */
  noIndex?: boolean
  /** Override default OG/Twitter image for this page only */
  image?: string
}

type SocialMetadataContext = {
  title: string
  description: string
  path: string
  image?: string
}

// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------

/** Focused keywords — extend per page; avoid stuffing */
export const siteKeywords = [
  "Thailand visa",
  "Thai visa support",
  "Thailand visa application",
  "DTV visa Thailand",
  "retirement visa Thailand",
  "visa extension Thailand",
] as const

export type SiteKeyword = (typeof siteKeywords)[number]

/** Default document title (homepage + social fallbacks) */
export const defaultTitle = `${siteConfig.name} — ${siteConfig.tagline}`

/** Root layout title template — `%s` is the page segment */
export const titleTemplate = `%s · ${siteConfig.name}`

const TWITTER_HANDLE = process.env.NEXT_PUBLIC_TWITTER_HANDLE
const DEFAULT_OG_IMAGE_PATH = process.env.NEXT_PUBLIC_OG_IMAGE_PATH

// -----------------------------------------------------------------------------
// URL & environment
// -----------------------------------------------------------------------------

/** Canonical site origin for `metadataBase` and absolute URLs */
export function getSiteUrl(): URL {
  try {
    return new URL(siteConfig.url)
  } catch {
    return new URL("http://localhost:3000")
  }
}

/** Normalize a path and resolve it against the site origin */
export function resolveCanonicalUrl(path: string): URL {
  const normalized = path.startsWith("/") ? path : `/${path}`
  return new URL(normalized, getSiteUrl())
}

export function isProductionDeployment(): boolean {
  return process.env.NODE_ENV === "production"
}

// -----------------------------------------------------------------------------
// Title helpers
// -----------------------------------------------------------------------------

/** Resolve the string used in Open Graph, Twitter, and JSON-LD */
export function resolvePageTitle(title: PageTitle): string {
  return typeof title === "string" ? title : title.absolute
}

// -----------------------------------------------------------------------------
// Internal builders
// -----------------------------------------------------------------------------

function buildRobots(noIndex = false): NonNullable<Metadata["robots"]> {
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

function resolveImageUrl(imagePath?: string): string | undefined {
  const path = imagePath ?? DEFAULT_OG_IMAGE_PATH
  if (!path) return undefined

  return path.startsWith("http")
    ? path
    : new URL(path, getSiteUrl()).toString()
}

function buildOpenGraphImages(imagePath?: string) {
  const imageUrl = resolveImageUrl(imagePath)
  if (!imageUrl) return undefined

  return [
    {
      url: imageUrl,
      width: 1200,
      height: 630,
      alt: `${siteConfig.name} — Thailand visa support`,
    },
  ]
}

function buildOpenGraph({
  title,
  description,
  path,
  image,
}: SocialMetadataContext): NonNullable<Metadata["openGraph"]> {
  const images = buildOpenGraphImages(image)

  return {
    type: "website",
    locale: siteConfig.localeOpenGraph,
    url: resolveCanonicalUrl(path),
    siteName: siteConfig.name,
    title,
    description,
    ...(images ? { images } : {}),
  }
}

function buildTwitterCard({
  title,
  description,
  image,
}: SocialMetadataContext): NonNullable<Metadata["twitter"]> {
  const imageUrl = resolveImageUrl(image)

  return {
    card: imageUrl ? "summary_large_image" : "summary",
    title,
    description,
    ...(TWITTER_HANDLE ? { creator: TWITTER_HANDLE } : {}),
    ...(imageUrl ? { images: [imageUrl] } : {}),
  }
}

function buildSocialMetadata(
  context: SocialMetadataContext,
): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: buildOpenGraph(context),
    twitter: buildTwitterCard(context),
  }
}

// -----------------------------------------------------------------------------
// Metadata factories
// -----------------------------------------------------------------------------

/**
 * Per-route metadata — export from `export const metadata` in App Router pages.
 *
 * @example
 * export const metadata = createPageMetadata({
 *   title: "Business visa",
 *   description: "Support for Thailand business visa applications.",
 *   path: "/visas/business",
 * })
 */
export function createPageMetadata({
  title,
  description = siteConfig.defaultDescription,
  path,
  keywords,
  noIndex = false,
  image,
}: PageSeoInput): Metadata {
  const resolvedTitle = resolvePageTitle(title)

  return {
    title,
    description,
    keywords: keywords ? [...siteKeywords, ...keywords] : undefined,
    alternates: {
      canonical: resolveCanonicalUrl(path),
    },
    robots: buildRobots(noIndex),
    ...buildSocialMetadata({
      title: resolvedTitle,
      description,
      path,
      image,
    }),
  }
}

/** Root layout defaults — no global canonical; each page sets its own */
export const rootMetadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: defaultTitle,
    template: titleTemplate,
  },
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: getSiteUrl() }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "travel",
  keywords: [...siteKeywords],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: buildRobots(),
  ...buildSocialMetadata({
    title: defaultTitle,
    description: siteConfig.defaultDescription,
    path: "/",
  }),
}

/** Homepage — absolute title avoids duplicating the brand via template */
export const homeMetadata = createPageMetadata({
  title: { absolute: defaultTitle },
  description: siteConfig.defaultDescription,
  path: "/",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1c22" },
  ],
}
