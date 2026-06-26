import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { PremiumCtaSection, premiumCtaButtonLabel } from "@/components/sections/premium-cta-section"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"
import { Breadcrumbs } from "@/components/navigation/breadcrumbs"
import { Container } from "@/components/layout/container"
import type { BreadcrumbLink } from "@/lib/breadcrumbs"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import {
  articleAnswerClass,
  articleBandInnerClass,
  articleBodyClass,
  articleBylineClass,
  articleEyebrowClass,
  articleGridClass,
  articleHeaderClass,
  articleHeaderInnerClass,
  articleHeroImageClass,
  articleShellClass,
  articleLeadClass,
  articleMetaClass,
  articleMetaPrimaryClass,
  articleMetaSecondaryClass,
  articleTitleClass,
  articleTocHeadingClass,
  articleTocNavClass,
} from "@/lib/article-styles"
import type {
  ContentArticleAuthor,
  ContentArticleReviewedBy,
} from "@/lib/content/types"
import {
  cardPlaceholderClass,
  mobileReadableWidthClass,
} from "@/lib/section-styles"
import { cn } from "@/lib/utils"

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export type ArticleMetadata = {
  category?: string
  published?: string
  updated?: string
  readingTime?: string
  author?: ContentArticleAuthor
  reviewedBy?: ContentArticleReviewedBy
}

export type ArticleLayoutProps = {
  /** Optional breadcrumb trail above the article header */
  breadcrumbs?: ReadonlyArray<BreadcrumbLink>
  /** Article h1 */
  title: string
  /** Stable id for `aria-labelledby` and in-page anchors */
  headingId?: string
  eyebrow?: string
  /** Short AEO answer  -  direct response snippet */
  answer?: string
  /** Short intro / dek below the title */
  lead?: string
  /** Optional hero image path under `public/` */
  heroImage?: string
  metadata?: ArticleMetadata
  /** Optional muted share links below metadata */
  shareRow?: React.ReactNode
  /** Main article body (MDX, prose sections, etc.) */
  children: React.ReactNode
  /** Table of contents  -  omit to render the default placeholder */
  tableOfContents?: React.ReactNode | null
  /** Related guides  -  omit to render the default placeholder */
  relatedResources?: React.ReactNode | null
  /** Closing CTA  -  omit to render the default placeholder */
  cta?: React.ReactNode | null
  /** When false, omitted slots render nothing instead of placeholders */
  showPlaceholders?: boolean
  className?: string
}

// -----------------------------------------------------------------------------
// Metadata
// -----------------------------------------------------------------------------

function ArticleMetadataBar({ metadata }: { metadata: ArticleMetadata }) {
  const hasPrimary = metadata.readingTime || metadata.category
  const hasDates = metadata.published || metadata.updated

  if (!hasPrimary && !hasDates) return null

  return (
    <div className={cn(articleMetaClass, "mt-6 sm:mt-8")} role="doc-subtitle">
      {hasPrimary ? (
        <div className={articleMetaPrimaryClass}>
          {metadata.readingTime ? (
            <span>
              <span className="sr-only">Estimated reading time </span>
              {metadata.readingTime}
            </span>
          ) : null}
          {metadata.readingTime && metadata.category ? (
            <span aria-hidden className="text-muted-foreground/35">
              ·
            </span>
          ) : null}
          {metadata.category ? (
            <span className="text-muted-foreground/80">{metadata.category}</span>
          ) : null}
        </div>
      ) : null}

      {hasDates ? (
        <p className={articleMetaSecondaryClass}>
          {metadata.published ? (
            <>
              <span className="sr-only">Published </span>
              <time dateTime={metadata.published}>{metadata.published}</time>
            </>
          ) : null}
          {metadata.published && metadata.updated ? (
            <span aria-hidden className="mx-2 text-muted-foreground/30">
              ·
            </span>
          ) : null}
          {metadata.updated ? (
            <>
              <span className="text-muted-foreground/50">Updated </span>
              <time dateTime={metadata.updated}>{metadata.updated}</time>
            </>
          ) : null}
        </p>
      ) : null}
    </div>
  )
}

// -----------------------------------------------------------------------------
// Byline
// -----------------------------------------------------------------------------

function ArticleByline({ author }: { author?: ContentArticleAuthor }) {
  if (!author) return null

  const authorLabel = author.url ? (
    <Link href={author.url} className="font-medium text-foreground/75 hover:text-foreground">
      {author.name}
    </Link>
  ) : (
    <span className="font-medium text-foreground/75">{author.name}</span>
  )

  return (
    <p className={articleBylineClass}>
      <span className="sr-only">Written by </span>
      <span>By {authorLabel}</span>
      {author.role ? (
        <>
          <span aria-hidden className="text-muted-foreground/35">
            ·
          </span>
          <span>{author.role}</span>
        </>
      ) : null}
    </p>
  )
}

// -----------------------------------------------------------------------------
// Header
// -----------------------------------------------------------------------------

type ArticleHeaderProps = {
  breadcrumbs?: ReadonlyArray<BreadcrumbLink>
  title: string
  headingId: string
  eyebrow?: string
  answer?: string
  lead?: string
  heroImage?: string
  metadata?: ArticleMetadata
  shareRow?: React.ReactNode
}

function ArticleHeader({
  breadcrumbs,
  title,
  headingId,
  eyebrow,
  answer,
  lead,
  heroImage,
  metadata,
  shareRow,
}: ArticleHeaderProps) {
  return (
    <header className={articleHeaderClass}>
      {breadcrumbs?.length ? (
        <Breadcrumbs
          items={breadcrumbs}
          includeSchema={false}
          className="mb-5 sm:mb-6"
        />
      ) : null}
      {eyebrow ? <p className={articleEyebrowClass}>{eyebrow}</p> : null}

      <h1 id={headingId} className={cn(articleTitleClass, eyebrow ? "mt-3" : "")}>
        {title}
      </h1>

      {answer ? (
        <p className={articleAnswerClass} data-article-answer>
          {answer}
        </p>
      ) : null}

      {lead ? (
        <p className={articleLeadClass} data-page-summary role="doc-subtitle">
          {lead}
        </p>
      ) : null}

      {metadata?.author ? (
        <ArticleByline author={metadata.author} />
      ) : null}

      {heroImage ? (
        <figure className={articleHeroImageClass}>
          <Image
            src={heroImage}
            alt=""
            width={1200}
            height={630}
            className="h-auto w-full object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 36rem"
          />
        </figure>
      ) : null}

      {metadata ? <ArticleMetadataBar metadata={metadata} /> : null}
      {shareRow ? <div className="mt-5 sm:mt-6">{shareRow}</div> : null}
    </header>
  )
}

// -----------------------------------------------------------------------------
// Body
// -----------------------------------------------------------------------------

type ArticleBodyProps = {
  children: React.ReactNode
  className?: string
}

function ArticleBody({ children, className }: ArticleBodyProps) {
  return (
    <div id="article-content" className={cn(articleBodyClass, className)}>
      {children}
    </div>
  )
}

// -----------------------------------------------------------------------------
// Table of contents
// -----------------------------------------------------------------------------

type ArticleTableOfContentsProps = {
  children?: React.ReactNode
  headingId?: string
  className?: string
}

function ArticleTableOfContents({
  children,
  headingId = "article-toc-heading",
  className,
}: ArticleTableOfContentsProps) {
  return (
    <nav
      aria-labelledby={headingId}
      className={cn(
        articleTocNavClass,
        "lg:sticky lg:top-28 lg:self-start",
        className
      )}
    >
      <h2 id={headingId} className={articleTocHeadingClass}>
        On this page
      </h2>
      <div className="mt-4 lg:mt-5">{children}</div>
    </nav>
  )
}

function ArticleTableOfContentsPlaceholder() {
  return (
    <ArticleTableOfContents>
      <p className="text-[13px] leading-relaxed text-muted-foreground/90">
        Section links will appear here when the article is wired to a table of
        contents.
      </p>
    </ArticleTableOfContents>
  )
}

// -----------------------------------------------------------------------------
// Related resources
// -----------------------------------------------------------------------------

type ArticleRelatedResourcesProps = {
  children?: React.ReactNode
  headingId?: string
  title?: string
  className?: string
}

function ArticleRelatedResources({
  children,
  headingId = "article-related-heading",
  title = "Related guides",
  className,
}: ArticleRelatedResourcesProps) {
  return (
    <section
      aria-labelledby={headingId}
      className={cn("border-t border-border/35 py-12 sm:py-14 md:py-16", className)}
    >
      <Container>
        <div className={articleBandInnerClass}>
          <h2
            id={headingId}
            className="text-[1.125rem] font-semibold tracking-[-0.02em] text-foreground sm:text-[1.1875rem]"
          >
            {title}
          </h2>
          <div className="mt-6 sm:mt-8 max-w-[var(--width-prose-wide,52rem)]">{children}</div>
        </div>
      </Container>
    </section>
  )
}

function ArticleRelatedResourcesPlaceholder() {
  return (
    <p className={cardPlaceholderClass}>
      Pass a <code className="text-foreground/80">RelatedResources</code> or{" "}
      <code className="text-foreground/80">RelatedResourcesSection</code> via the{" "}
      <code className="text-foreground/80">relatedResources</code> slot.
    </p>
  )
}

// -----------------------------------------------------------------------------
// CTA
// -----------------------------------------------------------------------------

function ArticleCtaPlaceholder() {
  return (
    <PremiumCtaSection
      title="Questions about this topic?"
      description="Message us on LINE or WhatsApp. We help you apply what you have read to your situation."
      buttonLabel={premiumCtaButtonLabel}
      analyticsSurface="article"
      analyticsCtaId={analyticsCtaIds.articleCtaContact}
    />
  )
}

// -----------------------------------------------------------------------------
// Layout
// -----------------------------------------------------------------------------

function ArticleLayout({
  breadcrumbs,
  title,
  headingId: headingIdProp,
  eyebrow = "Visa guide",
  answer,
  lead,
  heroImage,
  metadata,
  shareRow,
  children,
  tableOfContents,
  relatedResources,
  cta,
  showPlaceholders = true,
  className,
}: ArticleLayoutProps) {
  const generatedHeadingId = React.useId()
  const headingId =
    headingIdProp ?? `article-${generatedHeadingId.replace(/[^a-zA-Z0-9_-]/g, "")}`

  const tocSlot =
    tableOfContents ??
    (showPlaceholders ? <ArticleTableOfContentsPlaceholder /> : null)

  const relatedSlot =
    relatedResources ??
    (showPlaceholders ? <ArticleRelatedResourcesPlaceholder /> : null)

  const ctaSlot = cta ?? (showPlaceholders ? <ArticleCtaPlaceholder /> : null)

  return (
    <article
      data-slot="article-layout"
      className={cn("flex flex-1 flex-col bg-background", className)}
      aria-labelledby={headingId}
    >
      <Container className="pt-10 sm:pt-12 md:pt-14">
        <div className={articleHeaderInnerClass}>
          <ArticleHeader
            breadcrumbs={breadcrumbs}
            title={title}
            headingId={headingId}
            eyebrow={eyebrow}
            answer={answer}
            lead={lead}
            heroImage={heroImage}
            metadata={metadata}
            shareRow={shareRow}
          />
        </div>
      </Container>

      <Container className="pb-6 sm:pb-8">
        <div className={cn(tocSlot ? articleGridClass : articleShellClass)}>
          {tocSlot ? (
            <div className="order-1 min-w-0 lg:col-start-1">
              {tocSlot}
            </div>
          ) : null}

          <div
            className={cn(
              "min-w-0",
              tocSlot ? "order-2 lg:col-start-2" : "order-1"
            )}
          >
            <ArticleBody>{children}</ArticleBody>
          </div>
        </div>
      </Container>

      {relatedSlot}
      {ctaSlot}
    </article>
  )
}

export {
  ArticleLayout,
  ArticleHeader,
  ArticleBody,
  ArticleMetadataBar,
  ArticleTableOfContents,
  ArticleTableOfContentsPlaceholder,
  ArticleRelatedResources,
  ArticleRelatedResourcesPlaceholder,
  ArticleCtaPlaceholder,
}
