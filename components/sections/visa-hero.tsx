import { BadgeCheck, MessageCircle, Star } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { ContactCtaGroup } from "@/components/cta"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { motionClass } from "@/lib/motion-classes"
import {
  mobileReadableWidthClass,
  sectionEyebrowClass,
} from "@/lib/section-styles"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

type VisaHeroTrustItem = {
  icon: LucideIcon
  label: string
}

type VisaHeroReviewProof = {
  rating: number
  reviewCount: string
  source?: string
}

type VisaHeroProps = {
  /** Page h1 — visa name or search-intent title */
  title: string
  /** Short overview — who it is for and what support covers */
  overview: string
  /** Eyebrow above the title */
  eyebrow?: string
  /** Stable id for `aria-labelledby` on the parent `<section>` */
  headingId: string
  /** Optional trust bullets below review proof */
  trustItems?: ReadonlyArray<VisaHeroTrustItem>
  reviewProof?: VisaHeroReviewProof
  /** Show tertiary “Explore visa options” link — off by default on visa pages */
  showExploreCta?: boolean
  className?: string
}

const defaultTrustItems: ReadonlyArray<VisaHeroTrustItem> = [
  {
    icon: MessageCircle,
    label: "Same-day replies on LINE and WhatsApp",
  },
  {
    icon: BadgeCheck,
    label: "Clear requirements and next steps for your situation",
  },
]

const defaultReviewProof: VisaHeroReviewProof = {
  rating: 4.9,
  reviewCount: "120+",
  source: "Google",
}

function VisaHeroReviewBadge({
  rating,
  reviewCount,
  source = "Google",
}: VisaHeroReviewProof) {
  const label = `${siteConfig.name} is rated ${rating} out of 5 on ${source} from more than ${reviewCount} reviews`

  return (
    <div
      className="flex flex-wrap items-center gap-x-3 gap-y-1"
      role="group"
      aria-label={label}
    >
      <div className="flex items-center gap-1.5" aria-hidden>
        <div className="flex gap-px">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className="size-3 fill-amber-500/75 text-amber-500/75"
            />
          ))}
        </div>
        <span className="text-sm font-semibold tabular-nums tracking-tight text-foreground">
          {rating}
        </span>
      </div>
      <p className="text-[13px] leading-snug text-muted-foreground">
        on {source} · {reviewCount} reviews
      </p>
    </div>
  )
}

function VisaHero({
  title,
  overview,
  eyebrow = "Thailand visa support",
  headingId,
  trustItems = defaultTrustItems,
  reviewProof = defaultReviewProof,
  showExploreCta = false,
  className,
}: VisaHeroProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col",
        mobileReadableWidthClass,
        "max-w-2xl",
        motionClass.fadeUpMount,
        className
      )}
    >
      <p className={sectionEyebrowClass}>{eyebrow}</p>

      <h1
        id={headingId}
        className="mt-2 text-[1.375rem] font-semibold leading-[1.22] tracking-tight text-balance text-foreground sm:mt-2.5 sm:text-2xl md:text-[1.75rem] md:leading-[1.2]"
      >
        {title}
      </h1>

      <p className="mt-3 text-[15px] leading-[1.7] text-pretty text-muted-foreground sm:mt-3.5 sm:text-base sm:leading-relaxed">
        {overview}
      </p>

      <ContactCtaGroup
        className="mt-5 sm:mt-6"
        showExplore={showExploreCta}
      />

      <div className="mt-6 border-t border-border/50 pt-5 sm:mt-7 sm:pt-6">
        <VisaHeroReviewBadge {...reviewProof} />

        <ul className="mt-4 flex flex-col gap-2.5 sm:mt-5">
          {trustItems.map((item) => (
            <li
              key={item.label}
              className="flex items-start gap-2.5 text-[13px] leading-snug text-muted-foreground"
            >
              <item.icon
                className="mt-0.5 size-3.5 shrink-0 text-foreground/35"
                strokeWidth={1.75}
                aria-hidden
              />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

type VisaHeroSectionProps = VisaHeroProps & {
  /** Section anchor id — e.g. `retirement-visa` */
  sectionId?: string
  className?: string
  sectionClassName?: string
}

function VisaHeroSection({
  sectionId = "visa-hero",
  sectionClassName,
  headingId,
  ...heroProps
}: VisaHeroSectionProps) {
  return (
    <Section
      id={sectionId}
      spacing="default"
      aria-labelledby={headingId}
      className={cn("border-b border-border/50", sectionClassName)}
    >
      <Container>
        <VisaHero headingId={headingId} {...heroProps} />
      </Container>
    </Section>
  )
}

export {
  VisaHero,
  VisaHeroSection,
  VisaHeroReviewBadge,
  defaultTrustItems,
  defaultReviewProof,
}
export type {
  VisaHeroProps,
  VisaHeroSectionProps,
  VisaHeroTrustItem,
  VisaHeroReviewProof,
}
