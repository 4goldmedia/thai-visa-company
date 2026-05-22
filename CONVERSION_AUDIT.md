# Conversion optimization audit

**Date:** May 2026  
**Scope:** Homepage hero, CTA hierarchy, visa pages, contact page, inquiry form, mobile contact UX, final CTAs, trust/reviews, FAQ positioning.

**Goal:** Trust-first, low-friction inquiries; clarity within ~5 seconds; calm premium UX; LINE-first conversational contact.

---

## Changes implemented

| Area | Change |
|------|--------|
| **Homepage hero** | Shorter visible lead (`heroLeadLine`); full `extractableSummary` retained for meta/schema |
| **CTA groups** | Site-wide reassurance line above LINE/WhatsApp (`ctaReassuranceLine`) |
| **Homepage flow** | Reviews → **Final CTA** → FAQ → Resources (convert right after social proof) |
| **Homepage final CTA** | `showExploreCta={false}` to avoid competing actions after scroll |
| **Visa pages** | Final CTA moved **before** FAQ; unpublished resource links filtered from related guides |
| **Contact hero** | Removed redundant messaging hint; reassurance on CTA group |
| **Inquiry form** | Optional `timeEstimate` on contact page (“About a minute…”) |
| **Related links** | `filterPublishedRelatedLinks()` — no 404s to planned STUB articles |

---

## Strongest conversion strengths

1. **LINE-first hierarchy** — Messaging order, sticky mobile bar, and hero/final CTAs are consistent site-wide (`MessagingCtaPair`, `CONTACT_URLS`).
2. **Dual-path contact** — High-intent users get LINE/WhatsApp; lower-intent or detail-oriented users get a short form without email/phone overload.
3. **Trust-after-action sequencing on heroes** — Primary CTAs appear before Google reviews and bullet trust lines, reducing hesitation without burying contact.
4. **Calm, non-aggressive copy** — “Free to ask”, “no obligation”, “typically same business day” — aligned with approachable positioning.
5. **Production-grade form UX** — Validation, focus management, analytics hooks, success state with messaging CTAs and clear next steps.
6. **Mobile contact bar** — Persistent LINE/WhatsApp on small viewports; hidden when nav is open.
7. **Visa page depth + conversion** — Overview → requirements → process builds understanding; final CTA now captures intent before FAQ scroll-off.
8. **Structured content architecture** — Visa registry, related linking, and analytics surfaces support scaling without CTA drift.

---

## Remaining friction points

| Friction | Impact | Notes |
|----------|--------|-------|
| **Planned articles still in nav/index** | Medium | Resources index and nav may still surface STUB slugs; visa **page** links are fixed, index may still 404 if clicked |
| **Five required form fields** | Medium | Appropriate for routing, but heavier than “chat first”; no optional email for async follow-up |
| **Trust/reviews below fold on homepage** | Low–medium | Social proof after long scroll (visa types, why us, process); mitigated by moving final CTA after reviews |
| **Duplicate response-time copy** | Low | Contact hero + inquiry sidebar repeat same line — intentional reinforcement but slightly redundant |
| **No `/visas` hub page** | Medium | “Explore visa options” tertiary CTA may land on sparse or missing hub depending on routing |
| **Homepage H1 is two lines** | Low | Topic + tagline is clear for SEO; slightly dense on very small screens |
| **Resources preview after final CTA** | Low | Can pull users back into reading mode post-conversion moment |
| **Configured LINE/WhatsApp URLs** | High if unset | Default placeholder URLs reduce real conversion until `.env` is production-ready |

---

## Highest-impact future optimizations

1. **Publish P1 STUB articles** — `how-long-does-thai-visa-take`, `what-is-thailand-dtv-visa` (unblocks related links, FAQ depth, and nav trust).
2. **Ship `/visas` hub** — Card grid with one-line outcomes + primary contact; makes “Explore visa options” a true mid-funnel step.
3. **Earlier social proof on homepage** — Optional compact review strip after `PageAtAGlance` or `VisaTypes` for users who bounce before Process.
4. **Visa-page mid-content soft CTA** — Single calm band after requirements (“Questions on eligibility? Message us on LINE”) without duplicating full final CTA.
5. **Contact page: anchor jump** — Hero secondary text link `#inquiry` for users who prefer form after seeing messaging options.
6. **A/B copy on reassurance line** — Test “Same day on LINE” vs “Free to ask · No obligation” with analytics `cta_click` by surface.
7. **Real Google review deep link** — Ensure `googleReviewsUrl` and review count match live profile for trust consistency.
8. **Post-submit LINE deep link** — Pre-filled message template on success state for users who want instant thread continuity.
9. **Filter planned articles on resources index** — Separate “Coming soon” from clickable cards to avoid 404 frustration.
10. **Lighthouse + real-device QA** — `RESPONSIVE_QA.md` pass on sticky bar + form keyboard overlap (iOS safe area).

---

## Area-by-area review (post-optimization)

### Homepage hero
- **Clarity:** H1 + short lead + reassurance + CTAs within first viewport on most phones.
- **Trust:** Reviews and bullets remain below CTAs (good for action-first users).

### CTA hierarchy
- Primary: LINE → WhatsApp → (optional) Explore / form tertiary.
- Reassurance now consistent on all `ContactCtaGroup` instances.

### Visa pages
- Hero mirrors homepage pattern.
- Final CTA before FAQ reduces scroll-to-convert distance.
- Related guides only show published MDX.

### Contact page
- Hero: messaging-first with reassurance + response time.
- Inquiry: messaging sidebar **before** form on mobile (stack order preserved).
- Trust strip after form sets expectations.

### Inquiry form
- Five fields with helpful hints; contact page shows time estimate.
- Success path reinforces LINE/WhatsApp.

### Mobile contact UX
- Sticky bar + full-width touch targets (44px) on primary buttons.

### FAQ positioning
- Homepage: after final CTA (objection handling for non-converters).
- Visa: after final CTA (converted users may skip; researchers get answers).

### Final CTA sections
- Review summary + messaging + footnote; homepage omits explore at bottom.

---

## Measurement suggestions

Track in analytics (already instrumented surfaces):

- `hero_contact` vs `final_cta_contact` click rate by page type
- `mobile_bar_contact` vs desktop messaging clicks
- Inquiry: `inquiry_form_view` → `inquiry_submit` → `inquiry_success`
- Drop-off: pages with high views, low `cta_click` on same surface

---

## Related docs

- `CONVERSION_INFRASTRUCTURE.md` — channel priority and form philosophy
- `COMPONENT_ARCHITECTURE.md` — CTA components
- `CONTENT_ROADMAP.md` — P1 articles to unblock links
- `ENVIRONMENT_VARIABLES.md` — LINE/WhatsApp URLs
