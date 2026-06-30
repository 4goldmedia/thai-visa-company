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

type EditorialCityCardVariant = "featured" | "compact"

type EditorialCityCardProps = {
  city: MovingCity
  variant?: EditorialCityCardVariant
  className?: string
}

function CityEditorialDetail({
  city,
  expanded,
}: {
  city: MovingCity
  expanded: boolean
}) {
  return (
    <>
      <p className="moving-city__intro">{city.intro}</p>

      {expanded ? (
        <>
          <p className="moving-city__atmosphere">
            <span className="moving-city__meta-label">Atmosphere</span>
            {city.atmosphere}
          </p>
          <p className="moving-city__who">
            <span className="moving-city__meta-label">Who it suits</span>
            {city.whoItSuits}
          </p>

          <div className="moving-city__lists">
            <div>
              <p className="moving-city__meta-label">Strengths</p>
              <ul className="moving-city__detail-list">
                {city.strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="moving-city__meta-label">Considerations</p>
              <ul className="moving-city__detail-list">
                {city.considerations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

function EditorialCityCard({
  city,
  variant = "compact",
  className,
}: EditorialCityCardProps) {
  const image = resolveMovingPhoto(city.imageKey)
  const isFeatured = variant === "featured"

  const inner = (
    <>
      <div className="moving-city__media">
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          fill
          sizes={
            isFeatured
              ? "(max-width: 1023px) 100vw, 55vw"
              : "(max-width: 640px) 30vw, 12rem"
          }
          className="moving-city__image object-cover"
          style={
            image.objectPosition
              ? { objectPosition: image.objectPosition }
              : undefined
          }
        />
      </div>

      <div className="moving-city__body">
        <h3 className="moving-city__name">{city.name}</h3>
        <p className="moving-city__lifestyle">{city.lifestyle}</p>

        <CityEditorialDetail city={city} expanded={isFeatured} />

        {isFeatured ? (
          <dl className="moving-city__stats">
            <div>
              <dt>Best for</dt>
              <dd>{city.bestFor}</dd>
            </div>
            <div>
              <dt>Monthly budget</dt>
              <dd>{city.monthlyBudget}</dd>
            </div>
            <div>
              <dt>Average rent</dt>
              <dd>{city.averageRent}</dd>
            </div>
          </dl>
        ) : (
          <p className="moving-city__summary">
            <span>{city.bestFor}</span>
            <span aria-hidden> · </span>
            <span>{city.monthlyBudget}</span>
          </p>
        )}

        {isFeatured && city.tags.length > 0 ? (
          <ul className="moving-city__tags" aria-label={`${city.name} highlights`}>
            {city.tags.map((tag) => (
              <li key={tag}>{tagLabels[tag]}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  )

  const cardClass = cn(
    "moving-city",
    isFeatured ? "moving-city--featured" : "moving-city--compact",
    city.cityPageHref && "moving-city--linked",
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

export { EditorialCityCard }
export type { EditorialCityCardProps, EditorialCityCardVariant }
