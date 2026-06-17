import type { VisaSlug } from "@/lib/visas/types"

/**
 * Reference visa for future content work  -  Phase 2+ should model other visas on DTV.
 * Phase 1 does not rewrite DTV copy; this constant documents the target only.
 */
export const VISA_REFERENCE_IMPLEMENTATION_SLUG = "dtv" as const satisfies VisaSlug
