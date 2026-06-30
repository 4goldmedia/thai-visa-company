import type { LucideIcon } from "lucide-react"

import type { MovingEditorialSubsection } from "@/lib/moving/types"
import { cn } from "@/lib/utils"

import { EditorialInsightCard } from "./editorial-insight-card"

type EditorialInsightGridProps = {
  subsections: ReadonlyArray<MovingEditorialSubsection>
  columns?: 2 | 3 | 4
  className?: string
  label?: string
  icons?: Record<string, LucideIcon>
}

function EditorialInsightGrid({
  subsections,
  columns = 3,
  className,
  label,
  icons,
}: EditorialInsightGridProps) {
  return (
    <div
      className={cn(
        "moving-insight-grid",
        `moving-insight-grid--cols-${columns}`,
        className,
      )}
      role={label ? "group" : undefined}
      aria-label={label}
    >
      {subsections.map((subsection) => (
        <EditorialInsightCard
          key={subsection.id}
          subsection={subsection}
          icon={icons?.[subsection.id]}
        />
      ))}
    </div>
  )
}

export { EditorialInsightGrid }
export type { EditorialInsightGridProps }
