import { ArticleConsultationBand } from "@/components/articles/article-consultation-band"
import { ArticleInlineFaq } from "@/components/articles/article-inline-faq"
import { ArticleRelatedGuideStrip } from "@/components/articles/article-related-guide-strip"
import { ArticleSeriesNav } from "@/components/articles/article-series-nav"
import { ArticleSources } from "@/components/articles/article-sources"
import { ArticleTopicHubStrip } from "@/components/articles/article-topic-hub-strip"
import { ArticleCTA } from "@/components/editorial/article-cta"
import { ArticleLinkCard } from "@/components/editorial/article-link-card"
import { RelatedArticles } from "@/components/editorial/related-articles"
import { BlogArticleLayout } from "@/components/layout/blog-article-layout"
import { ArticleJsonLd } from "@/components/seo/article-json-ld"
import type { ResolvedBlogArticlePageContext } from "@/lib/content/routing/blog-types"

type BlogArticlePageViewProps = {
  context: ResolvedBlogArticlePageContext
}

function usesAuthorityArticleTemplate(
  contentType: ResolvedBlogArticlePageContext["route"]["page"]["contentType"],
): boolean {
  return contentType === "guide" || contentType === "comparison"
}

const editorialFaqClassName = "editorial-faq-card"

function BlogArticlePageView({ context }: BlogArticlePageViewProps) {
  const { route, related, relatedGuide, topicHub, breadcrumbs, seriesNav } = context
  const { MdxContent, page } = route
  const isAuthority = usesAuthorityArticleTemplate(page.contentType)

  const category =
    page.index?.clusterLabel ?? page.metadata.category ?? page.eyebrow ?? "Article"

  const topicHubStrip =
    topicHub?.href && topicHub?.title
      ? {
          category: "Guides",
          title: topicHub.title,
          description: "More evergreen guides on this visa route.",
          href: topicHub.href,
        }
      : undefined

  const relatedSlot = related.length > 0 ? <RelatedArticles items={related} /> : null

  return (
    <>
      <ArticleJsonLd article={{ ...page, related }} />
      <main
        id="main-content"
        tabIndex={-1}
        aria-label={page.title}
        className="flex flex-1 flex-col"
      >
        <BlogArticleLayout
          breadcrumbs={breadcrumbs}
          title={page.title}
          headingId={page.headingId}
          lead={page.lead}
          answer={page.answer}
          heroImage={page.heroImage}
          metadata={page.metadata}
          category={category}
          path={page.path}
          tableOfContents={page.tableOfContents}
          cta={
            isAuthority ? (
              <ArticleConsultationBand
                title={page.cta.title}
                description={page.cta.description}
                articleSlug={page.slug}
              />
            ) : (
              <ArticleCTA
                title={page.cta.title}
                description={page.cta.description}
                articleSlug={page.slug}
              />
            )
          }
          relatedResources={relatedSlot}
        >
          {isAuthority && relatedGuide ? (
            <ArticleRelatedGuideStrip guide={relatedGuide} />
          ) : null}
          <MdxContent />
          {topicHubStrip ? (
            <ArticleTopicHubStrip topicHub={topicHubStrip} className="mt-10" />
          ) : null}
          {page.sources?.length ? (
            <ArticleSources
              headingId={`${page.slug}-sources`}
              items={page.sources}
            />
          ) : null}
          {seriesNav ? <ArticleSeriesNav {...seriesNav} /> : null}
          {!isAuthority && relatedGuide ? (
            <ArticleLinkCard
              href={relatedGuide.href}
              category="Canonical guide"
              title={relatedGuide.title}
              description={relatedGuide.description}
              ctaLabel="Read the full guide"
            />
          ) : null}
          <ArticleInlineFaq
            headingId={`${page.slug}-faq`}
            title={isAuthority ? "Common questions" : "Frequently asked questions"}
            description={`Short answers about ${page.title.toLowerCase()}.`}
            items={page.faq}
            className={editorialFaqClassName}
            jsonLd={{
              name: `${page.title}: FAQ`,
              path: page.path,
              description: page.lead,
              aboutArticle: true,
            }}
          />
        </BlogArticleLayout>
      </main>
    </>
  )
}

export { BlogArticlePageView }
