import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HourlyForcast from "./components/Hourly-Forcast";
import WeeklyForcast from "./components/Weekly-Forcast";
import Extras from "./components/Extras";
import Extras1 from "./components/Extras1";
import LoadingScreen from "./LoadingPage";
import {
  CloudCoverPercent,
  CurrentTemp,
  SunriseStemp,
  SunsetStemp,
  HourlyTemp
} from "./RenderData";
// import { day } from "./DayOrNight";

// console.log(day);

import RenderData from "./RenderData";
import DayOrNight from "./DayOrNight";

function App() {
  
  const [isLoading, setIsLoading] = useState(true);

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



  var sky;

  if (CloudCoverPercent >= 70 && (day || !day)) {
    sky =
      "linear-gradient(to bottom, rgb(150, 165, 180) 0%, rgb(135, 150, 165) 60%, rgb(120, 130, 150) 100% )";
  } else if (day) {
    sky =
      "linear-gradient(to bottom,rgb(57, 106, 200) 0%,rgb(50, 120, 190) 30%,rgb(50, 120, 190) 60%,rgb(90, 155, 220) 100%)";
  } else if (!day) {
    sky =
      "linear-gradient(to bottom, rgb(25 ,30 ,65) 0%, rgb(25 ,30 ,65) 60%, rgb(75 ,85 ,110) 100% )";
  }

  useEffect(() => {
    var index=0
    const fetchInterval = setInterval(() => {
      index++;
      
    if(HourlyTemp[0] !== undefined){
      setIsLoading(false);
      clearInterval(fetchInterval);
    }
    

      // if ((CurrentTemp !== null)) {
      //   setIsLoading(false);
      //   clearInterval(fetchInterval);
      // }
       
      if(index>=50){
        setIsLoading(false);
        clearInterval(fetchInterval);
      }
      
    }, 50);
    

    return () => clearInterval(fetchInterval);
  }, []);

  

  return (
    <div className="max-w-screen mx-auto">
      {isLoading ? (
        <>
          <LoadingScreen />
          <RenderData />
        </>
      ) : null}
      {!isLoading && (
        <>
          <div
            id="Container"
            className="max-w-screen px-4 mx-auto h-screen overflow-y-scroll "
            style={{
              background: `${sky}`,
            }}
          >
            <RenderData />
            <Header />
            <div className="xl:w-3/4 xl:mx-auto">
              <HourlyForcast />
            </div>
            <div className="xl:w-3/4 xl:mx-auto">
              <div className="mx-auto md:w-50% md:pr-2 md:mx-0">
                <WeeklyForcast />
              </div>
              <div className="mx-auto md:w-50% md:-mt-91 md:ml-51% md:pr-4 xl:w-50%">
                <Extras />
              </div>
            </div>
            <div className="md:-mt-2 xl:w-3/4 xl:mx-auto">
              <Extras1 />
            </div>
            <p className="text-white text-opacity-70 font-medium text-xs mt-5 mb-16 mx-auto justify-center items-center flex">
              Data provided by{" "}
              <a
                href="https://open-meteo.com/en/docs"
                className="underline mx-1"
              >
                {" "}
                open-meteo{" "}
              </a>{" "}
              API
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
