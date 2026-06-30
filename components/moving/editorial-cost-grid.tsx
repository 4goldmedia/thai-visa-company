import type { MovingCostCategory } from "@/lib/moving/types"
import { cn } from "@/lib/utils"

import { EditorialCostCard } from "./editorial-cost-card"

type EditorialCostGridProps = {
  categories: ReadonlyArray<MovingCostCategory>
  className?: string
}

function EditorialCostGrid({ categories, className }: EditorialCostGridProps) {
  return (
    <div
      className={cn("moving-cost-grid", className)}
      aria-label="Monthly cost categories"
    >
      {categories.map((category) => (
        <EditorialCostCard key={category.id} category={category} />
      ))}
    </div>
  )
}

export { EditorialCostGrid }
export type { EditorialCostGridProps }
