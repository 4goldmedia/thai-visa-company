import type { MovingEditorialSubsection } from "@/lib/moving/types"
import { cn } from "@/lib/utils"

import { EditorialWhyMoveCard } from "./editorial-why-move-card"

type EditorialWhyMoveGridProps = {
  subsections: ReadonlyArray<MovingEditorialSubsection>
  className?: string
}

function EditorialWhyMoveGrid({ subsections, className }: EditorialWhyMoveGridProps) {
  return (
    <div
      className={cn("moving-why-move-grid", className)}
      aria-label="Reasons people move to Thailand"
    >
      {subsections.map((subsection) => (
        <EditorialWhyMoveCard key={subsection.id} subsection={subsection} />
      ))}
    </div>
  )
}

export { EditorialWhyMoveGrid }
export type { EditorialWhyMoveGridProps }
