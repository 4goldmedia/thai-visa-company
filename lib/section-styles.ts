import { cn } from "@/lib/utils"

/** Comfortable max width for mobile body copy */
export const mobileReadableWidthClass = "max-w-[30rem]"

/** Eyebrow label above section titles */
export const sectionEyebrowClass =
  "text-[11px] font-medium text-muted-foreground sm:text-xs sm:text-[13px]"

/** Gap between eyebrow, title, and description */
export const sectionHeadingGapClass = "gap-2 sm:gap-2.5 md:gap-3"

/** Standard section description typography — mobile-first line height */
export const sectionDescriptionClass = cn(
  mobileReadableWidthClass,
  "text-[15px] leading-[1.7] text-muted-foreground sm:text-base sm:leading-relaxed"
)

/** Space between section heading block and main content */
export const sectionContentOffsetClass = "mt-6 sm:mt-8 md:mt-10"

/** Light section separator — use sparingly between major blocks */
export const sectionDividerClass = "border-t border-border/50"

/** Alternating muted band — max two per page for calm rhythm */
export const sectionBandClass = cn(sectionDividerClass, "bg-muted/10")

/** Vertical stack for primary + secondary CTAs */
export const ctaStackClass =
  "flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2"

/** Shared text link for section footers */
export const textLinkClass = cn(
  "inline-flex min-h-11 items-center gap-1.5 text-[13px] font-medium text-foreground/75",
  "underline-offset-4 transition-colors hover:text-foreground hover:underline",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  "sm:min-h-10 sm:text-sm"
)

/** Primary conversion button — LINE, 44px touch target on mobile */
export const ctaButtonPrimaryClass = cn(
  "h-11 min-h-11 w-full px-4 text-[15px] font-medium",
  "transition-[background-color,opacity] duration-200 ease-out",
  "sm:h-10 sm:min-h-10 sm:w-auto sm:text-sm",
  "motion-reduce:transition-none"
)

/** Secondary conversion button — WhatsApp outline */
export const ctaButtonSecondaryClass = cn(
  "h-11 min-h-11 w-full px-4 text-[15px] font-medium",
  "transition-[background-color,border-color] duration-200 ease-out",
  "sm:h-10 sm:min-h-10 sm:w-auto sm:text-sm",
  "motion-reduce:transition-none"
)

/** Tertiary action — explore visas, below primary contact buttons */
export const ctaTertiaryLinkClass = cn(
  "group inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-lg",
  "text-[15px] font-medium text-muted-foreground",
  "transition-[color,background-color] duration-200 ease-out",
  "hover:bg-muted/40 hover:text-foreground",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  "sm:min-h-10 sm:w-fit sm:justify-start sm:px-0 sm:text-sm sm:hover:bg-transparent",
  "motion-reduce:transition-none"
)

/** @deprecated Use ctaTertiaryLinkClass */
export const ctaTextLinkClass = ctaTertiaryLinkClass

/** Card padding — thumb-friendly internal spacing */
export const cardPaddingClass = "p-4 sm:p-5"

/** Card chrome shared across homepage cards */
export const cardSurfaceClass = cn(
  cardPaddingClass,
  "border border-border/50 bg-card",
  "transition-[border-color,background-color] duration-200 ease-out motion-reduce:transition-none",
  "hover:border-border/70 hover:bg-muted/5"
)
