import { cn } from "@/lib/utils"

type DefinitionProps = {
  term: string
  children: React.ReactNode
  className?: string
}

function Definition({ term, children, className }: DefinitionProps) {
  return (
    <dl
      className={cn(
        "editorial-definition my-6 rounded-[var(--radius-card)] border border-border/50 px-5 py-4 sm:px-6 sm:py-5",
        className,
      )}
    >
      <dt className="text-sm font-semibold tracking-[-0.01em] text-foreground">{term}</dt>
      <dd className="mt-2 text-[15px] leading-[1.7] text-muted-foreground">{children}</dd>
    </dl>
  )
}

export { Definition }
