import { cn } from "@/lib/utils"

type SkipLinkProps = {
  href?: string
  className?: string
}

function SkipLink({ href = "#main-content", className }: SkipLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50",
        "rounded-lg border border-border bg-background px-4 py-2.5",
        "text-sm font-medium text-foreground shadow-sm",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        className
      )}
    >
      Skip to main content
    </a>
  )
}

export { SkipLink }
