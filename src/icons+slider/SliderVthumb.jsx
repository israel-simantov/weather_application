import React from 'react';

const SliderVthumb = ({value, minpoint, maxpoint}) => {
  
  return (
    <input
      type="range"
      min={0}
      max={130}
      value={value+75}
      minpoint={minpoint+75}
      maxpoint={maxpoint+75}
      className='slider sliderThumb-V'
      
    />
  );
};


export default SliderVthumb;
