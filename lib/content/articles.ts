/**
 * Article collection API — registry lookups, grouping, sorting, and related articles.
 *
 * Register new MDX articles in `lib/content/registry.ts` only.
 */

import { resourceMetaToIndexCard } from "@/lib/content/adapters"
import type { ResourceArticleMeta } from "@/lib/content/collections/resources"
import {
  contentCollections,
  getCollectionConfig,
  toContentArticleKey,
} from "@/lib/content/collections"
import { contentCollectionIds } from "@/lib/content/types"
import { plannedResourceArticles } from "@/lib/content/planned/resources"
import {
  getRegistryKeysForCollection,
  getPublishedKeysForCollection,
  getPublishedPathsForCollection,
  isRegisteredContentArticleKey,
  loadArticleMeta,
  loadContentArticle,
  loadContentArticleBySlug,
  parseContentArticleKey,
  registeredContentArticleKeys,
  type RegisteredContentArticleKey,
} from "@/lib/content/registry"
import type { ResourceArticle } from "@/lib/resources/types"
import type { ResourceCategoryId } from "@/lib/resources/types"
import type {
  ContentArticleBase,
  ContentArticleKey,
  ContentArticleModule,
  ContentArticlePath,
  ContentCollectionId,
  ContentRelatedLink,
  ContentSlug,
} from "@/lib/content/types"

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export type ContentArticleSummary = {
  key: ContentArticleKey
  collection: ContentCollectionId
  slug: ContentSlug
  path: ContentArticlePath
  title: string
  description: string
  category: string
  tags: ReadonlyArray<string>
  publishedAt: string
  updatedAt?: string
  published: boolean
  readingTime?: string
}

export type ContentArticleGroup<K extends string = string> = {
  id: K
  label: string
  articles: ContentArticleSummary[]
}

// -----------------------------------------------------------------------------
// Summary helpers
// -----------------------------------------------------------------------------

export function toArticleSummary(
  key: RegisteredContentArticleKey,
  meta: ContentArticleBase,
): ContentArticleSummary {
  const parsed = parseContentArticleKey(key)
  return {
    key,
    collection: parsed?.collection ?? meta.collection,
    slug: meta.slug,
    path: meta.path,
    title: meta.title,
    description: meta.description,
    category: meta.category,
    tags: meta.tags,
    publishedAt: meta.publishedAt,
    updatedAt: meta.updatedAt,
    published: meta.published,
    readingTime:
      "readingTime" in meta && typeof meta.readingTime === "string"
        ? meta.readingTime
        : undefined,
  }
}

export function compareArticlesByDate(
  a: ContentArticleSummary,
  b: ContentArticleSummary,
): number {
  const aTime = Date.parse(a.updatedAt ?? a.publishedAt)
  const bTime = Date.parse(b.updatedAt ?? b.publishedAt)
  return bTime - aTime
}

export function sortArticlesByDate(
  articles: ReadonlyArray<ContentArticleSummary>,
): ContentArticleSummary[] {
  return [...articles].sort(compareArticlesByDate)
}

// -----------------------------------------------------------------------------
// Registry access
// -----------------------------------------------------------------------------

export {
  contentCollectionIds,
  contentCollections,
  getCollectionConfig,
  registeredContentArticleKeys,
  type RegisteredContentArticleKey,
}

export function getArticleKey(
  collection: ContentCollectionId,
  slug: ContentSlug,
): ContentArticleKey {
  return toContentArticleKey(collection, slug)
}

export function isArticleRegistered(
  collection: ContentCollectionId,
  slug: ContentSlug,
): boolean {
  return isRegisteredContentArticleKey(getArticleKey(collection, slug))
}

export async function loadArticleMetaBySlug(
  collection: ContentCollectionId,
  slug: ContentSlug,
): Promise<ContentArticleBase | null> {
  const key = getArticleKey(collection, slug)
  if (!isRegisteredContentArticleKey(key)) return null
  return loadArticleMeta(key)
}

export {
  loadContentArticle as loadArticleModule,
  loadContentArticleBySlug as loadArticleModuleBySlug,
}

// -----------------------------------------------------------------------------
// Collection retrieval
// -----------------------------------------------------------------------------

export async function getArticleSummariesForCollection(
  collection: ContentCollectionId,
  options: { publishedOnly?: boolean } = {},
): Promise<ContentArticleSummary[]> {
  const { publishedOnly = false } = options
  const keys = getRegistryKeysForCollection(collection)

  const summaries = await Promise.all(
    keys.map(async (key) => {
      const meta = await loadArticleMeta(key)
      if (!meta) return null
      if (publishedOnly && !meta.published) return null
      return toArticleSummary(key, meta)
    }),
  )

  return sortArticlesByDate(
    summaries.filter((item): item is ContentArticleSummary => item !== null),
  )
}

export async function getPublishedArticleSummaries(
  collection: ContentCollectionId,
): Promise<ContentArticleSummary[]> {
  return getArticleSummariesForCollection(collection, { publishedOnly: true })
}

export async function getPublishedArticleSlugs(
  collection: ContentCollectionId,
): Promise<ContentSlug[]> {
  const keys = await getPublishedKeysForCollection(collection)
  return keys
    .map((key) => parseContentArticleKey(key)?.slug)
    .filter((slug): slug is string => Boolean(slug))
}

export {
  getPublishedPathsForCollection as getPublishedArticlePaths,
}

// -----------------------------------------------------------------------------
// Category & tag grouping
// -----------------------------------------------------------------------------

export function getArticlesByCategory(
  articles: ReadonlyArray<ContentArticleSummary>,
  category: string,
): ContentArticleSummary[] {
  return articles.filter(
    (article) => article.category.toLowerCase() === category.toLowerCase(),
  )
}

export function getArticlesByTag(
  articles: ReadonlyArray<ContentArticleSummary>,
  tag: string,
): ContentArticleSummary[] {
  const normalized = tag.toLowerCase()
  return articles.filter((article) =>
    article.tags.some((t) => t.toLowerCase() === normalized),
  )
}

export function groupArticlesByCategory(
  articles: ReadonlyArray<ContentArticleSummary>,
): ContentArticleGroup<string>[] {
  const map = new Map<string, ContentArticleSummary[]>()

  for (const article of articles) {
    const list = map.get(article.category) ?? []
    list.push(article)
    map.set(article.category, list)
  }

  return [...map.entries()]
    .map(([category, items]) => ({
      id: category,
      label: category,
      articles: sortArticlesByDate(items),
    }))
    .sort((a, b) => a.label.localeCompare(b.label))
}

export function groupArticlesByTag(
  articles: ReadonlyArray<ContentArticleSummary>,
): ContentArticleGroup<string>[] {
  const map = new Map<string, ContentArticleSummary[]>()

  for (const article of articles) {
    for (const tag of article.tags) {
      const list = map.get(tag) ?? []
      list.push(article)
      map.set(tag, list)
    }
  }

  return [...map.entries()]
    .map(([tag, items]) => ({
      id: tag,
      label: tag,
      articles: sortArticlesByDate(items),
    }))
    .sort((a, b) => a.label.localeCompare(b.label))
}

export {
  resolveRelatedArticles,
  type ResolveRelatedArticlesInput,
} from "@/lib/content/related"

function isResourceArticleMeta(
  meta: ContentArticleBase,
): meta is ResourceArticleMeta {
  return meta.collection === "resources"
}

// -----------------------------------------------------------------------------
// Resources collection — index cards + routing helpers
// -----------------------------------------------------------------------------

/** Published registry articles + planned stubs for the resources index */
export async function getResourceIndexArticles(): Promise<ResourceArticle[]> {
  const published = await getPublishedResourceIndexArticles()
  return [...published, ...plannedResourceArticles]
}

export async function getPublishedResourceIndexArticles(): Promise<
  ResourceArticle[]
> {
  const keys = await getPublishedKeysForCollection("resources")
  const metas = await Promise.all(keys.map((key) => loadArticleMeta(key)))

  return metas
    .filter((meta): meta is ResourceArticleMeta => meta !== null && isResourceArticleMeta(meta))
    .map((meta) => resourceMetaToIndexCard(meta))
}

/** Sync index list for static generation (published MDX + planned) */
export function getResourceIndexArticlesSync(): ResourceArticle[] {
  const published = getSyncPublishedResourceIndexArticles()
  return [...published, ...plannedResourceArticles]
}

function getSyncPublishedResourceIndexArticles(): ResourceArticle[] {
  const keys = getRegistryKeysForCollection("resources")
  const cards: ResourceArticle[] = []

  for (const key of keys) {
    const entry = articleEntriesSync[key]
    if (!entry?.published) continue
    cards.push(resourceMetaToIndexCard(entry))
  }

  return cards
}

import { meta as retirementVisaGuideMeta } from "@/content/articles/resources/how-to-get-thailand-retirement-visa/meta"

const articleEntriesSync: Partial<
  Record<RegisteredContentArticleKey, ResourceArticleMeta>
> = {
  "resources/how-to-get-thailand-retirement-visa": retirementVisaGuideMeta,
}

export async function loadResourceArticleBySlug(slug: ContentSlug) {
  return loadContentArticleBySlug("resources", slug)
}

export async function loadResourceArticleModule(slug: ContentSlug) {
  const mod = await loadResourceArticleBySlug(slug)
  if (!mod || mod.meta.collection !== "resources") return null
  return mod as ContentArticleModule<ResourceArticleMeta>
}

export function getResourceArticlesByCategoryId(
  categoryId: ResourceCategoryId,
  articles: ReadonlyArray<ResourceArticle> = getResourceIndexArticlesSync(),
): ResourceArticle[] {
  return articles.filter((article) => article.categoryId === categoryId)
}

export function groupResourceArticlesByCategoryId(
  categories: ReadonlyArray<{ id: ResourceCategoryId; label: string }>,
  articles: ReadonlyArray<ResourceArticle> = getResourceIndexArticlesSync(),
): Array<{ category: { id: ResourceCategoryId; label: string }; articles: ResourceArticle[] }> {
  return categories.map((category) => ({
    category,
    articles: getResourceArticlesByCategoryId(category.id, articles),
  }))
}
