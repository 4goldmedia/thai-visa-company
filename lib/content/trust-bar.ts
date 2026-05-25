/**
 * Homepage trust bar — fast-scan credibility pillars beneath the hero.
 */

export type TrustBarIcon = "shield" | "users" | "clock" | "star"

export type TrustBarItem = {
  icon: TrustBarIcon
  /** Primary line — slightly stronger weight */
  primary: string
  /** Secondary line — muted graphite */
  secondary: string
}

export type TrustBarContent = {
  /** Accessible region label */
  ariaLabel: string
  items: ReadonlyArray<TrustBarItem>
}

export const homepageTrustBar: TrustBarContent = {
  ariaLabel: "Why clients trust Thai Visa Company",
  items: [
    {
      icon: "shield",
      primary: "Licensed &",
      secondary: "Fully Compliant",
    },
    {
      icon: "users",
      primary: "10,000+",
      secondary: "Clients worldwide",
    },
    {
      icon: "clock",
      primary: "Fast response",
      secondary: "Within 24 hours",
    },
    {
      icon: "star",
      primary: "4.9/5",
      secondary: "Client rating",
    },
  ],
} as const
