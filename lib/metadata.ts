/**
 * @deprecated Import from `@/lib/seo` instead.
 * Re-exported for backwards compatibility.
 */
export {
  createPageMetadata,
  defaultTitle,
  getSiteUrl,
  homeMetadata,
  isProductionDeployment,
  resolveCanonicalUrl,
  resolvePageTitle,
  rootMetadata,
  siteKeywords,
  titleTemplate,
  viewport,
  type PageSeoInput,
  type PageTitle,
  type SiteKeyword,
} from "@/lib/seo"

export type { PageSeoInput as PageMetadataInput } from "@/lib/seo"
