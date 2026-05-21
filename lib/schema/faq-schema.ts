import { buildFaqPage } from "@/lib/schema/faq"
import { buildJsonLdGraph } from "@/lib/schema/utils"
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
  })

  if (!node) return null
  return buildJsonLdGraph([node])
}

// -----------------------------------------------------------------------------
// Page presets — homepage, visa pages, resource articles
// -----------------------------------------------------------------------------

export type HomepageFaqSchemaInput = {
  items: ReadonlyArray<FaqItemInput | VisaFaqItem>
  description?: string
}

export function buildHomepageFaqSchemaGraph(
  input: HomepageFaqSchemaInput,
): JsonLdGraphDocument | null {
  return buildFaqSchemaGraph({
    items: input.items,
    name: "Thailand visa FAQ",
    path: "/",
    description:
      input.description ??
      "Frequently asked questions about Thailand visas, processing times, and how we support applicants.",
  })
}

export type VisaPageFaqSchemaInput = {
  visaTitle: string
  path: string
  items: ReadonlyArray<VisaFaqItem>
  description?: string
}

export function buildVisaPageFaqSchemaGraph(
  input: VisaPageFaqSchemaInput,
): JsonLdGraphDocument | null {
  return buildFaqSchemaGraph({
    items: input.items,
    name: `${input.visaTitle} FAQ`,
    path: input.path,
    description:
      input.description ??
      `Common questions about ${input.visaTitle} requirements, timelines, and application support.`,
  })
}

export type ResourceArticleFaqSchemaInput = {
  title: string
  path: string
  items: ReadonlyArray<VisaFaqItem>
  description?: string
}

export function buildResourceArticleFaqSchemaGraph(
  input: ResourceArticleFaqSchemaInput,
): JsonLdGraphDocument | null {
  return buildFaqSchemaGraph({
    items: input.items,
    name: `${input.title} — FAQ`,
    path: input.path,
    description:
      input.description ??
      `Answers to common questions about ${input.title.toLowerCase()}.`,
  })
}
