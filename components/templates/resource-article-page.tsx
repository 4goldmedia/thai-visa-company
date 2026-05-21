import { ResourceArticleTemplate } from "@/components/templates/resource-article"
import type { ResolvedResourceArticleRoute } from "@/lib/resources/routing"
import type { ResourceArticlePageProps } from "@/lib/content"

type ResourceArticlePageViewProps = {
  route: ResolvedResourceArticleRoute
  related: ResourceArticlePageProps["related"]
}

/**
 * Server view for `/resources/[slug]` — MDX body inside the shared article layout.
 */
function ResourceArticlePageView({ route, related }: ResourceArticlePageViewProps) {
  const { MdxContent, page } = route
  const article = { ...page, related }

  return (
    <ResourceArticleTemplate article={article}>
      <MdxContent />
    </ResourceArticleTemplate>
  )
}

export { ResourceArticlePageView }
