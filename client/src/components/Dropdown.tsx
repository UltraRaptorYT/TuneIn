import React, { useState, useRef } from "react";

// Importing icons
import { Check, ChevronsUpDown } from "lucide-react";

// Importing UI Components
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DropdownProps {
    // dropdownOptions: DropdownOption[];
    dropdownOptions: any
    modalOpenStatus: boolean;
    selectedValue: string;
}

const Dropdown: React.FC<DropdownProps> = ({ dropdownOptions, modalOpenStatus, selectedValue }) => {
  const [open, setOpen] = useState<boolean>(modalOpenStatus);
  const [value, setValue] = useState(selectedValue);

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[300px] justify-between" // Adjusted width
          >
            {value
              ? dropdownOptions.find((options) => options.value === value)?.label
              : "Select framework..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[300px] p-0" // Adjusted width
          style={{ background: "white", color: "black" }}
        >
          <Command>
            <CommandInput
              className="w-full" // Adjusted width
              placeholder="Search framework..."
            />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {dropdownOptions.map((options) => (
                <CommandItem
                  key={options.value}
                  value={options.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === options.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {options.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Dropdown;
