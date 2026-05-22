/**
 * Public env reads for site configuration.
 * Use static `process.env.NEXT_PUBLIC_*` access only (Next.js client inlining).
 */

const DEV_SITE_ORIGIN = "http://localhost:3000"

function trimEnv(value: string | undefined): string | undefined {
  const trimmed = value?.trim()
  return trimmed && trimmed.length > 0 ? trimmed : undefined
}

/** Canonical site origin from `NEXT_PUBLIC_SITE_URL` */
export function readSiteOriginEnv(): string | undefined {
  return trimEnv(process.env.NEXT_PUBLIC_SITE_URL)
}

export function readContactEmailEnv(): string | undefined {
  return trimEnv(process.env.NEXT_PUBLIC_CONTACT_EMAIL)
}

export function readContactPhoneEnv(): string | undefined {
  return trimEnv(process.env.NEXT_PUBLIC_CONTACT_PHONE)
}

export function readTwitterHandleEnv(): string | undefined {
  return trimEnv(process.env.NEXT_PUBLIC_TWITTER_HANDLE)
}

export function readGoogleReviewsUrlEnv(): string | undefined {
  return trimEnv(process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL)
}

export function readDefaultOgImagePathEnv(): string | undefined {
  return trimEnv(process.env.NEXT_PUBLIC_OG_IMAGE_PATH)
}

export function getDefaultSiteOrigin(): string {
  return DEV_SITE_ORIGIN
}
