import { cn } from "@/lib/utils"

/** Wrapper nav — calm fintech breadcrumb bar */
export const breadcrumbNavClass = "w-full min-w-0"

export const breadcrumbListClass = cn(
  "flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1",
  "text-[13px] leading-snug tracking-[0.01em] sm:text-sm"
)

export const breadcrumbItemClass = "flex min-w-0 max-w-full items-center gap-x-2"

export const breadcrumbLinkClass = cn(
  "truncate text-muted-foreground/85 underline-offset-[3px]",
  "transition-colors hover:text-foreground hover:underline",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring focus-visible:rounded-sm"
)

export const breadcrumbCurrentClass =
  "truncate font-medium text-foreground/90"

export const breadcrumbSeparatorClass =
  "shrink-0 text-muted-foreground/35 select-none"
