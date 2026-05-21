import type { BreadcrumbItem } from "@/lib/schema/types"
import type { BreadcrumbLink } from "@/lib/breadcrumbs/types"

/** Map UI breadcrumbs to schema.org `BreadcrumbList` items */
export function breadcrumbsToSchemaItems(
  items: ReadonlyArray<BreadcrumbLink>,
): BreadcrumbItem[] {
  return items.map((item) => ({
    name: item.label,
    path: item.href,
  }))
}
