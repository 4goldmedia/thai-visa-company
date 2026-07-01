/** Airtable column names for the consultation leads table */
export const consultationAirtableFields = {
  fullName: "Full Name",
  email: "Email",
  nationality: "Nationality",
  visaType: "Visa Type",
  message: "Message",
  sourceUrl: "Source URL",
  status: "Status",
  submittedAt: "Submitted At",
} as const

/** Server-controlled pipeline value for new consultation leads */
export const consultationAirtableNewStatus = "New" as const
