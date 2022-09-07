import './App.css';
import { getMonth } from '../src/utils/utils';
import Sidebar from './components/Sidebar';
import Month from './components/Month';
import CalendarHeader from './components/CalendarHeader';
import React from 'react';
import { useState } from 'react';


function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  return (
   <React.Fragment>
    <div className="h-screen flex flex-columns">
      <CalendarHeader />
      <div className="flex flex-1">
        <Sidebar />
        <Month month={currentMonth}/>
      </div>
    </div>
   </React.Fragment>
  );
}

export default App;
