import { buildItemList } from "@/lib/schema/web"
import type { ContentVisaDocumentChecklistSection } from "@/lib/content/types"
import { flattenChecklistGroupItems } from "@/lib/visas/checklist-icons"
import type { JsonLdNode } from "@/lib/schema/types"

/** ItemList JSON-LD for pathway document checklists on visa hub pages. */
export function buildVisaChecklistItemList(
  checklist: ContentVisaDocumentChecklistSection,
  path: string,
): JsonLdNode | null {
  const items = checklist.groups.flatMap((group) =>
    flattenChecklistGroupItems(group).map((item) => ({
      name: group.pathwayId
        ? `${group.title}: ${item.text}`
        : item.text,
      path: `${path}#checklist`,
    })),
  )

  if (!items.length) return null

  return buildItemList({ items })
}
