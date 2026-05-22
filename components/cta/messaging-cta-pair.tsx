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
} from "@/lib/section-styles"
import { cn } from "@/lib/utils"

export type MessagingCtaPairLayout =
  | "stack"
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
 * LINE + WhatsApp pair — consistent order, labels, and env-based URLs.
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
          className={navbarCtaPrimaryClass}
          onClick={handleNavigate}
        />
        <MessagingCta
          channel="whatsapp"
          labelMode="full"
          variant="outline"
          className={cn(
            navbarCtaSecondaryClass,
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
          className={navbarMenuCtaPrimaryClass}
          onClick={handleNavigate}
        />
        <MessagingCta
          channel="whatsapp"
          variant="outline"
          className={navbarMenuCtaSecondaryClass}
          onClick={handleNavigate}
        />
      </div>
    )
  }

  if (layout === "success") {
    return (
      <div className={cn(formSuccessCtaStackClass, className)}>
        <MessagingCta channel="line" className={formSuccessCtaPrimaryClass} />
        <MessagingCta
          channel="whatsapp"
          variant="outline"
          className={formSuccessCtaSecondaryClass}
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
          className={mobileContactBarButtonPrimaryClass}
        />
        <MessagingCta
          channel="whatsapp"
          variant="outline"
          className={mobileContactBarButtonSecondaryClass}
        />
      </div>
    )
  }

  return (
    <div className={cn(ctaStackClass, className)}>
      <MessagingCta channel="line" className={ctaButtonPrimaryClass} />
      <MessagingCta
        channel="whatsapp"
        variant="outline"
        className={ctaButtonSecondaryClass}
      />
    </div>
  )
}

export { MessagingCtaPair }
