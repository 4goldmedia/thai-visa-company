import { getGaMeasurementId, isAnalyticsEnabled } from "@/lib/analytics/env"
import type { GtagEventParams } from "@/lib/analytics/gtag"
import { toAnalyticsParams } from "@/lib/analytics/params"

function gtagSafe(
  command: "event" | "config",
  target: string,
  params?: GtagEventParams,
): void {
  if (typeof window === "undefined") return
  window.gtag?.(command, target, params)
}

/**
 * Low-level GA4 event — prefer typed helpers from `@/lib/analytics`.
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>,
): void {
  if (typeof window === "undefined" || !isAnalyticsEnabled()) return
  gtagSafe("event", eventName, toAnalyticsParams(params))
}

/**
 * Manual page view for App Router client navigations.
 */
export function trackPageView(pathname: string, measurementId?: string): void {
  const id = measurementId ?? getGaMeasurementId()
  if (!id || typeof window === "undefined") return

  gtagSafe("config", id, {
    page_path: pathname,
    page_location: window.location.href,
    page_title: document.title,
  })
}
