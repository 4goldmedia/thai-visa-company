import { OptimizedImage } from "@/components/ui/optimized-image"
import type { HeroMediaAsset } from "@/lib/media/photography"
import { cn } from "@/lib/utils"

type HeroMediaFrameVariant = "framed" | "immersive"

type HeroMediaFrameProps = {
  asset: HeroMediaAsset
  /** LCP candidate on homepage */
  priority?: boolean
  /** Framed column asset vs full-bleed environment */
  variant?: HeroMediaFrameVariant
  objectPosition?: string
  sizes?: string
  className?: string
}

/**
 * Architectural hero frame — subtle warm grade and restrained bottom fade.
 */
function HeroMediaFrame({
  asset,
  priority = false,
  variant = "framed",
  objectPosition = "center",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw",
  className,
}: HeroMediaFrameProps) {
  const isImmersive = variant === "immersive"

  return (
    <figure
      className={cn(
        "hero-media-frame",
        isImmersive && "hero-media-frame--immersive",
        className,
      )}
      data-slot="hero-media"
    >
      <OptimizedImage
        src={asset.src}
        alt={asset.alt}
        fill
        priority={priority}
        quality={100}
        sizes={sizes}
        className="hero-media-frame__image object-cover"
        style={{ objectPosition }}
      />
      {isImmersive ? (
        <span className="hero-media-frame__depth" aria-hidden />
      ) : null}
      <span className="hero-media-frame__wash" aria-hidden />
      <span className="hero-media-frame__overlay" aria-hidden />
      {asset.caption ? (
        <figcaption className="hero-media-caption">{asset.caption}</figcaption>
      ) : null}
    </figure>
  )
}

export { HeroMediaFrame }
export type { HeroMediaFrameProps, HeroMediaFrameVariant }
