import { buildBreadcrumbList } from "@/lib/schema/breadcrumb"
import { buildJsonLdGraph } from "@/lib/schema/utils"
import type { BreadcrumbItem, JsonLdGraphDocument } from "@/lib/schema/types"

export function buildBreadcrumbSchemaGraph(
  items: ReadonlyArray<BreadcrumbItem>,
): JsonLdGraphDocument | null {
  const node = buildBreadcrumbList(items)
  if (!node) return null
  return buildJsonLdGraph([node])
}
