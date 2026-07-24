import { OptimizedImage } from "@/components/ui/optimized-image"
import { teamPageContent } from "@/lib/content/team"

/**
 * Founder feature card  -  biography left, portrait right.
 * Portrait stacks above bio on mobile.
 */
function TeamFounderCard() {
  const { founder } = teamPageContent

  return (
    <article
      className="team-founder-card"
      aria-labelledby="team-founder-name"
    >
      <div className="team-founder-card__body">
        <h2 id="team-founder-name" className="team-founder-card__name">
          {founder.name}
        </h2>
        <p className="team-founder-card__role">{founder.role}</p>

        <div className="team-founder-card__bio">
          {founder.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="team-founder-card__media">
        <OptimizedImage
          src={founder.imageSrc}
          alt={founder.imageAlt}
          fill
          priority
          quality={90}
          sizes="(max-width: 899px) 100vw, 55vw"
          className="team-founder-card__image"
        />
      </div>
    </article>
  )
}

export { TeamFounderCard }
