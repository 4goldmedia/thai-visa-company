/**
 * Homepage trust bar  -  fast-scan credibility pillars beneath the hero.
 */

export type TrustBarItem = {
  /** Primary line  -  editorial emphasis */
  primary: string
  /** Secondary line  -  muted support */
  secondary: string
}

export type TrustBarContent = {
  /** Accessible region label */
  ariaLabel: string
  items: ReadonlyArray<TrustBarItem>
}

/** Desktop horizontal trust strip (four pillars, including rating). */
export const homepageTrustBar: TrustBarContent = {
  ariaLabel: "Why clients trust Thai Visa Company",
  items: [
    {
      primary: "Licensed &",
      secondary: "Fully Compliant",
    },
    {
      primary: "10,000+",
      secondary: "Clients worldwide",
    },
    {
      primary: "Fast response",
      secondary: "Within 24 hours",
    },
    {
      primary: "4.9/5",
      secondary: "Client rating",
    },
  ],
} as const

/**
 * Mobile trust band directly under the hero image.
 * Three signals only  -  rating already appears above the image.
 */
export const homepageMobileTrust: TrustBarContent = {
  ariaLabel: "Why clients trust Thai Visa Company",
  items: [
    {
      primary: "Licensed & Fully Compliant",
      secondary: "Thai immigration specialists",
    },
    {
      primary: "10,000+",
      secondary: "Clients worldwide",
    },
    {
      primary: "Replies within 24 hours",
      secondary: "Average response time",
    },
  ],
} as const
