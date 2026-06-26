import Image from "next/image"
import Link from "next/link"

import { ctaLabels } from "@/lib/cta"
import type { BlogPostStatus } from "@/lib/blog/types"
import { editorialLinkCompactClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type BlogPostCardProps = {
  title: string
  description: string
  category: string
  href: string
  status?: BlogPostStatus
  readingTime?: string
  publishedAt?: string
  updatedAt?: string
  image?: string
  authorName?: string
  ctaLabel?: string
  variant?: "default" | "editorial"
  className?: string
}

function formatPublishDate(value?: string): string | null {
  if (!value) return null
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return null
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function BlogPostCard({
  title,
  description,
  category,
  href,
  status = "published",
  readingTime,
  publishedAt,
  image,
  authorName,
  ctaLabel = ctaLabels.readGuide,
  variant = "default",
  className,
}: BlogPostCardProps) {
  const isPlanned = status === "planned"
  const publishDate = formatPublishDate(publishedAt)
  const isEditorial = variant === "editorial"

  if (isEditorial) {
    return (
      <article
        data-slot="blog-post-card"
        data-status={status}
        data-variant="editorial"
        className={cn(
          "blog-index-card group relative flex h-full min-h-0 flex-col",
          isPlanned && "blog-index-card--planned",
          className,
        )}
      >
        <div className="blog-index-card__media">
          {image && !isPlanned ? (
            <Image
              src={image}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="blog-index-card__media-placeholder" aria-hidden />
          )}
        </div>

        <div className="blog-index-card__body">
          <p className="blog-index-card__category">
            <span className="sr-only">Category: </span>
            {category}
          </p>
          <h3 className="blog-index-card__title">{title}</h3>
          <p className="blog-index-card__excerpt">{description}</p>
          {authorName ? (
            <p className="blog-index-card__author">{authorName}</p>
          ) : null}
          <div className="blog-index-card__meta">
            {publishDate && !isPlanned ? (
              <time dateTime={publishedAt}>{publishDate}</time>
            ) : null}
            {readingTime && !isPlanned ? <span>{readingTime}</span> : null}
            {isPlanned ? (
              <span className="blog-index-card__badge">Coming soon</span>
            ) : null}
          </div>
          {!isPlanned ? (
            <span className={cn("blog-index-card__cta", editorialLinkCompactClass)} aria-hidden>
              {ctaLabel}
            </span>
          ) : (
            <p className="blog-index-card__planned-copy">
              Article in progress. Message us on LINE if you need this topic now.
            </p>
          )}
        </div>

        {!isPlanned ? (
          <Link
            href={href}
            className="absolute inset-0 rounded-[inherit] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <span className="sr-only">
              {ctaLabel}: {title}
            </span>
          </Link>
        ) : null}
      </article>
    )
  }

  return (
    <article
      data-slot="blog-post-card"
      data-status={status}
      className={cn(
        "relative flex h-full min-h-0 flex-col rounded-[var(--radius-card)] border border-border/55 bg-card p-4 sm:p-5",
        !isPlanned && "group",
        isPlanned && "border-dashed bg-muted/5",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs leading-none text-muted-foreground">
            <span className="sr-only">Category: </span>
            {category}
          </p>
          {publishDate && !isPlanned ? (
            <span className="text-[11px] text-muted-foreground/80 sm:text-xs">
              {publishDate}
            </span>
          ) : null}
          {isPlanned ? (
            <span className="rounded-md bg-muted/60 px-2 py-0.5 text-[11px] font-medium text-muted-foreground sm:text-xs">
              Coming soon
            </span>
          ) : null}
        </div>

        <h3 className="mt-2.5 text-[15px] font-medium leading-snug text-foreground sm:mt-3">
          {title}
        </h3>

        <p className="mt-2 flex-1 text-[14px] leading-[1.65] text-muted-foreground sm:mt-2.5">
          {description}
        </p>

        {!isPlanned ? (
          <div className="mt-3.5 flex flex-wrap items-center gap-3 sm:mt-4">
            <span
              className={cn(
                editorialLinkCompactClass,
                "transition-colors group-hover:text-foreground",
              )}
              aria-hidden
            >
              {ctaLabel}
            </span>
            {readingTime ? (
              <span className="text-[12px] text-muted-foreground">{readingTime}</span>
            ) : null}
          </div>
        ) : (
          <p className="mt-3.5 text-[13px] leading-snug text-muted-foreground sm:mt-4">
            Article in progress. Message us on LINE if you need this topic now.
          </p>
        )}
      </div>

      {!isPlanned ? (
        <Link
          href={href}
          className={cn(
            "absolute inset-0 rounded-lg",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          )}
        >
          <span className="sr-only">
            {ctaLabel}: {title}
          </span>
        </Link>
      ) : null}
    </article>
  )
}

export { BlogPostCard }
export type { BlogPostCardProps }
