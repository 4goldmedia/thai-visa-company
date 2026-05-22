# ENVIRONMENT VARIABLES

## Airtable (server-only — never `NEXT_PUBLIC_`)

Required for live lead capture (`lib/airtable.ts`):

| Variable | Description |
|----------|-------------|
| `AIRTABLE_API_KEY` | Personal access token with `data.records:write` on the base |
| `AIRTABLE_BASE_ID` | Base ID (`app…`) |
| `AIRTABLE_LEADS_TABLE_NAME` | Table name, e.g. `Leads` |

Legacy alias: `AIRTABLE_TABLE_NAME` (used if `AIRTABLE_LEADS_TABLE_NAME` is unset).

Without these, inquiry submit returns success in development with `id: dev-stub` (see `allowUnconfigured`).

**API:** `POST /api/inquiry` — JSON body with `name`, `nationality`, `visaInterest`, `currentLocation`, `message`, optional `leadSource` and `pagePath`.

---

# Analytics

NEXT_PUBLIC_GA_ID=

---

# Site

NEXT_PUBLIC_SITE_URL=

---

# Communication (client — all LINE/WhatsApp CTAs)

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_LINE_URL` | Full LINE add-friend or chat URL |
| `NEXT_PUBLIC_WHATSAPP_URL` | Full `wa.me` or WhatsApp Business link |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Footer mailto (optional) |

Resolved in `lib/contact/` and rendered via `MessagingCta` / `MessagingCtaPair`.

```
NEXT_PUBLIC_LINE_URL=
NEXT_PUBLIC_WHATSAPP_URL=
NEXT_PUBLIC_CONTACT_EMAIL=
```

---

# Future

RESEND_API_KEY=