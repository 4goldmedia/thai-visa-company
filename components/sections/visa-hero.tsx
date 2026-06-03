import { SignatureMessagingCtaGroup } from "@/components/cta/signature-messaging-cta-group"
import { HeroMediaFrame } from "@/components/media/hero-media-frame"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import { VisaHeroTestimonialCard } from "@/components/visa-editorial/visa-hero-testimonial"
import { VisaPageMeta } from "@/components/visa-editorial/visa-page-meta"
import { analyticsDataAttributes } from "@/lib/analytics/attributes"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"
import type { ContentIsoDate, ContentVisaLastReviewed } from "@/lib/content/types"
import {
  resolveVisaHeroMedia,
  resolveVisaHeroTrustBullets,
  type VisaPageHeroContent,
} from "@/lib/visas/hero"
import type { VisaSlug } from "@/lib/visas/types"
import { visaPageClass } from "@/lib/visa-editorial-styles"
import { cn } from "@/lib/utils"

type VisaHeroProps = VisaPageHeroContent & {
  headingId: string
  visaSlug: VisaSlug
  updatedAt?: ContentIsoDate
  lastReviewed?: ContentVisaLastReviewed
  className?: string
}

function VisaHero({
  eyebrow = "Thailand visa support",
  title,
  subtitle,
  overview,
  trustBullets,
  testimonial,
  headingId,
  visaSlug,
  updatedAt,
  lastReviewed,
  heroImage,
  heroImageAlt,
  objectPosition,
  className,
}: VisaHeroProps) {
  const media = resolveVisaHeroMedia(visaSlug, {
    heroImage,
    heroImageAlt,
    objectPosition,
  })
  const trustItems = resolveVisaHeroTrustBullets(trustBullets)
  const messagingAnalytics = analyticsDataAttributes({
    ctaId: analyticsCtaIds.heroContact,
    surface: "visa_page",
    visaSlug,
  })

  return (
    <div className={cn("visa-hero-premium__inner", className)}>
      <div className="visa-hero-premium__grid">
        <div className="visa-hero-premium__copy">
          <p className="visa-hero-premium__eyebrow">{eyebrow}</p>

          <h1 id={headingId} className="visa-hero-premium__title">
            <span className="block">{title}</span>
            {subtitle ? (
              <span className="visa-hero-premium__subtitle">{subtitle}</span>
            ) : null}
          </h1>

          <p className="visa-hero-premium__lead" data-page-summary={overview}>
            {overview}
          </p>

          <div
            className="visa-hero-premium__cta"
            aria-label="Contact via messaging"
            {...messagingAnalytics}
          >
            <SignatureMessagingCtaGroup />
          </div>

          <div className="visa-hero-premium__trust">
            <ul className="visa-hero-premium__trust-list" aria-label="Why clients trust us">
              {trustItems.map((item) => (
                <li key={item.label} className="visa-hero-premium__trust-item">
                  <item.icon
                    className="visa-hero-premium__trust-icon"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {updatedAt ? (
            <VisaPageMeta updatedAt={updatedAt} lastReviewed={lastReviewed} />
          ) : null}
        </div>

        <div className="visa-hero-premium__media">
          <HeroMediaFrame
            asset={{
              src: media.src,
              alt: media.alt,
            }}
            objectPosition={media.objectPosition ?? "center"}
            priority
          />
        </div>
      </div>

      {testimonial ? <VisaHeroTestimonialCard {...testimonial} /> : null}
    </div>
  )
}

type VisaHeroSectionProps = VisaHeroProps & {
  sectionId?: string
  sectionClassName?: string
}

function VisaHeroSection({
  sectionId = "visa-hero",
  sectionClassName,
  ...heroProps
}: VisaHeroSectionProps) {
  return (
    <Section
      id={sectionId}
      spacing="default"
      aria-labelledby={heroProps.headingId}
      className={cn(
        visaPageClass,
        "visa-hero-section visa-hero-premium border-b border-border/50",
        sectionClassName,
      )}
    >
      <Container size="wide">
        <SectionReveal>
          <VisaHero {...heroProps} />
        </SectionReveal>
      </Container>
    </Section>
  )
}

export { VisaHero, VisaHeroSection }
export type { VisaHeroProps, VisaHeroSectionProps }
