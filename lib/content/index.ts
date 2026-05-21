export { resourceMetaToIndexCard } from "@/lib/content/adapters"
export {
  defineResourceArticle,
  toResourceArticlePageProps,
} from "@/lib/content/articles/resources"
export type {
  ResourceArticleDefinition,
  ResourceArticleIndexMeta,
  ResourceArticleMeta,
  ResourceArticleModule,
  ResourceArticlePageContent,
  ResourceArticlePageProps,
} from "@/lib/content/articles/resources"
export {
  defineVisaGuideArticle,
  toVisaGuideArticlePageProps,
} from "@/lib/content/articles/visa-guides"
export type { VisaGuideArticleMeta } from "@/lib/content/articles/visa-guides"
export {
  contentCollections,
  getArticlePath,
  getCollectionConfig,
  toContentArticleKey,
} from "@/lib/content/collections"
export {
  getPublishedKeysForCollection,
  getPublishedPathsForCollection,
  getRegistryKeysForCollection,
  loadContentArticle,
  loadContentArticleBySlug,
  parseContentArticleKey,
  registeredContentArticleKeys,
} from "@/lib/content/registry"
export type { RegisteredContentArticleKey } from "@/lib/content/registry"
export { defineContentSeo, toArticleLayoutMetadata } from "@/lib/content/schema"
export { buildArticleJsonLdGraph } from "@/lib/content/schema/json-ld"
export type {
  BuildArticleJsonLdInput,
  ContentArticleSchemaType,
  ContentJsonLdNode,
} from "@/lib/content/schema/json-ld"
export {
  contentCollectionIds,
} from "@/lib/content/types"
export type {
  ContentArticleBase,
  ContentArticleKey,
  ContentArticleModule,
  ContentArticlePath,
  ContentArticleRegistryEntry,
  ContentArticleSchema,
  ContentArticleTocItem,
  ContentCollectionId,
  ContentSeo,
} from "@/lib/content/types"

/** Alias used by resource article templates */
export type { ContentArticleTocItem as ResourceArticleTocItem } from "@/lib/content/types"

// -----------------------------------------------------------------------------
// Resources collection shortcuts
// -----------------------------------------------------------------------------

export {
  getPublishedKeysForCollection as getPublishedResourceArticleKeys,
} from "@/lib/content/registry"

import type { ResourceArticleModule } from "@/lib/content/articles/resources"

export async function loadResourceContentArticle(
  slug: string,
): Promise<ResourceArticleModule | null> {
  const { loadContentArticleBySlug } = await import("@/lib/content/registry")
  const mod = await loadContentArticleBySlug("resources", slug)
  if (!mod || mod.meta.collection !== "resources") return null
  return mod as ResourceArticleModule
}

export async function getPublishedResourceArticlePaths(): Promise<string[]> {
  const { getPublishedPathsForCollection } = await import("@/lib/content/registry")
  return getPublishedPathsForCollection("resources")
}

export async function getPublishedResourceArticleSlugs(): Promise<string[]> {
  const { getPublishedKeysForCollection } = await import("@/lib/content/registry")
  const keys = await getPublishedKeysForCollection("resources")
  return keys
    .map((key) => String(key).split("/")[1] ?? "")
    .filter(Boolean)
}
