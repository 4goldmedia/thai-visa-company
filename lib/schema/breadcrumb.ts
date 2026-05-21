import type { BreadcrumbItem, JsonLdNode } from "@/lib/schema/types"
import { compactNode, toAbsoluteUrl } from "@/lib/schema/utils"

export function buildBreadcrumbList(
  items: ReadonlyArray<BreadcrumbItem>,
): JsonLdNode | null {
  if (items.length === 0) return null

  return compactNode({
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  })
}
