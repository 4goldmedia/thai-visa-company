import { homeBreadcrumb } from "@/lib/breadcrumbs/presets"
import type { BreadcrumbLink } from "@/lib/breadcrumbs/types"
import { movingPageContent, movingPagePath } from "@/lib/moving/content"

export function getMovingPageBreadcrumbs(): BreadcrumbLink[] {
  return [
    homeBreadcrumb,
    {
      label: "Moving to Thailand",
      href: movingPagePath,
    },
  ]
}

export function getMovingPageMetadataInput() {
  const { seo } = movingPageContent

  return {
    title: seo.title,
    description: seo.description,
    path: movingPagePath,
    keywords: seo.keywords,
  }
}
