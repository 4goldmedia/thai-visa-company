import type { Metadata } from "next"

import { TeamFounderCard } from "@/components/team/team-founder-card"
import { PremiumCtaSection } from "@/components/sections/premium-cta-section"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { teamPageContent, teamPath } from "@/lib/content/team"
import { createPageMetadata } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Our Team",
  description:
    "Meet Nongmai and the Thai Visa Company team. Learn how we personally guide foreigners through Thailand visas, documents, and relocation decisions.",
  path: teamPath,
})

export default function TeamPage() {
  const { hero, company, values, cta, founder } = teamPageContent

  return (
    <main id="main-content" tabIndex={-1} className="team-page">
      <section className="team-hero" aria-labelledby="team-hero-title">
        <div className="team-page__container team-hero__grid">
          <div className="team-hero__copy">
            <p className="hero-premium__eyebrow">{hero.eyebrow}</p>
            <h1 id="team-hero-title" className="hero-premium__title">
              {hero.title}
            </h1>
            <p className="hero-premium__lead team-hero__lead">{hero.lead}</p>
          </div>

          <div className="team-hero__media relative">
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

      <section className="team-about" aria-labelledby="team-about-heading">
        <div className="team-page__container team-about__grid">
          <div className="team-about__copy">
            <p className="team-about__eyebrow">{company.eyebrow}</p>
            <h2 id="team-about-heading" className="team-about__heading">
              <span className="team-about__heading-line">
                {company.headingLine1}
              </span>
              <span className="team-about__heading-line">
                {company.headingLine2}
              </span>
            </h2>
            <div className="team-about__paragraphs">
              {company.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <ul className="team-about__values" role="list">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <li key={value.title} className="team-about__value">
                  <span className="team-about__value-icon" aria-hidden>
                    <Icon />
                  </span>
                  <div className="team-about__value-copy">
                    <h3 className="team-about__value-title">{value.title}</h3>
                    <p className="team-about__value-text">{value.description}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section
        className="team-founder"
        aria-labelledby="team-founder-section-heading"
      >
        <div className="team-page__container">
          <div className="team-founder__intro">
            <p className="team-founder__eyebrow">Meet the team</p>
            <h2
              id="team-founder-section-heading"
              className="team-founder__heading"
            >
              Founder &amp; Lead Consultant
            </h2>
          </div>
          <TeamFounderCard
            name={founder.name}
            role={founder.role}
            bio={founder.bio}
            imageSrc={founder.imageSrc}
            imageAlt={founder.imageAlt}
            priority
          />
        </div>
      </section>

      <PremiumCtaSection
        sectionId="team-cta"
        analyticsSurface="team"
        title={cta.title}
        description={cta.description}
        buttonLabel={cta.buttonLabel}
      />
    </main>
  )
}
