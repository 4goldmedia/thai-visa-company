import { OptimizedImage } from "@/components/ui/optimized-image"
import type { WhyThailandCollageImage } from "@/lib/content/why-thailand"
import { cn } from "@/lib/utils"

type WhyThailandCollageProps = {
  images: ReadonlyArray<WhyThailandCollageImage>
  className?: string
}

type MosaicCellProps = {
  image: WhyThailandCollageImage
  role: "lead" | "support"
}

function WhyThailandMosaicCell({ image, role }: MosaicCellProps) {
  return (
    <figure
      className={cn(
        "why-thailand__mosaic-cell group",
        role === "lead" && "why-thailand__mosaic-cell--lead",
        role === "support" && "why-thailand__mosaic-cell--support",
      )}
    >
      <OptimizedImage
        src={image.src}
        alt={image.alt}
        fill
        sizes={
          role === "lead"
            ? "(max-width: 1023px) 100vw, 32vw"
            : "(max-width: 1023px) 50vw, 26vw"
        }
        quality={90}
        className="why-thailand__mosaic-image object-cover"
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
  const [lead, ...supporting] = images

  if (!lead) {
    return null
  }

  return (
    <div
      className={cn("why-thailand__mosaic", className)}
      aria-label="Life in Thailand"
    >
      <WhyThailandMosaicCell image={lead} role="lead" />
      {supporting.map((image) => (
        <WhyThailandMosaicCell key={image.id} image={image} role="support" />
      ))}
    </div>
  )
}

export { WhyThailandCollage }
