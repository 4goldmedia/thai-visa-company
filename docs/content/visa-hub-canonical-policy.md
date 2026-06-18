# Visa Hub Canonical Policy

Authority architecture for visa landing pages (`/visas/*`) and supporting cluster content.

## Roles

### Hub (`/visas/{slug}`)

The **canonical money URL** for a visa type. Owns:

- Answer-first definition (`hero.definition`, `answer`)
- Key facts, pathways, checklists, fees, government steps
- Rejection patterns, compliance, decision guides
- Head-term FAQs (15–30 items max, non-duplicative)
- Official source citations
- EEAT reviewer attribution (`lastReviewed`)

### Cluster (`/blog/{slug}`, `/guides/{slug}`)

**Supporting depth** that links back to the hub. Owns:

- Embassy-specific pages (`dtv-visa-london-embassy`, etc.)
- Nationality pages (`dtv-visa-uk-nationals`, etc.)
- Extension, rejection recovery, document guides
- Comparison articles (DTV vs tourist, etc.)
- Original information gain (practice insights, case patterns)

Cluster archive: `/blog/cluster/{clusterId}` (pillar = hub URL in `blogClusters.pillarHref`).

## Canonical strategy

| Content type | Canonical URL |
|--------------|---------------|
| Visa overview, requirements summary | `/visas/{slug}` |
| Long-form requirements guide | Hub for head terms; article for long-tail only |
| Embassy/nationality specifics | `/blog/{slug}` → links to hub |
| Extension/compliance deep dives | `/blog/{slug}` under `immigration-procedures` or visa cluster |

Articles must include a prominent link to the hub in `related` metadata. Hubs surface cluster via `relatedResources` (auto + manual).

## FAQ ownership

| Location | Owns |
|----------|------|
| Hub FAQ | Head-intent questions (what is, cost, qualify, extension summary) |
| Article FAQ | Long-tail only (embassy-specific, nationality, edge cases) |

**Rule:** When porting blog content to the hub in Phase 1+, deduplicate — hub FAQ answers link to section anchors; remove verbatim duplicates from articles.

## Duplication rules

1. **Never** publish the same FAQ question with the same answer on hub and article.
2. **Tables** (fees, checklists) live on the hub; articles reference the hub section.
3. **Practice insights** — summary on hub; expanded case detail in cluster articles.
4. **Embassy variance** — summary table on hub; full page per embassy in cluster.

## Information-gain strategy

Content that must be **original** (not aggregated from competitors):

- `practiceInsights` — anonymized filing observations
- `embassyVarianceTable` / diff tracker — structured embassy comparison data
- `pitfalls` — rejection patterns from operational experience
- `decisionGuides` — qualification routing logic

Generic facts (500,000 THB, 180-day stay) are table stakes; information gain comes from structure, embassy variance, and first-party filing insight.

## Internal linking

Priority order (see `lib/visas/related-resources.ts`):

1. Manual `relatedResources.items` (published URLs only)
2. `relatedArticleSlugs` (explicit slugs)
3. Auto-scored articles (`blog` + `guides` collections)
4. Cluster archive link (`/blog/cluster/{id}`)

## Schema

- Hub: `WebPage` + `Service` + `FAQPage` + optional `HowTo` + `ItemList`
- Hub carries `author`, `reviewedBy`, `datePublished`, `dateModified`
- Articles: `Article` + `FAQPage`; link to hub in `related`

## Slug conventions (cluster scale)

| Pattern | Example | Cluster |
|---------|---------|---------|
| Embassy | `dtv-visa-washington-dc-embassy` | `dtv` |
| Nationality | `dtv-visa-uk-requirements` | `dtv` |
| Extension | `dtv-visa-extension-guide` | `dtv` or `immigration-procedures` |
| Document | `dtv-remote-work-letter-requirements` | `dtv` |
| Comparison | `dtv-vs-tourist-visa-thailand` | `dtv` |
| Rejection | `dtv-visa-rejected-what-to-do` | `dtv` |

No new route types required — use existing blog/guide MDX registry with `topicId` and `clusterId`.
