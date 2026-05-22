import { visaSlugs } from "@/lib/visas/types"

/** Visa interest values — extends live visa slugs with routing-friendly options */
export const inquiryVisaInterestValues = [
  ...visaSlugs,
  "other",
  "unsure",
] as const

export type InquiryVisaInterest = (typeof inquiryVisaInterestValues)[number]

export type InquiryVisaOption = {
  value: InquiryVisaInterest
  label: string
}

export const inquiryVisaOptions: readonly InquiryVisaOption[] = [
  { value: "retirement", label: "Retirement visa" },
  { value: "dtv", label: "DTV (Digital Nomad)" },
  { value: "elite", label: "Thailand Elite" },
  { value: "business", label: "Business visa" },
  { value: "education", label: "Education visa" },
  { value: "other", label: "Another visa type" },
  { value: "unsure", label: "Not sure yet" },
] as const

export const defaultInquiryVisaInterest: InquiryVisaInterest = "unsure"
