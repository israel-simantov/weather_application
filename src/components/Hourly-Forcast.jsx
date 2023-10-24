import React, { useState, useEffect } from "react";
import Icon from "../icons+slider/AllTheIcons";
import { WeatherData } from "./WeatherData";

function HourlyForcast() {
  const {
    CurrentTemperature,
    SunriseStemp,
    SunsetStemp,
    CloudCoverNow,
    HourlyTemp,
    HourIconCode,
    DayNightNow
  } = WeatherData();

  var HourIcon = []
  var HourTemp = []
  for (let i = 0; i <= 25; i++) {
          HourIcon[i] = HourIconCode[i];
          HourTemp[i] = Math.round(HourlyTemp[i]);
        }

  function getCurrentTime() {
    const currentTime = new Date();
    return currentTime;
  }
  const currentTime = getCurrentTime();

  let FullHour = currentTime.getHours();
  let sunrise;
  let sunset;

  const timestampsunrise = SunriseStemp;
  const sunriseTime = new Date(timestampsunrise * 1000);
  let sunrisehour = sunriseTime.getHours();
  let sunriseminute = sunriseTime.getMinutes();
  if (sunriseminute < 10) {
    sunriseminute = "0" + sunriseminute;
  }
  sunrise = sunrisehour + ":" + sunriseminute;

  const timestampsunset = SunsetStemp;
  const sunsetTime = new Date(timestampsunset * 1000);
  let sunsethour = sunsetTime.getHours();
  let sunsetminute = sunsetTime.getMinutes();
  if (sunsetminute < 10) {
    sunsetminute = "0" + sunsetminute;
  }
  sunset = sunsethour + ":" + sunsetminute;

  var DayNight = [];

  let UntilRise = sunrisehour - FullHour;
  if (UntilRise < 0) {
    UntilRise = UntilRise + 24;
  }

  let UntilSet = sunsethour - FullHour;
  if (UntilSet < 0) {
    UntilSet = UntilSet + 24;
  }

  if (DayNightNow) {
    for (let i = 0; i <= UntilSet; i++) {
      DayNight[i] = 1;
    }
    for (let i = UntilSet + 1; i <= UntilRise; i++) {
      DayNight[i] = 0;
    }
    for (let i = UntilRise + 1; i <= 25; i++) {
      DayNight[i] = 1;
    }
  } else if (!DayNightNow) {
    for (let i = 0; i <= UntilRise; i++) {
      DayNight[i] = 0;
    }
    for (let i = UntilRise + 1; i <= UntilSet; i++) {
      DayNight[i] = 1;
    }
    for (let i = UntilSet + 1; i <= 25; i++) {
      DayNight[i] = 0;
    }
  }

  var IconCode = HourIcon;
  for (let i = 0; i < HourIcon.length; i++) {
    if (DayNight[i] === 0) {
      if (HourIcon[i] === 0 || HourIcon[i] === 1) {
        IconCode[i] = 1000;
      } else if (HourIcon[i] === 2) {
        IconCode[i] = 2000;
      }
    } else if (DayNight[i] === 1) {
      if (HourIcon[i] === 0 || HourIcon[i] === 1) {
        IconCode[i] = 1001;
      } else if (HourIcon[i] === 2) {
        IconCode[i] = 2001;
      }
    } else {
      HourIcon[i] = HourIcon[i];
    }
  }

  let x = [];

  for (let i = 0; i < 26; i++) {
    x[i] = FullHour + i;
    x[0] = "now";
  }

  for (let i = 0; i < 26; i++) {
    if (!isNaN(x[i])) {
      if (x[i] >= 24) {
        x[i] = x[i] - 24;
      }
    } else if (!isNaN(x[i])) {
    }
  }

  HourTemp[0] = CurrentTemperature;

  useEffect(() => {
    let TargetDivSunrise, TargetDivSunset;

    for (let i = 1; i < 26; i++) {
      const element = document.getElementById(i.toString());
      if (!isNaN(element.textContent)) {
        if (element && element.textContent === sunrisehour.toString()) {
          TargetDivSunrise = i + 1;
        }
      }
    }

    for (let i = 1; i < 26; i++) {
      const element = document.getElementById(i.toString());
      if (!isNaN(element.textContent)) {
        if (element && element.textContent === sunsethour.toString()) {
          TargetDivSunset = i + 1;
        }
      }
    }

    if (TargetDivSunrise) {
      var sunriseElement = document.getElementById("sunrise");
      var afterSunriseElement = document.getElementById(
        "div" + TargetDivSunrise.toString()
      );

      afterSunriseElement.parentNode.insertBefore(
        sunriseElement,
        afterSunriseElement
      );
    }

    if (TargetDivSunset) {
      var sunsetElement = document.getElementById("sunset");
      var afterSunsetElement = document.getElementById(
        "div" + TargetDivSunset.toString()
      );

      afterSunsetElement.parentNode.insertBefore(
        sunsetElement,
        afterSunsetElement
      );
    }

    //no sunset&sunrise in the poles.
    if (SunriseStemp === 0) {
      var sunriseElement = document.getElementById("sunrise");
      sunriseElement.style.display = "none";
    }
    if (SunsetStemp === 0) {
      var sunsetElement = document.getElementById("sunset");
      sunsetElement.style.display = "none";
    }
  }, []);

  var sky;

  if (CloudCoverNow >= 70) {
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
    <div>
      <div
        className="flex box-border mt-2 mx-auto h-36 rounded-2xl mb-4"
        style={{ background: `${sky}` }}
      >
        <span className="flex whitespace-nowrap">
          <div className="flex pl-4 pt-3 text-xs  text-white text-opacity-60">
            <Icon name="clock-top" />
            <p className="font-medium pl-1">HOURLY FORCAST</p>
          </div>
        </span>
        <div
          id="HourBox"
          className="text-white font-medium mt-6 flex -ml-36 pl-5 space-x-8  overflow-x-auto pr-5"
        >
          {x.map((hour, index) => (
            <div key={index} className="flex mt-5">
              <div id={`div${index}`}>
                <h1
                  id={index}
                  className="text-xs mb-3 flex justify-center items-center "
                >
                  {x[index]}
                </h1>
                <span className="flex justify-center items-center">
                  <Icon name={IconCode[index]} />
                </span>
                <span className="flex mt-3 justify-center items-center">
                  <h1>{HourTemp[index]}</h1>&deg;
                </span>
              </div>
            </div>
          ))}

          <div id="sunrise" className="-ml-4 mr-6">
            <h1 className="text-xs mb-3 flex justify-center items-center">
              {sunrise}
            </h1>
            <span className="flex justify-center items-center">
              <Icon name="sunrise" />
            </span>
            <span className="flex justify-center items-center">
              <h1 className="mt-3">Sunrise</h1>
            </span>
          </div>

          <div id="sunset" className="-ml-4 mr-6">
            <h1 className="text-xs mb-3 flex justify-center items-center">
              {sunset}
            </h1>
            <span className="flex justify-center items-center">
              <Icon name="sunset" />
            </span>
            <span className="flex justify-center items-center">
              <h1 className="mt-3">Sunset</h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HourlyForcast;
