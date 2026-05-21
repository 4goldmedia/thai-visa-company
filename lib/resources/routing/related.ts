import type { RelatedResourceItem } from "@/components/sections/related-resources"
import {
  loadResourceContentArticle,
  resourceMetaToIndexCard,
} from "@/lib/content"
import type { ResourceArticlePageProps } from "@/lib/content"

const MAX_RELATED = 3

/**
 * Merge hand-picked `related` links with optional registry `relatedSlugs`.
 * Registry entries win for duplicates (same href); manual links fill remaining slots.
 */
export async function resolveResourceArticleRelated(
  article: Pick<ResourceArticlePageProps, "related" | "relatedSlugs" | "slug">,
): Promise<ReadonlyArray<RelatedResourceItem>> {
  const manual = [...article.related]
  const seen = new Set(manual.map((item) => item.href))

  if (!article.relatedSlugs?.length) {
    return manual.slice(0, MAX_RELATED)
  }

  const fromRegistry: RelatedResourceItem[] = []

  for (const relatedSlug of article.relatedSlugs) {
    if (relatedSlug === article.slug) continue

    const mod = await loadResourceContentArticle(relatedSlug)
    if (!mod?.meta.published) continue

    const card = resourceMetaToIndexCard(mod.meta)
    const href = card.path

    if (seen.has(href)) continue
    seen.add(href)

    fromRegistry.push({
      category: card.category,
      title: card.title,
      description: card.description,
      href,
    })
  }

  return [...manual, ...fromRegistry].slice(0, MAX_RELATED)
}
