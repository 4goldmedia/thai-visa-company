# Editorial workflow — Thailand visa platform

Production-grade publishing process for resource articles, visa content updates, and long-term topical authority. This workflow maps directly to the codebase (`content/articles/`, `lib/content/registry.ts`, `lib/content/related.ts`, `lib/seo/`, `lib/content/routing/`).

**Related docs**

| Doc | Use when |
|-----|----------|
| `lib/CONTENT_ARCHITECTURE.md` | MDX structure, registry, routing |
| `lib/schema/INTERNAL_LINKING_STRATEGY.md` | Linking rules |
| `AI_SEARCH_OPTIMIZATION.md` | Extractable copy, FAQ, schema patterns |
| `lib/VISA_PAGE_ARCHITECTURE.md` | Visa page content standards |
| `LAUNCH_CHECKLIST.md` | Pre-ship technical QA |

---

## Principles

1. **Answer real questions** — Every piece targets a specific reader situation (nationality, visa type, timeline), not generic “SEO content.”
2. **Human accountability** — AI assists drafting; a human owns accuracy, tone, and publish approval.
3. **Semantic consistency** — Tags, categories, and links align with `contentTopicTaxonomy` in `lib/content/related.ts`.
4. **No publish without QA** — SEO, schema, and internal links are verified in code and in preview, not assumed.
5. **Ship complete pages** — FAQ, related links, CTA, TOC, and metadata are part of the article, not afterthoughts.

---

## Content types

| Type | Location | Route | Primary goal |
|------|----------|-------|----------------|
| **Resource article** | `content/articles/resources/<slug>/` | `/resources/[slug]` | Educational guides, topical authority |
| **Visa guide** (future) | `content/articles/visa-guides/<slug>/` | `/visas/guides/[slug]` | Deep guides tied to a visa product |
| **Visa landing update** | `lib/visas/content/<slug>.ts` | `/visas/<slug>` | Service accuracy, conversion |
| **Planned stub only** | `lib/content/planned/resources.ts` | Index card only | Reserve URL; **do not link until published** |

---

## Workflow overview

```
Ideation → Topic validation → Brief → AI draft → Human edit → SEO QA
    → Internal linking → Schema check → Technical publish → Post-publish monitor
```

| Stage | Owner | Output |
|-------|--------|--------|
| 1. Ideation | Editorial lead | Topic backlog item |
| 2. Keyword / topic validation | SEO + editorial | Approved brief |
| 3. AI-assisted draft | Writer (+ AI) | MDX + `meta.ts` draft (`published: false`) |
| 4. Human review | Subject-matter reviewer | Fact-checked prose |
| 5. SEO review | SEO owner | Metadata, headings, FAQ |
| 6. Internal linking | SEO / writer | `related`, `relatedSlugs`, in-body links |
| 7. Schema verification | Dev or SEO | JSON-LD matches UI |
| 8. Publishing | Dev | Registry + `published: true` + build |
| 9. Updates | Editorial | `updatedAt`, changelog note |

---

## 1. Article ideation

**Goal:** Build a backlog aligned with visa products and reader questions—not isolated blog posts.

### Sources

- Visa page FAQ gaps (questions clients ask on LINE/WhatsApp)
- Search Console queries (once connected)
- Competitor gap analysis (what they answer poorly)
- Planned backlog: `lib/content/planned/resources.ts`
- Internal clusters: retirement, DTV, business, Elite, education, process/timelines

### Ideation criteria (must meet ≥2)

- [ ] Maps to a **visa product** or **process** we support
- [ ] Answers a **specific question** (e.g. “How long does X take for nationality Y?”)
- [ ] Complements an existing **visa page** or **published article** (cluster, not orphan)
- [ ] Fits a **resource category**: `visa-guides` | `process` | `comparisons`
- [ ] No overlap with an existing slug (check registry + planned list)

### Backlog template

```markdown
## [Working title]
- **Proposed slug:** how-to-...
- **Primary reader:** (e.g. UK retiree applying from abroad)
- **Cluster:** retirement | dtv | business | elite | education | process
- **Target visa page(s):** /visas/...
- **Search intent:** informational | comparison | how-to
- **Priority:** P1 | P2 | P3
- **Notes:**
```

### Priority order (recommended)

1. Guides for **published visa routes** with weak article support
2. **Process** articles (timelines, extensions) that support all visas
3. **Comparison** pieces only when they reduce confusion (not filler)
4. Visa-guide collection (when route is wired)

---

## 2. Keyword / topic validation

**Goal:** Confirm the topic is worth publishing without keyword stuffing.

### Validation steps

1. **Intent check** — Is the user trying to learn, compare, or apply? Match format to intent.
2. **Cannibalization** — Will this compete with a visa page H1? If yes, narrow the article angle or strengthen the visa page instead.
3. **Slug design** — Kebab-case, descriptive, stable: `how-to-get-thailand-retirement-visa` not `retirement-visa-2026-seo`.
4. **Tag plan** — 3–6 semantic tags from `contentTopicTaxonomy` (e.g. `retirement`, `long-stay`, `thailand visa`)—not synonym spam.
5. **Reality check** — Requirements cited must be framed as “typical” or “embassy-dependent” unless legally reviewed.

### Reject or defer if

- Topic is purely navigational (“Thai Visa Company contact”)—use existing pages
- No credible expertise angle (generic travel blogging)
- Requires legal advice disclaimer beyond editorial comfort
- Would need a **404 URL** linked from live related sections

### Approval sign-off

- [ ] Editorial lead approves angle
- [ ] SEO confirms slug + cluster + no cannibalization

---

## 3. AI-assisted drafting

**Goal:** Speed up structure and first prose; not replace expertise or review.

### AI may do

- Outline H2/H3 from brief
- Draft sections from bullet facts you provide
- Suggest FAQ questions from client call patterns
- Propose `relatedSlugs` candidates
- Generate meta description **candidates** (human picks one)

### AI must not

- Invent financial thresholds, ages, or embassy rules without a cited source in the brief
- Publish or set `published: true`
- Add keyword lists unnatural to the prose
- Copy competitor content
- Generate “definitive legal” language

### Prompt guardrails (include in every AI session)

```
Context: Thai Visa Company — practical Thailand visa support for foreigners.
Tone: Calm, clear, trustworthy. No hype. No legal guarantees.
Audience: Applicants and holders, often non-native English speakers.
Rules:
- Lead with a direct answer in the first sentence of each FAQ answer.
- Use "typically", "often", "your embassy may require" for requirements.
- Do not state laws as universal facts.
- No keyword stuffing; use topic terms only where natural.
- Heading hierarchy: one H1 (in meta), H2 per major section in MDX, H3 for subsections.
```

### Technical draft setup

1. Create folder: `content/articles/resources/<slug>/`
2. Add `meta.ts` using `defineResourceArticle()` — set **`published: false`**
3. Add `content.mdx` with TOC-aligned `##` headings
4. Register in `lib/content/registry.ts` (required for preview/build)
5. Add key to `articleEntriesSync` in `lib/content/articles.ts` for index/static builds

See `lib/CONTENT_ARCHITECTURE.md` for field reference.

### Draft completeness (before human review)

- [ ] `title`, `description`, `lead`, `seo.title`, `seo.description`
- [ ] `category`, `tags`, `index.categoryId`
- [ ] `tableOfContents` matches MDX headings
- [ ] `faq` ≥ 4 items with unique `value` ids
- [ ] `related` (manual) + optional `relatedSlugs`
- [ ] `cta` specific to the topic
- [ ] `publishedAt` set; `updatedAt` if revising

---

## 4. Human review

**Goal:** Accuracy, trust, and readable prose.

### Reviewer focus

- [ ] Facts match current practice and brief sources
- [ ] No promises of approval, timelines, or outcomes
- [ ] Examples plausible for nationality / embassy variance
- [ ] Plain English; short paragraphs; no jargon without explanation
- [ ] Tone matches visa pages (see `lib/VISA_PAGE_ARCHITECTURE.md`)
- [ ] MDX renders correctly locally (`npm run dev`)
- [ ] No broken MDX components or links

### Legal / compliance note

Content is **guidance**, not legal advice. Prefer:

- “Embassies often ask for…”
- “We help you check what applies to your situation…”

### Sign-off

- [ ] Reviewer name + date in PR or editorial log

---

## 5. SEO review

**Goal:** Metadata and on-page structure support search and AI extraction without spam.

### On-page

- [ ] One clear topic per URL; H1 via `title` / `headingId` (not duplicated in MDX)
- [ ] `lead` works as standalone summary (`data-page-summary` pattern)
- [ ] `seo.title` matches intent (may differ slightly from H1 for length)
- [ ] `seo.description` 140–160 chars, human-readable, no comma-stuffed keywords
- [ ] `seo.keywords` only high-confidence phrases (≤ 8)
- [ ] MDX: logical `##` / `###` order; no skipped levels

### Technical SEO (automated helpers)

- [ ] `createArticlePageMetadata` via `buildResourceArticleMetadata`
- [ ] Canonical path = `meta.path`
- [ ] Article appears in sitemap only when `published: true`

### Sign-off

- [ ] SEO owner approves metadata + headings

---

## 6. Internal linking review

**Goal:** Crawl depth and semantic clusters via `lib/content/related.ts`.

### Every resource article should include

**In meta (`related` + `relatedSlugs`):**

- [ ] ≥ 1 link to the **primary visa page** (e.g. `/visas/retirement`)
- [ ] ≥ 1 link to **another resource** (published only) or planned stub removed until live
- [ ] ≤ 3 manual related cards (system fills via scoring if needed)

**In MDX body (where natural):**

- [ ] Descriptive anchor text (“Thailand retirement visa support”)—not “click here”
- [ ] At least one contextual link to contact or visa service when relevant

### Visa pages (when article ships)

- [ ] Update `relatedResources.items` on relevant visa in `lib/visas/content/*.ts` if the guide is the best resource
- [ ] Confirm planned stubs: remove or publish before linking from visa related sections

### Automated scoring sanity check

- Tags overlap with `contentTopicTaxonomy` for the cluster
- `resolveRelatedArticles` returns sensible neighbors in dev (optional script/log)

See `lib/schema/INTERNAL_LINKING_STRATEGY.md`.

### Sign-off

- [ ] No links to unpublished URLs
- [ ] Cluster reinforced (article ↔ visa ↔ related articles)

---

## 7. Schema verification

**Goal:** JSON-LD matches visible content (FAQ parity).

### Before publish, verify in page source or Rich Results Test

| Graph | Source | Check |
|-------|--------|-------|
| **Article** | `ResourceArticleJsonLd` | `headline`, `description`, dates, `abstract` ≈ lead |
| **BreadcrumbList** | `buildResourceArticleRouteSchemaGraph` | Home → Resources → Article |
| **FAQPage** | `ArticleInlineFaq` / `FaqJsonLd` | Every visible Q&A in `mainEntity` |
| **Organization** | Layout (site-wide) | Unchanged |

### FAQ parity rule

> Accordion text must **exactly** match FAQ schema strings (minor whitespace aside).

### Optional `meta.schema`

- `featuredImage` when OG image exists under `public/`
- `primaryType` only when default Article is wrong
- `additionalNodes` only when approved

### Sign-off

- [ ] FAQ visible = FAQ schema
- [ ] No empty or test graphs

---

## 8. Publishing process

**Goal:** Predictable, reversible ship with production build green.

### Pre-publish checklist

Complete **Article checklist**, **SEO QA**, **AI-search readability**, and **Schema verification** below.

### Publish steps (developer)

1. Set `published: true` in `meta.ts`
2. Confirm registry entry in `lib/content/registry.ts`
3. Confirm `articleEntriesSync` in `lib/content/articles.ts`
4. Remove entry from `lib/content/planned/resources.ts` if it was a stub
5. Run `npm run build` — fix TypeScript or route errors
6. Preview `/resources/<slug>` — metadata, FAQ, related, CTA, mobile
7. Verify sitemap includes path (`getPublishedResourceArticlePaths`)
8. Merge PR; deploy

### Post-publish (within 48h)

- [ ] Request indexing in Google Search Console (URL inspection)
- [ ] Spot-check analytics surface (article CTAs fire correctly)
- [ ] Share internally for LINE/WhatsApp use if client-facing

### Rollback

- Set `published: false` and redeploy — route 404s (`dynamicParams = false` for unknown slugs only at build time; unpublished = not in static params)

---

## 9. Update / revision workflow

**Goal:** Keep authority accurate without churning URLs.

### When to update

- Embassy or immigration rule changes affecting the topic
- User feedback / repeated support questions
- Material SEO performance data (underperforming snippet → improve lead + FAQ Q1)
- Related visa page content changed (sync facts and links)

### Update types

| Type | Action |
|------|--------|
| **Minor** | Typos, clarity, one FAQ answer — bump `updatedAt` |
| **Material** | Sections rewritten, new requirements — `updatedAt` + optional note in PR |
| **Structural** | New H2/TOC — revalidate TOC ids and internal links |
| **Retire** | `published: false` + redirect plan if URL had traffic (301 policy TBD) |

### Do not

- Change `slug` or `path` on live URLs without redirect
- Add “last updated” keyword blocks for SEO only
- Refresh dates without content change

### Revision checklist

- [ ] `updatedAt` set in `meta.ts`
- [ ] FAQ schema still matches UI
- [ ] Re-run SEO + AI-search spot checks if lead/FAQ changed
- [ ] Rebuild and deploy

---

## Article checklist (publish gate)

Use for every new or materially revised resource article.

### Content

- [ ] Answers one primary reader question clearly in the first two paragraphs
- [ ] `lead` is accurate and self-contained
- [ ] All H2s in `tableOfContents` exist in MDX
- [ ] No placeholder lorem or TBD sections
- [ ] CTA topic-specific (not generic boilerplate only)

### Meta (`meta.ts`)

- [ ] `slug` kebab-case, stable
- [ ] `published` / `publishedAt` correct
- [ ] `index.categoryId` valid: `visa-guides` | `process` | `comparisons`
- [ ] `tags` align with taxonomy
- [ ] `faq` items have unique `value` ids
- [ ] `related` links all resolve (200)
- [ ] `relatedSlugs` only published articles

### Codebase

- [ ] Registered in `lib/content/registry.ts`
- [ ] Listed in `articleEntriesSync` in `lib/content/articles.ts`
- [ ] Planned stub removed if applicable
- [ ] `npm run build` passes

### UX

- [ ] Mobile readable
- [ ] TOC links work
- [ ] Contact CTA visible and tracked (`article_cta_contact`)

---

## SEO QA checklist

- [ ] Unique `seo.title` and `seo.description` vs other pages
- [ ] Canonical URL correct (`/resources/<slug>`)
- [ ] Open Graph type `article` with `publishedAt` / `updatedAt`
- [ ] No `noIndex` unless intentional
- [ ] Keywords relevant and not stuffed in body
- [ ] Intent-aligned H1 (article title)
- [ ] Breadcrumbs: Home → Resources → Title
- [ ] Included in sitemap when published
- [ ] No competing visa page targeting identical primary query without differentiation

---

## AI-search readability checklist

Aligned with `AI_SEARCH_OPTIMIZATION.md` and `lib/seo/ai-search.ts`.

### Extractability

- [ ] `lead` reads as a complete summary (who, what, geography, how to get help)
- [ ] FAQ answers start with a **direct answer sentence**, then detail
- [ ] Section intros state the section purpose in the first line
- [ ] Lists used for steps, requirements, or options where appropriate

### Structure

- [ ] Single topical focus per URL
- [ ] `headingId` unique per article (`<slug>-...`, not shared `common-questions` only)
- [ ] FAQ section id: `{slug}-faq`
- [ ] Entity name “Thai Visa Company” used consistently; service described plainly

### Schema / AI crawlers

- [ ] Article `abstract` aligns with lead (automatic via schema pipeline)
- [ ] FAQPage `name` and `description` specific to the article
- [ ] Internal links use descriptive titles (card + anchor text)

### Avoid

- [ ] No “In conclusion” filler blocks for robots
- [ ] No synthetic FAQ only for schema
- [ ] No hidden text or duplicate Q&A off-screen

---

## Publishing cadence recommendations

Sustainable growth for a small expert team (adjust to capacity).

| Phase | Cadence | Focus |
|-------|---------|--------|
| **Foundation** (months 1–2) | 2 articles / month | Close gaps on retirement + DTV + one process guide |
| **Growth** (months 3–6) | 2–4 articles / month | One cluster at a time (finish retirement hub before scattered topics) |
| **Maintenance** | Ongoing | 1–2 visa page reviews / month; article updates as rules change |

### Cluster publish order (recommended)

1. **Retirement** — extend `how-to-get-thailand-retirement-visa`; add timeline/extension companion
2. **DTV** — publish `what-is-thailand-dtv-visa` (planned)
3. **Process** — publish `how-long-does-thai-visa-take` (planned)
4. **Business / education** — one guide each after core cluster stable
5. **Comparisons** — only when they support decisions (e.g. DTV vs tourist)

### Visa page cadence

- Review each visa page **quarterly** or when immigration news affects that product
- Minor FAQ additions: batch monthly, not one-off deploys per question

---

## Update frequency recommendations

| Content | Review frequency | Trigger |
|---------|------------------|---------|
| **Resource articles** | Quarterly | Rule changes, Search Console, support themes |
| **Visa landing pages** | Quarterly | Same + conversion copy tests |
| **Homepage FAQ** | Semi-annual | Only if answers drift |
| **Planned stubs** | Monthly audit | Remove or publish—never linger > 2 quarters |
| **Internal links** | Each publish | New article → update visa `relatedResources` |
| **Schema / site config** | Annual | Brand, contact, OG assets |

### Freshness signals

- Always set `updatedAt` when content meaningfully changes
- Do not fake freshness
- Prefer updating high-traffic URLs over publishing near-duplicates

---

## Roles (minimum viable team)

| Role | Responsibility |
|------|----------------|
| **Editorial lead** | Backlog, briefs, final tone |
| **Subject reviewer** | Accuracy (visa knowledge) |
| **SEO owner** | Metadata, linking, schema QA |
| **Developer** | Registry, build, deploy |

One person may wear multiple hats; checklists still apply.

---

## AI tool usage log (recommended)

Keep a lightweight log per article:

| Field | Example |
|-------|---------|
| Article slug | `how-to-get-thailand-retirement-visa` |
| AI used for | Outline, draft §3, FAQ phrasing |
| Human % rewrite | ~60% |
| Fact sources | Embassy checklist, internal playbook |
| Reviewer | Name |

Supports quality control and avoids “low-quality AI publishing” drift.

---

## Scalable authority growth — verification

This workflow supports long-term growth because it:

1. **Clusters topics** around visa products and `contentTopicTaxonomy`—not random posts.
2. **Integrates with code** (registry, related resolver, routing)—reducing operational drift.
3. **Separates AI draft from human and SEO gates**—maintains trust.
4. **Enforces link and schema discipline**—protects AI-search and rich-result parity.
5. **Defines cadence and updates**—compound authority without URL churn or spam.
6. **Blocks linking to unpublished URLs**—prevents trust and crawl errors.

### Success metrics (track quarterly)

- Published articles per cluster (retirement, DTV, process, …)
- Indexed pages vs published count (Search Console)
- Internal links per article (visa + resources)
- Support questions deflected (qualitative)
- Snippet/impression growth on target queries—not raw keyword count

---

## Quick reference — ship a new article

```bash
# 1. Create content
content/articles/resources/<slug>/meta.ts   # published: false initially
content/articles/resources/<slug>/content.mdx

# 2. Register
lib/content/registry.ts
lib/content/articles.ts                     # articleEntriesSync

# 3. Preview
npm run dev
# → /resources/<slug>

# 4. QA checklists (this doc)

# 5. Publish
# meta.ts → published: true
npm run build
# deploy
```

---

*Last aligned with platform architecture: content registry, centralized routing, `lib/content/related.ts`, `lib/seo/ai-search.ts`.*
