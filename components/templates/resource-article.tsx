import { ArticleInlineFaq } from "@/components/articles/article-inline-faq"
import { ArticleTableOfContentsLinks } from "@/components/articles/article-table-of-contents"
import { ContactCtaGroup } from "@/components/cta"
import {
  ArticleCta,
  ArticleLayout,
  ArticleTableOfContents,
} from "@/components/layout/article-layout"
import { RelatedResources } from "@/components/sections/related-resources"
import { ResourceArticleJsonLd } from "@/components/seo/resource-article-json-ld"
import type { ResourceArticlePageProps } from "@/lib/content"
import { getResourceArticleRouteBreadcrumbs } from "@/lib/content/routing"
import type { BreadcrumbLink } from "@/lib/breadcrumbs/types"

type ResourceArticleTemplateProps = {
  article: ResourceArticlePageProps
  breadcrumbs?: ReadonlyArray<BreadcrumbLink>
  children: React.ReactNode
}

function ResourceArticleTemplate({
  article,
  breadcrumbs,
  children,
}: ResourceArticleTemplateProps) {
  const crumbs =
    breadcrumbs ??
    getResourceArticleRouteBreadcrumbs({
      title: article.title,
      path: article.path,
    })

  return (
    <>
      <ResourceArticleJsonLd article={article} />
      <main
        id="main-content"
        tabIndex={-1}
        aria-label={article.title}
        className="flex flex-1 flex-col"
      >
        <ArticleLayout
          breadcrumbs={crumbs}
          title={article.title}
          headingId={article.headingId}
          eyebrow={article.eyebrow}
          lead={article.lead}
          metadata={article.metadata}
          showPlaceholders={false}
          tableOfContents={
            <ArticleTableOfContents>
              <ArticleTableOfContentsLinks items={article.tableOfContents} />
            </ArticleTableOfContents>
          }
          relatedResources={
            <RelatedResources
              headingId={`${article.slug}-related-heading`}
              eyebrow="Keep reading"
              title="Related guides"
              items={article.related}
              maxItems={3}
            />
          }
          cta={
            <ArticleCta
              headingId={`${article.slug}-cta-heading`}
              title={article.cta.title}
              description={article.cta.description}
            >
              <ContactCtaGroup
                showExplore={false}
                analyticsSurface="article"
                analyticsCtaId="article_cta_contact"
                articleSlug={article.slug}
              />
              {article.cta.footnote ? (
                <p className="mt-4 text-[13px] leading-[1.6] text-muted-foreground sm:text-sm sm:leading-snug">
                  {article.cta.footnote}
                </p>
              ) : null}
            </ArticleCta>
          }
        >
          {children}
          <ArticleInlineFaq
            headingId={`${article.slug}-faq`}
            title="Common questions"
            description={`Short answers about ${article.title.toLowerCase()}.`}
            items={article.faq}
            jsonLd={{
              name: `${article.title} — FAQ`,
              path: article.path,
              description: article.lead,
            }}
          />
        </ArticleLayout>
      </main>
    </>
  )
}

export { ResourceArticleTemplate }
