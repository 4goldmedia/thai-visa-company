import Script from "next/script"

import { getGaMeasurementId } from "@/lib/analytics/env"

type GoogleAnalyticsProps = {
  measurementId?: string
}

/**
 * Loads GA4 gtag.js once. Page views are sent manually for App Router navigations.
 * Renders nothing when `NEXT_PUBLIC_GA_ID` is unset.
 */
function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const id = measurementId ?? getGaMeasurementId()
  if (!id) return null

  const gtagInit = `
    window.dataLayer=window.dataLayer||[];
    function gtag(){dataLayer.push(arguments);}
    gtag('js',new Date());
    gtag('config','${id}',{
      send_page_view:false,
      anonymize_ip:true,
      allow_google_signals:false,
      allow_ad_personalization_signals:false
    });
  `

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {gtagInit}
      </Script>
    </>
  )
}

export { GoogleAnalytics }
