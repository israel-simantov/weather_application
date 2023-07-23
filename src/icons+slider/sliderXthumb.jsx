import React from 'react'

const SliderXthumb = ({minpoint, maxpoint}) => {
    
  return (
        <input
        type="range"
        min={0}
        max={130}
        minpoint={minpoint+75}
        maxpoint={maxpoint+75}
        className='slider sliderThumb-X'
    />
  )
}

export default SliderXthumb





