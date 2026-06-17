import { MessagingCta } from "@/components/cta/messaging-cta"
import {
  navbarCtaPrimaryClass,
  navbarCtaSecondaryClass,
  navbarMenuCtaPrimaryClass,
  navbarMenuCtaSecondaryClass,
} from "@/lib/cta"
import {
  mobileContactBarButtonPrimaryClass,
  mobileContactBarButtonSecondaryClass,
  mobileContactBarInnerClass,
} from "@/lib/mobile-contact-bar-styles"
import {
  formSuccessCtaPrimaryClass,
  formSuccessCtaSecondaryClass,
  formSuccessCtaStackClass,
} from "@/lib/form-styles"
import {
  ctaButtonPrimaryClass,
  ctaButtonSecondaryClass,
  ctaStackClass,
  heroCtaButtonPrimaryClass,
  heroCtaButtonSecondaryClass,
  heroCtaStackClass,
  heroPremiumCtaButtonPrimaryClass,
  heroPremiumCtaButtonSecondaryClass,
  heroPremiumCtaStackClass,
} from "@/lib/section-styles"
import { cn } from "@/lib/utils"

export type MessagingCtaPairLayout =
  | "stack"
  | "hero"
  | "hero-premium"
  | "success"
  | "navbar-compact"
  | "navbar-menu"
  | "mobile-bar"

export type MessagingCtaPairProps = {
  layout?: MessagingCtaPairLayout
  className?: string
  onNavigate?: () => void
}

/**
 * LINE + WhatsApp pair  -  consistent order, labels, and env-based URLs.
 */
function MessagingCtaPair({
  layout = "stack",
  className,
  onNavigate,
}: MessagingCtaPairProps) {
  const handleNavigate = onNavigate
    ? () => onNavigate()
    : undefined

  if (layout === "navbar-compact") {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <MessagingCta
          channel="line"
          labelMode="short"
          className={navbarCtaSecondaryClass}
          onClick={handleNavigate}
        />
        <MessagingCta
          channel="whatsapp"
          labelMode="full"
          variant="primary"
          className={cn(
            navbarCtaPrimaryClass,
            "hidden min-[480px]:inline-flex",
          )}
          onClick={handleNavigate}
        />
      </div>
    )
  }

  if (layout === "navbar-menu") {
    return (
      <div
        className={cn(
          "grid grid-cols-1 gap-2.5 sm:grid-cols-2",
          className,
        )}
      >
        <MessagingCta
          channel="line"
          labelMode="full"
          className={navbarMenuCtaSecondaryClass}
          onClick={handleNavigate}
        />
        <MessagingCta
          channel="whatsapp"
          variant="primary"
          className={navbarMenuCtaPrimaryClass}
          onClick={handleNavigate}
        />
      </div>
    )
  }

  if (layout === "success") {
    return (
      <div className={cn(formSuccessCtaStackClass, className)}>
        <MessagingCta channel="line" className={formSuccessCtaSecondaryClass} />
        <MessagingCta
          channel="whatsapp"
          variant="primary"
          className={formSuccessCtaPrimaryClass}
        />
      </div>
    )
  }

  if (layout === "mobile-bar") {
    return (
      <div className={cn(mobileContactBarInnerClass, className)}>
        <MessagingCta
          channel="line"
          labelMode="short"
          className={mobileContactBarButtonSecondaryClass}
        />
        <MessagingCta
          channel="whatsapp"
          variant="primary"
          className={mobileContactBarButtonPrimaryClass}
        />
      </div>
    )
  }

  if (layout === "hero") {
    return (
      <div className={cn(heroCtaStackClass, className)}>
        <MessagingCta channel="line" className={heroCtaButtonSecondaryClass} />
        <MessagingCta
          channel="whatsapp"
          variant="primary"
          className={heroCtaButtonPrimaryClass}
        />
      </div>
    )
  }

  if (layout === "hero-premium") {
    return (
      <div className={cn(heroPremiumCtaStackClass, className)}>
        <MessagingCta
          channel="line"
          className={heroPremiumCtaButtonSecondaryClass}
        />
        <MessagingCta
          channel="whatsapp"
          variant="primary"
          className={heroPremiumCtaButtonPrimaryClass}
        />
      </div>
    )
  }

  return (
    <div className={cn(ctaStackClass, className)}>
      <MessagingCta channel="line" className={ctaButtonSecondaryClass} />
      <MessagingCta
        channel="whatsapp"
        variant="primary"
        className={ctaButtonPrimaryClass}
      />
    </div>
  )
}

export { MessagingCtaPair }
