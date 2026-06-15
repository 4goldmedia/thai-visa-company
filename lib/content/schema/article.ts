import { buildArticle } from "@/lib/schema/article"
import { buildBreadcrumbList } from "@/lib/schema/breadcrumb"
import { buildOrganizationReference } from "@/lib/schema/organization"
import { buildJsonLdGraph } from "@/lib/schema/utils"
import type {
  ArticleInput,
  JsonLdGraphDocument,
  JsonLdNode,
} from "@/lib/schema/types"
import type { ArticlePageProps } from "@/lib/content/article-page"
import type { BlogArticleMeta } from "@/lib/content/collections/blog"
import type {
  ResourceArticleMeta,
  ResourceArticlePageProps,
} from "@/lib/content/collections/resources"
import type {
  ContentArticleAuthor,
  ContentArticleReviewedBy,
} from "@/lib/content/types"
import type { ArticleAuthorInput } from "@/lib/schema/types"

export function buildDefaultArticleAuthor() {
  return buildOrganizationReference()
}

function toSchemaAuthorInput(
  author: ContentArticleAuthor,
): ArticleAuthorInput {
  return {
    name: author.name,
    url: author.url,
    type: author.type ?? "Person",
  }
}

function toSchemaReviewedByInput(
  reviewedBy: ContentArticleReviewedBy,
): ArticleAuthorInput {
  return {
    name: reviewedBy.name,
    url: reviewedBy.url,
    type: "Person",
  }
}

type ArticleSchemaSource =
  | ArticlePageProps
  | ResourceArticlePageProps
  | ResourceArticleMeta
  | BlogArticleMeta

function getArticleAuthor(
  article: ArticleSchemaSource,
): ArticleAuthorInput | ReturnType<typeof buildDefaultArticleAuthor> {
  if ("author" in article && article.author) {
    return toSchemaAuthorInput(article.author)
  }
  return buildDefaultArticleAuthor()
}

function getArticleReviewedBy(
  article: ArticleSchemaSource,
): ArticleAuthorInput | undefined {
  if ("reviewedBy" in article && article.reviewedBy) {
    return toSchemaReviewedByInput(article.reviewedBy)
  }
  return undefined
}

function getArticleFeaturedImage(
  article: ArticleSchemaSource,
): string | undefined {
  if ("heroImage" in article && article.heroImage) {
    return article.heroImage
  }
  return article.schema?.featuredImage
}

function getArticleCategory(article: ArticleSchemaSource): string {
  if ("category" in article && typeof article.category === "string") {
    return article.category
  }
  if ("metadata" in article && article.metadata?.category) {
    return article.metadata.category
  }
  return "Visa guide"
}

function getArticleAbstract(article: ArticleSchemaSource): string | undefined {
  return "lead" in article ? article.lead : undefined
}

/** Map resource article meta → schema.org `ArticleInput` */
export function toArticleInputFromResourceArticle(
  article: ArticleSchemaSource,
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
    featuredImage: getArticleFeaturedImage(article),
    type: article.schema?.primaryType,
    author: getArticleAuthor(article),
    reviewedBy: getArticleReviewedBy(article),
  }
}

export type ResourceArticleSchemaGraphInput = {
  article: ArticleSchemaSource
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

export function buildResourceArticleSchema(article: ArticleSchemaSource): JsonLdNode {
  return buildArticle(toArticleInputFromResourceArticle(article))
}
