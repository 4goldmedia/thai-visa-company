import Image from "next/image"
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
  image?: string
  imageAlt?: string
  objectPosition?: string
  className?: string
}

function VisaGuideCard({
  category,
  title,
  description,
  href,
  ctaLabel = "View guide",
  image,
  imageAlt,
  objectPosition = "center",
  className,
}: VisaGuideCardProps) {
  const hasMedia = Boolean(image)

  return (
    <article
      className={cn(
        visaGuideCardClass,
        "group",
        hasMedia && "visa-guide-card--with-media",
        className,
      )}
    >
      {image ? (
        <div className="visa-guide-card__media">
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            className="visa-guide-card__image object-cover"
            style={{ objectPosition }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : null}
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
