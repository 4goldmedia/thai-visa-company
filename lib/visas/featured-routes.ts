import type { VisaSlug } from "@/lib/visas/types"

/**
 * Single source of truth for visa routes approved for Related Visa Options.
 * Routes must still pass publication checks before rendering.
 */
export const FEATURED_VISA_ROUTES: ReadonlyArray<VisaSlug> = [
  "dtv",
  "retirement",
  "elite",
  "marriage",
  "business",
]

const FEATURED_VISA_ROUTE_SET = new Set<VisaSlug>(FEATURED_VISA_ROUTES)

export function isFeaturedVisaRoute(slug: VisaSlug): boolean {
  return FEATURED_VISA_ROUTE_SET.has(slug)
}
