import type { LucideIcon } from "lucide-react"

import { cardSurfaceClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type TrustCardProps = {
  /** Lucide icon component */
  icon: LucideIcon
  /** Short trust headline */
  title: string
  /** Concise supporting description */
  description: string
  className?: string
}

function TrustCard({
  icon: Icon,
  title,
  description,
  className,
}: TrustCardProps) {
  return (
    <article
      data-slot="trust-card"
      className={cn(
        "flex h-full gap-3 sm:gap-3.5",
        cardSurfaceClass,
        className
      )}
    >
      <Icon
        className="mt-0.5 size-4 shrink-0 text-foreground/35 sm:size-[1.125rem]"
        strokeWidth={1.75}
        aria-hidden
      />

      <div className="min-w-0 flex-1">
        <h3 className="text-[15px] font-medium leading-snug text-foreground">
          {title}
        </h3>
        <p className="mt-1.5 text-[14px] leading-[1.65] text-muted-foreground sm:mt-2 sm:leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  )
}

export { TrustCard }
export type { TrustCardProps }
