# Thai Visa Company  -  Content Strategy

Permanent governance for creating, editing, auditing, planning, and expanding immigration content.

**Canonical rules:** [`rules/content/`](../rules/content/)

---

## 1. Content philosophy

Thai Visa Company is not building a visa blog. We are building the most trusted knowledge base for foreigners navigating Thai immigration.

### Who we write for

Readers who are confused, comparing options, worried about mistakes, and trying to understand requirements before they act. They care about qualification, cost, documents, timelines, risks, and next steps  -  not visa taxonomy for its own sake.

### Article gate

Before any new piece, answer:

> **What specific question is this article answering?**

If unclear, do not create the article.

### Principles

| Do | Do not |
| --- | --- |
| Answer real questions | Publish for rankings alone |
| Reduce uncertainty | Keyword-stuff or hide answers |
| Explain requirements plainly | Use filler or AI fluff |
| Help readers decide | Disguise sales copy as education |

**Trust beats traffic.**

Full rule: [`rules/content/content-philosophy.mdc`](../rules/content/content-philosophy.mdc)

---

## 2. Content clusters

Every article belongs to exactly one cluster and strengthens its pillar.

| Cluster | Pillar | Example supporting topics |
| --- | --- | --- |
| **DTV Visa** | Destination Thailand Visa (DTV) | Requirements, costs, processing times, rejections, dependents, extensions, remote work |
| **Retirement Visa** | Thailand Retirement Visa Guide | Income rules, vs DTV, renewals, mistakes |
| **Business & Work** | Thailand Business Visa Guide | Work permits, BOI, sponsorship, employment visas |
| **Education** | Thailand Education Visa Guide | Language schools, universities, renewals |
| **Immigration Procedures** | Thailand Immigration Procedures | 90-day reporting, TM30, re-entry, extensions |
| **Living In Thailand** | Moving To Thailand Guide | Healthcare, banking, housing, taxes, family |

No isolated articles. Each publish should add density to a cluster.

Full rule: [`rules/content/content-clusters.mdc`](../rules/content/content-clusters.mdc)

---

## 3. Article standards

### Voice

- Plain English, short sentences, practical examples
- Experienced specialist tone  -  *"Finally somebody explained this clearly."*
- Avoid legal jargon, bureaucracy-speak, and marketing fluff

### Structure (use when appropriate)

1. Quick Answer  
2. In Short Summary  
3. Requirements  
4. Eligibility  
5. Costs  
6. Timeline  
7. Common Mistakes  
8. FAQ  
9. Related Resources  
10. Next Steps  

Put answers early. Sections should stand alone if quoted by an AI system.

### Search reality check

Ask: **Would a real applicant type this into Google?**

Full rules:

- [`rules/content/content-writing.mdc`](../rules/content/content-writing.mdc)
- [`rules/content/punctuation.mdc`](../rules/content/punctuation.mdc)
- [`rules/content/search-reality-rule.mdc`](../rules/content/search-reality-rule.mdc)

---

## 4. Internal linking strategy

Links exist to help readers navigate the knowledge base  -  not for SEO manipulation.

### Every article should

- Link to the **relevant visa service page** (e.g. `/visas/dtv`)
- Link to the **cluster pillar** (guide hub or canonical guide)
- Link to **supporting articles** in the same cluster
- Be linked **from** related content where it helps context

### Primary link targets

- DTV Visa → `/visas/dtv`, `/guides/topic/dtv`
- Retirement → `/visas/retirement`, retirement guides
- Business → `/visas/business`, business guides
- Education → `/visas/education`
- Procedures → guides on reporting, extensions, TM30
- Living → `/guides/topic/*` living topics

Prefer **editorial link cards** and clear CTAs over dense inline link paragraphs.

Full rule: [`rules/content/internal-linking.mdc`](../rules/content/internal-linking.mdc)

---

## 5. SEO approach

SEO follows usefulness  -  not the reverse.

- One clear search intent per article
- Title and description match the question being answered
- Headings reflect real sub-questions (H2 = scannable decisions, H3 = detail)
- Stable URLs; update `updatedAt` when rules change materially
- Blog = freshness and news; Guides = evergreen authority; Visas = service intent

Do not create thin pages, duplicate pillars, or topic hubs that compete with guides.

---

## 6. AEO approach (AI citations)

Structure content so engines can extract atomic answers.

### Required patterns

| Pattern | Purpose |
| --- | --- |
| **Quick Answer** | Featured snippet / AI summary block |
| **Definition** | "What is X?" queries |
| **Key Facts / tables** | Eligibility and comparison |
| **Checklists** | Document and preparation lists |
| **FAQ (5–15 items)** | Long-tail question coverage |
| **ArticleStat** | Highlighted numbers (fees, savings thresholds) |

### Writing for quotation

- Lead sections with a direct sentence that answers the heading
- Use `ArticleComparison`, `ArticleTable`, `ArticleChecklist`  -  not walls of prose
- FAQ answers should be 2–4 sentences, self-contained
- Include `answer` in article meta for hero Quick Answer block

Full rule: [`rules/content/seo-aeo-standard.mdc`](../rules/content/seo-aeo-standard.mdc)

---

## 7. Blog clusters (filters & taxonomy)

Blog articles are grouped by **content cluster**  -  user-intent subject areas  -  not newsroom categories.

| Cluster ID | Filter label |
| --- | --- |
| `dtv` | DTV Visa |
| `retirement` | Retirement Visa |
| `business` | Business Visa |
| `education` | Education Visa |
| `immigration-procedures` | Immigration Procedures |
| `living-in-thailand` | Living in Thailand |

Every blog article `meta.index` must set `clusterId` and `clusterLabel`. Canonical list: [`lib/blog/content/clusters.ts`](../lib/blog/content/clusters.ts).

## 8. Blog vs guides vs visas

| Engine | Role | Nav visibility |
| --- | --- | --- |
| **Visas** | Service pages, conversion | Primary nav |
| **Guides** | Evergreen SEO authority | SEO / internal links only |
| **Blog** | News, rule changes, embassy updates | Primary nav |
| **Reviews** | Trust | Primary nav |

Topic authority lives in **guides**, not blog category hubs.

---

## 9. Article ideas

### Good (real search intent)

- How Much Money Do You Need For A DTV Visa?
- Can You Work Remotely On A DTV Visa?
- DTV Visa vs Retirement Visa
- Why Are DTV Visas Rejected?
- Can You Bring Family On A DTV Visa?
- How Long Does A Thai Visa Take?

### Bad (marketing, not search)

- Why Thai Visa Company Is Great
- Why Choose Our Visa Service
- Meet Our Team
- Thailand Immigration Trends
- The Future Of Visas

---

## 10. Cursor / agent workflow

When creating or editing content:

1. Read [`rules/content/`](../rules/content/) for the active task
2. Confirm cluster, search question, and pillar links
3. Use existing editorial components (`ArticleQuickAnswer`, `ArticleTable`, etc.)
4. Run `npm run validate:articles` before merge
5. Do not redesign layouts unless explicitly scoped

Cursor rule: [`.cursor/rules/content-governance.mdc`](../.cursor/rules/content-governance.mdc)

---

## 11. File map

```
rules/content/
  content-philosophy.mdc    # Why we publish; trust gate
  content-writing.mdc       # Structure, voice, AEO blocks
  punctuation.mdc           # No em dashes in user-facing copy
  content-clusters.mdc      # Six clusters and pillars
  search-reality-rule.mdc   # Google query validation
  internal-linking.mdc        # Knowledge network links
  seo-aeo-standard.mdc        # Citation-oriented structure

content/articles/
  blog/                     # Freshness / news / rule changes
  guides/                   # Evergreen authority

docs/content-strategy.md    # This document
```
