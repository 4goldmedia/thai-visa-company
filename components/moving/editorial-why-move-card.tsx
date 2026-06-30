import {
  HeartPulse,
  PlaneTakeoff,
  ShieldCheck,
  Sun,
  SunMedium,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react"

import type { MovingEditorialSubsection } from "@/lib/moving/types"
import { cn } from "@/lib/utils"

const whyMoveIcons: Record<string, LucideIcon> = {
  lifestyle: Sun,
  affordability: Wallet,
  weather: SunMedium,
  healthcare: HeartPulse,
  safety: ShieldCheck,
  travel: PlaneTakeoff,
  community: Users,
}

type EditorialWhyMoveCardProps = {
  subsection: MovingEditorialSubsection
  className?: string
}

function EditorialWhyMoveCard({ subsection, className }: EditorialWhyMoveCardProps) {
  const Icon = whyMoveIcons[subsection.id] ?? Sun
  const bullets =
    subsection.bullets && subsection.bullets.length > 0
      ? subsection.bullets
      : subsection.paragraphs.slice(0, 3)

  return (
    <article
      id={subsection.id}
      className={cn("moving-why-move-card", className)}
    >
      <Icon
        className="moving-why-move-card__icon"
        aria-hidden
        size={30}
        strokeWidth={1.75}
      />

      <h3 className="moving-why-move-card__title">{subsection.title}</h3>

      {subsection.quickAnswer ? (
        <p className="moving-why-move-card__summary">{subsection.quickAnswer}</p>
      ) : null}

      {bullets.length > 0 ? (
        <ul className="moving-why-move-card__bullets">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}

export { EditorialWhyMoveCard, whyMoveIcons }
export type { EditorialWhyMoveCardProps }
