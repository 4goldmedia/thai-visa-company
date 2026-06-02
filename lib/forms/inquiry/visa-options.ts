import { visaSlugs } from "@/lib/visas/types"

/** Visa interest values — extends live visa slugs with routing-friendly options */
export const inquiryVisaInterestValues = [
  ...visaSlugs,
  "marriage",
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
  { value: "marriage", label: "Marriage visa" },
  { value: "elite", label: "Thailand Elite" },
  { value: "business", label: "Business visa" },
  { value: "education", label: "Education visa" },
  { value: "other", label: "Another visa type" },
  { value: "unsure", label: "Not sure yet" },
] as const

/** Homepage consultation section — focused visa choices */
export const consultationVisaOptions: readonly InquiryVisaOption[] = [
  { value: "retirement", label: "Retirement Visa" },
  { value: "dtv", label: "DTV Visa" },
  { value: "marriage", label: "Marriage Visa" },
  { value: "business", label: "Business Visa" },
  { value: "other", label: "Other" },
] as const

export const defaultInquiryVisaInterest: InquiryVisaInterest = "unsure"
