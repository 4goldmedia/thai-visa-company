import { HeroContactStrip } from "@/components/cta/hero-contact-strip"
import { Container } from "@/components/layout/container"
import { HeroResponsiveMediaFrame } from "@/components/media/hero-responsive-media-frame"
import { GoogleReviewSummary } from "@/components/ui/google-review-summary"
import { homepageMobileTrust } from "@/lib/content/trust-bar"
import { motionClass } from "@/lib/motion-classes"
import { heroPhotography } from "@/lib/media/photography"
import { homepageAiCopy } from "@/lib/seo/ai-search"
import { defaultGoogleReviewSummary } from "@/lib/reviews/google-summary"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"
import { cn } from "@/lib/utils"

function HomepageHeroMobileScene({
  assets,
}: {
  assets: (typeof heroPhotography)["homepage"]
}) {
  return (
    <div
      className={cn(
        "hero-premium__scene min-[1100px]:hidden",
        motionClass.fadeUpMount,
        motionClass.delay60,
      )}
    >
      <HeroResponsiveMediaFrame
        assets={assets}
        priority
        className="hero-premium__scene-frame"
      />
    </div>
  )
}

/** Stacked trust band under the portrait hero (<1100px). */
function HomepageHeroMobileTrust() {
  const { ariaLabel, items } = homepageMobileTrust

  return (
    <div
      className={cn(
        "hero-premium__mobile-trust",
        motionClass.fadeUpMount,
        motionClass.delay60,
      )}
      role="region"
      aria-label={ariaLabel}
    >
      <ul className="hero-premium__mobile-trust-list">
        {items.map((item) => (
          <li
            key={`${item.primary}-${item.secondary}`}
            className="hero-premium__mobile-trust-item"
          >
            <p className="hero-premium__mobile-trust-primary">{item.primary}</p>
            <p className="hero-premium__mobile-trust-secondary">{item.secondary}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * Homepage hero  -  photography-led composition.
 * Trust lives in the contact strip, mobile trust band, and TrustBar below.
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

      {/* Landscape full-bleed  -  large desktop only (≥1100px) */}
      <div className="hero-premium__environment hidden min-[1100px]:block" aria-hidden>
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
              Your Thailand
              <br className="hero-premium__title-br" aria-hidden />
              <span className="hero-premium__title-closing">
                Visa, made simple.
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

            <HeroContactStrip className="hero-premium__contact" />
          </div>

          <HomepageHeroMobileScene assets={heroMedia} />
          <HomepageHeroMobileTrust />
        </div>
      </Container>
    </section>
  )
}

export { HomepageHero }
