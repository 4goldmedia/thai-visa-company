import { ArticleInlineFaq } from "@/components/articles/article-inline-faq"
import { ArticleCTA } from "@/components/editorial/article-cta"
import { ArticleLinkCard } from "@/components/editorial/article-link-card"
import { RelatedArticles } from "@/components/editorial/related-articles"
import { BlogArticleLayout } from "@/components/layout/blog-article-layout"
import { ArticleJsonLd } from "@/components/seo/article-json-ld"
import type { ResolvedBlogArticlePageContext } from "@/lib/content/routing/blog-types"

type BlogArticlePageViewProps = {
  context: ResolvedBlogArticlePageContext
}

function BlogArticlePageView({ context }: BlogArticlePageViewProps) {
  const { route, related, relatedVisas, relatedGuide, breadcrumbs } = context
  const { MdxContent, page } = route
  const article = {
    ...page,
    related,
    relatedVisas,
    relatedGuide,
  }

  const category =
    article.index?.clusterLabel ?? article.metadata.category ?? article.eyebrow

  return (
    <>
      <ArticleJsonLd article={article} />
      <main
        id="main-content"
        tabIndex={-1}
        aria-label={article.title}
        className="flex flex-1 flex-col"
      >
        <BlogArticleLayout
          breadcrumbs={breadcrumbs}
          title={article.title}
          headingId={article.headingId}
          lead={article.lead}
          answer={article.answer}
          heroImage={article.heroImage}
          metadata={article.metadata}
          category={category}
          path={article.path}
          tableOfContents={article.tableOfContents}
          cta={
            <ArticleCTA
              title={article.cta.title}
              description={article.cta.description}
              articleSlug={article.slug}
            />
          }
          relatedResources={
            article.related.length > 0 ? (
              <RelatedArticles items={article.related} />
            ) : null
          }
        >
          <MdxContent />
          {article.relatedGuide ? (
            <ArticleLinkCard
              href={article.relatedGuide.href}
              category="Canonical guide"
              title={article.relatedGuide.title}
              description={article.relatedGuide.description}
              ctaLabel="Read the full guide"
            />
          ) : null}
          <ArticleInlineFaq
            headingId={`${article.slug}-faq`}
            title="Frequently asked questions"
            description={`Short answers about ${article.title.toLowerCase()}.`}
            items={article.faq}
            className="!mt-[var(--editorial-section-gap,3.5rem)] !border-t !border-border/35 !pt-10 sm:!pt-12"
            jsonLd={{
              name: `${article.title} — FAQ`,
              path: article.path,
              description: article.lead,
              aboutArticle: true,
            }}
          />
        </BlogArticleLayout>
      </main>
    </>
  )
}

export { BlogArticlePageView }
