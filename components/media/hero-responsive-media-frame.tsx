import { OptimizedImage } from "@/components/ui/optimized-image"
import type { ResponsiveHeroMedia } from "@/lib/media/photography"
import { cn } from "@/lib/utils"

type HeroResponsiveMediaFrameVariant = "framed" | "immersive"

type HeroResponsiveMediaFrameProps = {
  assets: ResponsiveHeroMedia
  /** LCP candidate on homepage */
  priority?: boolean
  variant?: HeroResponsiveMediaFrameVariant
  className?: string
}

/**
 * Homepage hero — separate desktop (md+) and mobile crops for sharp responsive backgrounds.
 */
function HeroResponsiveMediaFrame({
  assets,
  priority = false,
  variant = "framed",
  className,
}: HeroResponsiveMediaFrameProps) {
  const isImmersive = variant === "immersive"
  const { desktop, mobile, caption } = assets

  return (
    <figure
      className={cn(
        "hero-media-frame relative overflow-hidden",
        isImmersive && "hero-media-frame--immersive",
        className,
      )}
      data-slot="hero-media"
    >
      <div className="absolute inset-0">
        <div className="hero-media-frame__layer hero-media-frame__layer--desktop absolute inset-0 hidden md:block">
          <OptimizedImage
            src={desktop.src}
            alt={desktop.alt}
            fill
            priority={priority}
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="hero-media-frame__layer hero-media-frame__layer--mobile absolute inset-0 block md:hidden">
          <OptimizedImage
            src={mobile.src}
            alt={mobile.alt}
            fill
            priority={priority}
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {isImmersive ? (
        <span className="hero-media-frame__depth" aria-hidden />
      ) : null}
      <span className="hero-media-frame__wash" aria-hidden />
      <span className="hero-media-frame__overlay" aria-hidden />
      {caption ? (
        <figcaption className="hero-media-caption">{caption}</figcaption>
      ) : null}
    </figure>
  )
}

export { HeroResponsiveMediaFrame }
export type { HeroResponsiveMediaFrameProps, HeroResponsiveMediaFrameVariant }
