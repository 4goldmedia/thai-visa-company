import { Star } from "lucide-react"

import { cardSurfaceClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type ReviewCardProps = {
  /** Reviewer display name */
  name: string
  /** Optional country or location */
  location?: string
  /** Review body — keep concise for scannability */
  review: string
  /** Star rating from 1 to 5 */
  rating: number
  /** Show a subtle Google review label */
  fromGoogle?: boolean
  className?: string
}

function StarRating({
  rating,
  className,
}: {
  rating: number
  className?: string
}) {
  const normalized = Math.min(5, Math.max(1, Math.round(rating)))

  return (
    <div
      className={cn("flex gap-px", className)}
      role="img"
      aria-label={`${normalized} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "size-3 shrink-0",
            index < normalized
              ? "fill-amber-500/75 text-amber-500/75"
              : "fill-transparent text-border/80"
          )}
          aria-hidden
        />
      ))}
    </div>
  )
}

function ReviewCard({
  name,
  location,
  review,
  rating,
  fromGoogle = false,
  className,
}: ReviewCardProps) {
  return (
    <article
      data-slot="review-card"
      className={cn("flex h-full flex-col", cardSurfaceClass, className)}
    >
      <StarRating rating={rating} />

      <header className="mt-2.5 min-w-0 sm:mt-3">
        <p className="text-[14px] font-medium leading-snug text-foreground">
          {name}
          {location ? (
            <span className="font-normal text-muted-foreground">
              {" "}
              · {location}
            </span>
          ) : null}
        </p>
        {fromGoogle ? (
          <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
            Google review
          </p>
        ) : null}
      </header>

      <blockquote className="mt-2 flex-1 border-0 p-0 sm:mt-2.5">
        <p className="text-[14px] leading-[1.7] text-foreground/85">
          {review}
        </p>
      </blockquote>
    </article>
  )
}

export { ReviewCard, StarRating }
export type { ReviewCardProps }
