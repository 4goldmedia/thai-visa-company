import { analyticsCategories, analyticsEvents } from "@/lib/analytics/events"
import { trackEvent } from "@/lib/analytics/track"
import type { ContactClickParams } from "@/lib/analytics/types"

function contactChannelParams(params: ContactClickParams) {
  return {
    event_category: analyticsCategories.contact,
    page_path: params.page_path,
    link_url: params.link_url,
    surface: params.surface,
    cta_id: params.cta_id,
    visa_slug: params.visa_slug,
    article_slug: params.article_slug,
  }
}

export function trackLineClick(params: ContactClickParams = {}): void {
  trackEvent(analyticsEvents.lineClick, {
    ...contactChannelParams(params),
    event_label: "line",
  })
}

export function trackWhatsAppClick(params: ContactClickParams = {}): void {
  trackEvent(analyticsEvents.whatsappClick, {
    ...contactChannelParams(params),
    event_label: "whatsapp",
  })
}

export function trackContactChannelClick(
  channel: "line" | "whatsapp",
  params: ContactClickParams = {},
): void {
  if (channel === "line") {
    trackLineClick(params)
    return
  }
  trackWhatsAppClick(params)
}
