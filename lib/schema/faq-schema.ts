import { buildFaqPage } from "@/lib/schema/faq"
import { buildJsonLdGraph, toAbsoluteUrl } from "@/lib/schema/utils"
import type { FaqItemInput, JsonLdGraphDocument } from "@/lib/schema/types"
import type { VisaFaqItem } from "@/lib/visas/types"

// -----------------------------------------------------------------------------
// Normalization — UI `VisaFaqItem` and schema `FaqItemInput` share one shape
// -----------------------------------------------------------------------------

export function normalizeFaqItems(
  items: ReadonlyArray<FaqItemInput | VisaFaqItem>,
): FaqItemInput[] {
  return items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }))
}

export type FaqSchemaGraphInput = {
  items: ReadonlyArray<FaqItemInput | VisaFaqItem>
  name: string
  path: string
  description?: string
  /** Link FAQPage to the main Article on the same page */
  aboutArticle?: boolean
}

/** Standalone FAQPage graph for a single page section */
export function buildFaqSchemaGraph(
  input: FaqSchemaGraphInput,
): JsonLdGraphDocument | null {
  const items = normalizeFaqItems(input.items)
  const node = buildFaqPage(items, {
    name: input.name,
    description: input.description,
    path: input.path,
    ...(input.aboutArticle
      ? { about: { "@id": `${toAbsoluteUrl(input.path)}#article` } }
      : {}),
  })

  if (!node) return null
  return buildJsonLdGraph([node])
}
