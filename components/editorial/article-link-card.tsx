import Link from "next/link"

import { cn } from "@/lib/utils"

type ArticleLinkCardProps = {
  href: string
  category: string
  title: string
  description: string
  ctaLabel?: string
  className?: string
}

function ArticleLinkCard({
  href,
  category,
  title,
  description,
  ctaLabel = "Read more",
  className,
}: ArticleLinkCardProps) {
  return (
    <Link href={href} className={cn("editorial-link-card", className)}>
      <p className="editorial-link-card__category">{category}</p>
      <p className="editorial-link-card__title">{title}</p>
      <p className="editorial-link-card__description">{description}</p>
      <p className="editorial-link-card__cta">{ctaLabel} →</p>
    </Link>
  )
}

export { ArticleLinkCard }
