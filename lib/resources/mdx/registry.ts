/**
 * @deprecated Import from `@/lib/content` instead.
 */
export {
  getPublishedResourceArticlePaths as getPublishedResourceMdxPaths,
  getPublishedResourceArticleSlugs,
  loadResourceContentArticle as loadResourceMdxModule,
} from "@/lib/content"

export type { ResourceArticleMeta as ResourceArticleDefinition } from "@/lib/content"

import { loadResourceContentArticle } from "@/lib/content"

/** @deprecated Use loadResourceContentArticle */
export async function loadResourceArticleDefinition(slug: string) {
  const mod = await loadResourceContentArticle(slug)
  return mod?.meta ?? null
}

export type ResourceMdxSlug = string

export const resourceMdxSlugs: ResourceMdxSlug[] = []

export function isResourceMdxSlug(slug: string): slug is ResourceMdxSlug {
  return resourceMdxSlugs.includes(slug)
}

export async function getPublishedResourceMdxSlugs(): Promise<ResourceMdxSlug[]> {
  const { getPublishedResourceArticleSlugs } = await import("@/lib/content")
  return getPublishedResourceArticleSlugs()
}
