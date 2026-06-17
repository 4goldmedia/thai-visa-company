# Layout system

Canonical container widths and gutters for Thai Visa Company. Implementation: `components/layout/container.tsx`, `styles/tokens.css`, `lib/article-styles.ts`.

---

## Principles

1. **One site shell**  -  Marketing, visa, blog hub, and article frames align to `--width-site` (1280px).
2. **Prose is nested**  -  Long-form reading uses a narrower column inside the shell; the page does not shrink to prose width.
3. **No ad-hoc max-width**  -  Prefer `Container` sizes and layout tokens over inline `max-w-*` on sections.
4. **Tables and figures break out**  -  MDX comparison tables and figures use `--width-prose-wide` (52rem) inside the article column.

---

## Container sizes

| Size | Token | Width | Use |
|------|-------|-------|-----|
| `site` / `default` | `--width-site` | 80rem (1280px) | Homepage, navbar, footer, visa pages, blog hub, article outer frame, reviews |
| `wide` | `--width-site` | 80rem | Alias of site  -  visa editorial sections |
| `prose` | `--width-narrow` | 47.5rem (760px) | Privacy, terms, narrow form intros |
| `content` | `--width-site` | 80rem | **Deprecated**  -  alias of site; migrate to `default` |

### Gutters

Horizontal padding on all containers: `px-4 sm:px-6 md:px-8 lg:px-10`.

---

## Page types

### Homepage

- Sections use `<Container>` (site width).
- Hero copy constrained with `--width-hero-prose` (34rem) inside the shell  -  not a narrower page.

### Visa service pages

- Hero, FAQ, comparison, CTA: `<Container size="wide">` (= site width).
- Editorial sections use visa CSS variables in `styles/visa-editorial-system.css`.

### Blog hub & categories

- Full site shell for hero, filters, featured block, and article grid.
- Category archive pages: site shell + responsive 3-column card grid.

### Blog & guide articles

- **Shell:** site-width `Container`.
- **Grid (lg+):** TOC sidebar (`9.5rem`) + flexible main column.
- **Prose:** paragraphs/lists capped at `--width-prose` (42rem).
- **Wide MDX:** figures, tables, comparison components up to `--width-prose-wide` (52rem).
- **Related / CTA bands:** site shell; related cards span up to prose-wide.

### Reviews (homepage section)

- Site-width `Container` inside dark band  -  matches homepage grid.

### Consultation

- Site-width `Container` for two-column form layout.
- Intro copy may use local `max-width` for form column rhythm only.

### Legal (privacy / terms)

- `Container size="prose"` for comfortable policy reading.

---

## Article tokens (CSS)

Defined on `[data-slot="article-layout"]` in `styles/article-reading.css`:

| Variable | Default | Role |
|----------|---------|------|
| `--width-prose` | 42rem | Body text measure |
| `--width-prose-tight` | 34rem | Answer boxes, FAQ intros |
| `--width-prose-wide` | 52rem | Tables, figures |
| `--article-sidebar` | 9.5rem | TOC column |
| `--article-gutter` | 3.5rem | TOC-to-body gap |

---

## Do / don't

**Do**

- Use `<Container>` for every major section band.
- Keep hero titles wide (`max-w-48rem` or section tokens) inside site shell.
- Let card grids breathe at site width.

**Don't**

- Set `size="content"` expecting a narrow page  -  it is now site width.
- Wrap `<Container>` inside another max-width div without reason.
- Cap article pages at 36rem shell  -  use shell + nested prose.

---

## Migration notes

Previously `Container size="content"` was 760px and caused blog/visa drift. It now maps to site width. Use `size="prose"` only for legal and focused form pages.
