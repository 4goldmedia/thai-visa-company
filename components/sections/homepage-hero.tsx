import { BadgeCheck, ClipboardList, MessageCircle } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { HeroContactStrip } from "@/components/cta/hero-contact-strip"
import { HeroReferenceCtaGroup } from "@/components/cta/hero-reference-cta-group"
import { Container } from "@/components/layout/container"
import { HeroResponsiveMediaFrame } from "@/components/media/hero-responsive-media-frame"
import { GoogleReviewSummary } from "@/components/ui/google-review-summary"
import { motionClass } from "@/lib/motion-classes"
import { heroPhotography } from "@/lib/media/photography"
import { homepageAiCopy } from "@/lib/seo/ai-search"
import { defaultGoogleReviewSummary } from "@/lib/reviews/google-summary"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"
import { cn } from "@/lib/utils"

const trustIndicators: ReadonlyArray<{
  icon: LucideIcon
  title: string
  subtitle: string
}> = [
  {
    icon: BadgeCheck,
    title: "Licensed Thai immigration specialists",
    subtitle: "Personalized guidance for your move to Thailand",
  },
  {
    icon: ClipboardList,
    title: "Document preparation",
    subtitle: "Checklists and submission guidance",
  },
  {
    icon: MessageCircle,
    title: "Tourist, business, and long-stay visas",
    subtitle: "Guidance through the full process",
  },
]

function HomepageHeroTrustPanel() {
  return (
    <aside
      className={cn(
        "hero-premium__panel",
        motionClass.fadeUpMount,
        motionClass.delay60,
      )}
      aria-label="Why clients choose Thai Visa Company"
    >
      <ul className="hero-premium__panel-list">
        {trustIndicators.map((item) => (
          <li key={item.title} className="hero-premium__panel-item">
            <span className="hero-premium__panel-icon" aria-hidden>
              <item.icon />
            </span>
            <div className="hero-premium__panel-copy">
              <span className="hero-premium__panel-title">{item.title}</span>
              <span className="hero-premium__panel-subtitle">{item.subtitle}</span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  )
}

/**
 * Homepage hero — high-fidelity reference composition.
 * Other routes continue to use PageHero.
 */
function HomepageHero() {
  const heroMedia = heroPhotography.homepage

  return (
    <section
      id={sectionIds.hero}
      className="hero-premium"
      aria-labelledby={sectionHeadingIds.hero}
    >
      <div className="hero-premium__atmosphere" aria-hidden />

      {/* Desktop full-bleed — not mounted in layout below lg (avoids loading LS on mobile) */}
      <div className="hero-premium__environment hidden lg:block" aria-hidden>
        <HeroResponsiveMediaFrame
          assets={heroMedia}
          variant="immersive"
          priority
        />
      </div>

      <Container className="hero-premium__container">
        <div className="hero-premium__stage">
          <div className={cn("hero-premium__copy", motionClass.fadeUpMount)}>
            <p className="hero-premium__eyebrow">{homepageAiCopy.heroEyebrow}</p>

            <h1 id={sectionHeadingIds.hero} className="hero-premium__title">
              Your move to
              <br className="hero-premium__title-br" aria-hidden />
              Thailand,
              <br
                className="hero-premium__title-br hero-premium__title-br--tablet"
                aria-hidden
              />
              <span className="hero-premium__title-closing">
                <span className="hero-premium__title-made">made</span>{" "}
                <br
                  className="hero-premium__title-br hero-premium__title-br--desktop"
                  aria-hidden
                />
                <span className="hero-premium__title-simple">simple.</span>
              </span>
            </h1>

            <p
              className="hero-premium__lead"
              data-page-summary={homepageAiCopy.heroLeadLine}
            >
              {homepageAiCopy.heroLeadLine}
            </p>

            <div className="hero-premium__review">
              <GoogleReviewSummary
                rating={defaultGoogleReviewSummary.rating}
                reviewCount={defaultGoogleReviewSummary.reviewCount}
                sourceLabel={defaultGoogleReviewSummary.sourceLabel}
                layout="inline"
                size="sm"
                includeBusinessInLabel
              />
            </div>

            <div className="hero-premium__cta">
              <HeroReferenceCtaGroup />
              <HeroContactStrip />
            </div>
          </div>

          <div className="hero-premium__panel-slot">
            <HomepageHeroTrustPanel />
          </div>
        </div>

        {/* Mobile/tablet inline scene — hidden on lg where environment takes over */}
        <div
          className={cn(
            "hero-premium__scene lg:hidden",
            motionClass.fadeUpMount,
            motionClass.delay60,
          )}
        >
          <HeroResponsiveMediaFrame assets={heroMedia} priority />
        </div>
      </Container>
    </section>
  )
}

export { HomepageHero }
