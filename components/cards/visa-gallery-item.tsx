import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { OptimizedImage } from "@/components/ui/optimized-image"
import type { VisaGalleryImage } from "@/lib/media/photography"
import { cn } from "@/lib/utils"

type VisaGalleryItemProps = {
  title: string
  description: string
  href: string
  image: VisaGalleryImage
  linkLabel?: string
  className?: string
}

/**
 * Image-first visa tile — open editorial layout (no card chrome).
 */
function VisaGalleryItem({
  title,
  description,
  href,
  image,
  linkLabel = "Explore",
  className,
}: VisaGalleryItemProps) {
  return (
    <article
      data-slot="visa-gallery-item"
      className={cn("visa-gallery__item group", className)}
    >
      <Link href={href} className="visa-gallery__link">
        <div className="visa-gallery__media">
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
            className="visa-gallery__image object-cover"
            style={
              image.objectPosition
                ? { objectPosition: image.objectPosition }
                : undefined
            }
          />
        </div>

        <div className="visa-gallery__copy">
          <h3 className="visa-gallery__title">{title}</h3>
          <p className="visa-gallery__description">{description}</p>
          <span className="visa-gallery__cta">
            {linkLabel}
            <ArrowRight className="visa-gallery__cta-icon" aria-hidden />
          </span>
        </div>
      </Link>
    </article>
  )
}

export { VisaGalleryItem }
export type { VisaGalleryItemProps }
