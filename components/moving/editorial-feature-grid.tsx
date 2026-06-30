import type { LucideIcon } from "lucide-react"

import type { MovingEditorialFeatureCard } from "@/lib/moving/types"
import { cn } from "@/lib/utils"

import { EditorialFeatureCard } from "./editorial-feature-card"

type EditorialFeatureGridProps = {
  cards: ReadonlyArray<MovingEditorialFeatureCard>
  icons?: Record<string, LucideIcon>
  columns?: 2 | 3
  badgeOnly?: boolean
  className?: string
  label?: string
}

function EditorialFeatureGrid({
  cards,
  icons,
  columns = 3,
  badgeOnly = false,
  className,
  label,
}: EditorialFeatureGridProps) {
  return (
    <div
      className={cn(
        "moving-editorial-feature-grid",
        `moving-editorial-feature-grid--cols-${columns}`,
        className,
      )}
      role={label ? "group" : undefined}
      aria-label={label}
    >
      {cards.map((card) => (
        <EditorialFeatureCard
          key={card.id}
          card={card}
          icon={icons?.[card.id]}
          badgeOnly={badgeOnly}
        />
      ))}
    </div>
  )
}

export { EditorialFeatureGrid }
export type { EditorialFeatureGridProps }
