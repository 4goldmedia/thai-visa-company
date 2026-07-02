import type { ReactNode } from "react"

import "@/styles/legal-page.css"

type LegalDocumentProps = {
  children: ReactNode
}

type LegalIntroProps = {
  children: ReactNode
}

type LegalSectionProps = {
  title: string
  children: ReactNode
}

function LegalDocument({ children }: LegalDocumentProps) {
  return <div className="legal-document">{children}</div>
}

function LegalIntro({ children }: LegalIntroProps) {
  return <div className="legal-document__intro">{children}</div>
}

function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="legal-section">
      <h2 className="legal-section__heading">{title}</h2>
      <div className="legal-section__body">{children}</div>
    </section>
  )
}

export { LegalDocument, LegalIntro, LegalSection }
