import { cn } from "@/lib/utils"

/** Display / page H1  -  Inter Tight */
export const fontDisplayClass = "font-display"

/** Section H2  -  Inter Tight, architectural scale */
export const sectionTitleClass = cn(
  fontDisplayClass,
  "font-medium tracking-[var(--tracking-heading)] text-balance text-foreground",
  "text-[length:var(--text-section-title)] leading-[var(--leading-heading)]",
  "sm:text-[length:var(--text-section-title-md)]",
  "md:text-[length:var(--text-section-title-lg)]",
)

/** Large section title variant */
export const sectionTitleLgClass = cn(
  fontDisplayClass,
  "font-medium tracking-[var(--tracking-heading)] text-balance text-foreground",
  "text-[length:var(--text-section-title-md)] leading-[var(--leading-heading)]",
  "sm:text-[length:var(--text-section-title-lg)] lg:text-[length:var(--text-section-title-xl)]",
)
