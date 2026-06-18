import { getSchemaEntityIds } from "@/lib/schema/site"
import { buildOrganizationReference } from "@/lib/schema/organization"
import type { JsonLdNode } from "@/lib/schema/types"
import { compactNode, toAbsoluteUrl } from "@/lib/schema/utils"
import type { WebPageInput } from "@/lib/schema/types"
import { siteBrand, siteLocale, siteMetadata } from "@/lib/site"
import { getSiteUrl } from "@/lib/seo"

export function buildWebSite(): JsonLdNode {
  const ids = getSchemaEntityIds()
  const origin = getSiteUrl().origin
  const publisher = buildOrganizationReference()

  return compactNode({
    "@type": "WebSite",
    "@id": ids.website,
    name: siteBrand.name,
    url: origin,
    description: siteMetadata.defaultDescription,
    inLanguage: siteLocale.html,
    publisher,
  })
}

export function buildWebPage(input: WebPageInput): JsonLdNode {
  const ids = getSchemaEntityIds()
  const pageUrl = toAbsoluteUrl(input.path)

  return compactNode({
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: pageUrl,
    inLanguage: siteLocale.html,
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
    ...(input.author
      ? {
          author: {
            "@type": input.author.type ?? "Organization",
            name: input.author.name,
            ...(input.author.url ? { url: input.author.url } : {}),
          },
        }
      : {}),
    ...(input.reviewedBy
      ? {
          reviewedBy: {
            "@type": input.reviewedBy.type ?? "Person",
            name: input.reviewedBy.name,
            ...(input.reviewedBy.url ? { url: input.reviewedBy.url } : {}),
          },
        }
      : {}),
    ...(input.speakableSelectors?.length
      ? {
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: input.speakableSelectors,
          },
        }
      : {}),
    isPartOf: {
      "@type": "WebSite",
      "@id": ids.website,
      name: siteBrand.name,
      url: getSiteUrl().origin,
    },
  })
}

export function buildCollectionPage(input: {
  path: string
  name: string
  description: string
}): JsonLdNode {
  return compactNode({
    ...buildWebPage({
      path: input.path,
      name: input.name,
      description: input.description,
    }),
    "@type": "CollectionPage",
  })
}

export function buildItemList(input: {
  items: ReadonlyArray<{ name: string; path: string }>
}): JsonLdNode | null {
  if (input.items.length === 0) return null

  return compactNode({
    "@type": "ItemList",
    itemListElement: input.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: toAbsoluteUrl(item.path),
    })),
  })
}
