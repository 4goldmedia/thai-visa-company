import { cn } from "@/lib/utils"

import { sectionEyebrowClass } from "@/lib/section-styles"

// -----------------------------------------------------------------------------
// Measure & layout
// -----------------------------------------------------------------------------

/** Optimal reading column (~65 characters) — Stripe / Linear docs scale */
export const articleMeasureClass = "max-w-[var(--article-measure,36rem)]"

/** Header + body column alignment */
export const articleColumnClass = cn(
  "mx-auto w-full",
  articleMeasureClass
)

/** Grid: TOC + prose on large screens */
export const articleGridClass = cn(
  "mx-auto grid w-full gap-10",
  "lg:max-w-[calc(var(--article-measure,36rem)+11rem+3.5rem)]",
  "lg:grid-cols-[9.5rem_minmax(0,var(--article-measure,36rem))]",
  "lg:justify-center lg:gap-x-14"
)

// -----------------------------------------------------------------------------
// Header
// -----------------------------------------------------------------------------

export const articleEyebrowClass = cn(
  sectionEyebrowClass,
  "tracking-[0.08em] uppercase text-muted-foreground/90"
)

export const articleTitleClass = cn(
  "font-semibold tracking-[-0.02em] text-balance text-foreground",
  "text-[1.5rem] leading-[1.2]",
  "sm:text-[1.625rem] sm:leading-[1.18]",
  "md:text-[1.75rem] md:leading-[1.15]"
)

export const articleLeadClass = cn(
  "mt-5 text-[16px] leading-[1.75] text-pretty text-muted-foreground",
  "sm:mt-6 sm:text-[17px] sm:leading-[1.72]",
  "max-w-[34rem]"
)

/** Calm metadata — reading time primary, dates secondary */
export const articleMetaClass = "flex flex-col gap-2 sm:gap-2.5"

export const articleMetaPrimaryClass =
  "flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px] leading-snug text-muted-foreground"

export const articleMetaSecondaryClass =
  "text-[12px] leading-relaxed text-muted-foreground/65 tabular-nums"

export const articleHeaderClass = cn(
  "pb-10 sm:pb-12 md:pb-14",
  "border-b border-border/35"
)

// -----------------------------------------------------------------------------
// Prose (MDX body)
// -----------------------------------------------------------------------------

export const articleProseClass = cn(
  "text-[16px] leading-[var(--article-leading,1.75)] tracking-[0.01em]",
  "text-foreground/88 sm:text-[17px] sm:leading-[1.78]",
  // Section headings — clear hierarchy, generous space above
  "[&_h2]:mt-[var(--article-section-gap,2.75rem)] [&_h2]:scroll-mt-28",
  "[&_h2]:text-[1.125rem] [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:text-foreground",
  "sm:[&_h2]:mt-[var(--article-section-gap,3.25rem)] sm:[&_h2]:text-[1.1875rem]",
  "[&_h2:first-child]:mt-0",
  "[&_h3]:mt-9 [&_h3]:scroll-mt-28",
  "[&_h3]:text-[15px] [&_h3]:font-semibold [&_h3]:tracking-[-0.01em] [&_h3]:text-foreground/95",
  "sm:[&_h3]:mt-10 sm:[&_h3]:text-[16px]",
  // Paragraphs — airy, readable measure inherited from parent
  "[&_p]:mt-5 [&_p]:max-w-[34rem] [&_p]:text-pretty [&_p]:text-muted-foreground",
  "[&_p:first-child]:mt-0",
  "[&_h2+_p]:mt-4",
  "[&_h3+_p]:mt-3.5",
  // Lists
  "[&_ul]:mt-5 [&_ul]:max-w-[34rem] [&_ul]:list-none [&_ul]:space-y-3 [&_ul]:p-0",
  "[&_ul>li]:relative [&_ul>li]:pl-[1.125rem] [&_ul>li]:leading-[1.72] [&_ul>li]:text-muted-foreground",
  "[&_ul>li]:before:absolute [&_ul>li]:before:left-0 [&_ul>li]:before:top-[0.72em]",
  "[&_ul>li]:before:size-[5px] [&_ul>li]:before:rounded-full [&_ul>li]:before:bg-foreground/20",
  "[&_ol]:mt-5 [&_ol]:max-w-[34rem] [&_ol]:list-decimal [&_ol]:space-y-3",
  "[&_ol]:pl-[1.375rem] [&_ol]:leading-[1.72] [&_ol]:text-muted-foreground",
  "[&_ol>li]:pl-1",
  // Inline
  "[&_a]:font-medium [&_a]:text-foreground/75 [&_a]:underline [&_a]:decoration-foreground/20",
  "[&_a]:underline-offset-[3px] [&_a]:transition-colors hover:[&_a]:text-foreground hover:[&_a]:decoration-foreground/40",
  "[&_strong]:font-medium [&_strong]:text-foreground/90",
  // Blockquote — soft panel, not a heavy rule
  "[&_blockquote]:mt-8 [&_blockquote]:max-w-[34rem] [&_blockquote]:rounded-lg",
  "[&_blockquote]:border [&_blockquote]:border-border/40 [&_blockquote]:bg-muted/15",
  "[&_blockquote]:px-4 [&_blockquote]:py-3.5",
  "sm:[&_blockquote]:px-5 sm:[&_blockquote]:py-4",
  "[&_blockquote]:text-[15px] [&_blockquote]:leading-[1.72] [&_blockquote]:text-muted-foreground",
  "[&_blockquote_strong]:text-foreground/85"
)

export const articleBodyClass = cn(
  articleProseClass,
  "min-w-0 py-10 sm:py-12 md:py-14"
)

// -----------------------------------------------------------------------------
// Table of contents
// -----------------------------------------------------------------------------

/** Desktop: minimal sidebar. Mobile: light separator, no card chrome */
export const articleTocNavClass = cn(
  "border-b border-border/35 pb-8",
  "lg:border-0 lg:pb-0 lg:pt-0.5"
)

export const articleTocHeadingClass =
  "text-[11px] font-medium uppercase tracking-[0.1em] text-muted-foreground/80"

export const articleTocLinkClass = cn(
  "block py-0.5 text-[13px] leading-snug text-muted-foreground/90",
  "transition-colors hover:text-foreground",
  "underline-offset-[3px] hover:underline",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
)

// -----------------------------------------------------------------------------
// In-article FAQ band
// -----------------------------------------------------------------------------

export const articleFaqSectionClass = cn(
  "mt-[var(--article-section-gap,2.75rem)] scroll-mt-28",
  "border-t border-border/35 pt-10 sm:pt-12"
)

export const articleFaqTitleClass =
  "text-[1.125rem] font-semibold tracking-[-0.02em] text-foreground sm:text-[1.1875rem]"

export const articleFaqDescriptionClass =
  "mt-2.5 max-w-[34rem] text-[15px] leading-[1.7] text-muted-foreground sm:text-[16px] sm:leading-[1.72]"

/** @deprecated Use articleTocNavClass — flat TOC without card panel */
export const articleAsideClass = articleTocNavClass
