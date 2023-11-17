"use client"

import React, {useState} from "react"

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
import { taskList } from './taskData'

interface TaskComboboxProps {
    onSelectTask: (selectedTaskId: number) => void
}

export function TaskCombobox({ onSelectTask}: TaskComboboxProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  const handleTaskSelect = (selectedValue: string) => {
    const selectedTask = taskList.find((task) => task.value === parseInt(selectedValue));
    onSelectTask(parseInt(selectedValue));
    setValue(selectedValue === value ? "" : selectedValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[400px] justify-between"
        >
          {value
            ? taskList.find((task) => task.value === parseInt(value))?.label
            : "Select task..."}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0 h-full max-h-[340px] overflow-y-auto scroll-smooth">
        <Command>
          <CommandInput placeholder="Search task..." className="h-9" />
          <CommandEmpty>No task found.</CommandEmpty>
          <CommandGroup>
            {taskList.map((task) => (
              <CommandItem
                key={task.value}
                value={task?.value?.toString()}
                onSelect={handleTaskSelect}
              >
                {task.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    parseInt(value) === task.value ? "opacity-100" : "opacity-0"
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
