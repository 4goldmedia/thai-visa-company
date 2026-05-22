import type { Metadata } from "next"

import type {
  ResourceArticleMeta,
  ResourceArticlePageProps,
} from "@/lib/content/collections/resources"
import {
  buildResourceArticleSchemaGraph,
  type ResourceArticleSchemaGraphInput,
} from "@/lib/content/schema/article"
import {
  breadcrumbsToSchemaItems,
  getResourceArticleBreadcrumbs,
} from "@/lib/breadcrumbs"
import { getDefaultOgImagePath } from "@/lib/site/config"
import { createArticlePageMetadata } from "@/lib/seo"
import type { JsonLdGraphDocument, JsonLdNode } from "@/lib/schema/types"

// -----------------------------------------------------------------------------
// UI breadcrumbs — shared by layout and JSON-LD
// -----------------------------------------------------------------------------

export function getResourceArticleRouteBreadcrumbs(
  article: Pick<ResourceArticlePageProps, "title" | "path">,
) {
  return getResourceArticleBreadcrumbs({
    title: article.title,
    path: article.path,
  })
}

// -----------------------------------------------------------------------------
// Next.js metadata — canonical URL, Open Graph article type, site defaults
// -----------------------------------------------------------------------------

export function buildResourceArticleMetadata(
  meta: ResourceArticleMeta,
): Metadata {
  return createArticlePageMetadata({
    path: meta.path,
    seo: meta.seo,
    publishedAt: meta.publishedAt,
    updatedAt: meta.updatedAt,
    tags: meta.tags,
    image: meta.schema?.featuredImage ?? getDefaultOgImagePath(),
  })
}

// -----------------------------------------------------------------------------
// JSON-LD — Article + BreadcrumbList (+ per-article schema extensions)
// -----------------------------------------------------------------------------

export type BuildResourceArticleRouteSchemaInput = {
  article: ResourceArticlePageProps | ResourceArticleMeta
  additionalNodes?: ReadonlyArray<JsonLdNode>
}

export function buildResourceArticleRouteSchemaGraph(
  input: BuildResourceArticleRouteSchemaInput,
): JsonLdGraphDocument {
  const breadcrumbs = breadcrumbsToSchemaItems(
    getResourceArticleRouteBreadcrumbs(input.article),
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
