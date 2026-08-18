import { Suspense } from "react"

import { AhrefsAnalytics } from "@/components/analytics/ahrefs-analytics"
import { AnalyticsListeners } from "@/components/analytics/analytics-listeners"
import { GoogleAnalytics } from "@/components/analytics/google-analytics"
import { getAhrefsDataKey, getGaMeasurementId } from "@/lib/analytics/env"

/**
 * Site analytics root  -  Ahrefs Web Analytics + GA4 scripts and listeners.
 */
function AnalyticsRoot() {
  const measurementId = getGaMeasurementId()
  const ahrefsDataKey = getAhrefsDataKey()

  return (
    <>
      {ahrefsDataKey ? <AhrefsAnalytics dataKey={ahrefsDataKey} /> : null}
      {measurementId ? (
        <>
          <GoogleAnalytics measurementId={measurementId} />
          <Suspense fallback={null}>
            <AnalyticsListeners measurementId={measurementId} />
          </Suspense>
        </>
      ) : null}
    </>
  )
}

export { AnalyticsRoot }
