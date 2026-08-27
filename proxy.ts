import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import {
  CANONICAL_PRODUCTION_ORIGIN,
  WWW_PRODUCTION_HOST,
} from "@/lib/site/origin"

function requestHostname(request: NextRequest): string {
  const hostHeader = request.headers.get("host") ?? request.nextUrl.host
  return hostHeader.split(":")[0]?.toLowerCase() ?? ""
}

/**
 * Direct www → HTTPS non-www. Destination is already the canonical origin so
 * `http://www` and `https://www` both resolve in one hop (no www-then-https chain).
 * Apex `http://` → `https://` is terminated at the host (e.g. Vercel TLS).
 */
export function proxy(request: NextRequest) {
  const hostname = requestHostname(request)
  if (hostname !== WWW_PRODUCTION_HOST) {
    return NextResponse.next()
  }

  const destination = new URL(
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
    CANONICAL_PRODUCTION_ORIGIN,
  )

  return NextResponse.redirect(destination, 308)
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
}
