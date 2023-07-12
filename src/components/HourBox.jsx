import React from 'react'
import {LuClock9} from 'react-icons/lu'

function HourBox() {
  return (
    <div className='flex box-border mx-auto h-36 w-11/12 bg-sky-900 bg-opacity-20 rounded-2xl'>
      <span className='flex pl-3 pt-2 text-xs  text-white text-opacity-75'><LuClock9 className='mt-px'/><p className='pl-1'>HOURLY FORCAST</p></span>
        <hr className="h-1 my-8 bg-white border-0" />
    </div>
  )
}

export default HourBox
