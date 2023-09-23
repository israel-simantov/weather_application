import React from "react";
import { LuClock9 } from "react-icons/lu";
import {
  BsFillCloudRainHeavyFill,
  BsFillSunFill,
  BsFillCloudFill,
  BsFillCloudRainFill,
  BsCloudDrizzleFill,
  BsCloudLightningRainFill,
  BsFillCloudLightningFill,
  BsFillCloudSnowFill,
  BsFillCloudSleetFill,
  BsFillSunriseFill,
  BsSunsetFill,
  BsCalendar3,
} from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";
import { IoIosCloudyNight, IoIosPartlySunny } from "react-icons/io";
import { FiWind } from "react-icons/fi";
import { FaRegSnowflake, FaThermometerHalf } from "react-icons/fa";
import { TbDropletFilled} from "react-icons/tb";
import { AiFillEye } from "react-icons/ai";
import { PiWavesBold } from "react-icons/pi";
import { Day } from '../DayOrNight';


const Icon = ({ name }) => {
  switch (name) {
    case 1000:
      return <RiMoonClearFill className="text-white text-xl" />;
    case 1001:
      return <BsFillSunFill className="text-yellow-400 text-xl" />;
    case 2000:
      return (
        <div className="sun_cloud mt-1.5">
          <IoIosPartlySunny className="text-xl -mt-1" />
        </div>
      );
    case 2001:
      return <IoIosCloudyNight className="text-white text-xl" />;

    case 0:
    case 1:
      if (Day) {
        return <BsFillSunFill className="text-yellow-400 text-xl" />;
      } else if (!Day) {
        return <RiMoonClearFill className="text-white text-xl" />;
      }
    case 2:
      if (Day) {
        return (
          <div className="sun_cloud mt-1.5">
            <IoIosPartlySunny className="text-xl -mt-1" />
          </div>
        );
      } else if (!Day) {
        return <IoIosCloudyNight className="text-white text-xl" />;
      }
    case "sun":
      return <BsFillSunFill className="text-yellow-400 text-xl" />;
    case "SunAndCloud":
      return (
        <div className="sun_cloud">
          <IoIosPartlySunny className="text-xl" />
        </div>
      );
    case 3:
    case 45:
    case 48:
    case "cloud":
      return <BsFillCloudFill className="text-gray-200 text-xl mt-px" />;
    case 55:
    case 65:
    case 81:
    case 82:
    case "cloud-rain-heavy":
      return <BsFillCloudRainHeavyFill className="text-gray-300 text-xl" />;
    case 53:
    case 63:
    case 80:
    case "cloud-rain":
      return <BsFillCloudRainFill className="text-gray-300 text-xl" />;
    case 51:
    case 61:
    case "cloud-drizzle":
      return <BsCloudDrizzleFill className="text-gray-300 text-xl" />;
    case 95:
    case 96:
    case 99:
    case "cloud-lightning-rain":
      return <BsCloudLightningRainFill className="text-white text-xl" />;
    case "cloud-lightning":
      return <BsFillCloudLightningFill className="text-white text-xl" />;
    case 71:
    case 77:
    case 85:
    case 86:
    case "cloud-snow":
      return <BsFillCloudSnowFill className="text-white text-xl" />;
    case 56:
    case 57:
    case 66:
    case 67:
    case "cloud-sleet":
      return <BsFillCloudSleetFill className="text-white text-xl" />;
    case "moon":
      return <RiMoonClearFill className="text-white text-xl" />;
    case "cloudy-night":
      return <IoIosCloudyNight className="text-white text-xl" />;
    case "wind":
      return <FiWind className="text-gray-300 text-xl" />;
    case 75:
    case 73:
    case "snowflake":
      return <FaRegSnowflake className="text-white text-xl" />;

    case "sunrise":
      return <BsFillSunriseFill className="text-yellow-400 text-xl" />;
    case "sunset":
      return <BsSunsetFill className="text-yellow-400 text-xl" />;
    case "calendar-top":
      return <BsCalendar3 className="text-xs mt-px" />;
    case "clock-top":
      return <LuClock9 className="text-sm" />;
    case "sun-top":
      return (
        <BsFillSunFill className="text-white opacity-70 text-sm ml-2 mr-1" />
      );
    case "drop-top":
      return (
        <TbDropletFilled className="text-white opacity-70 text-base ml-2 mr-1" />
      );
    case "wind-top":
      return <FiWind className="text-white opacity-70 text-sm ml-2 mr-1" />;
    case "fl-temp-top":
      return (
        <FaThermometerHalf className="text-white opacity-70 text-sm ml-2 mr-1" />
      );
    case "eye-top":
      return <AiFillEye className="text-white opacity-70 text-sm ml-2 mr-1" />;
    case "humidity-top":
      return (
        <PiWavesBold className="text-white opacity-70 text-sm ml-2 mr-1" />
      );
    case "sunrise-top":
      return (
        <BsFillSunriseFill className="text-white opacity-70 text-sm ml-2 mr-1" />
      );
    case "sunset-top":
      return (
        <BsSunsetFill className="text-white opacity-70 text-sm ml-2 mr-1" />
      );

    default:
      return null;
  }
};

export default Icon;
