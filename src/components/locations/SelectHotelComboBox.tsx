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

interface HotelSelectComboBoxProps{
    hotels: Hotel[];
}

type Hotel = {
    id: number
    name: string
}

export function HotelSelectComboBox({hotels}: HotelSelectComboBoxProps) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full max-w-[400px] justify-between font-normal text-slate-700"
                >
                    {value
                        ? hotels?.find((hotel) => hotel?.name?.toLowerCase() === value)?.name
                        : "Select hotel..."}
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[400px] p-0 h-full max-h-[340px] overflow-y-auto scroll-smooth">
                <Command>
                    <CommandInput placeholder="Search hotel..." className="h-9" />
                    <CommandEmpty>No hotel found.</CommandEmpty>
                    <CommandGroup>
                        {hotels?.map((hotel) => (
                            <CommandItem
                                key={hotel.name}
                                value={hotel.name}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                            >
                                {hotel.name}
                                <CheckIcon
                                    className={cn(
                                        "ml-auto h-4 w-4",
                                        value === hotel.name?.toLowerCase() ? "opacity-100" : "opacity-0"
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
