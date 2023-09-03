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
} from "./RenderData";

import RenderData from "./RenderData";

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

  var sky;

  if ((CloudCoverPercent >= 70 && day) || !day) {
    sky =
      "linear-gradient(to bottom, rgb(13 ,15 ,37) 0%, rgb(13 ,15 ,37) 60%, rgb(45 ,55 ,83) 100% )";
  } else if (day) {
    sky =
      "linear-gradient(to bottom,rgb(57, 106, 200) 0%,rgb(50, 120, 190) 30%,rgb(50, 120, 190) 60%,rgb(90, 155, 220) 100%)";
  } else if (!day) {
    sky =
      "linear-gradient(to bottom, rgb(150, 165, 180) 0%, rgb(135, 150, 165) 60%, rgb(120, 130, 150) 100% )";
  }

  useEffect(() => {
    const fetchInterval = setInterval(() => {
      if (CurrentTemp !== null) {
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
            <HourlyForcast />
            <div className="mx-auto md:w-49% md:pr-2 xl:pr-3 md:mx-0">
            <WeeklyForcast />
            </div>
            <div className="mx-auto md:w-49% md:-mt-91 md:ml-51% md:pr-4">
              <Extras />
            </div>
            <div className="md:-mt-2">
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