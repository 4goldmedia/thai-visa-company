import {
  inquiryFieldNames,
  type InquiryFormErrors,
  type InquiryFormValues,
  type InquiryFormPayload,
  type InquiryLeadSource,
} from "@/lib/forms/inquiry/types"
import {
  inquiryVisaInterestValues,
  type InquiryVisaInterest,
} from "@/lib/forms/inquiry/visa-options"

const NAME_MIN = 2
const NAME_MAX = 120
const EMAIL_MAX = 254
const MESSAGE_MAX = 2000
const LOCATION_MAX = 120
const NATIONALITY_MAX = 80
const CONSULTATION_PLACEHOLDER = "-"

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function isVisaInterest(value: string): value is InquiryVisaInterest {
  return (inquiryVisaInterestValues as readonly string[]).includes(value)
}

export function validateInquiryForm(
  values: InquiryFormValues,
): InquiryFormErrors | null {
  const errors: InquiryFormErrors = {}

  const name = values.name.trim()
  if (!name) {
    errors[inquiryFieldNames.name] = "Please enter your name."
  } else if (name.length < NAME_MIN) {
    errors[inquiryFieldNames.name] = "Name should be at least 2 characters."
  } else if (name.length > NAME_MAX) {
    errors[inquiryFieldNames.name] = "Name is too long."
  }

  const nationality = values.nationality.trim()
  if (!nationality) {
    errors[inquiryFieldNames.nationality] = "Please enter your nationality."
  } else if (nationality.length > NATIONALITY_MAX) {
    errors[inquiryFieldNames.nationality] = "Nationality is too long."
  }

  const visaInterest = values.visaInterest
  if (!visaInterest || !isVisaInterest(visaInterest)) {
    errors[inquiryFieldNames.visaInterest] = "Please select a visa type."
  }

  const currentLocation = values.currentLocation.trim()
  if (!currentLocation) {
    errors[inquiryFieldNames.currentLocation] =
      "Please tell us where you are now."
  } else if (currentLocation.length > LOCATION_MAX) {
    errors[inquiryFieldNames.currentLocation] = "Location is too long."
  }

  const message = values.message.trim()
  if (!message) {
    errors[inquiryFieldNames.message] = "Please share your question or situation."
  } else if (message.length > MESSAGE_MAX) {
    errors[inquiryFieldNames.message] = "Message is too long."
  }

  return Object.keys(errors).length > 0 ? errors : null
}

export function validateConsultationInquiryForm(
  values: InquiryFormValues,
): InquiryFormErrors | null {
  const errors: InquiryFormErrors = {}

  const name = values.name.trim()
  if (!name) {
    errors[inquiryFieldNames.name] = "Please enter your name."
  } else if (name.length < NAME_MIN) {
    errors[inquiryFieldNames.name] = "Name should be at least 2 characters."
  } else if (name.length > NAME_MAX) {
    errors[inquiryFieldNames.name] = "Name is too long."
  }

  const email = values.email.trim()
  if (!email) {
    errors[inquiryFieldNames.email] = "Please enter your email address."
  } else if (email.length > EMAIL_MAX || !EMAIL_PATTERN.test(email)) {
    errors[inquiryFieldNames.email] = "Please enter a valid email address."
  }

  const visaInterest = values.visaInterest
  if (!visaInterest || !isVisaInterest(visaInterest)) {
    errors[inquiryFieldNames.visaInterest] = "Please select what you need help with."
  }

  const message = values.message.trim()
  if (!message) {
    errors[inquiryFieldNames.message] = "Please share your question or situation."
  } else if (message.length > MESSAGE_MAX) {
    errors[inquiryFieldNames.message] = "Message is too long."
  }

  return Object.keys(errors).length > 0 ? errors : null
}

export type InquiryPayloadMode = "standard" | "consultation"

export function toInquiryPayload(
  values: InquiryFormValues,
  meta: {
    leadSource: InquiryLeadSource
    pagePath?: string
    mode?: InquiryPayloadMode
  },
): InquiryFormPayload {
  const visaInterest = values.visaInterest as InquiryVisaInterest
  const mode = meta.mode ?? "standard"
  const email = values.email.trim()

  return {
    name: values.name.trim(),
    ...(email ? { email } : {}),
    nationality:
      mode === "consultation"
        ? CONSULTATION_PLACEHOLDER
        : values.nationality.trim(),
    visaInterest,
    currentLocation:
      mode === "consultation"
        ? CONSULTATION_PLACEHOLDER
        : values.currentLocation.trim(),
    message: values.message.trim(),
    leadSource: meta.leadSource,
    submittedAt: new Date().toISOString(),
    pagePath: meta.pagePath,
  }
}
