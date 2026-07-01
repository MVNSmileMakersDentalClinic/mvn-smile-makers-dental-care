"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  formatAppointmentDateLabel,
  getAppointmentDateDisabledMatchers,
  parseAppointmentDate,
} from "@/lib/appointment-dates";
import { locationAllowedWeekdays } from "@/lib/data";

interface AppointmentDatePickerProps {
  value: string;
  onChange: (value: string) => void;
  locationId: string;
  disabled?: boolean;
}

export function AppointmentDatePicker({
  value,
  onChange,
  locationId,
  disabled = false,
}: AppointmentDatePickerProps) {
  const [open, setOpen] = useState(false);
  const selectedDate = parseAppointmentDate(value);
  const restrictedWeekdays = locationAllowedWeekdays[locationId];

  return (
    <div className="space-y-1">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            disabled={disabled || !locationId}
            className={cn(
              "w-full justify-start text-left font-normal",
              !value && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? formatAppointmentDateLabel(value) : "Pick a date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              if (!date) return;
              onChange(format(date, "yyyy-MM-dd"));
              setOpen(false);
            }}
            disabled={getAppointmentDateDisabledMatchers(locationId)}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {restrictedWeekdays && (
        <p className="text-xs text-muted-foreground">
          Only Wednesdays and Sundays can be selected for Hilsa.
        </p>
      )}
    </div>
  );
}
