import Link from "next/link"

import { editorialLinkCompactClass } from "@/lib/section-styles"
import { visaGuideCardClass } from "@/lib/visa-editorial-styles"
import { cn } from "@/lib/utils"

type VisaGuideCardProps = {
  category: string
  title: string
  description: string
  href: string
  ctaLabel?: string
  className?: string
}

function VisaGuideCard({
  category,
  title,
  description,
  href,
  ctaLabel = "View guide",
  className,
}: VisaGuideCardProps) {
  return (
    <article className={cn(visaGuideCardClass, "group", className)}>
      <div className="visa-guide-card__inner">
        <p className="visa-guide-card__category">
          <span className="sr-only">Category: </span>
          {category}
        </p>
        <h3 className="visa-guide-card__title">{title}</h3>
        <p className="visa-guide-card__description">{description}</p>
        <span
          className={cn(
            editorialLinkCompactClass,
            "visa-guide-card__cta",
            "transition-colors group-hover:text-foreground",
          )}
          aria-hidden
        >
          {ctaLabel}
        </span>
      </div>
      <Link
        href={href}
        className="absolute inset-0 rounded-[inherit] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        <span className="sr-only">
          {ctaLabel}: {title}
        </span>
      </Link>
    </article>
  )
}

export { VisaGuideCard }
export type { VisaGuideCardProps }
