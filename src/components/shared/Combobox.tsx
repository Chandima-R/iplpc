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

import {useState} from "react";
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {useFormContext} from "react-hook-form";

type ComboboxOption = {
    label: string
    value: string
}
interface ComboboxProps {
    options: ComboboxOption[];
    label?: string;
    name: string;
    required?: boolean;
    description?: string;
    placeholder?: string;
    onSelectTask?: (selectedTaskId: string) => void
}

export function Combobox({options, name, required, label, description, placeholder, onSelectTask }: ComboboxProps) {
  const [open, setOpen] = useState(false)

    const { setValue } = useFormContext();
    const handleTaskSelect = (selectedValue: string) => {
        if (onSelectTask) {
            onSelectTask(selectedValue);
        }
        setValue(
            name,
            selectedValue
        );

    };


  return (
      <FormField
          name={name}
          render={({ field }) => (
              <FormItem>
                <FormLabel className={'capitalize text-sm font-normal'}>
                  {label}
                  {required && <span className="text-red-500"> *</span>}
                </FormLabel>
                <FormControl>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={open}
                          className="w-full max-w-[500px] justify-between font-normal text-slate-700 rounded-full"
                      >
                        {field?.value
                            ? options.find((option) => option.value === field.value)?.label
                            : 'Select a ' + placeholder  ?? 'Select an option'}
                        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[500px] p-0 h-full max-h-[340px] overflow-y-auto scroll-smooth">
                      <Command>
                        <CommandInput placeholder={`Search ${placeholder}`} className="h-9" />
                        <CommandEmpty>No {placeholder} found.</CommandEmpty>
                        <CommandGroup>
                          {options.map((option) => (
                              <CommandItem
                                  key={option.value}
                                  value={option.value}
                                  onSelect={(currentValue) => {
                                    setValue(field?.name, option.value)
                                    setOpen(false)
                                    handleTaskSelect(currentValue);
                                  }}
                              >
                                {option.label}
                                <CheckIcon
                                    className={cn(
                                        "ml-auto h-4 w-4",
                                        field.value === option.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                              </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormDescription>
                  {description}
                </FormDescription>
                <FormMessage className={'text-xs font-normal'}/>
              </FormItem>
          )}
      />
  )
}
