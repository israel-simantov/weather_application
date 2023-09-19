import React from "react";
import { SunriseStemp, SunsetStemp } from "./RenderData.jsx";

function LoadingScreen() {
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
      day = true;
    } else if (MinuteNow < sunsetTodayM) {
      day = false;
    }
  }
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