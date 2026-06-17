import type { Metadata } from "next"

import type { ArticlePageProps } from "@/lib/content/article-page"
import type { BlogArticleMeta } from "@/lib/content/collections/blog"
import type { GuideArticleMeta } from "@/lib/content/collections/guides"
import type {
  ResourceArticleMeta,
  ResourceArticlePageProps,
} from "@/lib/content/collections/resources"
import {
  breadcrumbsToSchemaItems,
  getBlogArticleBreadcrumbs,
  getGuideArticleBreadcrumbs,
  getResourceArticleBreadcrumbs,
} from "@/lib/breadcrumbs"
import {
  buildResourceArticleSchemaGraph,
  type ResourceArticleSchemaGraphInput,
} from "@/lib/content/schema/article"
import { getDefaultOgImagePath } from "@/lib/site/config"
import { createArticlePageMetadata } from "@/lib/seo"
import type { JsonLdGraphDocument, JsonLdNode } from "@/lib/schema/types"

// -----------------------------------------------------------------------------
// UI breadcrumbs  -  shared by layout and JSON-LD
// -----------------------------------------------------------------------------

export function getResourceArticleRouteBreadcrumbs(
  article: Pick<ArticlePageProps, "title" | "path">,
) {
  return getResourceArticleBreadcrumbs({
    title: article.title,
    path: article.path,
  })
}

export function getGuideArticleRouteBreadcrumbs(
  article: Pick<ArticlePageProps, "title" | "path"> & {
    categoryLabel?: string
    categoryPath?: string
  },
) {
  return getGuideArticleBreadcrumbs({
    title: article.title,
    path: article.path,
    categoryLabel: article.categoryLabel,
    categoryPath: article.categoryPath,
  })
}

export function getBlogArticleRouteBreadcrumbs(
  article: Pick<ArticlePageProps, "title" | "path"> & {
    categoryLabel?: string
    categoryPath?: string
  },
) {
  return getBlogArticleBreadcrumbs({
    title: article.title,
    path: article.path,
    categoryLabel: article.categoryLabel,
    categoryPath: article.categoryPath,
  })
}

type ArticleMetadataSource = Pick<
  ResourceArticleMeta | BlogArticleMeta | GuideArticleMeta,
  | "path"
  | "seo"
  | "publishedAt"
  | "updatedAt"
  | "tags"
  | "heroImage"
  | "schema"
>

export function buildArticleMetadata(meta: ArticleMetadataSource): Metadata {
  return createArticlePageMetadata({
    path: meta.path,
    seo: meta.seo,
    publishedAt: meta.publishedAt,
    updatedAt: meta.updatedAt,
    tags: meta.tags,
    image: meta.heroImage ?? meta.schema?.featuredImage ?? getDefaultOgImagePath(),
  })
}

// -----------------------------------------------------------------------------
// Next.js metadata  -  canonical URL, Open Graph article type, site defaults
// -----------------------------------------------------------------------------

export function buildResourceArticleMetadata(
  meta: ResourceArticleMeta,
): Metadata {
  return buildArticleMetadata(meta)
}

export function buildBlogArticleMetadata(meta: BlogArticleMeta): Metadata {
  return buildArticleMetadata(meta)
}

export function buildGuideArticleMetadata(meta: GuideArticleMeta): Metadata {
  return buildArticleMetadata(meta)
}

// -----------------------------------------------------------------------------
// JSON-LD  -  Article + BreadcrumbList (+ per-article schema extensions)
// -----------------------------------------------------------------------------

export type BuildArticleRouteSchemaInput = {
  article: ArticlePageProps | ResourceArticleMeta | BlogArticleMeta
  additionalNodes?: ReadonlyArray<JsonLdNode>
}

/** @deprecated Use `BuildArticleRouteSchemaInput` */
export type BuildResourceArticleRouteSchemaInput = BuildArticleRouteSchemaInput

export function buildArticleRouteSchemaGraph(
  input: BuildArticleRouteSchemaInput & {
    breadcrumbs?: ReadonlyArray<{ name: string; path: string }>
  },
): JsonLdGraphDocument {
  const breadcrumbs =
    input.breadcrumbs ??
    breadcrumbsToSchemaItems(
      "collection" in input.article && input.article.collection === "blog"
        ? getBlogArticleRouteBreadcrumbs(input.article)
        : "collection" in input.article && input.article.collection === "guides"
          ? getGuideArticleRouteBreadcrumbs(input.article)
          : getResourceArticleRouteBreadcrumbs(input.article),
    )

  const extensionNodes: JsonLdNode[] = [
    ...(input.article.schema?.additionalNodes ?? []),
    ...(input.additionalNodes ?? []),
  ]

  const graphInput: ResourceArticleSchemaGraphInput = {
    article: input.article,
    breadcrumbs,
    additionalNodes: extensionNodes.length ? extensionNodes : undefined,
  }

  return buildResourceArticleSchemaGraph(graphInput)
}

export function buildResourceArticleRouteSchemaGraph(
  input: BuildResourceArticleRouteSchemaInput,
): JsonLdGraphDocument {
  return buildArticleRouteSchemaGraph(input)
}
