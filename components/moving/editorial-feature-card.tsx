import type { LucideIcon } from "lucide-react"

import type { MovingEditorialFeatureCard } from "@/lib/moving/types"
import { cn } from "@/lib/utils"

type EditorialFeatureCardProps = {
  card: MovingEditorialFeatureCard
  icon?: LucideIcon
  badgeOnly?: boolean
  className?: string
}

function EditorialFeatureCard({
  card,
  icon: Icon,
  badgeOnly = false,
  className,
}: EditorialFeatureCardProps) {
  return (
    <article id={card.id} className={cn("moving-editorial-feature-card", className)}>
      {Icon ? (
        <span className="moving-editorial-feature-card__icon-wrap" aria-hidden>
          <Icon className="moving-editorial-feature-card__icon" size={24} strokeWidth={1.75} />
        </span>
      ) : null}

      <h3 className="moving-editorial-feature-card__title">{card.title}</h3>
      <p className="moving-editorial-feature-card__summary">{card.summary}</p>

      <hr className="moving-editorial-feature-card__divider" />

      <p className="moving-editorial-feature-card__body">{card.body}</p>

      {card.goodToKnow ? (
        badgeOnly ? (
          <p className="moving-editorial-feature-card__badge">{card.goodToKnow}</p>
        ) : (
          <div className="moving-editorial-feature-card__note">
            <p className="moving-editorial-feature-card__note-label">Good to know</p>
            <p className="moving-editorial-feature-card__note-text">{card.goodToKnow}</p>
          </div>
        )
      ) : null}
    </article>
  )
}

export { EditorialFeatureCard }
export type { EditorialFeatureCardProps }
