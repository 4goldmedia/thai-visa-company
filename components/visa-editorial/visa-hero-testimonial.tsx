import type { VisaHeroTestimonial } from "@/lib/visas/hero"
import { cn } from "@/lib/utils"

type VisaHeroTestimonialCardProps = VisaHeroTestimonial & {
  className?: string
}

function VisaHeroTestimonialCard({
  quote,
  attribution,
  className,
}: VisaHeroTestimonialCardProps) {
  return (
    <figure
      className={cn("visa-hero-testimonial", className)}
      aria-label="Client testimonial"
    >
      <div className="visa-hero-testimonial__stars" aria-hidden>
        ★★★★★
      </div>
      <blockquote className="visa-hero-testimonial__quote">
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <figcaption className="visa-hero-testimonial__attribution">
        {attribution}
      </figcaption>
    </figure>
  )
}

export { VisaHeroTestimonialCard }
export type { VisaHeroTestimonialCardProps }
