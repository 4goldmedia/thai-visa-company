import { getSchemaEntityIds } from "@/lib/schema/site"
import { buildOrganizationReference } from "@/lib/schema/organization"
import type { JsonLdNode } from "@/lib/schema/types"
import { compactNode, toAbsoluteUrl } from "@/lib/schema/utils"
import type { WebPageInput } from "@/lib/schema/types"
import { siteConfig } from "@/lib/site"
import { getSiteUrl } from "@/lib/seo"

export function buildWebSite(): JsonLdNode {
  const ids = getSchemaEntityIds()
  const origin = getSiteUrl().origin
  const publisher = buildOrganizationReference()

  return compactNode({
    "@type": "WebSite",
    "@id": ids.website,
    name: siteConfig.name,
    url: origin,
    description: siteConfig.defaultDescription,
    inLanguage: siteConfig.locale,
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
    inLanguage: siteConfig.locale,
    isPartOf: {
      "@type": "WebSite",
      "@id": ids.website,
      name: siteConfig.name,
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
