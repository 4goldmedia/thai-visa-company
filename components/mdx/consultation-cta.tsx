import { ArticleConsultationBand } from "@/components/articles/article-consultation-band"

type ConsultationCtaProps = {
  title?: string
  description?: string
}

/** Opt-in MDX consultation band  -  use sparingly in article bodies */
function ConsultationCta({ title, description }: ConsultationCtaProps) {
  return (
    <ArticleConsultationBand
      title={title}
      description={description}
    />
  )
}

export { ConsultationCta }
