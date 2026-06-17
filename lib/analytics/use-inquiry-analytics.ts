"use client"

import * as React from "react"

import { trackInquiryEvent } from "@/lib/analytics/inquiry"
import type { InquiryLeadSource } from "@/lib/forms/inquiry/types"

type UseInquiryAnalyticsOptions = {
  leadSource: InquiryLeadSource
  pagePath?: string
  trackView?: boolean
}

/**
 * Stable inquiry funnel tracking  -  view fires once per mount; start once per session.
 */
export function useInquiryAnalytics({
  leadSource,
  pagePath,
  trackView = true,
}: UseInquiryAnalyticsOptions) {
  const hasTrackedViewRef = React.useRef(false)
  const hasTrackedStartRef = React.useRef(false)

  React.useEffect(() => {
    if (!trackView || hasTrackedViewRef.current) return
    hasTrackedViewRef.current = true
    trackInquiryEvent({ name: "inquiry_form_view", leadSource, pagePath })
  }, [trackView, leadSource, pagePath])

  const trackStart = React.useCallback(() => {
    if (hasTrackedStartRef.current) return
    hasTrackedStartRef.current = true
    trackInquiryEvent({ name: "inquiry_form_start", leadSource, pagePath })
  }, [leadSource, pagePath])

  const trackSubmit = React.useCallback(() => {
    trackInquiryEvent({ name: "inquiry_form_submit", leadSource, pagePath })
  }, [leadSource, pagePath])

  const trackSuccess = React.useCallback(() => {
    trackInquiryEvent({ name: "inquiry_form_success", leadSource, pagePath })
  }, [leadSource, pagePath])

  const trackError = React.useCallback(() => {
    trackInquiryEvent({ name: "inquiry_form_error", leadSource, pagePath })
  }, [leadSource, pagePath])

  const resetSession = React.useCallback(() => {
    hasTrackedStartRef.current = false
  }, [])

  return {
    trackStart,
    trackSubmit,
    trackSuccess,
    trackError,
    resetSession,
  }
}
