import { motionClass } from "@/lib/motion-classes"
import { cn } from "@/lib/utils"

type StaggerGridProps = {
  children: React.ReactNode
  className?: string
  as?: "ul" | "ol" | "div"
  "aria-label"?: string
}

function StaggerGrid({
  children,
  className,
  as: Comp = "ul",
  "aria-label": ariaLabel,
}: StaggerGridProps) {
  return (
    <Comp
      className={cn(motionClass.stagger, className)}
      aria-label={ariaLabel}
    >
      {children}
    </Comp>
  )
}

type StaggerGridItemProps = {
  children: React.ReactNode
  className?: string
  as?: "li" | "div"
}

function StaggerGridItem({
  children,
  className,
  as: Comp = "li",
}: StaggerGridItemProps) {
  return (
    <Comp className={cn(motionClass.staggerItem, className)}>{children}</Comp>
  )
}

export { StaggerGrid, StaggerGridItem }
