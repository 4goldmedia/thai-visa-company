import { buildArticle } from "@/lib/schema/article"
import { buildBreadcrumbList } from "@/lib/schema/breadcrumb"
import { buildFaqPage } from "@/lib/schema/faq"
import type {
  ArticleInput,
  BreadcrumbItem,
  FaqItemInput,
  JsonLdGraphDocument,
  JsonLdNode,
} from "@/lib/schema/types"
import { buildJsonLdGraph, serializeJsonLd } from "@/lib/schema/utils"

export type BuildPageSchemaInput = {
  nodes: ReadonlyArray<JsonLdNode | null | undefined | false>
}

/** Merge page-level schema nodes into one `@graph` document */
export function buildPageSchemaGraph(
  input: BuildPageSchemaInput,
): JsonLdGraphDocument {
  const nodes = input.nodes.filter((node): node is JsonLdNode => Boolean(node))
  return buildJsonLdGraph(nodes)
}

export type BuildArticlePageSchemaInput = {
  article: ArticleInput
  faq?: ReadonlyArray<FaqItemInput>
  breadcrumbs?: ReadonlyArray<BreadcrumbItem>
  additionalNodes?: ReadonlyArray<JsonLdNode>
}

/** Article + optional FAQ + breadcrumbs — generic composer */
export function buildArticlePageSchemaGraph(
  input: BuildArticlePageSchemaInput,
): JsonLdGraphDocument {
  const nodes: JsonLdNode[] = [buildArticle(input.article)]

  const faq = buildFaqPage(input.faq ?? [], {
    name: input.article.headline,
    path: input.article.path,
  })
  if (faq) nodes.push(faq)

  const crumbs = buildBreadcrumbList(
    input.breadcrumbs ?? [
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: input.article.headline, path: input.article.path },
    ],
  )
  if (crumbs) nodes.push(crumbs)

  if (input.additionalNodes?.length) {
    nodes.push(...input.additionalNodes)
  }

  return buildJsonLdGraph(nodes)
}

export { serializeJsonLd }
