import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { OptimizedImage } from "@/components/ui/optimized-image"
import { ctaLabels } from "@/lib/cta"
import type { VisaCardImage } from "@/lib/media/photography"
import { cn } from "@/lib/utils"

type VisaCardProps = {
  title: string
  description: string
  /** @deprecated Use description only — kept for data compatibility */
  benefit?: string
  href: string
  image: VisaCardImage
  ctaLabel?: string
  className?: string
}

function VisaCard({
  title,
  description,
  href,
  image,
  ctaLabel = ctaLabels.learnMore,
  className,
}: VisaCardProps) {
  return (
    <article data-slot="visa-card" className={cn("visa-card-ref group relative", className)}>
      <div className="visa-card-ref__media">
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover"
        />
      </div>

      <div className="visa-card-ref__body">
        <h3 className="visa-card-ref__title">{title}</h3>
        <p className="visa-card-ref__description">{description}</p>
        <div className="visa-card-ref__footer">
          <span className="sr-only">{ctaLabel}</span>
          <ArrowRight
            className="visa-card-ref__arrow size-4"
            aria-hidden
          />
        </div>
      </div>

      <Link
        href={href}
        className={cn(
          "absolute inset-0 rounded-[var(--radius-md)]",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        )}
      >
        <span className="sr-only">
          {ctaLabel} — {title}
        </span>
      </Link>
    </article>
  )
}

export { VisaCard }
export type { VisaCardProps }
