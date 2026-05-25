import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type WhyFeatureItemProps = {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

function WhyFeatureItem({
  icon: Icon,
  title,
  description,
  className,
}: WhyFeatureItemProps) {
  return (
    <article data-slot="why-feature" className={cn("why-feature", className)}>
      <span className="why-feature__icon-wrap" aria-hidden>
        <Icon />
      </span>
      <h3 className="why-feature__title">{title}</h3>
      <p className="why-feature__description">{description}</p>
    </article>
  )
}

export { WhyFeatureItem }
export type { WhyFeatureItemProps }
