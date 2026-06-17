import { ResourceArticleTemplate } from "@/components/templates/resource-article"
import type { ResolvedResourceArticlePageContext } from "@/lib/content/routing"

type ResourceArticlePageViewProps = {
  context: ResolvedResourceArticlePageContext
}

/**
 * Server view for `/resources/[slug]`  -  MDX body inside the shared article layout.
 */
function ResourceArticlePageView({ context }: ResourceArticlePageViewProps) {
  const { route, related, breadcrumbs, seriesNav } = context
  const { MdxContent, page } = route
  const article = { ...page, related }

  return (
    <ResourceArticleTemplate
      article={article}
      breadcrumbs={breadcrumbs}
      seriesNav={seriesNav}
    >
      <MdxContent />
    </ResourceArticleTemplate>
  )
}

export { ResourceArticlePageView }
