/**
 * @deprecated Import from `@/lib/airtable` instead.
 * Re-exports for backward compatibility with `lib/forms/inquiry`.
 */
export {
  submitInquiryToAirtable,
  toAirtableLeadRecord,
  mapInquiryToLeadInput,
} from "@/lib/airtable"

import type { AirtableRecordFields } from "@/lib/airtable/types"

/** @deprecated Field map returned by `toAirtableLeadRecord` */
export type AirtableLeadRecord = AirtableRecordFields
