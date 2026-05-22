/**
 * Stable CTA identifiers — use in `analyticsDataAttributes` and reporting.
 * Do not inline arbitrary strings in components.
 */
export const analyticsCtaIds = {
  heroContact: "hero_contact",
  finalCtaContact: "final_cta_contact",
  contactGroup: "contact_group",
  exploreVisas: "explore_visas",
  articleCtaContact: "article_cta_contact",
  inquirySidebarContact: "inquiry_sidebar_contact",
  navbarContact: "navbar_contact",
  navbarMenuContact: "navbar_menu_contact",
  mobileBarContact: "mobile_bar_contact",
  footerContact: "footer_contact",
  inquirySuccessContact: "inquiry_success_contact",
} as const

export type AnalyticsCtaId =
  (typeof analyticsCtaIds)[keyof typeof analyticsCtaIds]
