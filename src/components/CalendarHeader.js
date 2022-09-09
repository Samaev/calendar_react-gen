import dayjs from "dayjs";
import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import logo from "../images/calen-logo.png";
import DatePicker from "react-date-picker";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

export default function CalendarHeader() {
  const {monthIndex, setMonthIndex, setShowEventModal, daySelected} = useContext(Context);
  const [value, onChange] = useState(new Date());

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  const handleNowadays = () => {
    setMonthIndex(dayjs().month());
  }

  return (
    <header className="px-4 py-2 flex items-center">
      <button
        className="border p-2 rounded-full items-center bg-green-600 text-white font-bold shadow-md hover:shadow"
        onClick={()=>setShowEventModal(true)}
      >
        +
      </button>
      <img src={logo} alt="calendar logo" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-green-500 font-bold">Calendar</h1>
      <button
        onClick={handleNowadays}
       className="border rounded py-2 px-4 mr-5">Today</button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-green-600 mx-2">
            chevron_left
        </span>
        </button>
        <h2 className="ml-4 text-xl text-green-500 font-bold">{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</h2>
        <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-green-600 mx-2">
            chevron_right
        </span>
      </button>
      <DatePicker onChange={onChange} value={value} />
    </header>
  );
}
