import { getPublishedResourceArticleSlugs } from "@/lib/content"

import type { ResourceArticleStaticParam } from "@/lib/resources/routing/types"

export async function getResourceArticleStaticParams(): Promise<
  ResourceArticleStaticParam[]
> {
  const slugs = await getPublishedResourceArticleSlugs()
  return slugs.map((slug) => ({ slug }))
}
