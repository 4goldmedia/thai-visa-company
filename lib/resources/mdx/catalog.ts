/**
 * @deprecated Use `resourceMetaToIndexCard` from `@/lib/content` with the registry.
 */
import { resourceMetaToIndexCard } from "@/lib/content/adapters"
import type { ResourceArticle } from "@/lib/resources/types"

import { loadResourceArticleDefinition, resourceMdxSlugs } from "./registry"

export async function getMdxResourceArticles(): Promise<ResourceArticle[]> {
  const articles = await Promise.all(
    resourceMdxSlugs.map(async (slug) => {
      const meta = await loadResourceArticleDefinition(slug)
      if (!meta) return null
      return resourceMetaToIndexCard(meta)
    }),
  )

  return articles.filter((article): article is ResourceArticle => article != null)
}
