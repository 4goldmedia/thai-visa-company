import type { ArticlePageProps } from "@/lib/content/article-page"
import { buildArticleRouteSchemaGraph } from "@/lib/content/routing/seo"
import { JsonLdScript } from "@/lib/seo/schema"

export type ArticleJsonLdProps = {
  article: ArticlePageProps
  id?: string
}

/**
 * Resource article JSON-LD — Article + BreadcrumbList (+ meta.schema extensions).
 * FAQ schema is rendered separately via `FaqJsonLd` on `ArticleInlineFaq`.
 */
function ArticleJsonLd({ article, id = "schema-article" }: ArticleJsonLdProps) {
  const graph = buildArticleRouteSchemaGraph({ article })

  return <JsonLdScript data={graph} id={id} />
}

export { ArticleJsonLd }
