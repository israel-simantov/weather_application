import React from "react";
import { SunriseStemp, SunsetStemp } from "../RenderData.jsx";

function getCurrentTime() {
  const currentTime = new Date();
  return currentTime;
}
const currentTime = getCurrentTime();

var HourNow = currentTime.getHours();
var MinuteNow = currentTime.getMinutes();

const timeStampSunrise = SunriseStemp;
const sunriseTime = new Date(timeStampSunrise * 1000);
let sunriseTodayH = sunriseTime.getHours();
let sunriseTodayM = sunriseTime.getMinutes();

const timeStampSunset = SunsetStemp;
const sunsetTime = new Date(timeStampSunset * 1000);

let sunsetTodayH = sunsetTime.getHours();
let sunsetTodayM = sunsetTime.getMinutes();

let day;

if (HourNow > sunriseTodayH && HourNow < sunsetTodayH) {
  day = true;
} else if (HourNow < sunriseTodayH && HourNow >= 0) {
  day = false;
} else if (HourNow > sunsetTodayH && HourNow <= 24) {
  day = false;
} else if (HourNow === sunrise) {
  if (MinuteNow >= sunriseTodayM) {
    day = true;
  } else if (MinuteNow < sunriseTodayM) {
    day = false;
  }
} else if (HourNow === sunset) {
  if (MinuteNow >= sunsetTodayM) {
    day = true;
  } else if (MinuteNow < sunsetTodayM) {
    day = false;
  }
}



const Condition = ({ IconCode }) => {
  switch (IconCode) {
    case 0:
      if (day) {
        return "Sunny";
      } else if (!day) {
        return "Clear";
      } else {
        return "clear";
      }
    case 1:
      if (day) {
        return "Mostly Sunny";
      } else if (!day) {
        return "Mainly clear";
      } else {
        return "Mainly clear";
      }

    case 2:
      return "partly cloudy";
    case 3:
      return "Cloudy";
    case 45:
      return "Fog";
    case 48:
      return "Freezing Fog";
    case 51:
    case 53:
      return "Drizzle";
    case 55:
      return "Rain";
    case 56:
    case 57:
      return "Hail";
    case 61:
    case 63:
      return "Rain";
    case 65:
      return "Heavy Rain";
    case 66:
      return "Hail";
    case 67:
      return "heavy Hail";
    case 71:
    case 73:
      return "Snow";
    case 75:
      return "Heavy Snow";
    case 77:
      return "Snow grains";
    case 80:
    case 81:
      return "Rain showers";
    case 82:
      return "Heavy Rain showers";
    case 85:
      return "Snow showers";
    case 86:
      return "Heavy Snow showers";
    case 95:
    case 96:
    case 99:
      return "Thunderstorm ";
    default:
      return "";
  }
};

export default Condition;
