import React from 'react'

function Header ()  {
  let location='Ramot'
  let currentTemp=27
  let condition='clear'
  let minTempToday=21
  let maxTempToday=35
  return (
    <div className="flex flex-col justify-center items-center w-screen mt-20 mb-16 text-white">
      <var data-current-location className="not-italic text-3xl font-normal">{location}</var>
      <span data-current-temp className="flex pl-5 text-8xl font-extralight">{currentTemp}<p className='text-7xl pt-1'>&deg;</p></span>
      <var data-current-condition className="not-italic text-xl font-normal">{condition}</var>
      <h1 className="text-xl font-normal">H:{maxTempToday}<span className='text-xl'>&deg;</span> L:{minTempToday}<span className='text-xl'>&deg;</span></h1>
    </div>
  )
}

export default Header

