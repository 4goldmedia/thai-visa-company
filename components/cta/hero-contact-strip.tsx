import { ShieldCheck } from "lucide-react"

import { MessagingPlatformAction } from "@/components/cta/messaging-platform-action"
import { analyticsDataAttributes } from "@/lib/analytics/attributes"
import { analyticsCtaIds } from "@/lib/analytics/cta-ids"
import type { AnalyticsSurface } from "@/lib/analytics"
import { homepageAiCopy } from "@/lib/seo/ai-search"
import { cn } from "@/lib/utils"

type HeroContactStripProps = {
  analyticsSurface?: AnalyticsSurface
  className?: string
  /** Override homepage default title */
  title?: string
  /** Override homepage default subtitle */
  subtitle?: string
  /** Show on all breakpoints (e.g. Team page) */
  alwaysVisible?: boolean
  /** Hide the guarantee row when not needed */
  showGuarantee?: boolean
}

/**
 * Messaging panel used on the homepage hero and reusable CTAs.
 * Desktop-gated by default; pass `alwaysVisible` for full-page placements.
 */
function HeroContactStrip({
  analyticsSurface = "homepage",
  className,
  title,
  subtitle,
  alwaysVisible = false,
  showGuarantee = true,
}: HeroContactStripProps) {
  const defaults = homepageAiCopy.heroContactStrip
  const resolvedTitle = title ?? defaults.title
  const resolvedSubtitle = subtitle ?? defaults.subtitle
  const { guarantee } = defaults

  return (
    <div
      className={cn(
        "hero-contact-strip-wrap",
        alwaysVisible && "hero-contact-strip-wrap--always",
        className,
      )}
    >
      <div
        className="hero-contact-strip"
        role="region"
        aria-label={resolvedTitle}
        {...analyticsDataAttributes({
          ctaId: analyticsCtaIds.heroContact,
          surface: analyticsSurface,
        })}
      >
        <div className="hero-contact-strip__intro">
          <p className="hero-contact-strip__title">{resolvedTitle}</p>
          <p className="hero-contact-strip__subtitle">{resolvedSubtitle}</p>
        </div>

        <div className="hero-contact-strip__rule" aria-hidden />

        <div className="hero-contact-strip__actions">
          <MessagingPlatformAction channel="line" density="hero" />
          <MessagingPlatformAction channel="whatsapp" density="hero" />
        </div>
      </div>

      {showGuarantee ? (
        <p className="hero-contact-strip__guarantee">
          <ShieldCheck
            className="hero-contact-strip__guarantee-icon"
            aria-hidden
            strokeWidth={1.5}
          />
          <span className="hero-contact-strip__guarantee-text">{guarantee}</span>
        </p>
      ) : null}
    </div>
  )
}

export { HeroContactStrip }
export type { HeroContactStripProps }
