import Link from "next/link"

import { cn } from "@/lib/utils"

type BrandLogoProps = {
  className?: string
  href?: string
}

function BrandLogo({
  className,
  href = "/",
}: BrandLogoProps) {
  return (
    <Link
      href={href}
      className={cn("brand-logo", className)}
      aria-label="Thai Visa Company"
    >
      <svg
        className="brand-logo__icon"
        viewBox="0 0 48 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="0" y="0" width="48" height="8" fill="#23211E" />
        <rect x="0" y="11.25" width="48" height="9.5" fill="#23211E" />
        <rect x="0" y="24" width="48" height="8" fill="#23211E" />
      </svg>
      <span className="brand-logo__text" aria-hidden="true">
        <span className="brand-logo__line">Thai</span>
        <span className="brand-logo__line">Visa</span>
        <span className="brand-logo__line">Company</span>
      </span>
    </Link>
  )
}

export { BrandLogo }
