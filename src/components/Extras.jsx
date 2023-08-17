import React from "react";
import Icon from "../icons+slider/AllTheIcons";
import campass from "../icons+slider/campass2.png";
import windArrow from "../icons+slider/IMG_9161_adobe_express.png";

import {
  CurrentTemp,
  UVIndexNow,
  SunriseStemp,
  SunsetStemp,
  WindDirection,
  FeelsLikeTemp,
  Precipitation,
  VisibilityNow,
  HumidityNow,
  DewPointNow,
} from "../RenderData";

const Extras = () => {

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

  // console.log(HourNow + ":" + MinuteNow);

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
  } else if (HourNow === sunrise) {
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
  } else if (HourNow === sunset) {
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
  }

  // WIND

  let currentwind = "--";
  let Gusts = "--";
  let windDirection = WindDirection;
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

  // FEELS LIKE

  let FLTemp = FeelsLikeTemp;
  let Temperature = CurrentTemp;
  let reasonFLTemp;

  if (FLTemp === Temperature) {
    reasonFLTemp = "Similer to the actual temperature.";
  } else if (FLTemp > Temperature) {
    reasonFLTemp = "Humidity is making it feel warmer.";
  } else if (FLTemp < Temperature) {
    reasonFLTemp = "Wind is making it feel colder.";
  }

  // PRECIPITATION

  let PrecipitationSum = Precipitation;
  let PrecipitationUnits;
  let expectedPrecipitation;

  if (PrecipitationSum <= 99) {
    PrecipitationUnits = "mm";
  } else if (PrecipitationSum <= 100 && PrecipitationSum < 1000) {
    PrecipitationUnits = "cm";
    PrecipitationSum = PrecipitationSum / 10;
  } else if (PrecipitationSum <= 1000) {
    PrecipitationUnits = "m";
    PrecipitationSum = PrecipitationSum / 1000;
  }

  //need API data for expect Precipitation
  if (expectedPrecipitation === undefined) {
    expectedPrecipitation = "None expected in next 7 days.";
  }

  // VISIBILITY

  let Visibility = VisibilityNow;
  let VisibilityDistance;
  let VisibilityUnit;
  let VisibilityCondition;

  if (Visibility < 1000) {
    VisibilityDistance = Visibility;
    VisibilityUnit = "m";
  } else if (Visibility >= 1000) {
    VisibilityUnit = "km";
    VisibilityDistance = Math.round(Visibility / 1000);
  }

  if (Visibility >= 0 && Visibility < 200) {
    VisibilityCondition = "Visibility is poor.";
  } else if (Visibility >= 200 && Visibility < 1000) {
    VisibilityCondition = "Visibility is moderate.";
  } else if (Visibility >= 1000 && Visibility < 10000) {
    VisibilityCondition = "Fairly clear view.";
  } else if (Visibility >= 10000 && Visibility < 15000) {
    VisibilityCondition = "clear view.";
  } else if (Visibility >= 15000) {
    VisibilityCondition = "Perfectly clear view.";
  }

  // HUMIDITY

  let Humidity = HumidityNow;
  let DewPoint = DewPointNow;

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-4 gap-3 h-180 mb-2">
        {/* UV INDEX */}
        <div className="boxColor rounded-2xl ">
          <span className="flex mt-3 ml-1">
            <Icon name="sun-top" />
            <h1 className="text-white text-opacity-70 font-medium text-xs">
              UV INDEX
            </h1>
          </span>
          <div className="ml-3 mt-2 h-9 text-3xl text-white">{UVIndex}</div>
          <div className="ml-3 h-6 text-base font-medium text-white">
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
          <span className="ml-3 pr-6 flex text-xs text-white">
            {UVProtection}
          </span>
        </div>
        {/* SUNRISE AND SUNDET */}
        <div className="boxColor rounded-2xl">
          <span className="flex mt-3 ml-0.5">
            <Icon name={nextIcon} />
            <h1 className="text-white text-opacity-70 font-medium text-xs">
              <h1>{nextTitle}</h1>
            </h1>
          </span>
          <div className="ml-3 mt-3 mb-16 text-3xl text-white">{sNext}</div>
          {/* add a grarh */}
          <h1 className="text-white text-xs ml-3">{nextNextSun}</h1>
        </div>
        {/* WIND */}
        <div className="boxColor parent-div relative rounded-2xl col-span-2">
          <span className="flex mt-3 ml-0.5">
            <Icon name="wind-top" />
            <h1 className="text-white text-opacity-70 font-medium text-xs">
              WIND
            </h1>
          </span>
          <div className="flex">
            <div>
              <span className="flex">
                <h1
                  className="ml-3 mt-3 w-12 text-4xl font-medium text-white"
                  data-wind-now
                >
                  {currentwind}
                </h1>
                <span className="mt-4">
                  <h1 className="text-white text-opacity-70 font-semibold text-xs">
                    KM/H
                  </h1>
                  <h1 className="text-white text-xs ">Wind</h1>
                </span>
              </span>
              <hr className="flex mt-3 ml-3 h-px w-40 border-0 bg-white opacity-20" />
              <span className="flex ">
                <h1
                  className="ml-3 mt-4 w-12 text-4xl font-medium text-white"
                  data-gusts-now
                >
                  {Gusts}
                </h1>
                <span className="mt-5">
                  <h1 className="text-white text-opacity-70 font-semibold text-xs">
                    KM/H
                  </h1>
                  <h1 className="text-white text-xs ">Gusts</h1>
                </span>
              </span>
            </div>
            <div className="flex ml-8">
              <img className="absolute w-32 h-32" src={campass} />
              <img
                className="absolute h-38 -mt-3 ml-14"
                style={{ transform: `rotate(${windDirection}deg)` }}
                src={windArrow}
              />
              <span className="absolute w-14 h-14 ml-9 mt-9 bg-black bg-opacity-5 rounded-full">
                <h1 className="flex mt-4 text-white justify-center items-center">
                  {WDTitle}
                </h1>
              </span>
            </div>
          </div>
        </div>
        {/* FEELS LIKE */}
        <div className="boxColor rounded-2xl">
          <span className="flex mt-3 ml-0.5">
            <Icon name="fl-temp-top" />
            <h1 className="text-white text-opacity-70 font-medium text-xs">
              FEELS LIKE
            </h1>
          </span>
          <h1 className="ml-3 mt-3 mb-12 text-3xl text-white">
            {FLTemp}
            <span className="font-normal">&deg;</span>
          </h1>
          <h1 className="text-white text-xs pr-6 ml-3">{reasonFLTemp}</h1>
        </div>
        {/* PRECIPITATION */}
        <div className="boxColor rounded-2xl">
          <span className="flex mt-3 ml-0.5">
            <Icon name="drop-top" />
            <h1 className="text-white text-opacity-70 font-medium text-xs">
              PRECIPITATION
            </h1>
          </span>
          <span className="flex mt-3">
            <h1 className="ml-3 text-3xl text-white">{PrecipitationSum}</h1>
            <h1 className="ml-1 text-3xl text-white">{PrecipitationUnits}</h1>
          </span>
          <p className="ml-3 text-lg font-medium text-white mb-5">
            in last 24h
          </p>
          <h1 className="text-white text-xs ml-3">{expectedPrecipitation}</h1>
        </div>
        {/* VISIBILITY */}
        <div className="boxColor rounded-2xl">
          <span className="flex mt-3 ml-0.5">
            <Icon name="eye-top" />
            <h1 className="text-white text-opacity-70 font-medium text-xs">
              VISIBILITY
            </h1>
          </span>
          <span className="flex mt-3">
            <h1 className="ml-3 text-3xl text-white">{VisibilityDistance}</h1>
            <h1 className="ml-1 text-3xl text-white">{VisibilityUnit}</h1>
          </span>
          <h1 className=" text-white text-xs ml-3 mt-16">
            {VisibilityCondition}
          </h1>
        </div>
        {/* HUMIDITY */}
        <div className="boxColor rounded-2xl">
          <span className="flex mt-3 ml-0.5">
            <Icon name="humidity-top" />
            <h1 className="text-white text-opacity-70 font-medium text-xs">
              HUMIDITY
            </h1>
          </span>
          <span className="flex mt-3 mb-12">
            <h1 className="ml-3 text-3xl text-white">{Humidity}%</h1>
          </span>
          <p className="text-white text-xs ml-3 pr-6">
            The dew point is {DewPoint}&deg; right now
          </p>
        </div>
      </div>
      <p className="text-white text-opacity-70 font-medium text-xs mt-5 mb-16 mx-auto justify-center items-center flex">
        Data provided by{" "}
        <a href="https://open-meteo.com/en/docs" className="underline mx-1">
          {" "}
          open-meteo{" "}
        </a>{" "}
        API
      </p>
    </>
  );
};

export default Extras;
