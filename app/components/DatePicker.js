"use client";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function DatePicker({ selectedDate, onSelect }) {
  return (
    <div className="bg-white p-3 rounded shadow-sm">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={onSelect}
        fromDate={new Date()} // disable past dates
        disabled={{ before: new Date() }}
        weekStartsOn={0}
        captionLayout="dropdown-buttons"
        styles={{
          caption: { color: "#2b7a63", fontWeight: 600 },
          head_cell: { fontSize: "0.85rem", fontWeight: 600 },
          day_selected: {
            backgroundColor: "#2b7a63",
            color: "white",
          },
          day_today: {
            border: "1px solid #2b7a63",
          },
        }}
      />
    </div>
  );
}
