import { cn } from "@/lib/utils"

/** Shared form shell — calm fintech rhythm */
export const formStackClass = "flex flex-col gap-5 sm:gap-6"

export const formLabelClass =
  "text-[13px] font-medium text-foreground sm:text-sm"

export const formOptionalHintClass = "font-normal text-muted-foreground"

export const formHintClass =
  "text-[13px] leading-snug text-muted-foreground sm:text-sm"

export const formErrorClass =
  "text-[13px] leading-snug text-destructive sm:text-sm"

/** Text inputs and selects — 44px touch target on mobile */
export const formControlClass = cn(
  "h-11 w-full min-w-0 rounded-[var(--radius)] border border-border bg-background px-3.5",
  "text-[15px] text-foreground placeholder:text-muted-foreground/65",
  "transition-[border-color,box-shadow] duration-200 ease-out",
  "hover:border-border/70",
  "focus-visible:border-ring/60 focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:outline-none",
  "disabled:cursor-not-allowed disabled:opacity-60",
  "aria-invalid:border-destructive/60 aria-invalid:ring-3 aria-invalid:ring-destructive/15",
  "sm:h-10 sm:px-3 sm:text-sm"
)

export const formTextareaClass = cn(
  formControlClass,
  "h-auto min-h-[7.5rem] resize-y py-3 leading-[1.55] sm:min-h-[6.5rem]"
)

export const formSelectClass = cn(
  formControlClass,
  "appearance-none bg-[length:1rem] bg-position-[right_0.75rem_center] bg-no-repeat pr-10",
  "bg-[image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23737373' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")]"
)

export const formCardClass = cn(
  "rounded-[var(--radius)] border border-border bg-card p-5 sm:p-6 md:p-7"
)

export const formTitleClass =
  "text-lg font-semibold tracking-tight text-foreground sm:text-xl"

export const formDescriptionClass = cn(
  "mt-2 max-w-[32rem] text-[15px] leading-[1.65] text-muted-foreground sm:text-base sm:leading-relaxed"
)

export const formTrustNoteClass = cn(
  "text-[13px] leading-snug text-muted-foreground sm:text-sm"
)

/** Inquiry success — calm confirmation shell */
export const formSuccessIconWrapClass = cn(
  "flex size-10 shrink-0 items-center justify-center rounded-full",
  "border border-primary/15 bg-primary/5 sm:size-11"
)

export const formSuccessSectionTitleClass =
  "text-[13px] font-medium tracking-tight text-foreground sm:text-sm"

export const formSuccessStepListClass = "mt-3 flex flex-col gap-2.5 sm:gap-3"

export const formSuccessStepItemClass = cn(
  "flex gap-3 text-[14px] leading-[1.55] text-muted-foreground sm:text-[15px] sm:leading-[1.6]"
)

export const formSuccessStepMarkerClass = cn(
  "flex size-6 shrink-0 items-center justify-center rounded-full",
  "border border-border/55 bg-muted/30 text-[11px] font-medium tabular-nums text-foreground/75 sm:size-6"
)

export const formSuccessDividerClass = "border-t border-border/40"

export const formSuccessCtaStackClass = "flex w-full flex-col gap-2.5"

export const formSuccessCtaPrimaryClass = cn(
  "h-11 min-h-11 w-full px-4 text-[15px] font-medium sm:text-sm",
  "motion-reduce:transition-none"
)

export const formSuccessCtaSecondaryClass = cn(
  "h-11 min-h-11 w-full px-4 text-[15px] font-medium sm:text-sm",
  "motion-reduce:transition-none"
)
