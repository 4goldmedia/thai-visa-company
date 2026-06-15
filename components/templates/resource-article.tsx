import { ArticlePageTemplate } from "@/components/templates/article-page"
import type { ResourceArticlePageProps } from "@/lib/content"
import { getResourceArticleRouteBreadcrumbs } from "@/lib/content/routing"
import type { ArticleSeriesNav } from "@/lib/content/series"
import type { BreadcrumbLink } from "@/lib/breadcrumbs/types"

type ResourceArticleTemplateProps = {
  article: ResourceArticlePageProps
  breadcrumbs?: ReadonlyArray<BreadcrumbLink>
  seriesNav?: ArticleSeriesNav
  children: React.ReactNode
}

function ResourceArticleTemplate({
  article,
  breadcrumbs,
  seriesNav,
  children,
}: ResourceArticleTemplateProps) {
  const crumbs =
    breadcrumbs ??
    getResourceArticleRouteBreadcrumbs({
      title: article.title,
      path: article.path,
    })

  return (
    <ArticlePageTemplate
      article={article}
      breadcrumbs={crumbs}
      seriesNav={seriesNav}
    >
      {children}
    </ArticlePageTemplate>
  )
}

export { ResourceArticleTemplate }
