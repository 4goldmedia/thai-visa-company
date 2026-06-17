# RESOURCES ARCHITECTURE

## Content collections

Resource articles are part of the shared **content collections** system. See `lib/CONTENT_ARCHITECTURE.md`.

| Path | Role |
|------|------|
| `content/articles/resources/<slug>/content.mdx` | Prose body |
| `content/articles/resources/<slug>/meta.ts` | `export const meta`  -  title, description, dates, tags, SEO, FAQ, CTA |

Routing: `app/resources/[slug]/page.tsx` → `@/lib/resources/routing` (resolve, metadata, related) → `@/lib/content` registry.

**Add a new resource article**

1. Add `content/articles/resources/<slug>/` (`meta.ts` + `content.mdx`)
2. Register `resources/<slug>` in `lib/content/registry.ts`
3. Set `published: true` in meta when ready
4. Add index card via `resourceMetaToIndexCard(meta)` in `lib/resources/content/articles.ts`

---

## Purpose

The Resources section is:
- an SEO acquisition engine
- a trust-building system
- an AI-search optimization system
- a topical authority system

The goal is to answer:
real user questions.

---

# Content Strategy

Articles should target:
- real Google searches
- real AI-search prompts
- practical visa concerns

Avoid:
- generic marketing blog posts
- keyword stuffing
- SEO spam content

---

# Article Types

## Visa Guides

Examples:
- How to Get a Thailand Retirement Visa
- Thailand DTV Visa Requirements
- Thailand Elite Visa Cost

---

## Comparison Articles

Examples:
- DTV Visa vs Elite Visa Thailand
- Best Long-Term Visa for Thailand

---

## Process Questions

Examples:
- How Long Does a Thai Visa Take
- Can I Apply for a Thai Visa Inside Thailand

---

## Cost Questions

Examples:
- Thailand Visa Costs Explained
- Hidden Costs of Thai Visas

---

## Anxiety Reduction Content

Examples:
- What Happens if My Thai Visa Is Rejected
- Do I Need a Lawyer for a Thai Visa

---

# Article Structure

Each article should include:
1. Clear headline
2. Quick answer/introduction
3. Structured sections
4. FAQ section
5. Related resources
6. CTA section

---

# Tone

Articles should feel:
- practical
- trustworthy
- highly readable
- modern
- concise

Avoid:
- legal jargon
- SEO spam language
- long corporate paragraphs

---

# SEO Direction

Titles should resemble:
exact real-world search intent.

Good:
- How to Get a Thailand Retirement Visa

Bad:
- Comprehensive Guide to Thailand Retirement Visa Solutions

---

# AI Search Optimization

Content should:
- answer questions directly
- use semantic structure
- use concise explanations
- include clear headings
- support extractable answers

This improves:
- ChatGPT search visibility
- Perplexity visibility
- Gemini visibility
- AI answer relevance

---

# Internal Linking Strategy

All articles should:
- link to visa pages
- link to related articles
- link to contact pages

This strengthens:
- topical authority
- SEO crawl depth
- conversion paths

---

# Conversion Strategy

Resources should naturally guide users toward:
- LINE
- WhatsApp
- consultation requests

But without aggressive sales language.