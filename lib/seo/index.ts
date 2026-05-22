/**
 * SEO metadata system — helpers consume `lib/site/config.ts` for brand and URLs.
 *
 * @example
 * import { createPageMetadata, createVisaPageMetadata, homeMetadata } from "@/lib/seo"
 */

export {
  buildOpenGraph,
  buildOpenGraphImages,
  buildRobots,
  buildSocialMetadata,
  buildTwitterCard,
  createArticlePageMetadata,
  createHomeMetadata,
  createPageMetadata,
  createRootMetadata,
  createVisaPageMetadata,
  defaultTitle,
  getSiteUrl,
  homeMetadata,
  isProductionDeployment,
  mergePageKeywords,
  resolveCanonicalUrl,
  resolveCanonicalUrlString,
  resolveOgImageUrl,
  resolvePageDescription,
  resolvePageTitle,
  rootMetadata,
  siteKeywords,
  titleTemplate,
} from "@/lib/seo/helpers"

export type { SiteKeyword } from "@/lib/seo/helpers"

export type {
  ArticlePageMetadataInput,
  OpenGraphBuildOptions,
  PageMetadataInput,
  PageTitle,
  RobotsOptions,
  SocialMetadataContext,
  VisaPageMetadataInput,
} from "@/lib/seo/types"

/** @alias PageMetadataInput */
export type { PageMetadataInput as PageSeoInput } from "@/lib/seo/types"

export { viewport } from "@/lib/metadata/viewport"

export * from "@/lib/seo/schema"

export {
  aiSearchEntity,
  contactAiCopy,
  defaultExtractableDescription,
  getHomepageDocumentTitle,
  homepageAiCopy,
} from "@/lib/seo/ai-search"
