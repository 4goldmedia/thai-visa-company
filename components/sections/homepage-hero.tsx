import { preload } from "react-dom"

import { HeroContactStrip } from "@/components/cta/hero-contact-strip"
import { Container } from "@/components/layout/container"
import { GoogleReviewSummary } from "@/components/ui/google-review-summary"
import { homepageMobileTrust } from "@/lib/content/trust-bar"
import { motionClass } from "@/lib/motion-classes"
import { heroPhotography } from "@/lib/media/photography"
import { homepageAiCopy } from "@/lib/seo/ai-search"
import { defaultGoogleReviewSummary } from "@/lib/reviews/google-summary"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"
import { cn } from "@/lib/utils"

/** Stacked trust band under hero copy (<1100px). */
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
 * Homepage hero.
 * Desktop (≥1100px): full-bleed 2560×1440 landscape behind copy.
 * Below 1100px: cream copy, then a standalone 4:5 portrait below reviews.
 */
function HomepageHero() {
  const heroMedia = heroPhotography.homepage
  const desktopWidth = heroMedia.desktop.width ?? 2560
  const desktopHeight = heroMedia.desktop.height ?? 1440
  preload(heroMedia.desktop.src, {
    as: "image",
    media: "(min-width: 1100px)",
  })
  preload(heroMedia.mobile.src, {
    as: "image",
    media: "(max-width: 1099px)",
  })

  return (
    <section
      id={sectionIds.hero}
      className="hero-premium"
      aria-labelledby={sectionHeadingIds.hero}
    >
      <div className="hero-premium__visual">
        <div className="hero-premium__picture">
          <img
            className="hero-premium__image"
            src={heroMedia.desktop.src}
            alt={heroMedia.desktop.alt}
            width={desktopWidth}
            height={desktopHeight}
            decoding="async"
            fetchPriority="high"
          />
        </div>

        <Container className="hero-premium__container">
          <div className="hero-premium__stage">
            <div className={cn("hero-premium__copy", motionClass.fadeUpMount)}>
              <p className="hero-premium__eyebrow">{homepageAiCopy.heroEyebrow}</p>

              <h1 id={sectionHeadingIds.hero} className="hero-premium__title">
                Your Thailand{" "}
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
                  rating={5}
                  reviewCount={defaultGoogleReviewSummary.reviewCount}
                  sourceLabel={defaultGoogleReviewSummary.sourceLabel}
                  layout="inline"
                  size="sm"
                  includeBusinessInLabel
                />
              </div>

              <HeroContactStrip className="hero-premium__contact" />
            </div>
          </div>
        </Container>
      </div>

      <div className="hero-premium__mobile-image">
        <img
          src={heroMedia.mobile.src}
          alt={heroMedia.mobile.alt}
          width={heroMedia.mobile.width ?? 1080}
          height={heroMedia.mobile.height ?? 1350}
          decoding="async"
        />
      </div>

      <Container className="hero-premium__container">
        <HomepageHeroMobileTrust />
      </Container>
    </section>
  )
}

export { HomepageHero }
