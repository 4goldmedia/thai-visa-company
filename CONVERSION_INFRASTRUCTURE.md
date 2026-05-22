# CONVERSION INFRASTRUCTURE

## Primary Goal

Reduce friction between:
visitor interest
→
direct communication

The website should encourage:
- fast contact
- low-friction inquiries
- conversational lead flow

---

# Primary Conversion Channels

1. LINE
2. WhatsApp
3. Inquiry Form

Priority order:
LINE first.
WhatsApp second.

---

# Core Conversion Philosophy

The experience should feel:
- easy
- approachable
- human
- fast
- organized

Avoid:
- long forms
- aggressive sales funnels
- excessive required information

---

# Contact UX Goals

Users should feel:
- supported
- understood
- comfortable asking questions

Communication should feel:
- responsive
- professional
- clear

---

# CTA Placement Strategy

Primary CTAs should appear:
- navbar
- hero
- final CTA
- visa pages
- mobile sticky actions

CTA consistency is critical.

---

# Inquiry Form Philosophy

Forms should:
- remain short
- reduce friction
- capture only essential information

Recommended fields:
- name
- nationality
- visa interest
- current location
- message

Avoid:
- large complicated forms

---

# Lead Flow

Visitor
→ Inquiry
→ Airtable CRM
→ Team follow-up
→ Lead status updates
→ Conversion tracking

---

# Operational Goal

No inquiry should be lost.

The system should support:
- organization
- fast response
- lead tracking
- follow-up reminders

---

# Mobile UX Priority

Most users will likely inquire from mobile.

Contact UX must feel:
- extremely easy
- fast
- thumb-friendly

**Global mobile contact bar** (`components/layout/mobile-contact-bar.tsx`):
- Rendered on every page via `SiteShell` in `app/layout.tsx`
- Visible below `lg` only; content offset via `--mobile-contact-bar-height`
- Hidden while the mobile nav menu is open (`data-mobile-nav-open` on `<html>`)

---

# Trust Reinforcement

Throughout conversion flow:
- Google reviews
- support messaging
- response speed
- guidance clarity

should remain visible.