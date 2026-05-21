import { cache } from "react"

import {
  loadResourceContentArticle,
  toResourceArticlePageProps,
} from "@/lib/content"

import type { ResolvedResourceArticleRoute } from "@/lib/resources/routing/types"

/**
 * Load and normalize a resource article for routing.
 * Cached per request so `generateMetadata` and the page share one load.
 */
export const resolveResourceArticleRoute = cache(
  async (slug: string): Promise<ResolvedResourceArticleRoute | null> => {
    const module = await loadResourceContentArticle(slug)

    if (!module?.meta.published) {
      return null
    }

    const page = toResourceArticlePageProps(module.meta)

    return {
      slug,
      module,
      page,
      MdxContent: module.default,
    }
  },
)
