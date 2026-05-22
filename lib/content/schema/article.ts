import { buildArticle } from "@/lib/schema/article"
import { buildBreadcrumbList } from "@/lib/schema/breadcrumb"
import { buildOrganizationReference } from "@/lib/schema/organization"
import { buildJsonLdGraph } from "@/lib/schema/utils"
import type {
  ArticleInput,
  JsonLdGraphDocument,
  JsonLdNode,
} from "@/lib/schema/types"
import type {
  ResourceArticleMeta,
  ResourceArticlePageProps,
} from "@/lib/content/collections/resources"

export function buildDefaultArticleAuthor() {
  return buildOrganizationReference()
}

function getArticleCategory(
  article: ResourceArticlePageProps | ResourceArticleMeta,
): string {
  if ("category" in article && typeof article.category === "string") {
    return article.category
  }
  if ("metadata" in article && article.metadata?.category) {
    return article.metadata.category
  }
  return "Visa guide"
}

function getArticleAbstract(
  article: ResourceArticlePageProps | ResourceArticleMeta,
): string | undefined {
  return "lead" in article ? article.lead : undefined
}

/** Map resource article meta → schema.org `ArticleInput` */
export function toArticleInputFromResourceArticle(
  article: ResourceArticlePageProps | ResourceArticleMeta,
): ArticleInput {
  return {
    slug: article.slug,
    path: article.path,
    headline: article.title,
    description: article.seo.description,
    abstract: getArticleAbstract(article),
    datePublished: article.publishedAt,
    dateUpdated: article.updatedAt,
    tags: [...article.tags],
    articleSection: getArticleCategory(article),
    featuredImage: article.schema?.featuredImage,
    type: article.schema?.primaryType,
    author: buildDefaultArticleAuthor(),
  }
}

export type ResourceArticleSchemaGraphInput = {
  article: ResourceArticlePageProps | ResourceArticleMeta
  breadcrumbs?: ReadonlyArray<{ name: string; path: string }>
  additionalNodes?: ReadonlyArray<JsonLdNode>
}

/**
 * Article `@graph` for resource guides — Article + optional BreadcrumbList + extensions.
 * FAQ schema is rendered separately via `FaqJsonLd` on `ArticleInlineFaq`.
 */
export function buildResourceArticleSchemaGraph(
  input: ResourceArticleSchemaGraphInput,
): JsonLdGraphDocument {
  const articleNode = buildArticle(toArticleInputFromResourceArticle(input.article))
  const nodes: JsonLdNode[] = [articleNode]

  if (input.breadcrumbs?.length) {
    const crumbs = buildBreadcrumbList(input.breadcrumbs)
    if (crumbs) nodes.push(crumbs)
  }
  if (input.additionalNodes?.length) {
    nodes.push(...input.additionalNodes)
  }

  return buildJsonLdGraph(nodes)
}

export function buildResourceArticleSchema(
  article: ResourceArticlePageProps | ResourceArticleMeta,
): JsonLdNode {
  return buildArticle(toArticleInputFromResourceArticle(article))
}
