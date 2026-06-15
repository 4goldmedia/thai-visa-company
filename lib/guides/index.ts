import { guideMetaToIndexCard } from "@/lib/guides/adapters"
import { guideCategories } from "@/lib/guides/content/categories"
import { guidesIndexContent } from "@/lib/guides/content/index"
import { guideTopicHubs } from "@/lib/guides/content/topics"
import { getFeaturedGuidePost, sortGuidePosts } from "@/lib/guides/sorting"
import type { GuideArticleMeta } from "@/lib/content/collections/guides"
import { plannedGuideArticles } from "@/lib/content/planned/guides"
import {
  getPublishedKeysForCollection,
  getRegistryKeysForCollection,
  loadArticleMeta,
} from "@/lib/content/registry"
import { generatedArticleMetaSync } from "@/lib/content/articles.sync.generated"
import type { ContentTopicId } from "@/lib/content/topics"
import type {
  GuideCategory,
  GuideCategoryId,
  GuidePostCard,
  GuideTopicHub,
  GuideTopicHubSlug,
} from "@/lib/guides/types"
import { isGuideCategoryId, isGuideTopicHubSlug } from "@/lib/guides/types"

export {
  guideCategories,
  guidesIndexContent,
  guideTopicHubs,
  guideMetaToIndexCard,
  getFeaturedGuidePost,
  sortGuidePosts,
  plannedGuideArticles,
}
export { guidesIndexSectionIds } from "@/lib/guides/section-ids"
export { popularGuideSlugs } from "@/lib/guides/content/popular"
export { frequentlySearchedTopics } from "@/lib/guides/content/searched-topics"
export type {
  GuideCategory,
  GuideCategoryId,
  GuidesIndexContent,
  GuidePostCard,
  GuidePostStatus,
  GuideTopicHub,
  GuideTopicHubSlug,
} from "@/lib/guides/types"
export {
  guideCategoryPath,
  guideTopicHubPath,
  isGuideCategoryId,
  isGuideTopicHubSlug,
} from "@/lib/guides/types"

export function getGuideCategoryById(id: GuideCategoryId): GuideCategory | undefined {
  return guideCategories.find((category) => category.id === id)
}

export function getGuideTopicHubBySlug(slug: GuideTopicHubSlug): GuideTopicHub | undefined {
  return guideTopicHubs.find((hub) => hub.slug === slug)
}

export function getGuideTopicHubForTopicId(
  topicId: ContentTopicId,
): GuideTopicHub | undefined {
  return guideTopicHubs.find((hub) => hub.topicId === topicId)
}

export async function getPublishedGuideIndexArticles(): Promise<GuidePostCard[]> {
  const keys = await getPublishedKeysForCollection("guides")
  const metas = await Promise.all(keys.map((key) => loadArticleMeta(key)))

  return metas
    .filter((meta): meta is GuideArticleMeta => meta !== null && meta.collection === "guides")
    .map((meta) => guideMetaToIndexCard(meta))
}

export async function getGuideIndexArticles(): Promise<GuidePostCard[]> {
  const published = await getPublishedGuideIndexArticles()
  return sortGuidePosts([...published, ...plannedGuideArticles])
}

export function getSyncPublishedGuideIndexArticles(): GuidePostCard[] {
  const keys = getRegistryKeysForCollection("guides")
  const cards: GuidePostCard[] = []

  for (const key of keys) {
    const entry = generatedArticleMetaSync[key]
    if (!entry?.published || entry.collection !== "guides") continue
    cards.push(guideMetaToIndexCard(entry as GuideArticleMeta))
  }

  return cards
}

export function getGuideIndexArticlesSync(): GuidePostCard[] {
  return sortGuidePosts([...getSyncPublishedGuideIndexArticles(), ...plannedGuideArticles])
}

export function getGuidePostsByCategoryId(
  categoryId: GuideCategoryId,
  articles: ReadonlyArray<GuidePostCard> = getGuideIndexArticlesSync(),
): GuidePostCard[] {
  return articles.filter((article) => article.categoryId === categoryId)
}

export function getGuidePostsByTopicId(
  topicId: ContentTopicId,
  articles: ReadonlyArray<GuidePostCard> = getGuideIndexArticlesSync(),
): GuidePostCard[] {
  return articles.filter((article) => article.topicId === topicId)
}

export function getGuidePostsBySlugs(
  slugs: ReadonlyArray<string>,
  articles: ReadonlyArray<GuidePostCard> = getGuideIndexArticlesSync(),
): GuidePostCard[] {
  const order = new Map(slugs.map((slug, index) => [slug, index]))
  return articles
    .filter((article) => order.has(article.slug))
    .sort((a, b) => (order.get(a.slug) ?? 0) - (order.get(b.slug) ?? 0))
}

export function groupGuidePostsByCategoryId(
  articles: ReadonlyArray<GuidePostCard> = getGuideIndexArticlesSync(),
): Array<{ category: GuideCategory; articles: GuidePostCard[] }> {
  return guideCategories.map((category) => ({
    category,
    articles: getGuidePostsByCategoryId(category.id, articles),
  }))
}
