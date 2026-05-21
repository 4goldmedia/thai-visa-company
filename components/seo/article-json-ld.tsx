import { buildResourceArticleSchemaGraph } from "@/lib/schema/article-schema"
import { JsonLdScript } from "@/lib/schema/json-ld-script"
import type { ResourceArticlePageProps } from "@/lib/content"
import type { JsonLdNode } from "@/lib/schema/types"

export type ArticleJsonLdProps = {
  article: ResourceArticlePageProps
  additionalNodes?: ReadonlyArray<JsonLdNode>
  id?: string
}

/**
 * Resource article Article JSON-LD.
 * Breadcrumbs via `ArticleLayout`; FAQ via `FaqJsonLd` on `ArticleInlineFaq`.
 */
function ArticleJsonLd({
  article,
  additionalNodes,
  id = "schema-article",
}: ArticleJsonLdProps) {
  const graph = buildResourceArticleSchemaGraph({
    article,
    additionalNodes,
  })

  return <JsonLdScript data={graph} id={id} />
}

export { ArticleJsonLd }
