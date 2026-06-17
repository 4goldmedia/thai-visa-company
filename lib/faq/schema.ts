import { buildFaqSchemaGraph } from "@/lib/schema/faq-schema"
import type { FaqRecord } from "@/lib/faq/types"
import type { JsonLdGraphDocument } from "@/lib/schema/types"

/** Future `/faq` and `/faq/topic/*` pages  -  not routed yet */
export function buildFaqHubSchemaGraph(input: {
  name: string
  path: string
  description?: string
  records: ReadonlyArray<FaqRecord>
}): JsonLdGraphDocument | null {
  return buildFaqSchemaGraph({
    name: input.name,
    path: input.path,
    description: input.description,
    items: input.records.map((record) => ({
      question: record.question,
      answer: record.answer,
    })),
  })
}
