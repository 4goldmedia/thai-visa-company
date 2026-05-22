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

export type { VisaPageContent, VisaSlug }
