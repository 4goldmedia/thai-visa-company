/**
 * Layout width tokens — mirror `styles/tokens.css` custom properties.
 * Use Container sizes in components; use these constants in TS-only layout logic.
 */

/** Site shell — homepage, visa pages, blog hub, grids (1280px) */
export const WIDTH_SITE = "80rem"

/** Reading column — article body prose (~672px / 42rem) */
export const WIDTH_PROSE = "42rem"

/** Tight prose — leads, answers, form copy (~544px / 34rem) */
export const WIDTH_PROSE_TIGHT = "34rem"

/** Wide prose slot — tables, figures inside articles (~832px / 52rem) */
export const WIDTH_PROSE_WIDE = "52rem"

/** Narrow focused pages — legal, privacy (~760px) */
export const WIDTH_NARROW = "47.5rem"

/** Article TOC sidebar column */
export const ARTICLE_SIDEBAR = "9.5rem"

/** Gap between article TOC and body on desktop */
export const ARTICLE_GUTTER = "3.5rem"
