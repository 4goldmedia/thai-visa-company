# COMPONENT ARCHITECTURE

## Philosophy

The website should use a modular component-based architecture.

Every section should:
- be reusable
- have consistent spacing
- support responsive layouts
- maintain visual consistency

Avoid:
- duplicated layouts
- inconsistent section structures
- oversized monolithic components

---

# Core Layout Components

## Container

Purpose:
Consistent page width and horizontal padding.

Responsibilities:
- max width
- responsive padding
- alignment consistency

Used globally.

---

## Section Wrapper

Purpose:
Consistent vertical spacing.

Responsibilities:
- section padding
- section rhythm
- responsive spacing

All homepage sections should use this wrapper.

---

## Section Heading

Purpose:
Reusable heading pattern.

Structure:
- optional label
- headline
- supporting copy

Used across:
- homepage
- visa pages
- blog sections
- FAQ sections

---

# Navigation Components

## Navbar

Requirements:
- sticky
- responsive
- mobile menu
- CTA visibility
- simple structure

Include:
- logo
- navigation links
- LINE CTA
- WhatsApp CTA

---

## Mobile Navigation

Requirements:
- minimal
- highly usable
- touch-friendly
- fast access to contact methods

---

## Google Review Summary

**Component:** `components/ui/google-review-summary.tsx`  
**Data:** `lib/reviews/google-summary.ts` → `platformBusinessProfile`

| Placement | Layout | Notes |
|-----------|--------|--------|
| Homepage hero | `inline` `sm` | `includeBusinessInLabel` |
| Reviews section | `stacked` `md` | `linkToReviews` |
| Final CTA (home + visas) | `inline` `sm` | Above `ContactCtaGroup` |
| Visa hero | `inline` `sm` | Via `VisaHeroReviewBadge` |

---

## Mobile Contact Bar

**Location:** `components/layout/mobile-contact-bar.tsx`  
**Integration:** `SiteShell` → `app/layout.tsx` (all marketing routes)

Requirements:
- mobile-only (`lg:hidden`)
- sticky bottom, LINE + WhatsApp
- content offset + `scroll-padding-bottom` (no overlap with footer or anchors)
- hidden when mobile nav menu is open

---

## Footer

Requirements:
- SEO-friendly structure
- clear internal linking
- trust information
- contact visibility

---

# Homepage Components

## Hero Section

Responsibilities:
- immediate clarity
- trust
- conversion

Includes:
- headline
- supporting text
- CTA group
- trust indicators
- review preview

---

## Visa Card

Reusable visa category card.

Used for:
- homepage
- services page

Includes:
- visa name
- short explanation
- key benefit
- CTA

Cards should:
- feel clean
- minimal
- highly readable

---

## Process Steps

Reusable process component.

Used for:
- homepage
- visa pages

Should:
- simplify complexity
- reduce anxiety
- feel approachable

---

## Trust Section

Purpose:
Differentiate through:
- communication
- support
- responsiveness
- expertise

Should NOT feel like:
generic marketing feature lists.

---

## Reviews Component

Highly important.

Requirements:
- authentic presentation
- Google review emphasis
- high readability
- trust-focused layout

Potential formats:
- review cards
- review carousel
- screenshot integration

---

## FAQ Component

Reusable accordion component.

Used for:
- homepage
- visa pages

Requirements:
- SEO-friendly
- accessible
- easy to scan

---

## Blog Preview Component

Purpose:
SEO discovery + expertise.

Includes:
- article cards
- titles
- reading intent clarity

Titles should resemble:
real user search intent.

---

## CTA Section

Reusable conversion section.

Should:
- remain simple
- emphasize low friction
- support LINE + WhatsApp

Avoid:
- aggressive sales language

---

# Visa Page Components

Visa pages should share reusable templates.

Structure:
1. Hero
2. Overview
3. Requirements
4. Benefits
5. Process
6. FAQ
7. CTA

---

# Blog Components

## Article Layout

Requirements:
- highly readable
- narrow text width
- clean spacing
- SEO-friendly structure

---

## Related Articles

Purpose:
- internal linking
- SEO authority
- session depth

---

# UI Component Rules

Buttons:
- primary
- secondary
- ghost

Cards:
- reusable
- restrained styling
- subtle hover states

Icons:
- minimal usage only

Animations:
- subtle
- consistent
- restrained

---

# Reusability Rules

Before creating any new component:
- check if reusable version already exists
- avoid duplicate section logic
- maintain naming consistency

Consistency is more important than novelty.