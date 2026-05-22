import { resourceArticles } from "@/lib/resources/content/articles"
import { resourceCategories } from "@/lib/resources/content/categories"
import { resourcesIndexContent } from "@/lib/resources/content/index"
import type {
  ResourceArticle,
  ResourceCategory,
  ResourceCategoryId,
} from "@/lib/resources/types"

export function getResourceArticles(): ResourceArticle[] {
  return [...resourceArticles]
}

/** Published guides only — JSON-LD ItemList and sitemap-aligned URLs */
export function getPublishedResourceArticles(): ResourceArticle[] {
  return resourceArticles.filter(
    (article) => article.status !== "planned",
  )
}

export function getResourceCategories(): ResourceCategory[] {
  return [...resourceCategories]
}

export function getArticlesByCategory(
  categoryId: ResourceCategoryId,
): ResourceArticle[] {
  return resourceArticles.filter((article) => article.categoryId === categoryId)
}

export function groupArticlesByCategory(): Array<{
  category: ResourceCategory
  articles: ResourceArticle[]
}> {
  return resourceCategories.map((category) => ({
    category,
    articles: getArticlesByCategory(category.id),
  }))
}

export {
  resourceArticles,
  resourceCategories,
  resourcesIndexContent,
}
export type {
  ResourceArticle,
  ResourceCategory,
  ResourceCategoryId,
  ResourcesIndexContent,
} from "@/lib/resources/types"

export {
  buildResourceArticleMetadata,
  getResourceArticleStaticParams,
  resolveResourceArticleRelated,
  resolveResourceArticleRoute,
} from "@/lib/resources/routing"
export type {
  ResolvedResourceArticleRoute,
  ResourceArticleRouteParams,
} from "@/lib/resources/routing"
