/**
 * @deprecated Import from `@/lib/content` instead.
 */
import {
  getPublishedResourceArticlePaths,
  getPublishedResourceArticleSlugs,
  loadResourceContentArticle,
} from "@/lib/content"
import type { ResourceArticleMeta } from "@/lib/content"

export {
  getPublishedResourceArticlePaths as getPublishedResourceMdxPaths,
  getPublishedResourceArticleSlugs as getPublishedResourceMdxSlugs,
}

export type {
  ResourceArticleDefinition,
  ResourceArticleMeta,
  ResourceArticlePageContent,
} from "@/lib/content"

export async function loadResourceMdxModule(slug: string) {
  const mod = await loadResourceContentArticle(slug)
  if (!mod) return null
  return { default: mod.default, article: mod.meta as ResourceArticleMeta }
}
