import Link from "next/link"

import { OptimizedImage } from "@/components/ui/optimized-image"
import type { MovingCity, MovingCityTag } from "@/lib/moving/types"
import { resolveMovingPhoto } from "@/lib/media/moving-photography"
import { cn } from "@/lib/utils"

const tagLabels: Record<MovingCityTag, string> = {
  "digital-nomads": "Digital nomads",
  families: "Families",
  retirement: "Retirement",
  business: "Business",
  luxury: "Luxury",
  nature: "Nature",
}

type EditorialDestinationCardProps = {
  city: MovingCity
  className?: string
}

function EditorialDestinationCard({ city, className }: EditorialDestinationCardProps) {
  const image = resolveMovingPhoto(city.imageKey)

  const inner = (
    <>
      <div className="moving-destination__media">
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="moving-destination__image"
          style={
            image.objectPosition
              ? { objectPosition: image.objectPosition }
              : undefined
          }
        />
      </div>

      <div className="moving-destination__body">
        <div className="moving-destination__header">
          <h3 className="moving-destination__name">{city.name}</h3>
          <p className="moving-destination__lifestyle">{city.lifestyle}</p>
        </div>

        <p className="moving-destination__intro">{city.intro}</p>

        {city.metadata ? (
          <dl className="moving-destination__metadata">
            {city.metadata.lifestyleScore ? (
              <div>
                <dt>Lifestyle</dt>
                <dd>{city.metadata.lifestyleScore}</dd>
              </div>
            ) : null}
            <div>
              <dt>Monthly budget</dt>
              <dd>{city.monthlyBudget}</dd>
            </div>
            <div>
              <dt>Walkability</dt>
              <dd>{city.metadata.walkability}</dd>
            </div>
            <div>
              <dt>Healthcare</dt>
              <dd>{city.metadata.healthcare}</dd>
            </div>
            <div>
              <dt>Internet</dt>
              <dd>{city.metadata.internet}</dd>
            </div>
            <div>
              <dt>Intl community</dt>
              <dd>{city.metadata.intlCommunity}</dd>
            </div>
          </dl>
        ) : (
          <dl className="moving-destination__metadata">
            <div>
              <dt>Monthly budget</dt>
              <dd>{city.monthlyBudget}</dd>
            </div>
            <div>
              <dt>Average rent</dt>
              <dd>{city.averageRent}</dd>
            </div>
            <div>
              <dt>Best for</dt>
              <dd>{city.bestFor}</dd>
            </div>
          </dl>
        )}

        <div className="moving-destination__who">
          <p className="moving-destination__meta-label">Who it suits</p>
          <p className="moving-destination__who-text">{city.whoItSuits}</p>
        </div>

        <div className="moving-destination__chips">
          <div>
            <p className="moving-destination__meta-label">Pros</p>
            <ul className="moving-destination__chip-list moving-destination__chip-list--pros">
              {city.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="moving-destination__meta-label">Considerations</p>
            <ul className="moving-destination__chip-list moving-destination__chip-list--cons">
              {city.considerations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {city.tags.length > 0 ? (
          <ul className="moving-destination__tags" aria-label={`${city.name} highlights`}>
            {city.tags.map((tag) => (
              <li key={tag}>{tagLabels[tag]}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  )

  const cardClass = cn(
    "moving-destination",
    city.cityPageHref && "moving-destination--linked",
    className,
  )

  if (city.cityPageHref) {
    return (
      <Link href={city.cityPageHref} className={cardClass}>
        {inner}
      </Link>
    )
  }

  return <article className={cardClass}>{inner}</article>
}

export { EditorialDestinationCard }
export type { EditorialDestinationCardProps }
