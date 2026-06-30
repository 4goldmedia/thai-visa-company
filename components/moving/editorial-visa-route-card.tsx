import Link from "next/link"
import type { LucideIcon } from "lucide-react"

import { OptimizedImage } from "@/components/ui/optimized-image"
import type { MovingVisaRoute } from "@/lib/moving/types"
import { cn } from "@/lib/utils"

type EditorialVisaRouteCardProps = {
  route: MovingVisaRoute
  icon: LucideIcon
  className?: string
}

function EditorialVisaRouteCard({ route, icon: Icon, className }: EditorialVisaRouteCardProps) {
  return (
    <article className={cn("moving-visa-route-card", className)}>
      <Link href={route.href} className="moving-visa-route-card__link">
        <div className="moving-visa-route-card__media">
          <OptimizedImage
            src={route.image.src}
            alt={route.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="moving-visa-route-card__image object-cover"
            style={
              route.image.objectPosition
                ? { objectPosition: route.image.objectPosition }
                : undefined
            }
          />
        </div>

        <div className="moving-visa-route-card__body">
          <span className="moving-visa-route-card__icon-wrap" aria-hidden>
            <Icon className="moving-visa-route-card__icon" size={22} strokeWidth={1.75} />
          </span>

          <h3 className="moving-visa-route-card__title">{route.title}</h3>
          <p className="moving-visa-route-card__description">{route.description}</p>

          <dl className="moving-visa-route-card__meta">
            <div className="moving-visa-route-card__meta-row">
              <dt className="moving-visa-route-card__meta-label">Best for</dt>
              <dd className="moving-visa-route-card__meta-value">{route.bestFor}</dd>
            </div>
            <div className="moving-visa-route-card__meta-row">
              <dt className="moving-visa-route-card__meta-label">Typical applicant</dt>
              <dd className="moving-visa-route-card__meta-value">{route.typicalApplicant}</dd>
            </div>
          </dl>

          <span className="moving-visa-route-card__cta">Learn more →</span>
        </div>
      </Link>
    </article>
  )
}

export { EditorialVisaRouteCard }
export type { EditorialVisaRouteCardProps }
