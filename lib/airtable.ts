/**
 * Airtable integration  -  server-only CRM layer.
 *
 * Import from `@/lib/airtable` in Server Actions, Route Handlers, and scripts only.
 * Do not import in Client Components (`"use client"`).
 *
 * @example
 * import { submitInquiryToAirtable, createLead, updateLeadStatus } from "@/lib/airtable"
 */

export {
  getAirtableEnvConfig,
  isAirtableConfigured,
  requireAirtableEnvConfig,
  AirtableConfigError,
} from "@/lib/airtable/config"

export {
  AirtableError,
  isAirtableError,
  toPublicAirtableMessage,
} from "@/lib/airtable/errors"

export type { AirtableErrorCode } from "@/lib/airtable/errors"

export {
  createAirtableClient,
  getAirtableClient,
  resetAirtableClientForTests,
} from "@/lib/airtable/client"
export type { AirtableClient } from "@/lib/airtable/client"

export {
  airtableLeadFields,
  airtableLeadStatuses,
} from "@/lib/airtable/types"

export type {
  AirtableLeadFieldName,
  AirtableLeadStatus,
  AirtableLeadCreateInput,
  AirtableLeadUpdateInput,
  AirtableMutationResult,
  AirtableOperationResult,
  AirtableRecord,
  AirtableRecordFields,
} from "@/lib/airtable/types"

export {
  createLead,
  createLeadFromInquiry,
  updateLead,
  updateLeadStatus,
  mapInquiryToLeadInput,
  toAirtableLeadRecord,
} from "@/lib/airtable/leads"

export type { CreateLeadOptions, UpdateLeadInput } from "@/lib/airtable/leads"

export {
  submitInquiryToAirtable,
} from "@/lib/airtable/inquiry"

export type {
  SubmitInquiryToAirtableOptions,
  SubmitInquiryToAirtableResult,
} from "@/lib/airtable/inquiry"
