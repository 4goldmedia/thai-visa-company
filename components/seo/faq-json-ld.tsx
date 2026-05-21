import {
  buildFaqSchemaGraph,
  normalizeFaqItems,
} from "@/lib/schema/faq-schema"
import { JsonLdScript } from "@/lib/schema/json-ld-script"
import type { FaqItemInput } from "@/lib/schema/types"
import type { VisaFaqItem } from "@/lib/visas/types"

export type FaqJsonLdProps = {
  /** FAQ copy — must match visible accordion content on the page */
  items: ReadonlyArray<FaqItemInput | VisaFaqItem>
  /** Schema.org FAQPage name */
  name: string
  /** App path for canonical FAQ context, e.g. `/` or `/visas/retirement` */
  path: string
  description?: string
  /** Optional script id when multiple FAQ blocks exist (rare) */
  id?: string
}

/**
 * Renders FAQPage JSON-LD for a single FAQ section.
 * Mount next to the FAQ UI so structured data matches visible Q&A.
 */
function FaqJsonLd({ items, name, path, description, id = "schema-faq" }: FaqJsonLdProps) {
  const normalized = normalizeFaqItems(items)
  if (normalized.length === 0) return null

  const graph = buildFaqSchemaGraph({ items: normalized, name, path, description })
  if (!graph) return null

  return <JsonLdScript data={graph} id={id} />
}

export { FaqJsonLd }
