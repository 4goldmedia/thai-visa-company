import {
  inquiryFieldElementId,
  inquiryFieldOrder,
} from "@/lib/forms/inquiry/field-order"
import type { InquiryFormErrors } from "@/lib/forms/inquiry/types"

/**
 * Move focus to the first invalid field — used only after submit, not on blur.
 */
export function focusFirstInquiryError(
  errors: InquiryFormErrors,
  formId: string,
): void {
  const firstField = inquiryFieldOrder.find((field) => errors[field])
  if (!firstField) return

  const suffix = inquiryFieldElementId[firstField]
  const control = document.getElementById(`${formId}-${suffix}`)
  if (!(control instanceof HTMLElement)) return

  control.focus({ preventScroll: true })

  const rect = control.getBoundingClientRect()
  const inView =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth

  if (!inView) {
    control.scrollIntoView({ block: "nearest", behavior: "smooth" })
  }
}
