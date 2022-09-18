import dayjs from "dayjs";
import React, { useContext, useEffect } from "react";
import { Context } from "../context/Context";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

export default function CalendarHeader() {
  const {
    monthIndex,
    setMonthIndex,
    setShowEventModal,
    setDaySelected,
    daySelected,
  } = useContext(Context);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  const handleNowadays = () => {
    setMonthIndex(dayjs().month());
  };
  const handleSmallCalendar = (event) => {
    const arrDate = new Date();
    const resDate = arrDate.getFullYear() * 12 + +arrDate.getMonth();
    const nowDate = event.target.value.toString().split("-");
    const resNow = nowDate[0] * 12 + +nowDate[1];
    setDaySelected(event.target.value);
    setMonthIndex(resNow - resDate + 7);
  };

  const handleTodayDate = () => {
    const date = new Date();
    const dateString =
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2);
    setDaySelected(dateString);
  };

  useEffect(() => {
    setDaySelected(Date());
    handleTodayDate();
  }, []);
  return (
    <header className="px-4 py-2 flex items-center">
      <button
        className="border p-2 rounded-full items-center bg-green-600 text-white font-bold shadow-md hover:shadow"
        onClick={() => setShowEventModal(true)}
      >
        +
      </button>
      <h1 className="mr-10 text-xl text-green-500 font-bold">Calendar</h1>
      <button
        onClick={handleNowadays}
        className="border rounded py-2 px-4 mr-5"
      >
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-green-600 mx-2">
          chevron_left
        </span>
      </button>
      <h2 className="ml-4 text-xl text-green-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-green-600 mx-2">
          chevron_right
        </span>
      </button>
      <input
        onChange={(e) => handleSmallCalendar(e)}
        value={daySelected}
        type="date"
      />
    </header>
  );
}
