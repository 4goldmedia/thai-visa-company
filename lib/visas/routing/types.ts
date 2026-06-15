import type { Metadata } from "next"

import type { CtaLinkOpportunity } from "@/lib/content/related"
import type { ContentRelatedLink } from "@/lib/content/types"
import type { BreadcrumbLink } from "@/lib/breadcrumbs/types"
import type { VisaPageContent } from "@/lib/visas/types"

export type VisaPageRouteParams = {
  slug: string
}

export type VisaPageStaticParam = VisaPageRouteParams

/**
 * Full page context for visa routes — content, SEO metadata, breadcrumbs, related visas.
 * Cached per request via `resolveVisaPageContext`.
 */
export type ResolvedVisaPageContext = {
  visa: VisaPageContent
  metadata: Metadata
  breadcrumbs: ReadonlyArray<BreadcrumbLink>
  relatedVisas: ReadonlyArray<ContentRelatedLink>
  /** Registry-ranked guides related to this visa (visa → article) */
  relatedArticles: ReadonlyArray<ContentRelatedLink>
  /** Manual + ranked resource guides, filtered to published articles only */
  resourceGuideItems: ReadonlyArray<ContentRelatedLink>
  ctaLinks: ReadonlyArray<CtaLinkOpportunity>
}
