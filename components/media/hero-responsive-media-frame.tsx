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
 * Art-directed homepage hero assets.
 * Portrait: phones, tablets, small laptops (<1100px)
 * Landscape: large desktops (≥1100px)
 */
const LANDSCAPE_HERO_SIZES =
  "(min-width: 1100px) 70vw, (min-width: 1536px) 1200px, 100vw"
const PORTRAIT_HERO_SIZES = "100vw"

/**
 * Homepage hero  -  separate portrait + landscape art direction at 1100px.
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
        {/* Landscape  -  large desktop split hero only */}
        <div className="hero-media-frame__layer hero-media-frame__layer--desktop absolute inset-0 hidden min-[1100px]:block">
          <OptimizedImage
            src={desktop.src}
            alt={desktop.alt}
            fill
            priority={priority}
            quality={100}
            sizes={LANDSCAPE_HERO_SIZES}
            className="object-cover"
            style={{
              objectPosition: "var(--hero-media-object-position, 72% center)",
            }}
          />
        </div>

        {/* Portrait  -  phones, tablets, small laptops */}
        <div className="hero-media-frame__layer hero-media-frame__layer--mobile absolute inset-0 block min-[1100px]:hidden">
          <OptimizedImage
            src={mobile.src}
            alt={mobile.alt}
            fill
            priority={priority && !isImmersive}
            quality={90}
            sizes={PORTRAIT_HERO_SIZES}
            className="object-cover object-center"
            style={{ objectPosition: "center center" }}
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
