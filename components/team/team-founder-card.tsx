import { OptimizedImage } from "@/components/ui/optimized-image"

type TeamFounderCardProps = {
  name: string
  role: string
  bio: ReadonlyArray<string>
  imageSrc: string
  imageAlt: string
  /** Optional section heading above the name (e.g. Property page) */
  heading?: string
  headingId?: string
  quote?: string
  nameId?: string
  priority?: boolean
}

/**
 * Founder / specialist feature card  -  biography left, portrait right.
 * Portrait stacks above bio on mobile. Shared by Team and Property pages.
 */
function TeamFounderCard({
  name,
  role,
  bio,
  imageSrc,
  imageAlt,
  heading,
  headingId,
  quote,
  nameId = "team-founder-name",
  priority = false,
}: TeamFounderCardProps) {
  const titleId = heading ? (headingId ?? "team-founder-heading") : nameId

  return (
    <article className="team-founder-card" aria-labelledby={titleId}>
      <div className="team-founder-card__body">
        {heading ? (
          <h2 id={titleId} className="team-founder-card__heading">
            {heading}
          </h2>
        ) : null}

        {!heading ? (
          <>
            <h2 id={nameId} className="team-founder-card__name">
              {name}
            </h2>
            <p className="team-founder-card__role">{role}</p>
          </>
        ) : null}

        <div className="team-founder-card__bio">
          {bio.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>

        {heading ? (
          <div className="team-founder-card__signature">
            <p id={nameId} className="team-founder-card__name">
              {name}
            </p>
            <p className="team-founder-card__role">{role}</p>
            {quote ? (
              <blockquote className="team-founder-card__quote">
                <p>{quote}</p>
              </blockquote>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="team-founder-card__media">
        <OptimizedImage
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          quality={90}
          sizes="(max-width: 899px) 100vw, 55vw"
          className="team-founder-card__image"
        />
      </div>
    </article>
  )
}

export { TeamFounderCard }
export type { TeamFounderCardProps }
