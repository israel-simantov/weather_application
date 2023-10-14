import { useEffect } from "react";
import { SunriseStemp, SunsetStemp } from "./RenderData";

export var Day = null;

function DayOrNight() {
  function getCurrentTime() {
    const currentTime = new Date();
    return currentTime;
  }
  const currentTime = getCurrentTime();

  var HourNow = currentTime.getHours();
  var MinuteNow = currentTime.getMinutes();

  console.log(HourNow);

  const timeStampSunrise = SunriseStemp;
  const sunriseTime = new Date(timeStampSunrise * 1000);
  let sunriseTodayH = sunriseTime.getHours();
  let sunriseTodayM = sunriseTime.getMinutes();

  const timeStampSunset = SunsetStemp;
  const sunsetTime = new Date(timeStampSunset * 1000);
  let sunsetTodayH = sunsetTime.getHours();
  let sunsetTodayM = sunsetTime.getMinutes();

  let day;

  console.log('HourNow: '+HourNow);
  console.log('sunsetTodayH: '+sunsetTodayH);
  console.log('sunriseTodayH: '+sunriseTodayH);

  // useEffect(() => {

    
    if (HourNow > sunriseTodayH && HourNow < sunsetTodayH) {
      console.log("h1");
      day = true;
    } else if (HourNow < sunriseTodayH && HourNow >= 0) {
      console.log("h2");
      day = false;
    } else if (HourNow > sunsetTodayH && HourNow <= 24) {
      console.log("h3");
      day = false;
    } else if (HourNow === sunriseTodayH) {
      if (MinuteNow >= sunriseTodayM) {
        console.log("h4");
        day = true;
      } else if (MinuteNow < sunriseTodayM) {
        console.log("h5");
        day = false;
      }
    } else if (HourNow === sunsetTodayH) {
      if (MinuteNow >= sunsetTodayM) {
        console.log("h6");
        day = false;
      } else if (MinuteNow < sunsetTodayM) {
        console.log("h7");
        day = true;
      }
    }

    Day = day;
  // }, []);

  return null;
}
export default DayOrNight();
