import React from 'react';
import Icon from '../icons/AllTheIcons';


function WeeklyForcast() {
  let today=7;
  var days = {1:'Sun',2:'Mon',3:'Tue',4:'Wed',5:'Thu',6:'Fri',7:'Sat',8:'Sun',9:'Mon',10:'Tue',11:'Wed',12:'Thu',13:'Fri',14:'Sat'};

  for(let i=1; i<7;i++){
    days[i] = days[i+today]
  }



  return (
    <div>
      <div className='flex box-border mb-4 mx-auto h-fit w-11/12 bg-blue-700 bg-opacity-20 rounded-2xl'>
      <span className='absolute'><div className='flex pl-4 pt-2 text-xs mt-0.5 text-white text-opacity-70'><Icon name='calendar' /><p className='pl-1'>HOURLY FORCAST</p></div></span>
        <hr className='absolute h-px mt-8 ml-4 w-5/6 border-0 bg-white opacity-20' />
        <div className="Boxwheel text-white mt-9 mb-1.5 pl-4 grid gap-3.5">
          <div className='text-lg grid grid-flow-col auto-cols-max ustify-center items-center'>
            <var className=''>Today </var>
            <div className='absolute ml-24' ><Icon name='sun'/></div>
            
            <hr className='absolute mt-10 h-px w-5/6 border-0 bg-white opacity-20' />
          </div>
          <div className='text-lg grid grid-flow-col auto-cols-max ustify-center items-center'>
            <var className=''>{days[1]} </var>
            <div className='absolute ml-24' ><Icon name='snowflake'/></div>

            <hr className='absolute mt-9 h-px w-5/6 border-0 bg-white opacity-20' />
          </div>
          <div className='text-lg grid grid-flow-col auto-cols-max ustify-center items-center'>
            <var className=''>{days[2]}</var>
            <div className='absolute ml-24' ><Icon name='cloud' /></div>

            <hr className='absolute mt-9 h-px w-5/6 border-0 bg-white opacity-20' />
          </div>
          <div className='text-lg grid grid-flow-col auto-cols-max ustify-center items-center'>
            <var className=''>{days[3]}</var>
            <div className='absolute ml-24' ><Icon name='cloud-drizzle' /></div>

            <hr className='absolute mt-9 h-px w-5/6 border-0 bg-white opacity-20' />
          </div>
          <div className='text-lg grid grid-flow-col auto-cols-max ustify-center items-center'>
            <var className=''>{days[4]}</var>
            <div className='absolute ml-24' ><Icon name='cloud-rain-heavy' /></div>

            <hr className='absolute mt-9 h-px w-5/6 border-0 bg-white opacity-20' />
          </div>
          <div className='text-lg grid grid-flow-col auto-cols-max ustify-center items-center'>
            <var className=''>{days[5]}</var>
            <div className='absolute ml-24' ><Icon name='cloud-sleet' /></div>
            
            <hr className='absolute mt-9 h-px w-5/6 border-0 bg-white opacity-20' />
          </div>
          <div className='text-lg grid grid-flow-col auto-cols-max ustify-center items-center'>
            <var className=''>{days[6]}</var>
            <div className='absolute ml-24' ><Icon name='cloud-snow' /></div>

          </div>
        </div>
    </div>
    </div>
  )
}

export default WeeklyForcast
