import type { GtagEventParams } from "@/lib/analytics/gtag"

/** Where a CTA or conversion occurred */
export type AnalyticsSurface =
  | "homepage"
  | "visa_page"
  | "article"
  | "blog"
  | "resources"
  | "contact"
  | "global"

/** Stable CTA identifiers for visa landing pages */
export type VisaPageCtaId =
  | "hero_contact"
  | "final_cta_contact"
  | "explore_visas"

/** Stable CTA identifiers for resource articles */
export type ArticleCtaId =
  | "article_cta_contact"
  | "explore_visas"

export type AnalyticsEventParams = GtagEventParams

export type PageContextParams = {
  page_path?: string
}

export type ContactClickParams = PageContextParams & {
  link_url?: string
  surface?: AnalyticsSurface
  cta_id?: string
  visa_slug?: string
  article_slug?: string
}

/** Non–visa-page / non-article CTA clicks (homepage, contact, resources, global) */
export type PageCtaClickParams = PageContextParams & {
  surface: AnalyticsSurface
  cta_id: string
  cta_label?: string
  link_url?: string
  visa_slug?: string
  article_slug?: string
}

export type InquirySubmitParams = PageContextParams & {
  lead_source: string
}

export type VisaPageCtaClickParams = PageContextParams & {
  visa_slug: string
  cta_id: VisaPageCtaId | string
  cta_label?: string
  link_url?: string
}

export type ArticleCtaClickParams = PageContextParams & {
  article_slug: string
  cta_id: ArticleCtaId | string
  cta_label?: string
  link_url?: string
}
