import { platformBusinessProfile } from "@/lib/schema/business-profile"
import { buildBreadcrumbList } from "@/lib/schema/breadcrumb"
import { buildPageSchemaGraph } from "@/lib/schema/graph"
import { buildService } from "@/lib/schema/service"
import { buildWebPage } from "@/lib/schema/web"
import type { BreadcrumbItem, JsonLdGraphDocument } from "@/lib/schema/types"
import type { VisaPageContent } from "@/lib/visas/types"

export type VisaPageSchemaGraphInput = {
  visa: VisaPageContent
  breadcrumbs?: ReadonlyArray<BreadcrumbItem>
}

/**
 * Visa landing page `@graph`  -  WebPage + Service (+ optional BreadcrumbList).
 * FAQ schema is rendered separately via `FaqSection` / `buildVisaPageFaqSchemaGraph`.
 */
export function buildVisaPageSchemaGraph(
  input: VisaPageSchemaGraphInput,
): JsonLdGraphDocument {
  const { visa } = input

  const nodes = [
    buildWebPage({
      path: visa.path,
      name: visa.hero.title,
      description: visa.seo.description,
    }),
    buildService({
      name: visa.hero.title,
      description: visa.seo.description,
      path: visa.path,
      serviceType: platformBusinessProfile.serviceType,
      areaServed: "Thailand",
    }),
  ]

  if (input.breadcrumbs?.length) {
    const crumbs = buildBreadcrumbList(input.breadcrumbs)
    if (crumbs) nodes.push(crumbs)
  }

  return buildPageSchemaGraph({ nodes })
}
