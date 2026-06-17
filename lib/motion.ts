/**
 * Motion timing tokens  -  homepage animations use CSS (`styles/motion.css`).
 * Keep easing/duration aligned with `.motion-fade-up-mount` and related utilities.
 */
export const MOTION_EASE = [0.22, 0.03, 0.26, 1] as const

export const MOTION_DURATION = {
  fast: 0.22,
  base: 0.42,
  slow: 0.52,
} as const

export const MOTION_OFFSET_Y = 10

export const MOTION_VIEWPORT = {
  once: true,
  amount: 0.12,
  margin: "-32px 0px -32px 0px",
} as const
