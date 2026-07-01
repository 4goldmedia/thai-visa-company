import * as React from "react"

import {
  formErrorClass,
  formHintClass,
  formLabelClass,
  formLabelRequiredClass,
  formOptionalHintClass,
} from "@/lib/form-styles"
import { cn } from "@/lib/utils"

type FormFieldProps = {
  id: string
  label: string
  optional?: boolean
  required?: boolean
  hint?: string
  error?: string
  children: React.ReactNode
  className?: string
}

function FormField({
  id,
  label,
  optional = false,
  required = false,
  hint,
  error,
  children,
  className,
}: FormFieldProps) {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  const describedBy =
    [hintId, errorId].filter(Boolean).join(" ") || undefined

  return (
    <div className={cn("flex flex-col gap-2", className)} data-slot="form-field">
      <label htmlFor={id} className={formLabelClass}>
        {label}
        {required ? (
          <span className={formLabelRequiredClass} aria-hidden>
            {" "}
            *
          </span>
        ) : null}
        {optional ? (
          <span className={formOptionalHintClass}> (optional)</span>
        ) : null}
      </label>

      {React.isValidElement(children)
        ? React.cloneElement(
            children as React.ReactElement<{
              id?: string
              disabled?: boolean
              "aria-describedby"?: string
              "aria-invalid"?: boolean
            }>,
            {
              id,
              "aria-describedby": describedBy,
              "aria-invalid": error ? true : undefined,
            },
          )
        : children}

      {hint && !error ? (
        <p id={hintId} className={formHintClass}>
          {hint}
        </p>
      ) : null}

      {error ? (
        <p id={errorId} role="alert" className={formErrorClass}>
          {error}
        </p>
      ) : null}
    </div>
  )
}

export { FormField }
