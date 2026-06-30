import type { MovingFaqItem } from "@/lib/moving/types"
import { cn } from "@/lib/utils"

import { EditorialFaqCard } from "./editorial-faq-card"

type EditorialFaqGridProps = {
  items: ReadonlyArray<MovingFaqItem>
  className?: string
}

function EditorialFaqGrid({ items, className }: EditorialFaqGridProps) {
  return (
    <div className={cn("moving-faq-grid", className)}>
      {items.map((item) => (
        <EditorialFaqCard key={item.value} item={item} />
      ))}
    </div>
  )
}

export { EditorialFaqGrid }
export type { EditorialFaqGridProps }
