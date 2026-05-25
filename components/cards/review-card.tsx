import { Star } from "lucide-react"

import { OptimizedImage } from "@/components/ui/optimized-image"
import { cn } from "@/lib/utils"

type ReviewCardProps = {
  name: string
  location: string
  visaType: string
  review: string
  rating: number
  avatarSrc: string
  avatarAlt: string
  className?: string
}

type StarRatingProps = {
  rating: number
  variant?: "light" | "dark"
  className?: string
}

function StarRating({
  rating,
  variant = "light",
  className,
}: StarRatingProps) {
  const normalized = Math.min(5, Math.max(1, Math.round(rating)))

  if (variant === "dark") {
    return (
      <div
        className={cn("reviews-card__stars", className)}
        role="img"
        aria-label={`${normalized} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, index) => {
          const filled = index < normalized
          return (
            <Star
              key={index}
              data-filled={filled ? "true" : "false"}
              aria-hidden
            />
          )
        })}
      </div>
    )
  }

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
              : "fill-transparent text-border/80",
          )}
          aria-hidden
        />
      ))}
    </div>
  )
}

/**
 * Dark-band client review card — stars, quote, avatar + meta.
 */
function ReviewCard({
  name,
  location,
  visaType,
  review,
  rating,
  avatarSrc,
  avatarAlt,
  className,
}: ReviewCardProps) {
  return (
    <article
      data-slot="review-card"
      className={cn("reviews-card", className)}
    >
      <StarRating rating={rating} variant="dark" />

      <blockquote className="reviews-card__quote">
        <p>{review}</p>
      </blockquote>

      <footer className="reviews-card__profile">
        <div className="reviews-card__avatar">
          <OptimizedImage
            src={avatarSrc}
            alt={avatarAlt}
            width={44}
            height={44}
            className="size-full object-cover"
          />
        </div>
        <div className="reviews-card__meta">
          <p className="reviews-card__name">{name}</p>
          <p className="reviews-card__location">{location}</p>
          <p className="reviews-card__visa">{visaType}</p>
        </div>
      </footer>
    </article>
  )
}

export { ReviewCard, StarRating }
export type { ReviewCardProps }
