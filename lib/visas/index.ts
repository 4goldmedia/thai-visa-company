import { visaPages, visaPageList } from "@/lib/visas/content"
import { visaSlugs, type VisaPageContent, type VisaSlug } from "@/lib/visas/types"

export function isVisaSlug(value: string): value is VisaSlug {
  return (visaSlugs as readonly string[]).includes(value)
}

export function getVisaBySlug(slug: string): VisaPageContent | undefined {
  if (!isVisaSlug(slug)) return undefined
  return visaPages[slug]
}

export function getAllVisaSlugs(): VisaSlug[] {
  return [...visaSlugs]
}

export function getVisaPath(slug: VisaSlug): `/visas/${VisaSlug}` {
  return `/visas/${slug}`
}

export { visaPages, visaPageList, visaSlugs }
export type { VisaPageContent, VisaSlug }
export { getVisaSectionIds } from "@/lib/visas/section-ids"
export type { VisaSectionIds } from "@/lib/visas/section-ids"
