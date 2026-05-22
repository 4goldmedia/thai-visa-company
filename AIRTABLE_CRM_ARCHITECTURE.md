# AIRTABLE CRM ARCHITECTURE

**Operations:** day-to-day intake, qualification, SLAs, and follow-up → [CRM_WORKFLOW_SYSTEM.md](./CRM_WORKFLOW_SYSTEM.md)

## Goal

Create a lightweight CRM system for:
- inquiry management
- lead tracking
- follow-up organization
- operational visibility

---

# Recommended Tables

## Leads

Fields:
- Full Name
- Nationality
- Email
- Phone Number
- LINE ID
- WhatsApp
- Visa Type Interest
- Current Country
- Lead Source
- Inquiry Message
- Status
- Assigned To
- Follow-Up Date
- Notes
- Date Created

---

# Lead Status Pipeline

Suggested statuses:
- New Inquiry
- Contacted
- Waiting For Documents
- In Progress
- Completed
- Lost Lead

---

# Lead Sources

Track:
- Homepage
- Visa Pages
- Blog Articles
- Google Business
- WhatsApp
- LINE
- Referral

---

# Automation Goals

Potential future automations:
- new lead notifications
- follow-up reminders
- status updates
- analytics tracking

---

# Operational Philosophy

CRM should remain:
- simple
- mobile-friendly
- easy to update
- highly usable

Avoid:
- enterprise CRM complexity
- unnecessary custom fields
- operational clutter

---

# Mobile Usage

The CRM should work well from:
- phones
- tablets
- desktop

Fast updating is critical.

---

# Code integration

Server-only module: **`lib/airtable.ts`** (see `lib/airtable/*`).

| Function | Purpose |
|----------|---------|
| `submitInquiryToAirtable` | Inquiry form → new lead row |
| `createLead` | Generic lead create |
| `updateLead` / `updateLeadStatus` | Pipeline updates, automations |
| `getAirtableClient` | Low-level REST client |

Environment: `AIRTABLE_API_KEY`, `AIRTABLE_BASE_ID`, `AIRTABLE_LEADS_TABLE_NAME` (`ENVIRONMENT_VARIABLES.md`).