import { Star } from "lucide-react"

import { OptimizedImage } from "@/components/ui/optimized-image"
import {
  ratingStarEmptyClass,
  ratingStarFilledClass,
  ratingStarIconClass,
  ratingStarIconMdClass,
  ratingStarRowClass,
} from "@/lib/section-styles"
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
  /** Matches Google summary `md` stacked layout */
  size?: "sm" | "md"
  className?: string
}

function StarRating({
  rating,
  size = "sm",
  className,
}: StarRatingProps) {
  const normalized = Math.min(5, Math.max(1, Math.round(rating)))
  const iconClass = size === "md" ? ratingStarIconMdClass : ratingStarIconClass

  return (
    <div
      className={cn(ratingStarRowClass, className)}
      role="img"
      aria-label={`${normalized} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            iconClass,
            index < normalized ? ratingStarFilledClass : ratingStarEmptyClass,
          )}
          aria-hidden
        />
      ))}
    </div>
  )
}

/**
 * Dark-band client review card  -  stars, quote, avatar + meta.
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
      <StarRating rating={rating} />

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
