import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  date: Date;
  setDate: (date: Date) => void;
  title: string;
}

const DateTimePicker: React.FC<Props> = ({ date, setDate, title }) => {
  return (
    <div className="text-start mx-4">
      <p className="font-md text-white">{title}</p>
      <DatePicker
        selected={date}
        value={date.toISOString()}
        onChange={(date: Date) => setDate(date)}
        placeholderText="Select Date"
        className="flex justify-between w-[200px] p-2 h-10 bg-dropdown-bg rounded-md text-gray-200 border-2"
      />
    </div>
  );
};

export default DateTimePicker;
