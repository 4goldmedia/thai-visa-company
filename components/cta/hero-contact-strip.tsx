import { MessagingPlatformAction } from "@/components/cta/messaging-platform-action"
import { analyticsDataAttributes } from "@/lib/analytics/attributes"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"
import type { AnalyticsSurface } from "@/lib/analytics"
import { homepageAiCopy } from "@/lib/seo/ai-search"
import { cn } from "@/lib/utils"

type HeroContactStripProps = {
  analyticsSurface?: AnalyticsSurface
  className?: string
}

/**
 * Desktop hero messaging panel — primary conversion on lg+; hidden on mobile (sticky bar).
 */
function HeroContactStrip({
  analyticsSurface = "homepage",
  className,
}: HeroContactStripProps) {
  const { title, subtitle } = homepageAiCopy.heroContactStrip

  return (
    <div
      className={cn("hero-contact-strip", className)}
      role="region"
      aria-label={title}
      {...analyticsDataAttributes({
        ctaId: analyticsCtaIds.heroContact,
        surface: analyticsSurface,
      })}
    >
      <div className="hero-contact-strip__intro">
        <p className="hero-contact-strip__title">{title}</p>
        <p className="hero-contact-strip__subtitle">{subtitle}</p>
      </div>

      <div className="hero-contact-strip__rule" aria-hidden />

      <div className="hero-contact-strip__actions">
        <MessagingPlatformAction channel="line" density="hero" />
        <MessagingPlatformAction channel="whatsapp" density="hero" />
      </div>
    </div>
  )
}

export { HeroContactStrip }
