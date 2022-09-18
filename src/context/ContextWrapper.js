import React, { useEffect, useReducer, useCallback } from "react";
import { Context } from "./Context";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import dayjs from "dayjs";

const savedEventReducer = (state, { type, payload }) => {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((event) => {
        return event.id === payload.id ? payload : event;
      });
    case "delete":
      return state.filter((event) => event.id !== payload.id);
    default:
      throw new Error();
  }
};

const initEvents = () => {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
};

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [searchParams, setSearchParams] = useSearchParams();

  const currentMonth =
    searchParams.get("monthIndex") || `${new Date().getMonth() + 1}`;
  console.log(currentMonth);
  const [savedEvents, dispatchCallEvent] = useReducer(
    savedEventReducer,
    [],
    initEvents
  );

  const followDate = useCallback(
    (action) => {
      switch (action) {
        case "future":
          setMonthIndex(currentMonth + 1);
          setSearchParams({ monthIndex: `${monthIndex}` });

          break;
        case "past":
          setMonthIndex(currentMonth - 1);
          setSearchParams({ monthIndex: `${monthIndex}` });

          break;
        case "now":
          setSearchParams({});
          break;
        default:
          break;
      }
    },
    [monthIndex]
  );

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);
  useEffect(() => {
    setMonthIndex(currentMonth - 1);
  }, [currentMonth]);
  return (
    <Context.Provider
      value={{
        monthIndex,
        setMonthIndex,
        showEventModal,
        setShowEventModal,
        daySelected,
        setDaySelected,
        dispatchCallEvent,
        savedEvents,
        selectedEvent,
        setSelectedEvent,
        followDate,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
