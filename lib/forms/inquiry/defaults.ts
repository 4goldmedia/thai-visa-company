import type { InquiryFormValues } from "@/lib/forms/inquiry/types"
import { defaultInquiryVisaInterest } from "@/lib/forms/inquiry/visa-options"

export function createInquiryFormDefaults(
  overrides: Partial<InquiryFormValues> = {},
): InquiryFormValues {
  return {
    name: "",
    email: "",
    nationality: "",
    visaInterest: defaultInquiryVisaInterest,
    currentLocation: "",
    message: "",
    ...overrides,
  }
}
