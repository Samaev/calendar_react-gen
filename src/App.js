import "./App.css";
import { getMonth } from "../src/utils/utils";
import Month from "./components/Month";
import CalendarHeader from "./components/CalendarHeader";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { Context } from "./context/Context";
import Event from "./components/Event";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(Context);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Fragment>
            {showEventModal && <Event />}
            <div className="h-screen flex flex-col">
              <CalendarHeader />
              <div className="flex flex-1">
                <Month month={currentMonth} />
              </div>
            </div>
          </React.Fragment>
        }
      />
    </Routes>
  );
}

export default App;
