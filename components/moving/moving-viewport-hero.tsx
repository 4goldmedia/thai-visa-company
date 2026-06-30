import Link from "next/link"

import { OptimizedImage } from "@/components/ui/optimized-image"
import type { MovingPhoto } from "@/lib/media/moving-photography"
import {
  ctaButtonPrimaryClass,
  editorialLinkInverseClass,
} from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type MovingViewportHeroProps = {
  eyebrow: string
  title: string
  titleLines?: ReadonlyArray<string>
  lead?: string
  headingId: string
  image: MovingPhoto
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  className?: string
}

function MovingViewportHero({
  eyebrow,
  title,
  titleLines,
  lead,
  headingId,
  image,
  primaryCta,
  secondaryCta,
  className,
}: MovingViewportHeroProps) {
  return (
    <header className={cn("moving-hero__viewport", className)}>
      <div className="moving-hero__media" aria-hidden>
        <OptimizedImage
          src={image.src}
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="moving-hero__image object-cover"
          style={
            image.objectPosition
              ? { objectPosition: image.objectPosition }
              : undefined
          }
        />
        <div className="moving-hero__scrim" />
      </div>

      <div className="moving-hero__content">
        <div className="moving-hero__copy">
          <p className="moving-hero__eyebrow">{eyebrow}</p>
          <h1 id={headingId} className="moving-hero__title">
            {titleLines ? (
              titleLines.map((line) => (
                <span key={line} className="moving-hero__title-line">
                  {line}
                </span>
              ))
            ) : (
              title
            )}
          </h1>
          {lead ? <p className="moving-hero__lead">{lead}</p> : null}
          <div className="moving-hero__actions">
            <Link
              href={primaryCta.href}
              className={cn(ctaButtonPrimaryClass, "moving-hero__cta-primary")}
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className={cn(editorialLinkInverseClass, "moving-hero__cta-secondary")}
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export { MovingViewportHero }
