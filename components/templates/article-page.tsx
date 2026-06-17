import { ArticleConsultationBand } from "@/components/articles/article-consultation-band"
import { ArticleInlineFaq } from "@/components/articles/article-inline-faq"
import { ArticleRelatedGuideStrip } from "@/components/articles/article-related-guide-strip"
import { ArticleSeriesNav } from "@/components/articles/article-series-nav"
import { ArticleShareRow } from "@/components/articles/article-share-row"
import { ArticleSources } from "@/components/articles/article-sources"
import { ArticleTableOfContentsLinks } from "@/components/articles/article-table-of-contents"
import { ArticleTopicHubStrip } from "@/components/articles/article-topic-hub-strip"
import {
  ArticleLayout,
  ArticleTableOfContents,
} from "@/components/layout/article-layout"
import { RelatedResources } from "@/components/sections/related-resources"
import { ArticleJsonLd } from "@/components/seo/article-json-ld"
import type { ArticlePageProps } from "@/lib/content/article-page"
import type { ArticleSeriesNav as ArticleSeriesNavData } from "@/lib/content/series"
import type { BreadcrumbLink } from "@/lib/breadcrumbs/types"

type ArticlePageTemplateProps = {
  article: ArticlePageProps
  breadcrumbs: ReadonlyArray<BreadcrumbLink>
  seriesNav?: ArticleSeriesNavData
  children: React.ReactNode
}

function ArticlePageTemplate({
  article,
  breadcrumbs,
  seriesNav,
  children,
}: ArticlePageTemplateProps) {
  const relatedTitle =
    article.collection === "blog" ? "Related articles" : "Related guides"
  const topicHub =
    article.topicHubHref && article.topicHubLabel
      ? {
          category: "Guides",
          title: article.topicHubLabel,
          description: "More evergreen guides on this visa route.",
          href: article.topicHubHref,
        }
      : undefined

  return (
    <>
      <ArticleJsonLd article={article} />
      <main
        id="main-content"
        tabIndex={-1}
        aria-label={article.title}
        className="flex flex-1 flex-col"
      >
        <ArticleLayout
          breadcrumbs={breadcrumbs}
          title={article.title}
          headingId={article.headingId}
          eyebrow={article.eyebrow}
          answer={article.answer}
          lead={article.lead}
          heroImage={article.heroImage}
          metadata={article.metadata}
          shareRow={
            <ArticleShareRow path={article.path} title={article.title} />
          }
          showPlaceholders={false}
          tableOfContents={
            <ArticleTableOfContents>
              <ArticleTableOfContentsLinks items={article.tableOfContents} />
            </ArticleTableOfContents>
          }
          relatedResources={
            article.related.length > 0 || (article.relatedVisas?.length ?? 0) > 0 ? (
              <div className="space-y-8">
                {article.related.length > 0 ? (
                  <RelatedResources
                    headingId={`${article.slug}-related-heading`}
                    eyebrow="Keep reading"
                    title={relatedTitle}
                    items={article.related}
                    maxItems={3}
                  />
                ) : null}
                {article.relatedVisas && article.relatedVisas.length > 0 ? (
                  <RelatedResources
                    headingId={`${article.slug}-related-visas-heading`}
                    eyebrow="Visa services"
                    title="Related visa services"
                    items={article.relatedVisas}
                    maxItems={3}
                  />
                ) : null}
              </div>
            ) : null
          }
          cta={
            <ArticleConsultationBand
              title={article.cta.title}
              description={article.cta.description}
              articleSlug={article.slug}
            />
          }
        >
          {article.relatedGuide ? (
            <ArticleRelatedGuideStrip guide={article.relatedGuide} />
          ) : null}
          {children}
          {topicHub ? (
            <ArticleTopicHubStrip topicHub={topicHub} className="mt-10" />
          ) : null}
          {article.sources?.length ? (
            <ArticleSources
              headingId={`${article.slug}-sources`}
              items={article.sources}
            />
          ) : null}
          {seriesNav ? <ArticleSeriesNav {...seriesNav} /> : null}
          <ArticleInlineFaq
            headingId={`${article.slug}-faq`}
            title="Common questions"
            description={`Short answers about ${article.title.toLowerCase()}.`}
            items={article.faq}
            jsonLd={{
              name: `${article.title}: FAQ`,
              path: article.path,
              description: article.lead,
              aboutArticle: true,
            }}
          />
        </ArticleLayout>
      </main>
    </>
  )
}

export { ArticlePageTemplate }
