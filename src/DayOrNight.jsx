import React from "react";
import { WeatherData } from "./components/WeatherData";

export var fullH = null;
export var Day = null;
export var DayNight = [];

function DayOrNight() {
  const {SunriseStemp, SunsetStemp} = WeatherData();

  console.log('hello');
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
  } else if (HourNow === sunriseTodayH) {
    if (MinuteNow >= sunriseTodayM) {
      day = true;
    } else if (MinuteNow < sunriseTodayM) {
      day = false;
    }
  } else if (HourNow === sunsetTodayH) {
    if (MinuteNow >= sunsetTodayM) {
      day = false;
    } else if (MinuteNow < sunsetTodayM) {
      day = true;
    }
  }

  // Day = day;
  Day=true;

  return {Day};
}
