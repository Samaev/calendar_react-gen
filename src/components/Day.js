import React, { useContext, useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Context } from '../context/Context';

export default function Day({day}) {
  const [dayEvents, setDayEvents] = useState([]);
  const {setDaySelected, setShowEventModal, savedEvents, setSelectedEvent} = useContext(Context);
  
  useEffect(() => {
    const events = savedEvents.filter(
      (evt) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [savedEvents, day]);

  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? 'bg-green-600 text-white rounded-full w-7' : "";
  }

  return (
    <div className='border border-gray-200 flex flex-col'>
        <header className='flex flex-col items-center'>
          <p className="text-sm mt-1">
            {day.format('ddd').toUpperCase()}
          </p>
          <p 
            className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}
            >
           {day.format('DD')}
          </p>
        </header>
        <div
          className="flex-1 cursor-pointer"
          onClick={()=>{
            setShowEventModal(true);
            setDaySelected(day);
          }}
        >
          {dayEvents.map((event, index)=>(
            <div
              className="bg-green-200 p-1 mr-3 text-sm rounded mb-1 truncate"
              key={index}
              onClick={()=>setSelectedEvent(event)}
            >
              {event.title}
            </div>
          ))}
        </div>
    </div>
  )
}
