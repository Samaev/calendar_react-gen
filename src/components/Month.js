import React from 'react'
import Day from './Day';

export default function Month({month}) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, index)=>(
        <React.Fragment key={index}>
          {row.map((day, ind)=>(
            <Day day={day} key={ind} rowInd={index}/>
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}
