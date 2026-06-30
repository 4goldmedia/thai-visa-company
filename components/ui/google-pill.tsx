import { GoogleLogo } from "@/components/ui/google-logo"
import { cn } from "@/lib/utils"

type GooglePillProps = {
  className?: string
  variant?: "light" | "dark"
}

function GooglePill({ className, variant = "light" }: GooglePillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-1.5 py-px",
        "text-[10px] font-medium tracking-tight sm:text-[11px]",
        variant === "dark"
          ? "border-[color-mix(in_srgb,#f6f3ee_14%,transparent)] bg-[color-mix(in_srgb,#f6f3ee_6%,transparent)] text-[color-mix(in_srgb,#f6f3ee_55%,transparent)]"
          : "border-border/50 bg-muted/30 text-muted-foreground",
        className,
      )}
      aria-hidden
    >
      <GoogleLogo width={15} height={15} />
      <span>Google</span>
    </span>
  )
}

export { GooglePill }
export type { GooglePillProps }
