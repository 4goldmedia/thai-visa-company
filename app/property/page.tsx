import type { Metadata } from "next"
import Link from "next/link"

import { WhyFeatureItem } from "@/components/cards/why-feature-item"
import { PropertyLifestyleGallery } from "@/components/property/property-lifestyle-gallery"
import { PremiumCtaSection } from "@/components/sections/premium-cta-section"
import { TeamFounderCard } from "@/components/team/team-founder-card"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { analyticsDataAttributes } from "@/lib/analytics/attributes"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"
import { propertyPageContent, propertyPath } from "@/lib/content/property"
import { ctaHref } from "@/lib/cta"
import { createPageMetadata } from "@/lib/seo"
import { signatureCtaPrimaryClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

export const metadata: Metadata = createPageMetadata({
  title: "Property in Thailand",
  description:
    "Find your perfect place in Thailand with personal guidance from Nongmai. Curated homes, local expertise, and end-to-end relocation support.",
  path: propertyPath,
})

/**
 * Property page  -  same design language as Team + Homepage.
 * Reuses team hero/about/founder patterns and homepage WhyFeatureItem + PremiumCta.
 */
export default function PropertyPage() {
  const { hero, about, features, services, gallery, specialist, cta } =
    propertyPageContent

  return (
    <main id="main-content" tabIndex={-1} className="property-page team-page">
      {/* Hero  -  Team page layout */}
      <section className="team-hero" aria-labelledby="property-hero-title">
        <div className="team-page__container team-hero__grid">
          <div className="team-hero__copy">
            <p className="hero-premium__eyebrow">{hero.eyebrow}</p>
            <h1 id="property-hero-title" className="hero-premium__title">
              {hero.title}
            </h1>
            <div className="property-hero__lead">
              {hero.lead.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="hero-premium__lead">
                  {paragraph}
                </p>
              ))}
            </div>
            <Link
              href={ctaHref.requestConsultation}
              className={cn(
                signatureCtaPrimaryClass,
                "property-hero__cta sm:w-auto",
              )}
              {...analyticsDataAttributes({
                ctaId: analyticsCtaIds.bookConsultation,
                surface: "property",
                ctaLabel: hero.ctaLabel,
              })}
            >
              {hero.ctaLabel}
            </Link>
          </div>

          <div className="team-hero__media property-hero__media relative">
            <OptimizedImage
              src={hero.imageSrc}
              alt={hero.imageAlt}
              fill
              priority
              quality={90}
              sizes="(max-width: 767px) 92vw, (max-width: 1023px) 360px, 480px"
              className="team-hero__image"
            />
          </div>
        </div>
      </section>

      {/* About + features  -  Team about layout */}
      <section
        className="team-about why-choose-us-section property-about"
        aria-labelledby="property-about-heading"
      >
        <div className="team-page__container team-about__grid">
          <div className="team-about__copy">
            <p className="team-about__eyebrow">{about.eyebrow}</p>
            <h2 id="property-about-heading" className="team-about__heading">
              {about.heading}
            </h2>
            <div className="team-about__paragraphs">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <ul className="property-feature-stack" role="list">
            {features.map((feature) => (
              <li key={feature.title} className="property-feature-stack__card">
                <WhyFeatureItem
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Renting + buying services */}
      <section
        className="property-services"
        aria-labelledby="property-services-heading"
      >
        <div className="team-page__container property-services__inner">
          <div className="property-services__intro">
            <p className="team-about__eyebrow">{services.eyebrow}</p>
            <h2
              id="property-services-heading"
              className="property-services__heading"
            >
              <span className="property-services__heading-line">
                {services.headingLine1}
              </span>
              <span className="property-services__heading-line">
                {services.headingLine2}
              </span>
            </h2>
            <div className="property-services__paragraphs">
              {services.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <ul className="property-services__grid" role="list">
            {services.cards.map((card) => (
              <li key={card.title} className="property-services__card">
                <WhyFeatureItem
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lifestyle gallery  -  Apple-style horizontal immersion */}
      <section
        className="property-gallery-section"
        aria-labelledby="property-gallery-heading"
      >
        <div className="property-gallery-section__intro team-page__container">
          <h2 id="property-gallery-heading" className="property-gallery-section__title">
            A life you can picture.
            <br />
            Homes that feel like Thailand.
          </h2>
        </div>
        <PropertyLifestyleGallery
          slides={gallery.slides}
          ariaLabel={gallery.ariaLabel}
        />
      </section>

      {/* Specialist  -  Team founder card */}
      <section
        className="team-founder"
        aria-labelledby="property-specialist-heading"
      >
        <div className="team-page__container">
          <TeamFounderCard
            heading={specialist.heading}
            headingId="property-specialist-heading"
            name={specialist.name}
            role={specialist.role}
            bio={specialist.bio}
            quote={specialist.quote}
            imageSrc={specialist.imageSrc}
            imageAlt={specialist.imageAlt}
            nameId="property-specialist-name"
          />
        </div>
      </section>

      <PremiumCtaSection
        sectionId="property-cta"
        analyticsSurface="property"
        title={cta.title}
        description={cta.description}
        buttonLabel={cta.buttonLabel}
      />
    </main>
  )
}
