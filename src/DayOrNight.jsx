import { useState, useEffect } from "react";
import { SunriseStemp, SunsetStemp } from "./RenderData";

export var fullH = null;
export var Day = null;
export var DayNight = [];

function DayOrNight() {
  // const [SunriseStempNow, setSunriseStempNow] = useState(SunriseStemp);

  // useEffect(() => {
  //   setSunriseStempNow(SunriseStemp);
  // }, [SunriseStemp]);

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

  var dayornight = [];

  let UntilRise = sunriseTodayH - HourNow;
  if (UntilRise < 0) {
    UntilRise = UntilRise + 24;
  }

  let UntilSet = sunsetTodayH - HourNow;
  if (UntilSet < 0) {
    UntilSet = UntilSet + 24;
  }

  if (Day) {
    for (let i = 0; i <= UntilSet; i++) {
      dayornight[i] = 1;
    }
    for (let i = UntilSet + 1; i <= UntilRise; i++) {
      dayornight[i] = 0;
    }
    for (let i = UntilRise + 1; i <= 25; i++) {
      dayornight[i] = 1;
    }
  } else if (!Day) {
    for (let i = 0; i <= UntilRise; i++) {
      dayornight[i] = 0;
    }
    for (let i = UntilRise + 1; i <= UntilSet; i++) {
      dayornight[i] = 1;
    }
    for (let i = UntilSet + 1; i <= 25; i++) {
      dayornight[i] = 0;
    }
  }

  fullH=HourNow;
  DayNight = dayornight;
  Day = day;

  return null;
}
export default DayOrNight();
