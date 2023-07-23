import React from 'react'

function Header ()  {
  return (
    <div className="flex flex-col justify-center items-center w-screen mt-20 mb-16 text-white">
      <var data-current-location className="text-3xl font-normal">Ramot</var>
      <span data-current-temp className="text-8xl font-extralight"><var>30</var><span className='text-8xl ml-3'>&deg;</span></span>
      <var data-current-condition className="text-xl font-normal">clear</var>
      <h1 className="text-xl font-normal">H:<var data-high-temp-today>35</var><span className='text-xl ml-1'>&deg;</span> L:<var data-low-temp-today>20</var><span className='text-xl ml-1'>&deg;</span></h1>
    </div>
  )
}

export default Header

