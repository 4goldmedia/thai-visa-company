import { VisaPageTemplate } from "@/components/templates/visa-page"
import type { ResolvedVisaPageContext } from "@/lib/visas/routing"

type VisaPageViewProps = {
  context: ResolvedVisaPageContext
}

/** Server view for visa routes  -  delegates layout to `VisaPageTemplate` */
function VisaPageView({ context }: VisaPageViewProps) {
  return <VisaPageTemplate context={context} />
}

export { VisaPageView }
