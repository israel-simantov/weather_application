import React from "react";
import Icon from "../icons+slider/AllTheIcons";
import campass from "../icons+slider/campass2.png";
import windArrow from "../icons+slider/IMG_9161_adobe_express.png";
import { WeatherData } from "./WeatherData";

const Extras = () => {
  const {
    UVIndexNow,
    WindSpeedNow,
    WindDirectionNow,
    WindGustsNow,
    SunriseStemp,
    SunsetStemp,
    CloudCoverNow,
    UVIndex24,
    DayNightNow
  } = WeatherData();
  // UV INDEX

  let UVIndex = UVIndexNow;
  let UVCondition;
  if (UVIndex >= 0 && UVIndex < 3) {
    UVCondition = "Low";
  } else if (UVIndex >= 3 && UVIndex < 6) {
    UVCondition = "Moderate";
  } else if (UVIndex >= 6 && UVIndex < 8) {
    UVCondition = "High";
  } else if (UVIndex >= 8 && UVIndex < 11) {
    UVCondition = "Very High";
  } else if (UVIndex >= 11) {
    UVCondition = "Extreme";
  } else {
    UVCondition = "";
  }

  let UVProtection;

  // UV INDEX & SUNRISE AND SUNDET

  function getCurrentTime() {
    const currentTime = new Date();
    return currentTime;
  }
  const currentTime = getCurrentTime();

  var HourNow = currentTime.getHours();
  var MinuteNow = currentTime.getMinutes();
  if (MinuteNow !== null && MinuteNow < 10) {
    MinuteNow = "0" + MinuteNow;
  }

  const timeStampSunrise = SunriseStemp;
  const sunriseTime = new Date(timeStampSunrise * 1000);
  let sunriseTodayH = sunriseTime.getHours();
  let sunriseTodayM = sunriseTime.getMinutes();
  if (sunriseTodayM !== null && sunriseTodayM < 10) {
    sunriseTodayM = "0" + sunriseTodayM;
  }
  const sunrise = sunriseTodayH + ":" + sunriseTodayM;

  const timeStampSunset = SunsetStemp;
  const sunsetTime = new Date(timeStampSunset * 1000);
  let sunsetTodayH = sunsetTime.getHours();
  let sunsetTodayM = sunsetTime.getMinutes();
  if (sunsetTodayM !== null && sunsetTodayM < 10) {
    sunsetTodayM = "0" + sunsetTodayM;
  }
  const sunset = sunsetTodayH + ":" + sunsetTodayM;

  

  // if (UVIndex < 3 && HourNow <= sunsetTodayH && HourNow >= sunriseTodayH) {
  UVProtection = "Low for the rest of the day.";
  // }
  // else if (UVIndex < 3 && HourNow <= sunriseTodayH && HourNow >= 0) {
  //   //when(need API)
  //   UVProtection = "Use sun protection ";
  // } else if (UVIndex <= 0) {
  //   //when(need API)
  //   UVProtection = "use sun protection until";
  // }

  // SUNRISE AND SUNDET

  let sNext, nextIcon, nextTitle, nextNextSun;

  if (HourNow > sunriseTodayH && HourNow < sunsetTodayH) {
    nextTitle = "SUNSET";
    nextIcon = "sunset-top";
    sNext = sunset;
    nextNextSun = "sunrise: " + sunrise;
  } else if (HourNow < sunriseTodayH && HourNow >= 0) {
    nextTitle = "SUNRISE";
    nextIcon = "sunrise-top";
    sNext = sunrise;
    nextNextSun = "sunset: " + sunset;
  } else if (HourNow > sunsetTodayH && HourNow <= 24) {
    nextTitle = "SUNRISE";
    nextIcon = "sunrise-top";
    sNext = sunrise;
    nextNextSun = "sunset: " + sunset;
  } else if (HourNow === sunriseTodayH) {
    if (MinuteNow >= sunriseTodayM) {
      nextTitle = "SUNSET";
      nextIcon = "sunset-top";
      sNext = sunset;
      nextNextSun = "sunrise: " + sunrise;
    } else if (MinuteNow < sunriseTodayM) {
      nextTitle = "SUNRISE";
      nextIcon = "sunrise-top";
      sNext = sunrise;
      nextNextSun = "sunset: " + sunset;
    }
  } else if (HourNow === sunsetTodayH) {
    if (MinuteNow >= sunsetTodayM) {
      nextTitle = "SUNRISE";
      nextIcon = "sunrise-top";
      sNext = sunrise;
      nextNextSun = "sunset: " + sunset;
    } else if (MinuteNow < sunsetTodayM) {
      nextTitle = "SUNSET";
      nextIcon = "sunset-top";
      sNext = sunset;
      nextNextSun = "sunrise: " + sunrise;
    }
  } else {
    console.error("SUNRISE AND SUNDET Error");
    console.log("Time: " + HourNow + ":" + MinuteNow);
    console.log("Sunrise: " + sunriseTodayH + ":" + sunriseTodayM);
    console.log("Sunset: " + sunsetTodayH + ":" + sunsetTodayM);
  }

  // WIND

  let currentwind = "--";
  let Gusts = "--";
  let windDirection = WindDirectionNow;
  let WDTitle;

  if (
    (windDirection >= 345 && windDirection <= 360) ||
    (windDirection >= 0 && windDirection <= 15)
  ) {
    WDTitle = "N";
  } else if (windDirection > 15 && windDirection < 30) {
    WDTitle = "NNE";
  } else if (windDirection >= 30 && windDirection <= 60) {
    WDTitle = "NE";
  } else if (windDirection > 60 && windDirection < 75) {
    WDTitle = "ENE";
  } else if (windDirection >= 75 && windDirection <= 105) {
    WDTitle = "E";
  } else if (windDirection > 105 && windDirection < 120) {
    WDTitle = "ESE";
  } else if (windDirection >= 120 && windDirection <= 150) {
    WDTitle = "SE";
  } else if (windDirection > 150 && windDirection < 165) {
    WDTitle = "SSE";
  } else if (windDirection >= 165 && windDirection <= 195) {
    WDTitle = "S";
  } else if (windDirection > 195 && windDirection < 210) {
    WDTitle = "SSW";
  } else if (windDirection >= 210 && windDirection <= 240) {
    WDTitle = "SW";
  } else if (windDirection > 240 && windDirection < 255) {
    WDTitle = "WSW";
  } else if (windDirection >= 255 && windDirection <= 285) {
    WDTitle = "W";
  } else if (windDirection > 285 && windDirection < 300) {
    WDTitle = "WNW";
  } else if (windDirection >= 300 && windDirection <= 330) {
    WDTitle = "NW";
  } else if (windDirection > 330 && windDirection < 345) {
    WDTitle = "NNW";
  } else {
    console.error("Wind Error");
  }

  var sky;

  if (CloudCoverNow >= 80) {
    if (DayNightNow) {
      sky = "rgba(0, 0, 0, 0.05)";
    } else if (!DayNightNow) {
      sky = "rgba(0, 0, 0, 0.1)";
    }
  } else if (DayNightNow) {
    sky = "rgba(25, 50, 100, 0.2)";
  } else if (!DayNightNow) {
    sky = "rgba(0, 0, 75, 0.2)";
  }

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 gap-3 h-90 mb-3">
        {/* UV INDEX */}
        <div className="rounded-2xl md:h-42" style={{ background: `${sky}` }}>
          <span className="flex mt-3 ml-1">
            <Icon name="sun-top" />
            <h1 className="text-white text-opacity-70 font-medium text-xs">
              UV INDEX
            </h1>
          </span>
          <div className="ml-3 mt-2 h-9 text-3xl text-white">{UVIndex}</div>
          <div className="ml-3 h-8 text-base font-medium text-white">
            <h1>{UVCondition}</h1>
          </div>
          <div className="ml-3 h-7">
            <input
              type="range"
              value={UVIndex}
              min={0}
              max={13}
              className="UV-slider"
              readOnly
            ></input>
          </div>
          {/* <span className="ml-3 pr-6 flex text-xs text-white">
            {UVProtection}
          </span> */}
        </div>
        {/* SUNRISE AND SUNDET */}
        <div className="rounded-2xl md:h-42" style={{ background: `${sky}` }}>
          <span className="flex mt-3 ml-0.5">
            <Icon name={nextIcon} />
            <var className="text-white text-opacity-70 font-medium text-xs">
              <h1>{nextTitle}</h1>
            </var>
          </span>
          <div className="ml-3 mt-3 mb-15 text-3xl text-white">{sNext}</div>
          {/* add a grarh */}
          <h1 className="text-white text-xs ml-3">{nextNextSun}</h1>
        </div>
        {/* WIND */}
        <div
          className="parent-div relative rounded-2xl col-span-2 whitespace-nowrap md:h-42 md:-mt-1.5"
          style={{ background: `${sky}` }}
        >
          <div className="flex mt-3 ml-0.5">
            <Icon name="wind-top" />
            <h1 className="text-white text-opacity-70 font-medium text-xs">
              WIND
            </h1>
          </div>
          <div>
            <span className="flex  ">
              <h1 className="ml-3 mt-3 w-12 text-4xl font-medium text-white">
                {Math.round(WindSpeedNow)}
              </h1>
              <span className="mt-4">
                <h1 className="text-white text-opacity-70 font-semibold text-xs">
                  KM/H
                </h1>
                <h1 className="text-white text-xs ">Wind</h1>
              </span>
            </span>
            <hr className="flex mt-3 ml-3 h-px w-1/2 xs:w-3/5 sm:w-4/6 md:w-7/12 xl:w-3/4 border-0 bg-white opacity-20" />
            <span className="flex ">
              <h1 className="ml-3 mt-4 w-13 text-4xl font-medium text-white">
                {Math.round(WindGustsNow)}
              </h1>
              <span className="mt-5">
                <h1 className="text-white text-opacity-70 font-semibold text-xs">
                  KM/H
                </h1>
                <h1 className="text-white text-xs ">Gusts</h1>
              </span>
            </span>
          </div>
          <div className="flex justify-end mr-4 -mt-30">
            <img className="absolute w-32 h-32" src={campass} />
            <img
              className="absolute h-38 -mt-3 mr-14"
              style={{ transform: `rotate(${windDirection}deg)` }}
              src={windArrow}
            />
            <span className="absolute w-14 h-14 mr-9 mt-9 bg-black bg-opacity-5 rounded-full">
              <h1 className="flex mt-4 text-white justify-center items-center">
                {WDTitle}
              </h1>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Extras;
