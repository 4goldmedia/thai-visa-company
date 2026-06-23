import type { ReactNode } from "react"
import Link from "next/link"

import { SectionReveal } from "@/components/motion"
import { ArticleSources } from "@/components/articles/article-sources"
import { VisaTimeline } from "@/components/visa-editorial/visa-timeline"
import {
  VisaEditorialContent,
  VisaEditorialHeading,
} from "@/components/visa-editorial/visa-editorial-heading"
import { VisaEditorialSection } from "@/components/visa-editorial/visa-editorial-section"
import type {
  ContentEmbassyVarianceRow,
  ContentVisaComplianceSection,
  ContentVisaDecisionGuidesSection,
  ContentVisaEmbassyVarianceTableSection,
  ContentVisaEntityGlossarySection,
  ContentVisaFeesAndTimelinesSection,
  ContentVisaGovernmentProcessSection,
  ContentVisaLegalBoundariesSection,
  ContentVisaOfficialSourcesSection,
  ContentVisaPitfallsSection,
  ContentVisaPracticeInsightsSection,
} from "@/lib/content/types"
import { editorialLinkClass } from "@/lib/section-styles"
import { cn } from "@/lib/utils"

type SectionShellProps = {
  sectionId: string
  headingId: string
  band?: boolean
  className?: string
  children: ReactNode
}

function VisaAuthoritySectionShell({
  sectionId,
  headingId,
  band,
  className,
  children,
}: SectionShellProps) {
  return (
    <VisaEditorialSection
      id={sectionId}
      labelledBy={headingId}
      width="wide"
      band={band}
      className={className}
    >
      <SectionReveal>{children}</SectionReveal>
    </VisaEditorialSection>
  )
}

type OfficialSourcesProps = ContentVisaOfficialSourcesSection & {
  sectionId: string
  headingId: string
}

function VisaOfficialSourcesSection({
  sectionId,
  headingId,
  title = "Official sources",
  description,
  eyebrow,
  items,
}: OfficialSourcesProps) {
  if (!items.length) return null

  const hasRichItems = items.some((item) => item.coverage || item.rationale)

  return (
    <VisaAuthoritySectionShell sectionId={sectionId} headingId={headingId}>
      <VisaEditorialHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <VisaEditorialContent>
        {hasRichItems ? (
          <ol className="visa-authority-list visa-authority-list--ordered">
            {items.map((source) => (
              <li key={`${source.href}-${source.title}`}>
                <strong>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={editorialLinkClass}
                  >
                    {source.title}
                  </a>
                </strong>
                {source.accessedAt ? (
                  <span className="visa-authority-table__note">
                    {" "}
                    (accessed {source.accessedAt})
                  </span>
                ) : null}
                {source.coverage ? <p>{source.coverage}</p> : null}
                {source.rationale ? (
                  <p className="visa-authority-list__remedy">{source.rationale}</p>
                ) : null}
              </li>
            ))}
          </ol>
        ) : (
          <ArticleSources items={items} />
        )}
      </VisaEditorialContent>
    </VisaAuthoritySectionShell>
  )
}

type FeesAndTimelinesProps = ContentVisaFeesAndTimelinesSection & {
  sectionId: string
  headingId: string
}

function VisaFeesAndTimelinesSection({
  sectionId,
  headingId,
  title = "Fees and timelines",
  description,
  eyebrow,
  fees,
  timelines,
  footnote,
}: FeesAndTimelinesProps) {
  if (!fees.length && !timelines?.length) return null

  return (
    <VisaAuthoritySectionShell sectionId={sectionId} headingId={headingId} band>
      <VisaEditorialHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <VisaEditorialContent>
        {fees.length > 0 ? (
          <div className="visa-authority-table-wrap">
            <table className="visa-authority-table">
              <caption className="sr-only">Fees</caption>
              <tbody>
                {fees.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>
                      {row.value}
                      {row.note ? (
                        <span className="visa-authority-table__note"> {row.note}</span>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
        {timelines && timelines.length > 0 ? (
          <div className={cn("visa-authority-table-wrap", fees.length > 0 && "mt-6")}>
            <table className="visa-authority-table">
              <caption className="sr-only">Timelines</caption>
              <tbody>
                {timelines.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>
                      {row.value}
                      {row.note ? (
                        <span className="visa-authority-table__note"> {row.note}</span>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
        {footnote ? (
          <p className="visa-authority-footnote mt-4">{footnote}</p>
        ) : null}
      </VisaEditorialContent>
    </VisaAuthoritySectionShell>
  )
}

type GovernmentProcessProps = ContentVisaGovernmentProcessSection & {
  sectionId: string
  headingId: string
  processAriaLabel?: string
}

function VisaGovernmentProcessSection({
  sectionId,
  headingId,
  title = "Government application steps",
  description,
  eyebrow,
  steps,
  processAriaLabel = "Government visa application steps",
}: GovernmentProcessProps) {
  if (!steps.length) return null

  return (
    <VisaAuthoritySectionShell sectionId={sectionId} headingId={headingId}>
      <VisaEditorialHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <VisaEditorialContent>
        <VisaTimeline steps={steps} ariaLabel={processAriaLabel} />
      </VisaEditorialContent>
    </VisaAuthoritySectionShell>
  )
}

type PitfallsProps = ContentVisaPitfallsSection & {
  sectionId: string
  headingId: string
}

function PitfallList({
  heading,
  items,
}: {
  heading: string
  items: NonNullable<ContentVisaPitfallsSection["rejections"]>
}) {
  return (
    <div>
      <h3 className="visa-authority-subheading">{heading}</h3>
      <ol className="visa-authority-list visa-authority-list--ordered">
        {items.map((item) => (
          <li key={item.title}>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
            {item.remedy ? <p className="visa-authority-list__remedy">{item.remedy}</p> : null}
          </li>
        ))}
      </ol>
    </div>
  )
}

function VisaPitfallsSection({
  sectionId,
  headingId,
  title = "Rejections and common mistakes",
  description,
  eyebrow,
  rejections,
  mistakes,
}: PitfallsProps) {
  if (!rejections?.length && !mistakes?.length) return null

  return (
    <VisaAuthoritySectionShell sectionId={sectionId} headingId={headingId} band>
      <VisaEditorialHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <VisaEditorialContent className="flex flex-col gap-8">
        {rejections?.length ? (
          <PitfallList heading="Common rejection reasons" items={rejections} />
        ) : null}
        {mistakes?.length ? (
          <PitfallList heading="Common mistakes" items={mistakes} />
        ) : null}
      </VisaEditorialContent>
    </VisaAuthoritySectionShell>
  )
}

type ComplianceProps = ContentVisaComplianceSection & {
  sectionId: string
  headingId: string
}

function VisaComplianceSection({
  sectionId,
  headingId,
  title = "After approval: compliance",
  description,
  eyebrow,
  items,
}: ComplianceProps) {
  if (!items.length) return null

  return (
    <VisaAuthoritySectionShell sectionId={sectionId} headingId={headingId}>
      <VisaEditorialHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <VisaEditorialContent>
        <ul className="visa-authority-list">
          {items.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </VisaEditorialContent>
    </VisaAuthoritySectionShell>
  )
}

type LegalBoundariesProps = ContentVisaLegalBoundariesSection & {
  sectionId: string
  headingId: string
}

function VisaLegalBoundariesSection({
  sectionId,
  headingId,
  title = "Tax and legal boundaries",
  description,
  eyebrow,
  content,
  disclaimer,
}: LegalBoundariesProps) {
  const paragraphs = Array.isArray(content) ? content : [content]
  if (!paragraphs.some(Boolean)) return null

  return (
    <VisaAuthoritySectionShell sectionId={sectionId} headingId={headingId} band>
      <VisaEditorialHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <VisaEditorialContent>
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="visa-authority-prose">
            {paragraph}
          </p>
        ))}
        {disclaimer ? <p className="visa-authority-disclaimer">{disclaimer}</p> : null}
      </VisaEditorialContent>
    </VisaAuthoritySectionShell>
  )
}

type EntityGlossaryProps = ContentVisaEntityGlossarySection & {
  sectionId: string
  headingId: string
}

function VisaEntityGlossarySection({
  sectionId,
  headingId,
  title = "Key terms",
  description,
  eyebrow,
  entries,
}: EntityGlossaryProps) {
  if (!entries.length) return null

  return (
    <VisaAuthoritySectionShell sectionId={sectionId} headingId={headingId}>
      <VisaEditorialHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <VisaEditorialContent>
        <dl className="visa-entity-glossary">
          {entries.map((entry) => (
            <div key={entry.term} className="visa-entity-glossary__entry">
              <dt>{entry.term}</dt>
              <dd>
                {entry.definition}
                {entry.synonyms?.length ? (
                  <span className="visa-entity-glossary__synonyms">
                    {" "}
                    Also known as: {entry.synonyms.join(", ")}
                  </span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </VisaEditorialContent>
    </VisaAuthoritySectionShell>
  )
}

type PracticeInsightsProps = ContentVisaPracticeInsightsSection & {
  sectionId: string
  headingId: string
}

function VisaPracticeInsightsSection({
  sectionId,
  headingId,
  title = "What we see in practice",
  description,
  eyebrow,
  insights,
}: PracticeInsightsProps) {
  if (!insights.length) return null

  return (
    <VisaAuthoritySectionShell sectionId={sectionId} headingId={headingId} band>
      <VisaEditorialHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <VisaEditorialContent>
        <ul className="visa-authority-list">
          {insights.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </VisaEditorialContent>
    </VisaAuthoritySectionShell>
  )
}

type EmbassyVarianceProps = ContentVisaEmbassyVarianceTableSection & {
  sectionId: string
  headingId: string
}

function EmbassyVarianceRowCell({ row }: { row: ContentEmbassyVarianceRow }) {
  const name = row.href ? (
    <Link href={row.href} className={editorialLinkClass}>
      {row.embassyName}
    </Link>
  ) : (
    row.embassyName
  )

  return (
    <tr>
      <th scope="row">{name}</th>
      <td>{row.visaFee ?? "N/A"}</td>
      <td>{row.bankStatementMonths ?? "N/A"}</td>
      <td>{row.insuranceRequired ?? "N/A"}</td>
      <td>{row.notes ?? "N/A"}</td>
    </tr>
  )
}

function VisaEmbassyVarianceTableSection({
  sectionId,
  headingId,
  title = "Embassy requirements at a glance",
  description,
  eyebrow,
  rows,
  footnote,
}: EmbassyVarianceProps) {
  if (!rows.length) return null

  return (
    <VisaAuthoritySectionShell sectionId={sectionId} headingId={headingId}>
      <VisaEditorialHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <VisaEditorialContent>
        <div className="visa-authority-table-wrap visa-authority-table-wrap--scroll">
          <table className="visa-authority-table visa-authority-table--embassy">
            <caption className="sr-only">Embassy requirement variance</caption>
            <thead>
              <tr>
                <th scope="col">Embassy</th>
                <th scope="col">Visa fee</th>
                <th scope="col">Bank statements</th>
                <th scope="col">Insurance</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <EmbassyVarianceRowCell key={row.embassyId} row={row} />
              ))}
            </tbody>
          </table>
        </div>
        {footnote ? <p className="visa-authority-footnote mt-4">{footnote}</p> : null}
      </VisaEditorialContent>
    </VisaAuthoritySectionShell>
  )
}

type DecisionGuidesProps = ContentVisaDecisionGuidesSection & {
  sectionId: string
  headingId: string
}

function VisaDecisionGuidesSection({
  sectionId,
  headingId,
  title = "Quick decisions",
  description,
  eyebrow,
  guides,
}: DecisionGuidesProps) {
  if (!guides.length) return null

  return (
    <VisaAuthoritySectionShell sectionId={sectionId} headingId={headingId}>
      <VisaEditorialHeading
        id={headingId}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <VisaEditorialContent className="flex flex-col gap-8">
        {guides.map((guide) => (
          <article
            key={guide.id}
            id={`${sectionId}-${guide.id}`}
            aria-labelledby={`${sectionId}-${guide.id}-question`}
          >
            <h3 id={`${sectionId}-${guide.id}-question`} className="visa-authority-subheading">
              {guide.question}
            </h3>
            {guide.intro ? <p className="visa-authority-prose">{guide.intro}</p> : null}
            <ul className="visa-authority-list">
              {guide.branches.map((branch) => (
                <li key={branch.label}>
                  <strong>{branch.label}</strong>
                  <p>{branch.outcome}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </VisaEditorialContent>
    </VisaAuthoritySectionShell>
  )
}

export {
  VisaOfficialSourcesSection,
  VisaFeesAndTimelinesSection,
  VisaGovernmentProcessSection,
  VisaPitfallsSection,
  VisaComplianceSection,
  VisaLegalBoundariesSection,
  VisaEntityGlossarySection,
  VisaPracticeInsightsSection,
  VisaEmbassyVarianceTableSection,
  VisaDecisionGuidesSection,
}
