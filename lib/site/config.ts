import {
  getDefaultSiteOrigin,
  readContactEmailEnv,
  readContactPhoneEnv,
  readDefaultOgImagePathEnv,
  readGoogleReviewsUrlEnv,
  readSiteOriginEnv,
  readTwitterHandleEnv,
} from "@/lib/site/env"

// -----------------------------------------------------------------------------
// Brand  -  rebrand by editing this block only
// -----------------------------------------------------------------------------

export const siteBrand = {
  name: "Thai Visa Company",
  /** Compact label  -  nav, mobile chrome, constrained UI */
  shortName: "Thai Visa",
  tagline: "Moving to Thailand, handled beautifully.",
} as const

export type SiteBrand = typeof siteBrand

// -----------------------------------------------------------------------------
// Metadata defaults  -  SEO, Open Graph, root layout
// -----------------------------------------------------------------------------

export const siteMetadata = {
  defaultDescription:
    "Trusted Thailand visa support for foreigners. Clear guidance on tourist, business, DTV, and long-stay visas with fast replies on LINE and WhatsApp.",
  category: "travel",
  keywords: [
    "Thailand visa",
    "Thai visa support",
    "Thailand visa application",
    "DTV visa Thailand",
    "retirement visa Thailand",
    "visa extension Thailand",
  ] as const,
  /**
   * Default OG image path (under `public/`) until a branded asset ships.
   * Override per deploy with `NEXT_PUBLIC_OG_IMAGE_PATH`.
   */
  defaultOgImagePath: "/og/default.svg",
  openGraphImageAlt: `${siteBrand.name}: Thailand visa support`,
} as const

export type SiteMetadata = typeof siteMetadata
export type SiteKeyword = (typeof siteMetadata.keywords)[number]

// -----------------------------------------------------------------------------
// Locale
// -----------------------------------------------------------------------------

export const siteLocale = {
  html: "en",
  openGraph: "en_US",
} as const

export type SiteLocale = typeof siteLocale

// -----------------------------------------------------------------------------
// URLs  -  domain changes via env; staging placeholder until production cutover
// -----------------------------------------------------------------------------

export const siteUrls = {
  /** Target production origin  -  set `NEXT_PUBLIC_SITE_URL` in production */
  productionPlaceholder: "https://www.thaivisacompany.com",
  /** Temporary staging / preview origin when env is unset (non-dev) */
  staging: "https://thai-visa-company.vercel.app",
  development: getDefaultSiteOrigin(),
} as const

export type SiteUrls = typeof siteUrls

export function getSiteOrigin(): string {
  const fromEnv = readSiteOriginEnv()
  if (fromEnv) return fromEnv

  if (process.env.NODE_ENV === "development") {
    return siteUrls.development
  }

  return siteUrls.staging
}

export function getCanonicalSiteUrl(): string {
  return getSiteOrigin()
}

export function getSiteUrlObject(): URL {
  try {
    return new URL(getSiteOrigin())
  } catch {
    return new URL(siteUrls.development)
  }
}

/** Absolute default Open Graph image URL */
export function getDefaultOgImagePath(): string {
  return readDefaultOgImagePathEnv() ?? siteMetadata.defaultOgImagePath
}

export function getDefaultOgImageUrl(): string | undefined {
  const path = getDefaultOgImagePath()
  if (!path) return undefined

  return path.startsWith("http")
    ? path
    : new URL(path, getSiteUrlObject()).toString()
}

// -----------------------------------------------------------------------------
// Support contact  -  operational messaging URLs remain in `lib/contact`
// -----------------------------------------------------------------------------

export const siteContactDefaults = {
  supportEmail: "hello@thaivisacompany.com",
  phone: "+66 00 000 0000",
} as const

export function getSiteSupportEmail(): string {
  return readContactEmailEnv() ?? siteContactDefaults.supportEmail
}

export function getSiteContactPhone(): string | undefined {
  return readContactPhoneEnv()
}

export const siteContact = {
  companyName: siteBrand.name,
  get supportEmail() {
    return getSiteSupportEmail()
  },
  get phone() {
    return getSiteContactPhone() ?? siteContactDefaults.phone
  },
} as const

// -----------------------------------------------------------------------------
// Social & messaging placeholders  -  replace via env / contact config at launch
// -----------------------------------------------------------------------------

export const siteSocialPlaceholders = {
  line: "https://line.me",
  whatsapp: "https://wa.me",
  googleReviews: "https://www.google.com/maps",
  twitter: undefined as string | undefined,
  facebook: undefined as string | undefined,
  linkedIn: undefined as string | undefined,
} as const

export type SiteSocialPlaceholders = typeof siteSocialPlaceholders

export function getSiteSocialUrls() {
  return {
    line: siteSocialPlaceholders.line,
    whatsapp: siteSocialPlaceholders.whatsapp,
    twitterHandle: readTwitterHandleEnv() ?? siteSocialPlaceholders.twitter,
    googleReviews:
      readGoogleReviewsUrlEnv() ?? siteSocialPlaceholders.googleReviews,
    facebook: siteSocialPlaceholders.facebook,
    linkedIn: siteSocialPlaceholders.linkedIn,
  } as const
}

export const siteSocial = {
  get twitterHandle() {
    return getSiteSocialUrls().twitterHandle
  },
  get googleReviews() {
    return getSiteSocialUrls().googleReviews
  },
} as const

// -----------------------------------------------------------------------------
// Business location placeholder  -  JSON-LD LocalBusiness / Organization
// -----------------------------------------------------------------------------

export const siteLocation = {
  addressLocality: "Bangkok",
  addressCountry: "TH",
  geo: {
    latitude: 13.7563,
    longitude: 100.5018,
  },
} as const

export type SiteLocation = typeof siteLocation

// -----------------------------------------------------------------------------
// Title helpers
// -----------------------------------------------------------------------------

export function getDefaultDocumentTitle(): string {
  return `${siteBrand.name}: ${siteBrand.tagline}`
}

export function getTitleTemplate(): string {
  return `%s · ${siteBrand.name}`
}

// -----------------------------------------------------------------------------
// Legacy aggregate  -  backward compatible `@/lib/site` imports
// -----------------------------------------------------------------------------

/**
 * @deprecated Prefer `siteBrand`, `siteMetadata`, and `getSiteOrigin()`.
 */
export const siteConfig = {
  name: siteBrand.name,
  shortName: siteBrand.shortName,
  tagline: siteBrand.tagline,
  defaultDescription: siteMetadata.defaultDescription,
  locale: siteLocale.html,
  localeOpenGraph: siteLocale.openGraph,
  get url() {
    return getSiteOrigin()
  },
} as const

export type SiteConfig = {
  readonly name: string
  readonly shortName: string
  readonly tagline: string
  readonly defaultDescription: string
  readonly locale: string
  readonly localeOpenGraph: string
  readonly url: string
}
