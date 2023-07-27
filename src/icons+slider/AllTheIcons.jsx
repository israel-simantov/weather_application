import React from 'react';
import { LuClock9 } from 'react-icons/lu';
import { BsFillCloudRainHeavyFill, BsFillSunFill, BsFillCloudFill, BsFillCloudRainFill, BsCloudDrizzleFill, BsCloudLightningRainFill, BsFillCloudLightningFill, BsFillCloudSnowFill, BsFillCloudSleetFill, BsFillSunriseFill, BsSunsetFill, BsCalendar3 } from 'react-icons/bs';
import { RiMoonClearFill } from 'react-icons/ri';
import { IoIosCloudyNight, IoIosPartlySunny } from 'react-icons/io';
import { FiWind } from 'react-icons/fi';
import { FaRegSnowflake, FaThermometerHalf } from 'react-icons/fa';
import { TbDropletFilled, TbArrowDownCircle } from 'react-icons/tb';
import { AiFillEye } from 'react-icons/ai';
import { PiWavesBold } from 'react-icons/pi';

const Icon = ({ name }) => {
  switch (name) {
    case 'clock':
      return <LuClock9 className='text-sm'/>;
    case 'sun':
      return <BsFillSunFill className='text-yellow-400 text-xl'/>;
    case 'cloud':
      return <BsFillCloudFill className='text-gray-200 text-xl'/>;
    case 'cloud-rain-heavy':
      return <BsFillCloudRainHeavyFill className='text-gray-300 text-xl'/>;
    case 'cloud-rain':
      return <BsFillCloudRainFill className='text-gray-300 text-xl'/>;
    case 'cloud-drizzle':
      return <BsCloudDrizzleFill className='text-gray-300 text-xl'/>;
    case 'cloud-lightning-rain':
      return <BsCloudLightningRainFill className='text-white text-xl'/>;
    case 'cloud-lightning':
      return <BsFillCloudLightningFill className='text-white text-xl'/>;
    case 'cloud-snow':
      return <BsFillCloudSnowFill className='text-white text-xl'/>;
    case 'cloud-sleet':
      return <BsFillCloudSleetFill className='text-white text-xl'/>;
    case 'sunrise':
      return <BsFillSunriseFill className='text-yellow-400 text-xl'/>;
    case 'sunset':
      return <BsSunsetFill className='text-yellow-400 text-xl'/>;
    case 'moon':
      return <RiMoonClearFill className='text-white text-xl'/>;
    case 'cloudy-night':
      return <IoIosCloudyNight className='text-white text-xl'/>;
    case 'wind':
      return <FiWind className='text-gray-300 text-xl'/>;
    case 'snowflake':
      return <FaRegSnowflake className='text-white text-xl'/>; 
    case 'calendar':
      return <BsCalendar3 className='text-xs mt-px'/>;
    case 'sun-top':
      return <BsFillSunFill className='text-white opacity-70 text-sm ml-2 mr-1'/>;
    case 'drop-top':
      return <TbDropletFilled className='text-white opacity-70 text-base ml-2 mr-1' />;
    case 'wind-top':
      return <FiWind className='text-white opacity-70 text-sm ml-2 mr-1'/>;
    case 'fl-temp-top':
      return <FaThermometerHalf className='text-white opacity-70 text-sm ml-2 mr-1' />;
    case 'eye-top':
      return <AiFillEye className='text-white opacity-70 text-sm ml-2 mr-1'/>;
    case 'humidity-top':
      return <PiWavesBold className='text-white opacity-70 text-sm ml-2 mr-1'/>;
    case 'SunAndCloud':
      return <div className='sun_cloud'><IoIosPartlySunny className='text-xl'/></div>;
    case 'sunrise-top':
      return <BsFillSunriseFill className='text-white opacity-70 text-sm ml-2 mr-1'/>;
    case 'sunset-top':
      return <BsSunsetFill className='text-white opacity-70 text-sm ml-2 mr-1'/>;
      
    default:
      return null;
  }
};

export default Icon;
