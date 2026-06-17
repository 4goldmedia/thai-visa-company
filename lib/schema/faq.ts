import { siteLocale } from "@/lib/site"
import { toAbsoluteUrl } from "@/lib/schema/utils"
import type { FaqItemInput, JsonLdEntityRef, JsonLdNode } from "@/lib/schema/types"

export type BuildFaqPageOptions = {
  /** Human-readable name for the FAQ collection */
  name?: string
  /** Short summary for AI/search context */
  description?: string
  /** Canonical page URL this FAQ belongs to */
  path?: string
  inLanguage?: string
  /** Link this FAQPage to a WebPage or Article in the same graph */
  about?: JsonLdEntityRef | JsonLdNode
}

export function buildFaqQuestion(item: FaqItemInput): JsonLdNode {
  return {
    "@type": "Question",
    name: item.question,
    acceptedAnswer: buildFaqAnswer(item),
  }
}

export function buildFaqAnswer(item: FaqItemInput): JsonLdNode {
  return {
    "@type": "Answer",
    text: item.answer,
  }
}

/**
 * Schema.org FAQPage  -  use when on-page FAQ content matches `items` exactly.
 * Returns `null` when there are no items (avoids empty graphs).
 */
export function buildFaqPage(
  items: ReadonlyArray<FaqItemInput>,
  options: BuildFaqPageOptions = {},
): JsonLdNode | null {
  if (items.length === 0) return null

  const pageUrl = options.path ? toAbsoluteUrl(options.path) : undefined

  return {
    "@type": "FAQPage",
    ...(options.name ? { name: options.name } : {}),
    ...(options.description ? { description: options.description } : {}),
    ...(pageUrl ? { url: pageUrl } : {}),
    inLanguage: options.inLanguage ?? siteLocale.html,
    ...(options.about ? { about: options.about } : {}),
    ...(pageUrl
      ? {
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": pageUrl,
          },
        }
      : {}),
    mainEntity: items.map(buildFaqQuestion),
  }
}
