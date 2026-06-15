import { Container } from "@/components/layout/container"
import { blogIndexSectionIds } from "@/lib/blog/section-ids"
import { cn } from "@/lib/utils"

type BlogIndexHeroProps = {
  eyebrow: string
  title: string
  overview: string
  className?: string
}

function BlogIndexHero({ eyebrow, title, overview, className }: BlogIndexHeroProps) {
  return (
    <header
      id={blogIndexSectionIds.hero}
      aria-labelledby={blogIndexSectionIds.heroHeading}
      className={cn("blog-index__intro", className)}
    >
      <Container>
        <p className="blog-index__eyebrow">{eyebrow}</p>
        <h1 id={blogIndexSectionIds.heroHeading} className="blog-index__title">
          {title}
        </h1>
        <p className="blog-index__subtitle">{overview}</p>
      </Container>
    </header>
  )
}

export { BlogIndexHero }
