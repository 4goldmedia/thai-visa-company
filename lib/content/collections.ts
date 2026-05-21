import type { ContentCollectionId } from "@/lib/content/types"

export type ContentCollectionConfig = {
  id: ContentCollectionId
  label: string
  /** URL prefix without trailing slash, e.g. `/resources` */
  pathPrefix: `/${string}`
  /** App Router segment for dynamic pages (future visa-guides route) */
  appRoute: string
}

export const contentCollections = {
  resources: {
    id: "resources",
    label: "Resources",
    pathPrefix: "/resources",
    appRoute: "resources",
  },
  "visa-guides": {
    id: "visa-guides",
    label: "Visa guides",
    pathPrefix: "/visas/guides",
    appRoute: "visas/guides",
  },
} as const satisfies Record<ContentCollectionId, ContentCollectionConfig>

export function getCollectionConfig(
  collection: ContentCollectionId,
): ContentCollectionConfig {
  return contentCollections[collection]
}

export function getArticlePath(
  collection: ContentCollectionId,
  slug: string,
): `${ContentCollectionConfig["pathPrefix"]}/${string}` {
  const { pathPrefix } = getCollectionConfig(collection)
  return `${pathPrefix}/${slug}`
}

export function toContentArticleKey(
  collection: ContentCollectionId,
  slug: string,
): `${ContentCollectionId}/${string}` {
  return `${collection}/${slug}`
}
