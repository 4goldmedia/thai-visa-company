import type { LucideIcon } from "lucide-react"

import type { MovingEditorialSubsection } from "@/lib/moving/types"
import { cn } from "@/lib/utils"

type EditorialInsightCardProps = {
  subsection: MovingEditorialSubsection
  icon?: LucideIcon
  className?: string
}

function subsectionDetail(subsection: MovingEditorialSubsection): string | undefined {
  if (subsection.paragraphs.length > 0) {
    return subsection.paragraphs[0]
  }
  return undefined
}

function EditorialInsightCard({ subsection, icon: Icon, className }: EditorialInsightCardProps) {
  const detail = subsectionDetail(subsection)

  return (
    <article
      id={subsection.id}
      className={cn("moving-insight-card", Icon && "moving-insight-card--icon", className)}
    >
      {Icon ? (
        <span className="moving-insight-card__icon-wrap" aria-hidden>
          <Icon className="moving-insight-card__icon" size={24} strokeWidth={1.75} />
        </span>
      ) : null}
      <h3 className="moving-insight-card__title">{subsection.title}</h3>
      {subsection.quickAnswer ? (
        <p className="moving-insight-card__summary">{subsection.quickAnswer}</p>
      ) : null}
      {detail ? (
        <p className="moving-insight-card__detail">{detail}</p>
      ) : null}
    </article>
  )
}

export { EditorialInsightCard, subsectionDetail }
export type { EditorialInsightCardProps }
