import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getMonth } from '../utils/utils';

export default function SmallCalendar() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  
  useEffect(()=>{
    setCurrentMonth(getMonth(currentMonthIndex))
  }, [currentMonthIndex]);

  return (
    <div className='mt-9'>
        <p className="text-green-500 font-bold">
           Date Picker
        </p>
    </div>
  )
}
