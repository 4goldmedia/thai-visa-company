import { cn } from "@/lib/utils"

import {
  ctaButtonPrimaryClass,
  ctaButtonSecondaryClass,
} from "@/lib/section-styles"

/** Sticky bar shell — subtle elevation, calm fintech chrome */
export const mobileContactBarShellClass = cn(
  "fixed inset-x-0 bottom-0 z-40 lg:hidden",
  "border-t border-border/60 bg-background/95",
  "shadow-[0_-6px_20px_-10px_rgba(0,0,0,0.12)]",
  "backdrop-blur-md supports-[backdrop-filter]:bg-background/88",
  "motion-reduce:backdrop-blur-none"
)

/** Inner row — thumb-friendly targets without oversized chrome */
export const mobileContactBarInnerClass = cn(
  "mx-auto flex w-full max-w-[1280px] gap-2",
  "px-4 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] sm:px-6"
)

/** Reserve space so fixed bar does not cover page content (mobile only) */
export const mobileContactBarOffsetClass =
  "max-lg:pb-[calc(var(--mobile-contact-bar-height)+env(safe-area-inset-bottom,0px))]"

export const mobileContactBarButtonPrimaryClass = cn(
  ctaButtonPrimaryClass,
  "h-10 min-h-10 flex-1 px-3 text-[14px] sm:text-sm"
)

export const mobileContactBarButtonSecondaryClass = cn(
  ctaButtonSecondaryClass,
  "h-10 min-h-10 flex-1 px-3 text-[14px] sm:text-sm"
)
