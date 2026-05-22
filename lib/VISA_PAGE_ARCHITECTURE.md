# VISA PAGE ARCHITECTURE

## Routing & SEO (centralized)

```
lib/visas/
  registry.ts          → visaRegistry (all five visa pages)
  content/<slug>.ts    → page content + seo block
  routing/
    visas.ts           → resolveVisaPageContext(slug)
    seo.ts             → metadata + JSON-LD (WebPage, Service, BreadcrumbList)
  schema/visa.ts       → buildVisaPageSchemaGraph
  related.ts           → resolveRelatedVisas (registry + topical defaults)
```

App routes:

| Route | Entry |
|-------|--------|
| `app/visas/[slug]/page.tsx` | `resolveVisaPageContext` (dtv, elite, business, education) |
| `app/visas/retirement/page.tsx` | Same context resolver for retirement |

`resolveVisaPageContext` returns: `visa`, `metadata`, `breadcrumbs`, `relatedVisas`.

## Purpose

Visa pages serve as:
- SEO landing pages
- trust pages
- conversion pages

They should:
- answer practical user questions
- reduce uncertainty
- simplify complexity
- encourage contact

---

# Visa Page Structure

1. Hero
2. Visa Overview
3. Requirements
4. Benefits
5. Process
6. FAQ
7. Related visa services (registry-backed suggestions)
8. Related resources (guides)
9. Final CTA

---

# Page Goals

Users should quickly understand:
- who the visa is for
- key requirements
- process simplicity
- available support
- next steps

---

# Tone

Pages should feel:
- practical
- calm
- trustworthy
- modern
- highly readable

Avoid:
- legal jargon
- corporate wording
- SEO spam
- intimidating language

---

# SEO Direction

Titles should resemble:
real user search intent.

Examples:
- How to Get a Thailand Retirement Visa
- Thailand DTV Visa Requirements
- Thailand Elite Visa Cost

Avoid:
generic marketing SEO titles.

---

# Conversion Goals

Primary:
- LINE

Secondary:
- WhatsApp
- inquiry form

CTA placement should feel:
- natural
- low friction
- helpful

---

# Trust Elements

Include:
- review proof
- support messaging
- process clarity
- guidance reassurance

Users should feel:
"This seems manageable."