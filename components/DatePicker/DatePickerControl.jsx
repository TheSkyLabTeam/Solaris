import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CalendarControl } from "@/components/DatePicker/calendarControl";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/DatePicker/popoverControl";

export function DatePickerControl({ mode, onDateChange }) {
  const [date, setDate] = useState(null);
  
  const formattedDate = date ? format(date, "yyyy-MM-dd") : null;

  useEffect(() => {
    if (formattedDate) {
      onDateChange(formattedDate);
    }
  }, [formattedDate]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal border-outline rounded-full text-[#D8D9C5]",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-[#D8D9C5]" />
          {date ? format(date, "PPP") : <span className="text-[#D8D9C5]">{mode === "start" ? "Start date" : "End date"}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <CalendarControl
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
