/**
 * Site & brand configuration  -  `lib/site/config.ts` is the single source of truth.
 *
 * @example
 * import { siteBrand, siteMetadata, getSiteOrigin } from "@/lib/site"
 */

export {
  getCanonicalSiteUrl,
  getDefaultDocumentTitle,
  getDefaultOgImagePath,
  getDefaultOgImageUrl,
  getSiteContactPhone,
  getSiteOrigin,
  getSiteSocialUrls,
  getSiteSupportEmail,
  getSiteUrlObject,
  getTitleTemplate,
  siteBrand,
  siteConfig,
  siteContact,
  siteContactDefaults,
  siteLocale,
  siteLocation,
  siteMetadata,
  siteSocial,
  siteSocialPlaceholders,
  siteUrls,
} from "@/lib/site/config"

export type {
  SiteBrand,
  SiteConfig,
  SiteKeyword,
  SiteLocale,
  SiteLocation,
  SiteMetadata,
  SiteSocialPlaceholders,
  SiteUrls,
} from "@/lib/site/config"

export {
  getDefaultSiteOrigin,
  readContactEmailEnv,
  readContactPhoneEnv,
  readDefaultOgImagePathEnv,
  readGoogleReviewsUrlEnv,
  readSiteOriginEnv,
  readTwitterHandleEnv,
} from "@/lib/site/env"

export {
  CANONICAL_PRODUCTION_HOST,
  CANONICAL_PRODUCTION_ORIGIN,
  WWW_PRODUCTION_HOST,
  normalizeSiteOrigin,
} from "@/lib/site/origin"
