import { cn } from "@/lib/utils"

type CitationProps = {
  /** Source label, e.g. embassy name */
  source: string
  href: string
  /** Optional note shown after the source link */
  children?: React.ReactNode
  className?: string
}

/** MDX inline citation with external source link */
function Citation({ source, href, children, className }: CitationProps) {
  return (
    <cite
      className={cn(
        "not-italic text-[14px] leading-[1.65] text-muted-foreground/90",
        className,
      )}
    >
      <span className="text-muted-foreground/60">Source: </span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-foreground/75 underline decoration-foreground/20 underline-offset-[3px] transition-colors hover:text-foreground hover:decoration-foreground/40"
      >
        {source}
      </a>
      {children ? <span className="text-muted-foreground/80"> ({children})</span> : null}
    </cite>
  )
}

export { Citation }
