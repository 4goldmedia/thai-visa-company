import { blogMetaToIndexCard } from "@/lib/blog/adapters"
import { blogClusters } from "@/lib/blog/content/clusters"
import { blogIndexContent } from "@/lib/blog/content/index"
import { getFeaturedBlogPost, sortBlogPosts } from "@/lib/blog/sorting"
import type { BlogArticleMeta } from "@/lib/content/collections/blog"
import { plannedBlogArticles } from "@/lib/content/planned/blog"
import {
  getPublishedKeysForCollection,
  getRegistryKeysForCollection,
  loadArticleMeta,
} from "@/lib/content/registry"
import { generatedArticleMetaSync } from "@/lib/content/articles.sync.generated"
import type { BlogCluster, BlogClusterId, BlogPostCard, BlogPostSort } from "@/lib/blog/types"
import { isBlogClusterId } from "@/lib/blog/types"

export { blogClusters, blogIndexContent, blogMetaToIndexCard, getFeaturedBlogPost, sortBlogPosts, plannedBlogArticles }
export { blogIndexSectionIds } from "@/lib/blog/section-ids"
export type {
  BlogCluster,
  BlogClusterId,
  BlogIndexContent,
  BlogPostCard,
  BlogPostSort,
  BlogPostStatus,
} from "@/lib/blog/types"
export { blogClusterPath, isBlogClusterId } from "@/lib/blog/types"

/** @deprecated Use `blogClusters` */
export const blogCategories = blogClusters

/** @deprecated Use `getBlogClusterById` */
export const getBlogCategoryById = getBlogClusterById

/** @deprecated Use `getBlogPostsByClusterId` */
export const getBlogPostsByCategoryId = getBlogPostsByClusterId

/** @deprecated Use `groupBlogPostsByClusterId` */
export const groupBlogPostsByCategoryId = groupBlogPostsByClusterId

export function getBlogClusterById(id: BlogClusterId): BlogCluster | undefined {
  return blogClusters.find((cluster) => cluster.id === id)
}

export async function getPublishedBlogIndexArticles(): Promise<BlogPostCard[]> {
  const keys = await getPublishedKeysForCollection("blog")
  const metas = await Promise.all(keys.map((key) => loadArticleMeta(key)))

  return metas
    .filter((meta): meta is BlogArticleMeta => meta !== null && meta.collection === "blog")
    .map((meta) => blogMetaToIndexCard(meta))
}

export async function getBlogIndexArticles(): Promise<BlogPostCard[]> {
  const published = await getPublishedBlogIndexArticles()
  return sortBlogPosts([...published, ...plannedBlogArticles])
}

export function getSyncPublishedBlogIndexArticles(): BlogPostCard[] {
  const keys = getRegistryKeysForCollection("blog")
  const cards: BlogPostCard[] = []

  for (const key of keys) {
    const entry = generatedArticleMetaSync[key]
    if (!entry?.published || entry.collection !== "blog") continue
    cards.push(blogMetaToIndexCard(entry as BlogArticleMeta))
  }

  return cards
}

export function getBlogIndexArticlesSync(): BlogPostCard[] {
  return sortBlogPosts([...getSyncPublishedBlogIndexArticles(), ...plannedBlogArticles])
}

export function getBlogPostsByClusterId(
  clusterId: BlogClusterId,
  articles: ReadonlyArray<BlogPostCard> = getBlogIndexArticlesSync(),
): BlogPostCard[] {
  return articles.filter((article) => article.clusterId === clusterId)
}

export function groupBlogPostsByClusterId(
  articles: ReadonlyArray<BlogPostCard> = getBlogIndexArticlesSync(),
): Array<{ cluster: BlogCluster; articles: BlogPostCard[] }> {
  return blogClusters.map((cluster) => ({
    cluster,
    articles: getBlogPostsByClusterId(cluster.id, articles),
  }))
}

export function getSortedBlogIndexArticles(sort: BlogPostSort = "updated"): BlogPostCard[] {
  return sortBlogPosts(getBlogIndexArticlesSync(), sort)
}
