import type { MovingCostTier } from "@/lib/moving/types"
import { cn } from "@/lib/utils"

type EditorialStatStripProps = {
  tiers: ReadonlyArray<MovingCostTier>
  highlightId?: string
  className?: string
}

function EditorialStatStrip({
  tiers,
  highlightId = "comfortable",
  className,
}: EditorialStatStripProps) {
  return (
    <div
      className={cn("moving-stat-strip", className)}
      aria-label="Monthly budget tiers"
    >
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={cn(
            "moving-stat-strip__item",
            tier.id === highlightId && "moving-stat-strip__item--highlight",
          )}
        >
          <p className="moving-stat-strip__value">{tier.monthlyRange}</p>
          <p className="moving-stat-strip__label">{tier.label}</p>
          <p className="moving-stat-strip__detail">{tier.housing}</p>
        </div>
      ))}
    </div>
  )
}

export { EditorialStatStrip }
export type { EditorialStatStripProps }
