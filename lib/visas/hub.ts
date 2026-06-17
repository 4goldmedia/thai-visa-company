import type { VisaPageContent, VisaSlug } from "@/lib/visas/types"
import { VISA_REFERENCE_IMPLEMENTATION_SLUG } from "@/lib/visas/constants"

/**
 * Future `/visas` hub contract  -  not implemented in Phase 1.
 * Navigation and `siteRoutes` hub entry remain unpublished until Phase 2+.
 */
export type VisaHubCard = {
  slug: VisaSlug
  title: string
  description: string
  href: `/visas/${VisaSlug}`
}

export type VisaHubPageContract = {
  path: "/visas"
  title: string
  description: string
  cards: ReadonlyArray<VisaHubCard>
}

export function visaPageToHubCard(
  visa: Pick<VisaPageContent, "slug" | "path" | "hero" | "seo">,
): VisaHubCard {
  return {
    slug: visa.slug,
    href: visa.path,
    title: visa.hero.title,
    description: visa.seo.description,
  }
}

/** Re-export for hub implementations that surface the reference visa */
export { VISA_REFERENCE_IMPLEMENTATION_SLUG }
