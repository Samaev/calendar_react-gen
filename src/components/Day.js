import React from 'react'

export default function Day({day, rowInd}) {
  return (
    <div className='border border-gray-200 flex flex-col'>
      <p className="text-sm p-1 my-1 text-center">
        <header className='flex flex-col items-center'>
          {rowInd === 0 &&(<p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p>)}
          
           {day.format('DD')}
        </header>
       
      </p>
    </div>
  )
}
