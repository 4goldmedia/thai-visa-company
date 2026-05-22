"use client"

import * as React from "react"
import { usePathname, useSearchParams } from "next/navigation"

import { attachAnalyticsClickListener } from "@/lib/analytics/document-listeners"
import { trackPageView } from "@/lib/analytics"

type AnalyticsListenersProps = {
  measurementId: string
}

/**
 * GA4 client listeners — page views on route change; one persistent click delegate.
 */
function AnalyticsListeners({ measurementId }: AnalyticsListenersProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const pagePath = React.useMemo(() => {
    const query = searchParams.toString()
    return query ? `${pathname}?${query}` : pathname
  }, [pathname, searchParams])

  const pagePathRef = React.useRef(pagePath)
  pagePathRef.current = pagePath

  React.useEffect(() => {
    if (!pagePath) return
    trackPageView(pagePath, measurementId)
  }, [pagePath, measurementId])

  React.useEffect(() => {
    return attachAnalyticsClickListener(() => pagePathRef.current)
  }, [])

  return null
}

export { AnalyticsListeners }
