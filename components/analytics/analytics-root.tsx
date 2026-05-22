import { Suspense } from "react"

import { AnalyticsListeners } from "@/components/analytics/analytics-listeners"
import { GoogleAnalytics } from "@/components/analytics/google-analytics"
import { getGaMeasurementId } from "@/lib/analytics/env"

/**
 * GA4 root — scripts + listeners. Omit from layout when ID is unset.
 */
function AnalyticsRoot() {
  const measurementId = getGaMeasurementId()
  if (!measurementId) return null

  return (
    <>
      <GoogleAnalytics measurementId={measurementId} />
      <Suspense fallback={null}>
        <AnalyticsListeners measurementId={measurementId} />
      </Suspense>
    </>
  )
}

export { AnalyticsRoot }
