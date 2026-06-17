# ENVIRONMENT VARIABLES

## Airtable (server-only  -  never `NEXT_PUBLIC_`)

Required for live lead capture (`lib/airtable.ts`):

| Variable | Description |
|----------|-------------|
| `AIRTABLE_API_KEY` | Personal access token with `data.records:write` on the base |
| `AIRTABLE_BASE_ID` | Base ID (`app…`) |
| `AIRTABLE_LEADS_TABLE_NAME` | Table name, e.g. `Leads` |

Legacy alias: `AIRTABLE_TABLE_NAME` (used if `AIRTABLE_LEADS_TABLE_NAME` is unset).

Without these, inquiry submit returns success in development with `id: dev-stub` (see `allowUnconfigured`).

**API:** `POST /api/inquiry`  -  JSON body with `name`, `nationality`, `visaInterest`, `currentLocation`, `message`, optional `leadSource` and `pagePath`.

---

# Analytics (GA4)

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID (`G-XXXXXXXXXX`). When unset, no scripts load and tracking is a no-op. |

Implemented in `lib/analytics/` and `components/analytics/`. Tracks page views (App Router), LINE/WhatsApp clicks (`data-contact-channel`), and inquiry submissions (`inquiry_submission`).

Privacy defaults: `anonymize_ip`, no auto page views (manual per route), no Google signals / ad personalization flags.

```
NEXT_PUBLIC_GA_ID=
```

---

# Site

Brand, metadata defaults, canonical URL, social placeholders, and business location: **`lib/site/config.ts`**.

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production origin  -  overrides `siteUrls.productionPlaceholder` and staging fallback |
| `NEXT_PUBLIC_TWITTER_HANDLE` | Twitter/X card `creator` (optional) |
| `NEXT_PUBLIC_GOOGLE_REVIEWS_URL` | Google Business / Maps reviews URL (optional) |
| `NEXT_PUBLIC_OG_IMAGE_PATH` | Default OG image  -  overrides `siteMetadata.defaultOgImagePath` (`/og/default.png`) |

When `NEXT_PUBLIC_SITE_URL` is unset: **development** uses `http://localhost:3000`; **preview/production builds** fall back to `siteUrls.staging` until launch.

Placeholders in config (rebrand / pre-launch): `siteBrand`, `siteSocialPlaceholders`, `siteLocation`, `siteUrls.staging`.

```
NEXT_PUBLIC_SITE_URL=
```

---

# Communication (client  -  all LINE/WhatsApp CTAs)

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_LINE_URL` | Full LINE add-friend or chat URL |
| `NEXT_PUBLIC_WHATSAPP_URL` | Full `wa.me` or WhatsApp Business link |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Footer mailto (optional) |

Resolved in `lib/contact/constants.ts` as `CONTACT_URLS` (used by all CTAs, footer, schema, and inquiry success).

- **Single source:** `CONTACT_URLS.line`, `CONTACT_URLS.whatsapp`, `CONTACT_URLS.email`
- Trailing slashes are stripped at read time
- Env is read with **static** `process.env.NEXT_PUBLIC_*` property access (required for client bundle inlining  -  do not use `process.env[key]` or read env in components)
- After changing `.env.local`, restart `npm run dev`

```
NEXT_PUBLIC_LINE_URL=
NEXT_PUBLIC_WHATSAPP_URL=
NEXT_PUBLIC_CONTACT_EMAIL=
```

---

# Future

RESEND_API_KEY=