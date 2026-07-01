"use client"

import * as React from "react"

import { countryNames } from "@/lib/forms/countries"
import { cn } from "@/lib/utils"

const MAX_LIST_ITEMS = 80

type CountrySelectProps = {
  id?: string
  name: string
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  placeholder?: string
  className?: string
  listClassName?: string
  "aria-describedby"?: string
  "aria-invalid"?: boolean
}

function CountrySelect({
  id,
  name,
  value,
  onChange,
  disabled = false,
  placeholder = "Select your nationality",
  className,
  listClassName,
  "aria-describedby": ariaDescribedBy,
  "aria-invalid": ariaInvalid,
}: CountrySelectProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const containerRef = React.useRef<HTMLDivElement>(null)
  const generatedId = React.useId()
  const inputId = id ?? generatedId
  const listId = `${inputId}-listbox`

  const filteredCountries = React.useMemo(() => {
    const term = search.trim().toLowerCase()
    const matches = term
      ? countryNames.filter((country) =>
          country.toLowerCase().includes(term),
        )
      : countryNames

    return matches.slice(0, MAX_LIST_ITEMS)
  }, [search])

  function closeList() {
    setIsOpen(false)
    setSearch("")
  }

  function handleSelect(country: string) {
    onChange(country)
    closeList()
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const next = event.target.value
    setSearch(next)
    setIsOpen(true)

    if (!next.trim()) {
      onChange("")
    }
  }

  function handleFocus() {
    if (disabled) return
    setSearch(value)
    setIsOpen(true)
  }

  function handleBlur() {
    window.setTimeout(() => {
      if (!containerRef.current?.contains(document.activeElement)) {
        closeList()
      }
    }, 120)
  }

  React.useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        closeList()
      }
    }

    document.addEventListener("mousedown", handlePointerDown)
    return () => document.removeEventListener("mousedown", handlePointerDown)
  }, [])

  const inputValue = isOpen ? search : value

  return (
    <div ref={containerRef} className="relative">
      <input
        id={inputId}
        name={name}
        type="text"
        role="combobox"
        aria-expanded={isOpen}
        aria-controls={isOpen ? listId : undefined}
        aria-autocomplete="list"
        aria-describedby={ariaDescribedBy}
        aria-invalid={ariaInvalid}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        disabled={disabled}
        placeholder={placeholder}
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleInputChange}
        className={className}
      />

      {isOpen && filteredCountries.length > 0 ? (
        <ul
          id={listId}
          role="listbox"
          className={cn(
            "country-select__list absolute z-20 mt-1 max-h-56 w-full overflow-y-auto border bg-white py-1 shadow-sm",
            listClassName,
          )}
        >
          {filteredCountries.map((country) => (
            <li
              key={country}
              role="option"
              aria-selected={country === value}
              className="country-select__option cursor-pointer px-3 py-2 text-[15px] leading-snug text-foreground hover:bg-muted/40 sm:text-sm"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => handleSelect(country)}
            >
              {country}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export { CountrySelect }
