# ANALYTICS SETUP

## GA4 (implemented)

- **Env:** `NEXT_PUBLIC_GA_ID`  -  see `ENVIRONMENT_VARIABLES.md`
- **Code:** `lib/analytics/`, `components/analytics/analytics-root.tsx` in `app/layout.tsx`
- **Events:** `page_view`, `line_click`, `whatsapp_click`, `page_cta_click`, `visa_page_cta_click`, `article_cta_click`, inquiry funnel + `inquiry_submission`
- **API:** `@/lib/analytics`  -  typed helpers, `analyticsEvents`, `analyticsCtaIds`, one document click delegate (`attachAnalyticsClickListener`)

**Wired surfaces (delegated `data-contact-channel` + `data-analytics-*`  -  no per-button handlers):**
- Navbar (`global` / `navbar_contact`), mobile bar (`mobile_bar_contact`), footer (`footer_contact`)
- Homepage hero, final CTA, visa hero/final CTA, resources hero, contact page, article CTAs, inquiry success (`inquiry_success_contact`)
- Explore-visas links → `page_cta_click` or `visa_page_cta_click` / `article_cta_click` by surface
- `InquiryForm`  -  `useInquiryAnalytics()` for view/start/submit/success/error (conversion: `inquiry_submission` on success)

---

## Core Tools

Recommended:
- Google Analytics 4
- Google Search Console
- Google Business Profile
- Vercel Analytics (optional)
- Microsoft Clarity (optional)

---

# Important Events

Track:
- LINE clicks
- WhatsApp clicks
- inquiry form submissions
- CTA interactions
- visa page visits

---

# SEO Monitoring

Monitor:
- indexing
- impressions
- click-through rate
- article performance
- landing page performance

---

# Conversion Monitoring

Track:
- inquiry source
- highest-converting pages
- highest-performing visa pages
- article-to-contact conversions

---

# Long-Term Insights

Use analytics to identify:
- strongest SEO topics
- highest-converting visa pages
- most valuable traffic sources
- content expansion opportunities