import React from 'react'
import {LuClock9} from 'react-icons/lu'
import {BsFillSunFill} from 'react-icons/bs'
import {BsFillCloudFill} from 'react-icons/bs'
import {RiMoonClearFill} from 'react-icons/ri'
import {IoIosCloudyNight} from 'react-icons/io'
import {BsFillCloudRainHeavyFill} from 'react-icons/bs'
import {BsFillCloudRainFill} from 'react-icons/bs'
import {BsCloudDrizzleFill} from 'react-icons/bs'
import {BsCloudLightningRainFill} from 'react-icons/bs'
import {BsFillCloudLightningFill} from 'react-icons/bs'
import {BsFillCloudSnowFill} from 'react-icons/bs'
import {BsFillCloudSleetFill} from 'react-icons/bs'
import {FiWind} from 'react-icons/fi'
import {BsFillSunriseFill} from 'react-icons/bs'
import {BsSunsetFill} from 'react-icons/bs'
import {FaRegSnowflake} from 'react-icons/fa'
import SunAndCloud from '../icons/SunAndCloud';
// import HeavyRain from '../icons/HeavyRain'



function HourlyForcast() {
  let FullHour= 0;
  let sunrise='5:46';
  let sunset='19:46';
  let x =[];

  
  for(let i=0; i<24; i++){
      x[i] = FullHour+i
    
  }

  for(let i=0; i<24;i++){
    if(x[i]>=24){
      x[i]=x[i]-24;
    }
  }

  return (
    <div>
      <div className='flex box-border mx-auto h-36 w-11/12 bg-slate-700 bg-opacity-20 rounded-2xl'>
      <span className='absolute'><div className='flex pl-3 pt-2 text-xs  text-white text-opacity-70'><LuClock9 className='text-sm'/><p className='pl-1'>HOURLY FORCAST</p></div></span>
        <hr className='absolute h-px mt-7 w-11/12 border-0 bg-white text-opacity-100' />
        <div id='hourbox' class="text-white mt-5 grid grid-flow-col auto-cols-max gap-8 pl-4 overflow-x-auto ">
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>now</var><BsFillSunFill className='text-yellow-400 text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[0]}</var><BsFillCloudFill className='text-gray-200 text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[1]}</var><RiMoonClearFill className='text-white text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[2]}</var><SunAndCloud className='text-2xl mt-2 mb-2'/>  <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[3]}</var><IoIosCloudyNight className='text-white text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[4]}</var><BsFillCloudRainHeavyFill className='text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[5]}</var><BsFillCloudRainFill className='text-white text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[6]}</var><BsCloudDrizzleFill className='text-white text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[7]}</var><BsCloudLightningRainFill className='text-white text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[8]}</var><BsFillCloudLightningFill className='text-white text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[9]}</var><BsFillCloudSnowFill className='text-white text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[10]}</var><BsFillCloudSleetFill className='text-white text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[11]}</var><FiWind className='text-white text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[12]}</var><BsFillSunriseFill className='text-white text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[13]}</var><BsSunsetFill className='text-white text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[14]}</var><FaRegSnowflake className='text-white text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[15]}</var><BsFillSunFill className='text-yellow-400 text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[16]}</var><BsFillSunFill className='text-yellow-400 text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[17]}</var><BsFillSunFill className='text-yellow-400 text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[18]}</var><BsFillSunFill className='text-yellow-400 text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[19]}</var><BsFillSunFill className='text-yellow-400 text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[20]}</var><BsFillSunFill className='text-yellow-400 text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[21]}</var><BsFillSunFill className='text-yellow-400 text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[22]}</var><BsFillSunFill className='text-yellow-400 text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{x[23]}</var><BsFillSunFill className='text-yellow-400 text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{sunrise}</var><BsFillSunFill className='text-yellow-400 text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
          <div className='flex flex-col justify-center items-center'><var className='text-sm'>{sunset}</var><BsFillSunFill className='text-yellow-400 text-2xl mt-2 mb-2'/> <p className='text-lg'><var>31</var><span className='ml-0.5 '>&deg;</span></p></div>
        </div>
    </div>
    </div>
  )
}

export default HourlyForcast

