import { ArticlePageTemplate } from "@/components/templates/article-page"
import type { ResolvedGuideArticlePageContext } from "@/lib/content/routing/guides-types"

type GuideArticlePageViewProps = {
  context: ResolvedGuideArticlePageContext
}

function GuideArticlePageView({ context }: GuideArticlePageViewProps) {
  const { route, related, relatedVisas, topicHub, breadcrumbs, seriesNav } = context
  const { MdxContent, page } = route
  const article = {
    ...page,
    related,
    relatedVisas,
    topicHubHref: topicHub?.href,
    topicHubLabel: topicHub?.title,
  }

  return (
    <ArticlePageTemplate
      article={article}
      breadcrumbs={breadcrumbs}
      seriesNav={seriesNav}
    >
      <MdxContent />
    </ArticlePageTemplate>
  )
}

export { GuideArticlePageView }
