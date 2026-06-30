import Link from "next/link"
import {
  BriefcaseBusiness,
  Compass,
  Crown,
  GraduationCap,
  House,
  Laptop,
  Palmtree,
  type LucideIcon,
} from "lucide-react"

import { MovingSectionHeader } from "@/components/moving/moving-section-header"
import type { MovingCanForeignersMove, MovingVisaNavLink } from "@/lib/moving/types"
import { sectionContentOffsetClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

const visaNavIcons: Record<string, LucideIcon> = {
  dtv: Laptop,
  retirement: Palmtree,
  business: BriefcaseBusiness,
  education: GraduationCap,
  elite: Crown,
  "best-visa-guide": Compass,
  "permanent-residence": House,
}

type EditorialCanForeignersMoveProps = {
  data: MovingCanForeignersMove
  headingId: string
  quickAnswerId: string
  className?: string
}

function VisaNavPill({ link }: { link: MovingVisaNavLink }) {
  const Icon = visaNavIcons[link.id] ?? Compass

  return (
    <li>
      <Link href={link.href} className="moving-visa-nav__pill">
        <Icon className="moving-visa-nav__pill-icon" aria-hidden size={17} strokeWidth={1.75} />
        <span>{link.label}</span>
      </Link>
    </li>
  )
}

function EditorialCanForeignersMove({
  data,
  headingId,
  quickAnswerId,
  className,
}: EditorialCanForeignersMoveProps) {
  return (
    <div className={cn("moving-can-move", className)}>
      <MovingSectionHeader
        title={data.title}
        subtitle={data.intro}
        headingId={headingId}
      />

      {/* Layer 2 — editorial short answer */}
      <aside
        id={quickAnswerId}
        className={cn("moving-can-move__highlight", sectionContentOffsetClass)}
        aria-labelledby={`${quickAnswerId}-label`}
      >
        <p id={`${quickAnswerId}-label`} className="moving-can-move__highlight-label">
          Short answer
        </p>
        <p className="moving-can-move__highlight-lead">{data.shortAnswer.lead}</p>
        <p className="moving-can-move__highlight-body">{data.shortAnswer.body}</p>
        <p className="moving-can-move__highlight-support">{data.shortAnswer.support}</p>
      </aside>

      {/* Layer 3 — visa navigation */}
      <section className="moving-can-move__nav" aria-labelledby="moving-can-move-nav-heading">
        <p className="moving-can-move__bridge">{data.visaNav.bridge}</p>

        <header className="moving-can-move__nav-header">
          <h3 id="moving-can-move-nav-heading" className="moving-can-move__nav-title">
            {data.visaNav.heading}
          </h3>
          <p className="moving-can-move__nav-description">{data.visaNav.description}</p>
        </header>

        <ul className="moving-visa-nav" aria-label="Visa pathways">
          {data.visaNav.links.map((link) => (
            <VisaNavPill key={link.id} link={link} />
          ))}
        </ul>
      </section>
    </div>
  )
}

export { EditorialCanForeignersMove, visaNavIcons }
export type { EditorialCanForeignersMoveProps }
