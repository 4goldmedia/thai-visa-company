import { Check, X } from "lucide-react"

import type { ContentVisaPitfallItem } from "@/lib/content/types"
import { resolveVisaPitfallIcon } from "@/lib/visas/pitfall-icons"
import { visaPitfallCardClass } from "@/lib/visa-editorial-styles"
import { cn } from "@/lib/utils"

type VisaPitfallCardProps = {
  item: ContentVisaPitfallItem
  className?: string
}

function VisaPitfallCard({ item, className }: VisaPitfallCardProps) {
  const Icon = resolveVisaPitfallIcon(item.icon)

  return (
    <article className={cn(visaPitfallCardClass, className)}>
      <span className="visa-pitfall-card__icon" aria-hidden>
        <Icon className="visa-pitfall-card__icon-svg" />
      </span>
      <h3 className="visa-pitfall-card__title">{item.title}</h3>

      <div className="visa-pitfall-card__block visa-pitfall-card__block--risk">
        <p className="visa-pitfall-card__label visa-pitfall-card__label--risk">
          <X className="visa-pitfall-card__symbol visa-pitfall-card__symbol--risk" aria-hidden />
          <span>Risk</span>
        </p>
        <p className="visa-pitfall-card__text">{item.description}</p>
      </div>

      {item.remedy ? (
        <div className="visa-pitfall-card__block visa-pitfall-card__block--remedy">
          <p className="visa-pitfall-card__label visa-pitfall-card__label--remedy">
            <Check
              className="visa-pitfall-card__symbol visa-pitfall-card__symbol--remedy"
              aria-hidden
            />
            <span>How to avoid it</span>
          </p>
          <p className="visa-pitfall-card__text">{item.remedy}</p>
        </div>
      ) : null}
    </article>
  )
}

export { VisaPitfallCard }
