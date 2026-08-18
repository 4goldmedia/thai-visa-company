import Script from "next/script"

import { getAhrefsDataKey } from "@/lib/analytics/env"

type AhrefsAnalyticsProps = {
  dataKey?: string
}

/**
 * Loads Ahrefs Web Analytics globally. Non-blocking (`afterInteractive`).
 * Renders nothing when no data key is configured.
 */
function AhrefsAnalytics({ dataKey }: AhrefsAnalyticsProps) {
  const key = dataKey ?? getAhrefsDataKey()
  if (!key) return null

  return (
    <Script
      src="https://analytics.ahrefs.com/analytics.js"
      data-key={key}
      strategy="afterInteractive"
    />
  )
}

export { AhrefsAnalytics }
