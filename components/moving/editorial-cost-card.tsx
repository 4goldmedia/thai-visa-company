import type { MovingCostCategory } from "@/lib/moving/types"
import { cn } from "@/lib/utils"

type EditorialCostCardProps = {
  category: MovingCostCategory
  className?: string
}

function EditorialCostCard({ category, className }: EditorialCostCardProps) {
  return (
    <article className={cn("moving-cost-card", className)}>
      <h3 className="moving-cost-card__title">{category.label}</h3>
      <p className="moving-cost-card__value">{category.comfortable}</p>
      <p className="moving-cost-card__tier">Comfortable tier · monthly</p>
      {category.note ? (
        <p className="moving-cost-card__note">{category.note}</p>
      ) : null}
    </article>
  )
}

export { EditorialCostCard }
export type { EditorialCostCardProps }
