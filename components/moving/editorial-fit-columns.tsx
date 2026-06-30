import { cn } from "@/lib/utils"

type EditorialFitColumnsProps = {
  greatIf: ReadonlyArray<string>
  notIdealIf: ReadonlyArray<string>
  greatTitle?: string
  notIdealTitle?: string
  className?: string
}

function EditorialFitColumns({
  greatIf,
  notIdealIf,
  greatTitle = "Great if…",
  notIdealTitle = "Not ideal if…",
  className,
}: EditorialFitColumnsProps) {
  return (
    <div className={cn("moving-fit-columns", className)}>
      <section
        className="moving-fit-columns__column moving-fit-columns__column--positive"
        aria-label={greatTitle}
      >
        <h3 className="moving-fit-columns__title">{greatTitle}</h3>
        <ul className="moving-fit-columns__list">
          {greatIf.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section
        className="moving-fit-columns__column moving-fit-columns__column--caution"
        aria-label={notIdealTitle}
      >
        <h3 className="moving-fit-columns__title">{notIdealTitle}</h3>
        <ul className="moving-fit-columns__list">
          {notIdealIf.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export { EditorialFitColumns }
export type { EditorialFitColumnsProps }
