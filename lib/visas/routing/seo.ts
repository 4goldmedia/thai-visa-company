import type { Metadata } from "next"

import { breadcrumbsToSchemaItems, getVisaPageBreadcrumbs } from "@/lib/breadcrumbs"
import { buildVisaPageSchemaGraph } from "@/lib/visas/schema/visa"
import type { VisaPageContent } from "@/lib/visas/types"
import { getDefaultOgImagePath } from "@/lib/site/config"
import { createVisaPageMetadata } from "@/lib/seo"
import {
  buildVisaPageFaqSchemaGraph,
  type VisaPageFaqSchemaInput,
} from "@/lib/seo/schema"
import type { JsonLdGraphDocument } from "@/lib/schema/types"

// -----------------------------------------------------------------------------
// UI breadcrumbs — shared by layout and JSON-LD
// -----------------------------------------------------------------------------

export function getVisaPageRouteBreadcrumbs(
  visa: Pick<VisaPageContent, "hero" | "path">,
) {
  return getVisaPageBreadcrumbs({
    title: visa.hero.title,
    path: visa.path,
  })
}

// -----------------------------------------------------------------------------
// Next.js metadata — canonical URL, Open Graph, site defaults
// -----------------------------------------------------------------------------

export function buildVisaPageMetadata(visa: VisaPageContent): Metadata {
  return createVisaPageMetadata({
    path: visa.path,
    seo: visa.seo,
    image: getDefaultOgImagePath(),
  })
}

// -----------------------------------------------------------------------------
// JSON-LD — WebPage + Service + BreadcrumbList
// -----------------------------------------------------------------------------

export function buildVisaPageRouteSchemaGraph(
  visa: VisaPageContent,
): JsonLdGraphDocument {
  const breadcrumbs = breadcrumbsToSchemaItems(
    getVisaPageRouteBreadcrumbs(visa),
  )

  return buildVisaPageSchemaGraph({ visa, breadcrumbs })
}

/** FAQ graph for visa pages — used by `FaqSection` */
export function buildVisaPageRouteFaqSchemaGraph(
  input: VisaPageFaqSchemaInput,
): JsonLdGraphDocument | null {
  return buildVisaPageFaqSchemaGraph(input)
}
