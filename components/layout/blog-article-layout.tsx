import * as React from "react"

import { ArticleFeaturedImage } from "@/components/editorial/article-featured-image"
import { ArticleHero } from "@/components/editorial/article-hero"
import { ArticleQuickAnswer } from "@/components/editorial/article-quick-answer"
import { ArticleSidebarTools } from "@/components/editorial/article-sidebar-tools"
import { ArticleStickySidebar } from "@/components/editorial/article-sticky-sidebar"
import { ArticleTOCMobile } from "@/components/editorial/article-toc"
import { Container } from "@/components/layout/container"
import type { ArticleLayoutProps } from "@/components/layout/article-layout"
import { Breadcrumbs } from "@/components/navigation/breadcrumbs"
import type { ContentArticleTocItem } from "@/lib/content/types"
import { cn } from "@/lib/utils"

type BlogArticleLayoutProps = Omit<
  ArticleLayoutProps,
  "tableOfContents" | "shareRow" | "eyebrow" | "showPlaceholders"
> & {
  path: string
  category: string
  tableOfContents: ReadonlyArray<ContentArticleTocItem>
}

function BlogArticleLayout({
  breadcrumbs,
  title,
  headingId = "article-heading",
  lead = "",
  answer,
  heroImage,
  metadata,
  category,
  path,
  children,
  tableOfContents,
  relatedResources,
  cta,
  className,
}: BlogArticleLayoutProps) {
  return (
    <article
      data-slot="blog-article"
      className={cn("flex flex-1 flex-col", className)}
      aria-labelledby={headingId}
    >
      {breadcrumbs && breadcrumbs.length > 0 ? (
        <Container className="editorial-article-breadcrumbs-wrap">
          <div className="editorial-article-breadcrumbs">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </Container>
      ) : null}

      <Container className="editorial-article-stage">
        <div
          className={cn(
            "editorial-article-frame",
            (!breadcrumbs || breadcrumbs.length === 0) &&
              "editorial-article-frame--no-breadcrumbs",
          )}
        >
          <div className="editorial-article-layout-grid">
            <div className="editorial-article-main-column">
              <div className="editorial-article-hero-band">
                <ArticleHero
                  category={category}
                  title={title}
                  headingId={headingId}
                  summary={lead}
                  metadata={metadata}
                />
              </div>

              {heroImage ? (
                <div className="editorial-article-image-slot">
                  <ArticleFeaturedImage src={heroImage} alt={title} />
                </div>
              ) : null}

              <div className="editorial-article-body-slot min-w-0">
                <ArticleTOCMobile items={tableOfContents} />
                {answer ? <ArticleQuickAnswer answer={answer} /> : null}
                <div className="editorial-prose">{children}</div>
              </div>
            </div>

            <ArticleStickySidebar>
              <ArticleSidebarTools
                items={tableOfContents}
                path={path}
                title={title}
              />
            </ArticleStickySidebar>
          </div>
        </div>
      </Container>

      {cta}
      {relatedResources}
    </article>
  )
}

export { BlogArticleLayout }
