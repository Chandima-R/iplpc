
"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CheckIcon, ChevronDown } from "lucide-react"
import { getCountryDataList} from 'countries-list';


export function Combobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const countryOptions = getCountryDataList().map((country) => ({
    value: country.iso2,
    label: country.name,
  })).sort((a, b) => a.label.localeCompare(b.label));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full max-w-[400px] justify-between"
        >
          {value
            ? countryOptions.find((country) => country.label === value)?.label
            : "Select country..."}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0 h-full max-h-[340px] overflow-y-auto scroll-smooth">
        <Command>
          <CommandInput placeholder="Search country..." className="h-9" />
          <CommandEmpty>No country found.</CommandEmpty>
          <CommandGroup>
            {countryOptions.map((country) => (
              <CommandItem
                key={country.label}
                value={country.label}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                {country.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === country.label ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
