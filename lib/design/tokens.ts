/**
 * Semantic design token keys — mirror CSS variables in styles/tokens.css.
 * Use for documentation, tests, and typed references; styling stays in CSS.
 */

export const fontTokens = {
  sans: "--font-sans",
  display: "--font-display",
  mono: "--font-mono",
  heading: "--font-heading",
} as const

export const typeScaleTokens = {
  display: "--text-display",
  displayMd: "--text-display-md",
  displayLg: "--text-display-lg",
  sectionTitle: "--text-section-title",
  sectionTitleMd: "--text-section-title-md",
  sectionTitleLg: "--text-section-title-lg",
  sectionTitleXl: "--text-section-title-xl",
  body: "--text-body",
  bodyMd: "--text-body-md",
  small: "--text-small",
  meta: "--text-meta",
} as const

export const surfaceTokens = {
  base: "--surface-base",
  elevated: "--surface-elevated",
  muted: "--surface-muted",
  band: "--surface-band",
} as const

export const textTokens = {
  primary: "--text-primary",
  secondary: "--text-secondary",
  tertiary: "--text-tertiary",
} as const

export const spacingTokens = {
  sectionYSm: "--space-section-y-sm",
  sectionY: "--space-section-y",
  sectionYLg: "--space-section-y-lg",
  sectionYHero: "--space-section-y-hero",
  contentGap: "--space-content-gap",
  contentGapMd: "--space-content-gap-md",
  cardPadding: "--space-card-padding",
  cardPaddingMd: "--space-card-padding-md",
  gridGap: "--space-grid-gap",
  gridGapMd: "--space-grid-gap-md",
  headingOffset: "--space-heading-offset",
  headingOffsetMd: "--space-heading-offset-md",
  headingOffsetLg: "--space-heading-offset-lg",
} as const

export const radiusTokens = {
  sm: "--radius-sm",
  DEFAULT: "--radius",
  md: "--radius-md",
} as const

export const shadowTokens = {
  none: "--shadow-none",
  layer: "--shadow-layer",
} as const
