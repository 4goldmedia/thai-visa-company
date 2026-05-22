import { visaPages } from "@/lib/visas/content"
import type { VisaPageContent, VisaSlug } from "@/lib/visas/types"
import { visaSlugs } from "@/lib/visas/types"

/**
 * Visa page registry — single source of truth for all visa landing pages.
 * Add new visas in `lib/visas/content/<slug>.ts` and register here via `visaPages`.
 */
export const visaRegistry = visaPages

export const registeredVisaSlugs = visaSlugs

export function isVisaSlug(value: string): value is VisaSlug {
  return (registeredVisaSlugs as readonly string[]).includes(value)
}

export function getVisaFromRegistry(slug: VisaSlug): VisaPageContent {
  return visaRegistry[slug]
}

export function getRegisteredVisaSlugs(): VisaSlug[] {
  return [...registeredVisaSlugs]
}
