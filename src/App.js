import './App.css';
import { getMonth } from '../src/utils/utils';
import Sidebar from './components/Sidebar';
import Month from './components/Month';
import CalendarHeader from './components/CalendarHeader';
import React from 'react';


function App() {
  return (
   <React.Fragment>
    <div className="h-screen flex flex-columns">
      <CalendarHeader />
      <div className="flex flex-1">
        <Sidebar />
        <Month />
      </div>
    </div>
   </React.Fragment>
  );
}

export default App;
