import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionReveal } from "@/components/motion"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { teamIntroSectionCopy } from "@/lib/content/team-intro"
import { sectionHeadingIds, sectionIds } from "@/lib/section-ids"

/** Intrinsic portrait size  -  never fill/banner */
const PORTRAIT_WIDTH = 400
const PORTRAIT_HEIGHT = 533

function TeamIntro() {
  const {
    eyebrow,
    title,
    paragraphs,
    personName,
    personRole,
    imageSrc,
    imageAlt,
  } = teamIntroSectionCopy

  return (
    <SectionReveal>
      <div className="team-intro__grid">
        <article className="team-intro__panel team-intro__panel--copy">
          <p className="team-intro__eyebrow">{eyebrow}</p>
          <h2 id={sectionHeadingIds.teamIntro} className="team-intro__title">
            {title}
          </h2>
          <div className="team-intro__body">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>

        <aside className="team-intro__panel team-intro__panel--media">
          <figure className="team-intro__figure">
            <div className="team-intro__portrait-wrap">
              <OptimizedImage
                src={imageSrc}
                alt={imageAlt}
                width={PORTRAIT_WIDTH}
                height={PORTRAIT_HEIGHT}
                quality={90}
                sizes="(max-width: 639px) 220px, (max-width: 1023px) 280px, 360px"
                className="team-intro__image"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <figcaption className="team-intro__caption">
              <p className="team-intro__name">{personName}</p>
              <p className="team-intro__role">{personRole}</p>
            </figcaption>
          </figure>
        </aside>
      </div>
    </SectionReveal>
  )
}

function TeamIntroSection() {
  return (
    <Section
      id={sectionIds.teamIntro}
      aria-labelledby={sectionHeadingIds.teamIntro}
      spacing="spacious"
      className="team-intro"
    >
      <Container>
        <TeamIntro />
      </Container>
    </Section>
  )
}

export { TeamIntro, TeamIntroSection }
