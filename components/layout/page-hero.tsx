import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"

import { GoogleReviewSummary } from "@/components/ui/google-review-summary"
import { motionClass } from "@/lib/motion-classes"
import { defaultGoogleReviewSummary } from "@/lib/reviews/google-summary"
import {
  heroContentColumnClass,
  heroEyebrowToTitleClass,
  heroGridClass,
  heroLeadToCtaClass,
  heroTrustDividerClass,
  heroTrustIconClass,
  heroTrustListItemClass,
  pageLeadClass,
  pageTitleClass,
  pageTitleSecondaryClass,
  sectionEyebrowClass,
  trustDividerClass,
  trustIconClass,
  trustListItemClass,
} from "@/lib/section-styles"
import { cn } from "@/lib/utils"

export type PageHeroTrustItem = {
  icon: LucideIcon
  label: string
}

export type PageHeroReviewProof = {
  rating: number
  reviewCount: string | number
  source?: string
}

export type PageHeroProps = {
  eyebrow: string
  /** Primary H1 text */
  title: string
  /** Optional second line (homepage brand tagline) */
  titleSecondary?: string
  lead?: string
  headingId: string
  /** Marks extractable summary for SEO */
  pageSummary?: string
  /** Messaging CTAs */
  ctaSlot?: ReactNode
  /** Line below CTAs, e.g. response time */
  metaLine?: string
  /** Right column or below on mobile */
  mediaSlot?: ReactNode
  /** Optional graphite dot before eyebrow label */
  showEyebrowMarker?: boolean
  /** Quieter trust styling for homepage hero */
  trustTone?: "default" | "premium"
  reviewProof?: PageHeroReviewProof
  trustItems?: ReadonlyArray<PageHeroTrustItem>
  className?: string
  contentClassName?: string
}

function PageHeroReviewBadge({
  rating,
  reviewCount,
  source = defaultGoogleReviewSummary.sourceLabel,
}: PageHeroReviewProof) {
  return (
    <GoogleReviewSummary
      rating={rating}
      reviewCount={reviewCount}
      sourceLabel={source}
      layout="inline"
      size="sm"
      includeBusinessInLabel
    />
  )
}

/**
 * Unified premium hero  -  display type, split layout, trust below CTAs.
 */
function PageHero({
  eyebrow,
  title,
  titleSecondary,
  lead,
  headingId,
  pageSummary,
  ctaSlot,
  metaLine,
  mediaSlot,
  showEyebrowMarker = false,
  trustTone = "default",
  reviewProof,
  trustItems,
  className,
  contentClassName,
}: PageHeroProps) {
  const hasTrust =
    reviewProof !== undefined || (trustItems && trustItems.length > 0)
  const isPremiumTrust = trustTone === "premium"

  const dividerClass = isPremiumTrust ? heroTrustDividerClass : trustDividerClass
  const listItemClass = isPremiumTrust ? heroTrustListItemClass : trustListItemClass
  const iconClass = isPremiumTrust ? heroTrustIconClass : trustIconClass

  return (
    <div
      className={cn(
        mediaSlot ? heroGridClass : "flex flex-col",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-full flex-col",
          heroContentColumnClass,
          mediaSlot ? undefined : "max-w-2xl",
          motionClass.fadeUpMount,
          contentClassName,
        )}
      >
        <p
          className={cn(
            sectionEyebrowClass,
            showEyebrowMarker && "section-eyebrow-marker",
          )}
        >
          {eyebrow}
        </p>

        <h1 id={headingId} className={cn(heroEyebrowToTitleClass, pageTitleClass)}>
          <span className="block">{title}</span>
          {titleSecondary ? (
            <span className={pageTitleSecondaryClass}>{titleSecondary}</span>
          ) : null}
        </h1>

        {lead ? (
          <p
            className={pageLeadClass}
            {...(pageSummary ? { "data-page-summary": pageSummary } : {})}
          >
            {lead}
          </p>
        ) : null}

        {ctaSlot ? <div className={heroLeadToCtaClass}>{ctaSlot}</div> : null}

        {metaLine ? (
          <p className="mt-4 text-[length:var(--text-small)] leading-relaxed text-[var(--text-tertiary)] sm:mt-5">
            {metaLine}
          </p>
        ) : null}

        {hasTrust ? (
          <div className={dividerClass}>
            {reviewProof ? <PageHeroReviewBadge {...reviewProof} /> : null}

            {trustItems && trustItems.length > 0 ? (
              <ul
                className={cn(
                  "flex flex-col",
                  isPremiumTrust
                    ? "gap-[var(--space-hero-trust-gap)]"
                    : "gap-3",
                  reviewProof ? "mt-3.5 sm:mt-4" : undefined,
                )}
              >
                {trustItems.map((item) => (
                  <li key={item.label} className={listItemClass}>
                    <item.icon
                      className={iconClass}
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>

      {mediaSlot ? (
        <div
          className={cn(
            "mx-auto w-full max-w-[22rem] sm:max-w-md lg:mx-0 lg:max-w-none",
            motionClass.fadeUpMount,
            motionClass.delay60,
          )}
        >
          {mediaSlot}
        </div>
      ) : null}
    </div>
  )
}

export { PageHero, PageHeroReviewBadge }
