import React from "react";

export const Context = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCallEvent: ({ type, payload }) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  followDate: (action)=>{},
  setSearchParams: ()=>{},
});
