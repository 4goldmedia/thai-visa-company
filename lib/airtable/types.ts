/** Airtable field names on the Leads table  -  align with `AIRTABLE_CRM_ARCHITECTURE.md` */
export const airtableLeadFields = {
  fullName: "Full Name",
  nationality: "Nationality",
  email: "Email",
  phone: "Phone Number",
  lineId: "LINE ID",
  whatsapp: "WhatsApp",
  visaTypeInterest: "Visa Type Interest",
  currentCountry: "Current Country",
  leadSource: "Lead Source",
  inquiryMessage: "Inquiry Message",
  status: "Status",
  assignedTo: "Assigned To",
  followUpDate: "Follow-Up Date",
  notes: "Notes",
  dateCreated: "Date Created",
} as const

export type AirtableLeadFieldName =
  (typeof airtableLeadFields)[keyof typeof airtableLeadFields]

/** Pipeline values for the `Status` single-select field */
export const airtableLeadStatuses = [
  "New Inquiry",
  "Contacted",
  "Waiting For Documents",
  "In Progress",
  "Completed",
  "Lost Lead",
] as const

export type AirtableLeadStatus = (typeof airtableLeadStatuses)[number]

/** Writable fields when creating a lead from the inquiry form */
export type AirtableLeadCreateInput = {
  fullName: string
  nationality?: string
  visaTypeInterest: string
  currentCountry?: string
  leadSource: string
  inquiryMessage?: string
  status?: AirtableLeadStatus
  dateCreated?: string
  email?: string
  phone?: string
  lineId?: string
  whatsapp?: string
  notes?: string
}

/** Partial update keyed by Airtable column names  -  for automations and admin tools */
export type AirtableLeadUpdateInput = Partial<
  Record<AirtableLeadFieldName, string | number | boolean | null>
>

export type AirtableRecordFields = Record<string, string | number | boolean | null>

export type AirtableRecord<T extends AirtableRecordFields = AirtableRecordFields> =
  {
    id: string
    createdTime: string
    fields: T
  }

export type AirtableCreateResponse<T extends AirtableRecordFields> = {
  records: ReadonlyArray<AirtableRecord<T>>
}

export type AirtableUpdateResponse<T extends AirtableRecordFields> = {
  records: ReadonlyArray<AirtableRecord<T>>
}

export type AirtableMutationResult = {
  recordId: string
  createdTime?: string
}

export type AirtableOperationResult<T extends AirtableMutationResult> =
  | { ok: true; data: T; skipped?: boolean }
  | { ok: false; message: string }
