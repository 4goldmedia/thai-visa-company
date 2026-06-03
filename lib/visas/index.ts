import {
  getRegisteredVisaSlugs,
  getVisaFromRegistry,
  isVisaSlug,
  registeredVisaSlugs,
  visaRegistry,
} from "@/lib/visas/registry"
import type { VisaPageContent, VisaSlug } from "@/lib/visas/types"

export function getVisaBySlug(slug: string): VisaPageContent | undefined {
  if (!isVisaSlug(slug)) return undefined
  return getVisaFromRegistry(slug)
}

export function getAllVisaSlugs(): VisaSlug[] {
  return getRegisteredVisaSlugs()
}

export function getVisaPath(slug: VisaSlug): `/visas/${VisaSlug}` {
  return `/visas/${slug}`
}

export {
  visaRegistry,
  registeredVisaSlugs as visaSlugs,
  getVisaFromRegistry,
  getRegisteredVisaSlugs,
  isVisaSlug,
}

export { visaPages, visaPageList } from "@/lib/visas/content"
export {
  retirementVisaPage,
  dtvVisaPage,
  eliteVisaPage,
  businessVisaPage,
  educationVisaPage,
} from "@/lib/visas/content"

export {
  buildVisaPageMetadata,
  buildVisaPageRouteFaqSchemaGraph,
  buildVisaPageRouteSchemaGraph,
  getVisaPagePaths,
  getVisaPageRouteBreadcrumbs,
  getVisaPageStaticParams,
  resolveVisaPageContext,
  type ResolvedVisaPageContext,
  type VisaPageRouteParams,
  type VisaPageStaticParam,
} from "@/lib/visas/routing"

export {
  defaultRelatedVisaSlugs,
  resolveRelatedVisas,
  visaToRelatedLink,
} from "@/lib/visas/related"

export { getVisaSectionIds } from "@/lib/visas/section-ids"
export type { VisaSectionIds } from "@/lib/visas/section-ids"

export {
  DEFAULT_VISA_PAGE_LAYOUT,
  resolveVisaPageLayout,
  visaSectionIds,
} from "@/lib/visas/layout"
export type { VisaSectionId } from "@/lib/visas/layout"

export {
  getPublishedVisaSlugs,
  getPublishedVisaPages,
  isVisaPublished,
} from "@/lib/visas/publish"

export { VISA_REFERENCE_IMPLEMENTATION_SLUG } from "@/lib/visas/constants"
export type { VisaHubCard, VisaHubPageContract } from "@/lib/visas/hub"
export { visaPageToHubCard } from "@/lib/visas/hub"

export type { VisaPageContent, VisaSlug }
