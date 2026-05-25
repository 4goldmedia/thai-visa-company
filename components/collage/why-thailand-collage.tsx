import { OptimizedImage } from "@/components/ui/optimized-image"
import type { WhyThailandCollageImage } from "@/lib/content/why-thailand"
import { cn } from "@/lib/utils"

type WhyThailandCollageProps = {
  images: ReadonlyArray<WhyThailandCollageImage>
  className?: string
}

function WhyThailandCollageCell({
  image,
  variant,
}: {
  image: WhyThailandCollageImage
  variant: "feature" | "tile"
}) {
  return (
    <figure
      className={cn(
        "why-thailand__cell group",
        variant === "feature" && "why-thailand__cell--feature",
        variant === "tile" && "why-thailand__cell--tile",
      )}
    >
      <OptimizedImage
        src={image.src}
        alt={image.alt}
        fill
        sizes={
          variant === "feature"
            ? "(max-width: 1023px) 100vw, 42vw"
            : "(max-width: 1023px) 50vw, 22vw"
        }
        quality={90}
        className="why-thailand__image object-cover"
        style={
          image.objectPosition
            ? { objectPosition: image.objectPosition }
            : undefined
        }
      />
    </figure>
  )
}

function WhyThailandCollage({ images, className }: WhyThailandCollageProps) {
  const [feature, ...tiles] = images

  if (!feature) {
    return null
  }

  return (
    <div
      className={cn("why-thailand__collage", className)}
      aria-label="Life in Thailand"
    >
      <WhyThailandCollageCell image={feature} variant="feature" />
      {tiles.map((image) => (
        <WhyThailandCollageCell key={image.id} image={image} variant="tile" />
      ))}
    </div>
  )
}

export { WhyThailandCollage }
