import React from "react";
import { SunriseStemp, SunsetStemp } from "./RenderData.jsx";

function LoadingScreen() {
  function getCurrentTime() {
    const currentTime = new Date();
    return currentTime;
  }
  const currentTime = getCurrentTime();
  console.log(currentTime);

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

  console.log('H now: '+HourNow);
  console.log('H sunrise: '+sunriseTodayH);
  console.log('H sunset: '+sunsetTodayH);

  if (HourNow > sunriseTodayH && HourNow < sunsetTodayH) {
    day = true;
    console.log('1');
  } else if (HourNow < sunriseTodayH && HourNow >= 0) {
    day = false;
    console.log('2');
  } else if (HourNow > sunsetTodayH && HourNow <= 24) {
    day = false;
    console.log('3');
  } else if (HourNow === sunrise) {
    if (MinuteNow >= sunriseTodayM) {
      day = true;
      console.log('4');
    } else if (MinuteNow < sunriseTodayM) {
      day = false;
      console.log('5');
    }
  } else if (HourNow === sunset) {
    if (MinuteNow >= sunsetTodayM) {
      day = true;
      console.log('6');
    } else if (MinuteNow < sunsetTodayM) {
      day = false;
      console.log('7');
    }
  }
  console.log(day);

  return (
    <div>
      {day ? (
        <>
          <div
            className="flex justify-center items-center h-screen"
            style={{
              background:
                "linear-gradient(to bottom, rgb(57, 106, 200) 0%,rgb(50, 120, 190) 30%,rgb(50, 120, 190) 60%,rgb(90, 155, 220) 100%)",
            }}
          />
        </>
      ) : null}
      {!day && (
        <>
          <div
            className="flex justify-center items-center h-screen"
            style={{
              background:
                "linear-gradient(to bottom, rgb(57, 106, 200) 0%,rgb(50, 120, 190) 30%,rgb(50, 120, 190) 60%,rgb(90, 155, 220) 100%)",
            }}
          />
        </>
      )}
    </div>
  );
}

export default LoadingScreen;

// linear-gradient(to bottom, rgb(13 ,15 ,37) 0%, rgb(13 ,15 ,37) 60%, rgb(45 ,55 ,83) 100%)