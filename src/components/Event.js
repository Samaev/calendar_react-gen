import React, { useContext, useState } from "react";
import { Context } from "../context/Context";

export default function Event() {
  const {
    setShowEventModal,
    daySelected,
    setDaySelected,
    dispatchCallEvent,
    selectedEvent,
    setSelectedEvent,
  } = useContext(Context);
  const [timeStamp, setTimeStamp] = useState("12-00");

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    const calendarEvent = {
      title,
      description,
      timeStamp: timeStamp,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (title.length === 0) {
      return;
    }
    if (selectedEvent) {
      dispatchCallEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCallEvent({ type: "push", payload: calendarEvent });
    }
    setShowEventModal(false);
    setSelectedEvent(null);
  };

  return (
    <div className="h-screen w-full fixed top-0 flex justify-center items-center">
      <form action="/" className="bg-white rounded-lg shadow-2xl w-1/4">
        <div className="bg-green-100 px-4 pu-2 flex justify-between items-center">
          {title.length === 0 ? (
            <p>Add new idea item</p>
          ) : (
            <p>Edit idea item</p>
          )}
          <div>
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCallEvent({ type: "delete", payload: selectedEvent });
                  setShowEventModal(false);
                  setSelectedEvent(null);
                }}
                className="material-icons-outlined text-green-800 cursor-pointer"
              >
                delete
              </span>
            )}
          </div>
          <button
            onClick={() => {
              setShowEventModal(false);
              setSelectedEvent(null);
            }}
          >
            <span className="material-icons-outlined text-green-800">
              close
            </span>
          </button>
        </div>
        <div className="p-3">
          <div>
            {selectedEvent && (
              <p>
                Created at {selectedEvent.timeStamp} on {selectedEvent.day}
              </p>
            )}
            <div>Title*</div>
            <input
              type="text"
              name="title"
              placeholder="Title goes here"
              value={title}
              required
              className="pt-3 border-0 text-green-600 text-xl font-semibold pb-2 w-full border-b-2 border-green-200 focus:outline-none focus:border-green-300"
              onChange={(event) => setTitle(event.target.value)}
            />
            {!title.length && (
              <p className="text-red-200 text-sm">Title musn`t be empty</p>
            )}
            <div>
              <textarea
                type="text"
                name="description"
                placeholder="Add description"
                value={description}
                className="pt-3 border-0 text-green-600 pb-2 w-full border-b-2 border-green-200 focus:outline-none focus:border-green-300"
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
            </div>
            <input
              type="date"
              value={daySelected}
              onChange={(event) => {
                setDaySelected(event.target.value);
              }}
            />
            <input
              type="time"
              value={timeStamp}
              onChange={(event) => setTimeStamp(event.target.value)}
            />
            <p>Begin time: {timeStamp}</p>
          </div>
        </div>
        <footer className="flex justify-end w-100 border-t p-5 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-green-300 hover:bg-green-400 px-3 py-3 rounded text-white"
          >
            {selectedEvent ? "Update" : "Save"}
          </button>
        </footer>
      </form>
    </div>
  );
}
