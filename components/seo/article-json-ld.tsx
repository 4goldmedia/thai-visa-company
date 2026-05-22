import type { ResourceArticlePageProps } from "@/lib/content"
import { buildResourceArticleRouteSchemaGraph } from "@/lib/content/routing"
import { JsonLdScript } from "@/lib/seo/schema"

export type ArticleJsonLdProps = {
  article: ResourceArticlePageProps
  id?: string
}

/**
 * Resource article JSON-LD — Article + BreadcrumbList (+ meta.schema extensions).
 * FAQ schema is rendered separately via `FaqJsonLd` on `ArticleInlineFaq`.
 */
function ArticleJsonLd({ article, id = "schema-article" }: ArticleJsonLdProps) {
  const graph = buildResourceArticleRouteSchemaGraph({ article })

  return <JsonLdScript data={graph} id={id} />
}

export { ArticleJsonLd }
