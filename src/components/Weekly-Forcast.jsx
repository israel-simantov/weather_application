import React, {useEffect} from 'react';
import Icon from '../icons+slider/AllTheIcons';



function WeeklyForcast() {
  let mintempthisweek, maxtempthisweek, currenttemp;

  mintempthisweek = 20;
  maxtempthisweek = 36;
  currenttemp = 31;

  var Divs = []

  for(let i=0; i<7;i++){
    Divs[i]=i
  }

  let today=5;
  var days = {1:'Sun',2:'Mon',3:'Tue',4:'Wed',5:'Thu',6:'Fri',7:'Sat',8:'Sun',9:'Mon',10:'Tue',11:'Wed',12:'Thu',13:'Fri',14:'Sat'};
  var CurrentDays = []

  for(let i=0; i<7;i++){
    CurrentDays[i] = days[i+today]
    CurrentDays[0] = 'Today'

  }
  var IconCode = [1,2,1,2,3,1,55]

  var MinTemp = [23, 24, 27, 30, 28, 27, 26]

  var MaxTemp = [32, 33, 37, 38, 34, 33, 31]

  var precentMinTemp = []
  var precentMaxTemp = []

  for(let i=0; i<MinTemp.length;i++){
    let x
    x=(MinTemp[i]-(-75))
    x=Math.round(x/1.3)
    precentMinTemp[i]=x
  }

  for(let i=0; i<MaxTemp.length;i++){
    let x
    x=(MaxTemp[i]-(-75))
    x=Math.round(x/1.3)
    precentMaxTemp[i]=x
  }

  // style={{position: 'absolute', left: `${precentMinTemp[index]}%`, right: `${precentMaxTemp[index]}%`}}

  


  return (
    <div>
      <div className='boxColor parent-div relative flex box-border mb-4 mx-auto h-fit bg-black bg-opacity-5 rounded-2xl '>
      <span className='absolute'><div className='flex pl-4 pt-2 text-xs mt-0.5 text-white text-opacity-60'><Icon name='calendar-top' /><p className='font-medium pl-1'>7-DAY FORCAST</p></div></span>
        {/* <hr className='flex h-px mt-8 ml-4 w-9/10 border-0 bg-white opacity-20' /> */}
        <div className="text-white mt-8 mb-2 pl-4">


        {CurrentDays.map((day, index) => (
          <div key={index} id={index} className=''>
            <hr className='mt-1.5 h-px w-full border-0 bg-white opacity-20' />
            <span className='flex flex-row whitespace-nowrap mt-1.5  '>
            <h1   className='font-medium text-lg w-18 '>{CurrentDays[index]}</h1>
            <div  className='mt-0.5 w-16 '><Icon name={IconCode[index]}/></div>
            <h1   className='flex w-38 text-white text-opacity-70'>{MinTemp[index]}&deg;</h1>
            <div  className='sliderBg ml-43 mt-2 absolute' type='range'>
            <div  className='slider relative mr-2.5' min={0} max={100}   type='range'/>
            </div>
            <h1   className='flex' >{MaxTemp[index]}&deg;</h1>
            </span>
          </div>
        ))}

            
            
        
        </div>
    </div>
    </div>
  )
}

export default WeeklyForcast