"use client"

import { DatePickerControl } from "./DatePicker/DatePickerControl"
import { useState } from "react";

const ControlPanel = ({ onStartDateChange, onEndDateChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    onStartDateChange(date);
  }

  const handleEndDateChange = (date) => {
    setEndDate(date);
    onEndDateChange(date);
  }

  console.log(startDate, endDate);

  return (
    <div id="controlPanel" className="w-full h-fit flex flex-col md:flex-row justify-between">
        <div id="controlContainer" className="text-onBackground font-semibold text-3xl">PICK YOUR DATE RANGE</div>
        <div id="datePickersContainer" className="controlContainer flex w-full md:w-fit pt-4 md:pt-0 gap-4">
            <DatePickerControl mode="start" onDateChange={handleStartDateChange}/>
            <DatePickerControl mode="end" onDateChange={handleEndDateChange} />
        </div>
    </div>
  )
}

export default ControlPanel
