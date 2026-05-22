"use client"

import * as React from "react"
import { Check } from "lucide-react"

import { MessagingCtaPair } from "@/components/cta/messaging-cta-pair"
import { Button } from "@/components/ui/button"
import {
  getInquirySuccessAnnouncement,
  inquirySuccessContent,
} from "@/lib/forms/inquiry/success-content"
import {
  formCardClass,
  formDescriptionClass,
  formSuccessDividerClass,
  formSuccessIconWrapClass,
  formSuccessSectionTitleClass,
  formSuccessStepItemClass,
  formSuccessStepListClass,
  formSuccessStepMarkerClass,
  formTitleClass,
  formTrustNoteClass,
} from "@/lib/form-styles"
import { cn } from "@/lib/utils"

type InquiryFormSuccessProps = {
  title?: string
  description?: string
  /** Element id for programmatic focus after submit */
  titleId?: string
  onReset?: () => void
  resetLabel?: string
  className?: string
}

function InquiryFormSuccess({
  title = inquirySuccessContent.title,
  description = inquirySuccessContent.lead,
  titleId = "inquiry-form-success-title",
  onReset,
  resetLabel = inquirySuccessContent.resetLabel,
  className,
}: InquiryFormSuccessProps) {
  const headingRef = React.useRef<HTMLHeadingElement>(null)
  const stepsId = `${titleId}-steps`
  const supportId = `${titleId}-support`

  React.useEffect(() => {
    const node = headingRef.current
    if (!node) return
    node.focus({ preventScroll: true })
  }, [])

  return (
    <section
      className={cn(formCardClass, className)}
      data-slot="inquiry-form-success"
      aria-labelledby={titleId}
    >
      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {getInquirySuccessAnnouncement()}
      </p>

      <div className="flex gap-3.5 sm:gap-4">
        <div className={formSuccessIconWrapClass} aria-hidden>
          <Check className="size-5 text-primary" strokeWidth={2.25} />
        </div>

        <div className="min-w-0 flex-1">
          <h3
            ref={headingRef}
            id={titleId}
            tabIndex={-1}
            className={cn(
              formTitleClass,
              "outline-none focus-visible:rounded-sm focus-visible:ring-3 focus-visible:ring-ring/30",
            )}
          >
            {title}
          </h3>
          <p className={formDescriptionClass}>{description}</p>
        </div>
      </div>

      <div
        className={cn(formSuccessDividerClass, "mt-6 space-y-5 pt-6 sm:mt-7 sm:pt-7")}
      >
        <div>
          <h4 id={stepsId} className={formSuccessSectionTitleClass}>
            {inquirySuccessContent.stepsHeading}
          </h4>
          <ol
            className={formSuccessStepListClass}
            aria-labelledby={stepsId}
          >
            {inquirySuccessContent.steps.map((step, index) => (
              <li key={step} className={formSuccessStepItemClass}>
                <span className={formSuccessStepMarkerClass} aria-hidden>
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h4 id={supportId} className={formSuccessSectionTitleClass}>
            {inquirySuccessContent.supportHeading}
          </h4>
          <p className={cn(formTrustNoteClass, "mt-1.5 max-w-[32rem]")}>
            {inquirySuccessContent.supportLead}
          </p>
          <div className="mt-3.5 sm:mt-4" aria-labelledby={supportId}>
            <MessagingCtaPair layout="success" />
          </div>
        </div>

        {onReset ? (
          <div className="pt-1">
            <Button
              type="button"
              variant="ghost"
              size="lg"
              className={cn(
                "h-11 min-h-11 w-full text-[15px] font-medium text-muted-foreground",
                "hover:bg-muted/50 hover:text-foreground sm:w-auto sm:px-4",
              )}
              onClick={onReset}
            >
              {resetLabel}
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export { InquiryFormSuccess }
