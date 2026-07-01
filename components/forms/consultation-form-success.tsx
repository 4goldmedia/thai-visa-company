"use client"

import * as React from "react"
import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { consultationSuccessContent } from "@/lib/forms/consultation/success-content"
import {
  formDescriptionClass,
  formSuccessIconWrapClass,
  formTitleClass,
} from "@/lib/form-styles"
import { signatureCtaPrimaryClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type ConsultationFormSuccessProps = {
  titleId?: string
  className?: string
}

function ConsultationFormSuccess({
  titleId = "consultation-form-success-title",
  className,
}: ConsultationFormSuccessProps) {
  const headingRef = React.useRef<HTMLHeadingElement>(null)

  React.useEffect(() => {
    const node = headingRef.current
    if (!node) return
    node.focus({ preventScroll: true })
  }, [])

  return (
    <section
      className={cn("min-w-0", className)}
      data-slot="consultation-form-success"
      aria-labelledby={titleId}
    >
      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {consultationSuccessContent.title} {consultationSuccessContent.lead}
      </p>

      <div className="flex gap-3.5 sm:gap-4">
        <div className={formSuccessIconWrapClass} aria-hidden>
          <Check className="size-5 text-primary" strokeWidth={2.25} />
        </div>

        <div className="min-w-0 flex-1">
          <h2
            ref={headingRef}
            id={titleId}
            tabIndex={-1}
            className={cn(
              formTitleClass,
              "outline-none focus-visible:rounded-sm focus-visible:ring-3 focus-visible:ring-ring/30",
            )}
          >
            {consultationSuccessContent.title}
          </h2>
          <p className={formDescriptionClass}>{consultationSuccessContent.lead}</p>

          <div className="mt-6 sm:mt-7">
            <Button
              asChild
              variant="default"
              className={cn(signatureCtaPrimaryClass, "w-full sm:w-auto")}
            >
              <Link href={consultationSuccessContent.homeHref}>
                {consultationSuccessContent.homeLabel}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ConsultationFormSuccess }
