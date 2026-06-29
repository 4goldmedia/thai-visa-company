# Editorial Review Checklist (Phase 3)

Per-article pass before publish or after major edits. Reference: [`docs/editorial-knowledge-graph.md`](./editorial-knowledge-graph.md).

## Metadata

- [ ] `title` matches frozen H1 from launch queue
- [ ] `meta.answer` is a single citation-ready Quick Answer
- [ ] `relatedSlugs` matches frozen graph (`npm run validate:editorial-graph`)
- [ ] `tableOfContents` IDs match MDX `##` headings (`npm run validate:articles`)
- [ ] Copy uses **blog article** / **visa page** — not "guide" for our content
- [ ] `related` category labels use **Article topic**, not Guide topic

## Content structure

- [ ] KeyFacts present (5 bullets typical)
- [ ] Who this article is for
- [ ] Where to find full visa requirements (visa page boundary callout)
- [ ] Answer-first H2 openings
- [ ] Decision framework + ConsultationCta after education blocks
- [ ] ArticleLinkCard to owning visa page
- [ ] FAQ in meta (article-specific, not hub duplicates)

## Knowledge graph

- [ ] One primary search intent; one canonical question
- [ ] Does not duplicate hub fee tables or full checklists
- [ ] Links upstream to `best-visa` when route unclear
- [ ] Links to sibling comparison article when reader has fork question
- [ ] Does not link `/visas/tourist` (unpublished)

## Images

- [ ] No `visaPageImageSrcs` reuse in blog heroes or ArticleImage
- [ ] Hero assigned or placeholder noted for manual selection

## Terminology (entity map)

- [ ] Thailand DTV Visa / DTV (not "digital nomad visa" in H1)
- [ ] Work Permit distinct from business visa
- [ ] Re-Entry Permit (hyphenated)
- [ ] Thai Visa Company (no superlatives)
