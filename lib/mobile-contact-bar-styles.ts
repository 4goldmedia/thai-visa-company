import { mobileMessagingBarActionClass } from "@/lib/section-styles"

/** Reserve space so sticky messaging bar does not cover page content (below lg) */
export const mobileContactBarOffsetClass =
  "max-lg:pb-[calc(var(--mobile-contact-bar-height)+env(safe-area-inset-bottom,0px))]"

/** @deprecated Use MessagingPlatformAction + mobileMessagingBarActionClass */
export const mobileContactBarShellClass = "mobile-messaging-bar"

/** @deprecated Use .mobile-messaging-bar__inner */
export const mobileContactBarInnerClass = "mobile-messaging-bar__inner"

/** @deprecated Use mobileMessagingBarActionClass */
export const mobileContactBarButtonPrimaryClass = mobileMessagingBarActionClass

/** @deprecated Use mobileMessagingBarActionClass */
export const mobileContactBarButtonSecondaryClass = mobileMessagingBarActionClass
