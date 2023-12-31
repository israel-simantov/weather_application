import React, { useEffect } from "react";
import Icon from "../icons+slider/AllTheIcons";
import Slider from "../icons+slider/Slider";
import { WeatherData } from "./WeatherData";

function WeeklyForcast() {
  const {
    CurrentTemperature,
    CloudCoverNow,
    MinTemperature,
    MaxTemperature,
    DailyIconCode,
    DayNightNow
  } = WeatherData();
  
  function getCurrentTime() {
    const currentTime = new Date();
    return currentTime;
  }
  const currentTime = getCurrentTime();

  var Divs = [];

  for (let i = 0; i < 7; i++) {
    Divs[i] = i;
  }

  let today = currentTime.getDay();
  var days = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
    7: "Sun",
    8: "Mon",
    9: "Tue",
    10: "Wed",
    11: "Thu",
    12: "Fri",
    13: "Sat",
  };
  var CurrentDays = [];

  for (let i = 0; i < 7; i++) {
    CurrentDays[i] = days[i + today];
    CurrentDays[0] = "Today";
  }
  var IconCode = DailyIconCode;
  for (let i = 0; i < DailyIconCode.length; i++) {
    if (IconCode[i] === 1 || IconCode[i] === 0) {
      IconCode[i] = 1001;
    } else if (IconCode[i] === 2) {
      IconCode[i] = 2001;
    }
  }


  
  var MinTemp = [];
  var MaxTemp = [];

  for (let i = 0; i <= 6; i++) {
    MinTemp[i] = Math.round(MinTemperature[i]);
    MaxTemp[i] = Math.round(MaxTemperature[i]);
  }

  var precentMinTemp = [];
  var amountOfTemp = [];

  function findMinTemperature(MinTemp) {
    if (MinTemp.length === 0) {
      return null;
    }

    let minTemperature = MinTemp[0];

    for (let i = 1; i < MinTemp.length; i++) {
      if (MinTemp[i] < minTemperature) {
        minTemperature = MinTemp[i];
      }
    }

    return minTemperature;
  }

  function findMaxTemperature(MaxTemp) {
    if (MaxTemp.length === 0) {
      return null;
    }

    let MaxTemperature = MaxTemp[0];

    for (let i = 1; i < MaxTemp.length; i++) {
      if (MaxTemp[i] > MaxTemperature) {
        MaxTemperature = MaxTemp[i];
      }
    }

    return MaxTemperature;
  }

  for (let i = 0; i < MinTemp.length; i++) {
    let x;
    x =
      (MinTemperature[i] - findMinTemperature(MinTemperature)) *
      (100 /
        (findMaxTemperature(MaxTemperature) -
          findMinTemperature(MinTemperature)));
    precentMinTemp[i] = x;
  }

  for (let i = 0; i < MaxTemp.length; i++) {
    let x;
    x =
      (MaxTemperature[i] - MinTemperature[i]) *
      (100 /
        (findMaxTemperature(MaxTemperature) -
          findMinTemperature(MinTemperature)));
    amountOfTemp[i] = x;
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
    <div>
      <div
        className="parent-div relative flex box-border mb-4 mx-auto h-fit bg-black bg-opacity-5 rounded-2xl"
        style={{ background: `${sky}` }}
      >
        <span className="flex whitespace-nowrap">
          <div className="flex pl-4 pt-2 text-xs mt-0.5 text-white text-opacity-60 md:mt-1.5">
            <Icon name="calendar-top" />
            <p className="font-medium pl-1">7-DAY FORCAST</p>
          </div>
        </span>
        <div className="text-white font-medium mt-8 mb-2 -ml-32 pl-4 overflow-x-auto pr-4">
          {CurrentDays.map((day, index) => (
            <div key={index} id={index} className="md:my-2">
              <hr className="mt-1.5 h-px border-0 bg-white opacity-20 w-full" />
              <span className="flex flex-row whitespace-nowrap mt-1.5 ">
                <h1 className="text-lg w-20 xs:w-27 md:w-33 xl:w-36">
                  {CurrentDays[index]}
                </h1>
                <div className="mt-0.5 w-15 xs:w-27 xl:w-32">
                  <Icon name={IconCode[index]} />
                </div>
                <h1 className="flex w-9 text-white text-opacity-70 xs:mr-4 md:mr-2 xl:mr-3">
                  {MinTemp[index]}&deg;
                </h1>
                <div
                  className="sliderBg mt-2.5 relative mr-3 w-32 xs:w-60 sm:w-85 md:w-70 xl:w-108"
                  type="range"
                  readOnly
                >
                  {index === 0 ? (
                    <input
                      className="slider absolute mr-2.5"
                      style={{
                        left: `${precentMinTemp[index]}%`,
                        width: `${amountOfTemp[index]}%`,
                        background: `linear-gradient(to right, ${Slider({
                          sliderStart: MinTemperature[index],
                          sliderEnd: MaxTemperature[index],
                        })})`,
                      }}
                      value={CurrentTemperature}
                      min={findMinTemperature(MinTemperature)}
                      max={findMaxTemperature(MaxTemperature)}
                      type="range"
                      readOnly
                    />
                  ) : (
                    <div
                      className="slider absolute mr-2.5"
                      style={{
                        left: `${precentMinTemp[index]}%`,
                        width: `${amountOfTemp[index]}%`,
                        background: `linear-gradient(to right, ${Slider({
                          sliderStart: MinTemperature[index],
                          sliderEnd: MaxTemperature[index],
                        })})`,
                      }}
                      min={findMinTemperature(MinTemperature)}
                      max={findMaxTemperature(MaxTemperature)}
                      type="range"
                      readOnly
                    />
                  )}
                </div>
                <h1 className="flex xs:ml-5 md:ml-0 xl:ml-3">
                  {MaxTemp[index]}&deg;
                </h1>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeeklyForcast;
