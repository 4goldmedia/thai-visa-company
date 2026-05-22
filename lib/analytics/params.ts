import type { AnalyticsEventParams } from "@/lib/analytics/types"

/** Strip empty values before sending to gtag */
export function toAnalyticsParams(
  params?: Record<string, string | number | boolean | undefined>,
): AnalyticsEventParams | undefined {
  if (!params) return undefined

  const cleaned = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== "",
    ),
  )

  return Object.keys(cleaned).length > 0 ? cleaned : undefined
}
