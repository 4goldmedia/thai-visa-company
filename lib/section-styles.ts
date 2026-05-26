import { cn } from "@/lib/utils"

/** Comfortable max width for mobile body copy — ~65ch at base size */
export const mobileReadableWidthClass = "max-w-[32rem]"

/** Eyebrow — muted graphite label, modern uppercase tracking */
export const sectionEyebrowClass =
  "font-sans text-[length:var(--text-meta)] font-medium uppercase tracking-[var(--tracking-eyebrow)] text-[var(--text-secondary)] sm:text-[length:var(--text-small)]"

/** Page hero H1 — Inter Tight display */
export const pageTitleClass = cn(
  "font-display font-medium",
  "text-[length:var(--text-display)] leading-[var(--leading-display)] tracking-[var(--tracking-display)]",
  "text-balance text-foreground",
  "sm:text-[length:var(--text-display-md)] md:text-[length:var(--text-display-lg)]",
  "lg:text-[length:var(--text-display-xl)]",
)

/** Secondary line under homepage H1 — tertiary, subordinate to primary headline */
export const pageTitleSecondaryClass = cn(
  "mt-[var(--space-hero-title-internal)] block max-w-[28rem] font-sans",
  "text-[length:var(--text-small)] font-normal leading-relaxed tracking-normal",
  "text-[var(--text-tertiary)] sm:text-[length:var(--text-body)]",
)

/** Hero / page lead paragraph */
export const pageLeadClass = cn(
  "mt-[var(--space-hero-title-to-lead)] max-w-[var(--width-hero-prose)]",
  "text-[length:var(--text-body)] leading-[var(--leading-body)] text-pretty text-[var(--text-secondary)]",
  "sm:text-[length:var(--text-body-md)]",
)

/** Hero layout — split grid rhythm */
export const heroGridClass = cn(
  "grid gap-8 sm:gap-10",
  "lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center lg:gap-12 xl:gap-14",
)

export const heroContentColumnClass = cn(
  mobileReadableWidthClass,
  "lg:max-w-[var(--width-hero-prose)]",
)

export const heroEyebrowToTitleClass = "mt-[var(--space-hero-eyebrow-to-title)]"

export const heroLeadToCtaClass = "mt-[var(--space-hero-lead-to-cta)] sm:mt-[calc(var(--space-hero-lead-to-cta)+0.25rem)]"

/** Hero CTAs — calm vertical rhythm */
export const heroCtaGroupClass = "flex flex-col gap-4"

export const heroCtaReassuranceClass =
  "text-[length:var(--text-small)] leading-relaxed text-[var(--text-tertiary)]"

export const heroCtaStackClass = cn(
  "flex flex-col gap-3",
  "sm:flex-row sm:flex-wrap sm:items-center sm:gap-2.5",
)

/** Trust block below hero CTAs */
export const trustDividerClass =
  "mt-9 border-t border-border/50 pt-7 sm:mt-10 sm:pt-8"

/** Hero trust — quieter than default section trust */
export const heroTrustDividerClass = cn(
  "mt-[var(--space-hero-cta-to-trust)] border-t border-border/40 pt-6 sm:pt-7",
)

export const trustListItemClass =
  "flex items-start gap-2.5 text-sm leading-snug text-muted-foreground"

export const heroTrustListItemClass = cn(
  "flex items-start gap-2 text-[length:var(--text-small)] leading-relaxed text-[var(--text-secondary)]",
  "sm:text-[length:var(--text-body)]",
)

export const trustIconClass =
  "mt-0.5 size-3.5 shrink-0 text-[var(--text-tertiary)]"

export const heroTrustIconClass =
  "mt-0.5 size-3.5 shrink-0 text-[var(--text-tertiary)]"

/** Gap between eyebrow, title, and description */
export const sectionHeadingGapClass = "gap-2.5 sm:gap-3 md:gap-3.5"

/** Standard section description typography */
export const sectionDescriptionClass = cn(
  mobileReadableWidthClass,
  "text-[length:var(--text-body)] leading-[var(--leading-body)] text-muted-foreground sm:text-[length:var(--text-body-md)]",
)

/** Space between section heading block and main content */
export const sectionContentOffsetClass = cn(
  "mt-[var(--space-heading-offset)] sm:mt-[var(--space-heading-offset-md)] md:mt-[var(--space-heading-offset-lg)]",
)

/** Light section separator */
export const sectionDividerClass = "border-t border-border/50"

/** Alternating muted band — max two per page */
export const sectionBandClass = cn(
  sectionDividerClass,
  "bg-[var(--surface-band)]",
)

/** Vertical stack for primary + secondary CTAs */
export const ctaStackClass =
  "flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2.5"

/** Shared text link for section footers */
export const textLinkClass = cn(
  "inline-flex min-h-11 items-center gap-1.5 text-[length:var(--text-small)] font-medium text-foreground/75",
  "underline-offset-4 transition-colors hover:text-foreground hover:underline",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  "sm:min-h-10 sm:text-[length:var(--text-body)]",
)

/** Primary CTA — warm charcoal, sharp modern */
export const ctaButtonPrimaryClass = cn(
  "h-11 min-h-11 w-full rounded-[var(--radius-button)] border border-transparent px-5",
  "text-[length:var(--text-body)] font-medium tracking-normal",
  "bg-primary text-primary-foreground",
  "transition-[background-color,border-color,opacity] duration-200 ease-out",
  "hover:bg-[var(--primary-hover)] active:opacity-[0.97]",
  "sm:h-10 sm:min-h-10 sm:w-auto sm:text-[length:var(--text-body-md)]",
  "motion-reduce:transition-none",
)

/** Secondary CTA — architectural outline */
export const ctaButtonSecondaryClass = cn(
  "h-11 min-h-11 w-full rounded-[var(--radius-button)] px-5",
  "text-[length:var(--text-body)] font-medium tracking-normal",
  "border border-[var(--border-default)] bg-[var(--surface-elevated)] text-foreground",
  "transition-[border-color,background-color] duration-200 ease-out",
  "hover:border-foreground/15 hover:bg-[var(--surface-muted)]",
  "sm:h-10 sm:min-h-10 sm:w-auto sm:text-[length:var(--text-body-md)]",
  "motion-reduce:transition-none",
)

/** Tertiary action */
export const ctaTertiaryLinkClass = cn(
  "group inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-[var(--radius-button)]",
  "text-[length:var(--text-body)] font-medium text-muted-foreground",
  "transition-[color,background-color] duration-200 ease-out",
  "hover:bg-muted/60 hover:text-foreground",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  "sm:min-h-10 sm:w-fit sm:justify-start sm:px-0 sm:text-[length:var(--text-body-md)] sm:hover:bg-transparent",
  "motion-reduce:transition-none",
)

/** @deprecated Use ctaTertiaryLinkClass */
export const ctaTextLinkClass = ctaTertiaryLinkClass

/** Hero primary/secondary — slightly more presence than default section CTAs */
export const heroCtaButtonPrimaryClass = cn(
  ctaButtonPrimaryClass,
  "px-5 sm:min-w-[11.25rem]",
)

export const heroCtaButtonSecondaryClass = cn(
  ctaButtonSecondaryClass,
  "border-border/70 bg-background px-5 sm:min-w-[11.25rem]",
)

export const heroCtaTertiaryLinkClass = cn(
  ctaTertiaryLinkClass,
  "text-[length:var(--text-small)] text-[var(--text-secondary)] sm:text-[length:var(--text-body)]",
)

/** Immersive homepage hero — vertical calm, restrained width */
export const heroPremiumCtaGroupClass = "flex flex-col gap-3"

export const heroPremiumCtaStackClass = cn(
  "flex flex-col gap-2.5 w-full max-w-[16.5rem]",
)

export const heroPremiumCtaButtonPrimaryClass = cn(
  ctaButtonPrimaryClass,
  "h-12 min-h-12 px-6 text-[length:var(--text-body)] font-medium tracking-normal",
  "sm:h-12 sm:min-h-12 sm:w-full",
)

export const heroPremiumCtaButtonSecondaryClass = cn(
  ctaButtonSecondaryClass,
  "h-11 min-h-11 border-border/55 bg-transparent px-6",
  "text-[length:var(--text-small)] font-medium text-[var(--text-secondary)]",
  "hover:bg-muted/35 sm:h-11 sm:min-h-11 sm:w-full",
)

/** Homepage hero — single editorial explore link */
export const heroExploreLinkClass = cn(
  "group inline-flex w-fit items-center gap-1.5",
  "text-[length:var(--text-small)] font-medium tracking-normal text-[var(--text-secondary)]",
  "transition-[color] duration-200 ease-out",
  "hover:text-foreground",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  "sm:text-[length:var(--text-body)]",
  "motion-reduce:transition-none",
)

/** Hero contact strip (desktop) — stronger focal points, neutral surfaces */
export const heroContactStripActionClass = cn(
  "messaging-platform-action",
  "flex-1 sm:flex-none",
  "motion-reduce:transition-none",
)

/** Sticky mobile messaging bar — 50/50 thumb targets */
export const mobileMessagingBarActionClass = cn(
  "messaging-platform-action",
  "min-w-0 flex-1",
  "motion-reduce:transition-none",
)

export const heroPremiumExploreLinkClass = cn(
  "group inline-flex w-fit items-center gap-1.5",
  "text-[length:var(--text-small)] font-medium text-[var(--text-secondary)]",
  "underline decoration-border/80 underline-offset-[0.22em]",
  "transition-[color,text-decoration-color] duration-200 ease-out",
  "hover:text-foreground hover:decoration-foreground/25",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  "motion-reduce:transition-none",
)

/** Card padding */
export const cardPaddingClass =
  "p-[var(--space-card-padding)] sm:p-[var(--space-card-padding-md)]"

/** Card — border-first surface, no decorative shadow */
export const cardSurfaceClass = cn(
  cardPaddingClass,
  "rounded-[var(--radius-card)] border border-border/60 bg-card",
  "transition-[border-color,background-color] duration-200 ease-out motion-reduce:transition-none",
  "hover:border-[var(--border-subtle)]",
)

/** Dashed placeholder panels (resources, articles) */
export const cardPlaceholderClass = cn(
  "rounded-[var(--radius-card)] border border-dashed border-border/50 bg-muted/5",
  "px-[var(--space-card-padding)] py-[var(--space-card-padding)]",
  "text-[length:var(--text-body)] leading-[var(--leading-body)] text-muted-foreground",
  "sm:py-[var(--space-card-padding-md)]",
)

/** Bordered content shell (FAQ, process) */
export const cardShellClass = cn(
  "overflow-hidden rounded-[var(--radius-card)] border border-border/45 bg-card",
)

/** Global rating stars — hero, Google summary, review cards */
export const ratingStarRowClass = "flex gap-px"

export const ratingStarIconClass = "size-3 shrink-0"

export const ratingStarIconMdClass = "size-3.5 shrink-0"

export const ratingStarFilledClass = "fill-amber-500/75 text-amber-500/75"

export const ratingStarEmptyClass = "fill-transparent text-border/80"
