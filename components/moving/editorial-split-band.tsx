import Link from "next/link"

import { OptimizedImage } from "@/components/ui/optimized-image"
import { resolveMovingPhoto } from "@/lib/media/moving-photography"
import { cn } from "@/lib/utils"

type MomentVariant = "split" | "cinematic" | "interlude" | "compact"

type EditorialSplitBandProps = {
  id?: string
  title: string
  caption: string
  imageKey?: string
  textOnly?: boolean
  href?: string
  linkLabel?: string
  reversed?: boolean
  variant?: MomentVariant
  index?: number
  className?: string
}

function EditorialSplitBand({
  id,
  title,
  caption,
  imageKey,
  textOnly = false,
  href,
  linkLabel = "Learn more",
  reversed = false,
  variant = "split",
  index,
  className,
}: EditorialSplitBandProps) {
  const image = imageKey && !textOnly ? resolveMovingPhoto(imageKey) : null
  const resolvedVariant = textOnly ? "interlude" : variant

  return (
    <article
      id={id ? `moment-${id}` : undefined}
      className={cn(
        "moving-moment",
        `moving-moment--${resolvedVariant}`,
        reversed && "moving-moment--reversed",
        className,
      )}
    >
      {image ? (
        <div className="moving-moment__media">
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            fill
            quality={85}
            sizes={
              resolvedVariant === "cinematic"
                ? "100vw"
                : "(max-width: 1023px) 100vw, 45vw"
            }
            className="moving-moment__image object-cover"
            style={
              image.objectPosition
                ? { objectPosition: image.objectPosition }
                : undefined
            }
          />
        </div>
      ) : null}

      <div className="moving-moment__copy">
        {resolvedVariant === "interlude" && typeof index === "number" ? (
          <p className="moving-moment__index" aria-hidden>
            {String(index + 1).padStart(2, "0")}
          </p>
        ) : null}
        <h3 className="moving-moment__title">{title}</h3>
        <p className="moving-moment__caption">{caption}</p>
        {href ? (
          <Link href={href} className="moving-inline-link">
            {linkLabel}
          </Link>
        ) : null}
      </div>
    </article>
  )
}

export { EditorialSplitBand }
export type { EditorialSplitBandProps, MomentVariant }
