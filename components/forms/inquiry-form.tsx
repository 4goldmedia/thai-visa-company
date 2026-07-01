"use client"

import * as React from "react"
import { Loader2 } from "lucide-react"

import { CountrySelect } from "@/components/forms/country-select"
import { FormField } from "@/components/forms/form-field"
import { InquiryFormSuccess } from "@/components/forms/inquiry-form-success"
import { Button } from "@/components/ui/button"
import { createInquiryFormDefaults } from "@/lib/forms/inquiry/defaults"
import { submitInquiry } from "@/lib/forms/inquiry/submit"
import {
  inquiryFieldNames,
  type InquiryFormErrors,
  type InquiryFormPayload,
  type InquiryFormResult,
  type InquiryFormValues,
  type InquiryLeadSource,
} from "@/lib/forms/inquiry/types"
import {
  consultationVisaOptions,
  inquiryVisaOptions,
  type InquiryVisaInterest,
} from "@/lib/forms/inquiry/visa-options"
import {
  toInquiryPayload,
  validateConsultationInquiryForm,
  validateInquiryForm,
} from "@/lib/forms/inquiry/validation"
import { focusFirstInquiryError } from "@/lib/forms/inquiry/focus-first-error"
import { useInquiryAnalytics } from "@/lib/analytics/use-inquiry-analytics"
import {
  formCardClass,
  formDescriptionClass,
  formStackClass,
  formTextareaClass,
  formTitleClass,
  formTrustNoteClass,
  formControlClass,
  formSelectClass,
} from "@/lib/form-styles"
import {
  ctaButtonPrimaryClass,
  signatureCtaPrimaryClass,
} from "@/lib/section-styles"
import { cn } from "@/lib/utils"

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

export type InquiryFormVariant = "standard" | "consultation"

export type InquiryFormProps = {
  /** Standard multi-field vs homepage consultation */
  variant?: InquiryFormVariant
  /** CRM + analytics source  -  required for routing and reporting */
  leadSource: InquiryLeadSource
  /** Pre-select visa interest on visa pages */
  defaultVisaInterest?: InquiryVisaInterest
  /** Current path for payload and analytics, e.g. `/visas/retirement` */
  pagePath?: string
  title?: string
  description?: string
  /** Short line under description  -  e.g. time to complete */
  timeEstimate?: string
  submitLabel?: string
  trustNote?: string | null
  /** Override default `/api/inquiry` submit */
  onSubmit?: (payload: InquiryFormPayload) => void | Promise<InquiryFormResult>
  /** Skip API submit when using custom `onSubmit` only */
  skipDefaultSubmit?: boolean
  /** Fire `inquiry_form_view` on mount */
  trackView?: boolean
  className?: string
  id?: string
  /** Override input/select classes (e.g. editorial consultation section) */
  controlClassName?: string
  selectClassName?: string
  textareaClassName?: string
  /** When the form has no visible title, point to an external heading id */
  ariaLabelledBy?: string
}

const NETWORK_ERROR_MESSAGE =
  "Something went wrong. Please try again or message us on LINE or WhatsApp."

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

function InquiryForm({
  variant = "standard",
  leadSource,
  defaultVisaInterest,
  pagePath,
  title = "Ask about your visa",
  description = "Share a few details and we will reply with clear next steps, with no obligation.",
  timeEstimate,
  submitLabel = "Send inquiry",
  trustNote = "We typically reply within one business day on LINE, WhatsApp, or email.",
  onSubmit,
  skipDefaultSubmit = false,
  trackView = true,
  className,
  id = "inquiry-form",
  controlClassName,
  selectClassName,
  textareaClassName,
  ariaLabelledBy,
}: InquiryFormProps) {
  const isConsultation = variant === "consultation"
  const visaOptions = isConsultation ? consultationVisaOptions : inquiryVisaOptions
  const resolvedControlClass = controlClassName ?? formControlClass
  const resolvedSelectClass = selectClassName ?? formSelectClass
  const resolvedTextareaClass = textareaClassName ?? formTextareaClass
  const resolvedTrustNote = isConsultation ? null : trustNote
  const titleId = `${id}-title`
  const statusId = `${id}-status`

  const [values, setValues] = React.useState<InquiryFormValues>(() =>
    createInquiryFormDefaults({
      visaInterest:
        defaultVisaInterest ?? (isConsultation ? "" : undefined),
    }),
  )
  const [errors, setErrors] = React.useState<InquiryFormErrors | null>(null)
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = React.useState(false)
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")
  const [formError, setFormError] = React.useState<string | null>(null)

  const isSubmitting = status === "submitting"
  const fieldDisabled = isSubmitting

  const inquiryAnalytics = useInquiryAnalytics({
    leadSource,
    pagePath,
    trackView,
  })

  function applyFieldErrors(nextErrors: InquiryFormErrors) {
    setErrors(nextErrors)
    setFormError(null)
    requestAnimationFrame(() => focusFirstInquiryError(nextErrors, id))
  }

  function handleFieldChange<K extends keyof InquiryFormValues>(
    field: K,
    value: InquiryFormValues[K],
  ) {
    inquiryAnalytics.trackStart()

    const nextValues = { ...values, [field]: value }
    setValues(nextValues)

    if (hasAttemptedSubmit) {
      const validationErrors = isConsultation
        ? validateConsultationInquiryForm(nextValues)
        : validateInquiryForm(nextValues)
      setErrors(validationErrors)
    } else if (errors?.[field as keyof InquiryFormErrors]) {
      setErrors((prev) => {
        if (!prev) return null
        const next = { ...prev }
        delete next[field as keyof InquiryFormErrors]
        return Object.keys(next).length > 0 ? next : null
      })
    }

    if (formError) {
      setFormError(null)
    }
  }

  function handleReset() {
    setValues(createInquiryFormDefaults({ visaInterest: defaultVisaInterest }))
    setErrors(null)
    setHasAttemptedSubmit(false)
    setFormError(null)
    setStatus("idle")
    inquiryAnalytics.resetSession()
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormError(null)

    const validationErrors = isConsultation
      ? validateConsultationInquiryForm(values)
      : validateInquiryForm(values)
    if (validationErrors) {
      setHasAttemptedSubmit(true)
      applyFieldErrors(validationErrors)
      return
    }

    setErrors(null)
    setHasAttemptedSubmit(false)
    setStatus("submitting")
    inquiryAnalytics.trackSubmit()

    const payload = toInquiryPayload(values, {
      leadSource,
      pagePath,
      mode: isConsultation ? "consultation" : "standard",
    })

    try {
      let result: InquiryFormResult

      if (onSubmit) {
        const custom = await onSubmit(payload)
        result =
          custom && "ok" in custom
            ? custom
            : { ok: true }
      } else {
        result = await submitInquiry(payload, { skipAirtable: skipDefaultSubmit })
      }

      if (!result.ok) {
        setStatus("error")
        if (result.fields) {
          applyFieldErrors(result.fields)
        } else {
          setErrors(null)
          setFormError(result.message)
        }
        inquiryAnalytics.trackError()
        return
      }

      setStatus("success")
      inquiryAnalytics.trackSuccess()
    } catch {
      setStatus("error")
      setErrors(null)
      setFormError(NETWORK_ERROR_MESSAGE)
      inquiryAnalytics.trackError()
    }
  }

  if (status === "success") {
    return (
      <InquiryFormSuccess
        className={className}
        titleId={`${id}-success-title`}
        onReset={handleReset}
      />
    )
  }

  const formDescribedBy = [formError ? `${id}-form-error` : null, statusId]
    .filter(Boolean)
    .join(" ")

  return (
    <div
      className={cn(isConsultation ? null : formCardClass, className)}
      data-slot="inquiry-form"
      data-lead-source={leadSource}
      data-page-path={pagePath}
      data-state={isSubmitting ? "submitting" : status === "error" ? "error" : "idle"}
    >
      {title || description || timeEstimate ? (
        <header>
          {title ? (
            <h2 id={titleId} className={formTitleClass}>
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className={formDescriptionClass}>{description}</p>
          ) : null}
          {timeEstimate ? (
            <p className="mt-2 text-[13px] leading-snug text-muted-foreground sm:text-sm">
              {timeEstimate}
            </p>
          ) : null}
        </header>
      ) : null}

      <form
        id={id}
        className={cn(
          formStackClass,
          title || description || timeEstimate ? "mt-6 sm:mt-7" : null,
        )}
        onSubmit={handleSubmit}
        noValidate
        aria-labelledby={title ? titleId : ariaLabelledBy}
        aria-describedby={formDescribedBy || undefined}
        aria-busy={isSubmitting}
      >
        <p id={statusId} className="sr-only" aria-live="polite" aria-atomic="true">
          {isSubmitting
            ? "Sending your inquiry."
            : formError
              ? formError
              : ""}
        </p>

        {formError ? (
          <p
            id={`${id}-form-error`}
            role="alert"
            className="rounded-lg border border-destructive/25 bg-destructive/5 px-3.5 py-3 text-[13px] leading-snug text-destructive sm:text-sm"
          >
            {formError}
          </p>
        ) : null}

        <fieldset
          disabled={fieldDisabled}
          className={cn(
            formStackClass,
            "min-w-0 border-0 p-0 m-0",
            isSubmitting && "opacity-[0.88] transition-opacity duration-200",
          )}
        >
          <FormField
            id={`${id}-name`}
            label={isConsultation ? "First & last name" : "Name"}
            required={isConsultation}
            error={errors?.[inquiryFieldNames.name]}
          >
            <input
              type="text"
              name={inquiryFieldNames.name}
              autoComplete="name"
              required
              disabled={fieldDisabled}
              placeholder={isConsultation ? "First & last name" : "e.g. Alex Morgan"}
              value={values.name}
              onChange={(e) =>
                handleFieldChange(inquiryFieldNames.name, e.target.value)
              }
              className={cn(
                resolvedControlClass,
                errors?.[inquiryFieldNames.name] && "border-destructive/70",
              )}
            />
          </FormField>

          {isConsultation ? (
            <>
              <FormField
                id={`${id}-email`}
                label="Email"
                required
                error={errors?.[inquiryFieldNames.email]}
              >
                <input
                  type="email"
                  name={inquiryFieldNames.email}
                  autoComplete="email"
                  required
                  disabled={fieldDisabled}
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={(e) =>
                    handleFieldChange(inquiryFieldNames.email, e.target.value)
                  }
                  className={cn(
                    resolvedControlClass,
                    errors?.[inquiryFieldNames.email] && "border-destructive/70",
                  )}
                />
              </FormField>

              <FormField
                id={`${id}-nationality`}
                label="Nationality"
                required
                error={errors?.[inquiryFieldNames.nationality]}
              >
                <CountrySelect
                  name={inquiryFieldNames.nationality}
                  value={values.nationality}
                  onChange={(value) =>
                    handleFieldChange(inquiryFieldNames.nationality, value)
                  }
                  disabled={fieldDisabled}
                  placeholder="Select your nationality"
                  className={cn(
                    resolvedControlClass,
                    errors?.[inquiryFieldNames.nationality] &&
                      "border-destructive/70",
                  )}
                  listClassName="consultation-experience__country-list"
                />
              </FormField>
            </>
          ) : (
            <FormField
              id={`${id}-nationality`}
              label="Nationality"
              hint="Helps us point you to the right embassy requirements."
              error={errors?.[inquiryFieldNames.nationality]}
            >
              <input
                type="text"
                name={inquiryFieldNames.nationality}
                autoComplete="country-name"
                required
                disabled={fieldDisabled}
                placeholder="e.g. United Kingdom"
                value={values.nationality}
                onChange={(e) =>
                  handleFieldChange(
                    inquiryFieldNames.nationality,
                    e.target.value,
                  )
                }
                className={resolvedControlClass}
              />
            </FormField>
          )}

          <FormField
            id={`${id}-visa-interest`}
            label={
              isConsultation
                ? "What do you need help with?"
                : "Visa you're interested in"
            }
            required={isConsultation}
            error={errors?.[inquiryFieldNames.visaInterest]}
          >
            <select
              name={inquiryFieldNames.visaInterest}
              required
              disabled={fieldDisabled}
              value={values.visaInterest}
              onChange={(e) =>
                handleFieldChange(
                  inquiryFieldNames.visaInterest,
                  e.target.value as InquiryFormValues["visaInterest"],
                )
              }
              className={cn(
                resolvedSelectClass,
                errors?.[inquiryFieldNames.visaInterest] && "border-destructive/70",
              )}
            >
              {isConsultation ? (
                <option value="" disabled>
                  Select an option
                </option>
              ) : null}
              {visaOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FormField>

          {!isConsultation ? (
            <FormField
              id={`${id}-location`}
              label="Where are you now?"
              hint="Country or city is enough."
              error={errors?.[inquiryFieldNames.currentLocation]}
            >
              <input
                type="text"
                name={inquiryFieldNames.currentLocation}
                autoComplete="country-name"
                required
                disabled={fieldDisabled}
                placeholder="e.g. Bangkok or United States"
                value={values.currentLocation}
                onChange={(e) =>
                  handleFieldChange(
                    inquiryFieldNames.currentLocation,
                    e.target.value,
                  )
                }
                className={resolvedControlClass}
              />
            </FormField>
          ) : null}

          <FormField
            id={`${id}-message`}
            label="Message"
            required={isConsultation}
            hint={
              isConsultation
                ? undefined
                : "A sentence or two is enough. We will ask for details if needed."
            }
            error={errors?.[inquiryFieldNames.message]}
          >
            <textarea
              name={inquiryFieldNames.message}
              required
              disabled={fieldDisabled}
              rows={isConsultation ? 5 : 4}
              placeholder={
                isConsultation
                  ? "Share your timeline, situation, or questions."
                  : "e.g. I am 58, UK passport, and want to apply from London."
              }
              value={values.message}
              onChange={(e) =>
                handleFieldChange(inquiryFieldNames.message, e.target.value)
              }
              className={cn(
                resolvedTextareaClass,
                errors?.[inquiryFieldNames.message] && "border-destructive/70",
              )}
            />
          </FormField>
        </fieldset>

        <div className="flex flex-col gap-3 pt-1 sm:pt-2">
          <Button
            type="submit"
            variant="default"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className={cn(
              isConsultation
                ? cn(signatureCtaPrimaryClass, "consultation-experience__submit")
                : ctaButtonPrimaryClass,
              "gap-2 sm:min-w-[12rem]",
            )}
            data-inquiry-submit
          >
            {isSubmitting ? (
              <>
                <Loader2
                  className="size-4 shrink-0 animate-spin"
                  aria-hidden
                />
                <span>Sending…</span>
              </>
            ) : (
              submitLabel
            )}
          </Button>
          {resolvedTrustNote ? (
            <p className={formTrustNoteClass}>{resolvedTrustNote}</p>
          ) : null}
        </div>
      </form>
    </div>
  )
}

export { InquiryForm }
