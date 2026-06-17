/**
 * Class names for CSS motion utilities  -  keep in sync with `styles/motion.css`.
 * Do not apply `fadeUpMount` to hero copy (h1/description)  -  preserves LCP paint.
 */

export const motionClass = {
  fadeUpMount: "motion-fade-up-mount",
  revealInView: "motion-reveal-in-view",
  stagger: "motion-stagger",
  staggerItem: "motion-stagger-item",
  delay60: "motion-delay-60",
  delay140: "motion-delay-140",
  mobileMenuIn: "motion-mobile-menu-in",
} as const
