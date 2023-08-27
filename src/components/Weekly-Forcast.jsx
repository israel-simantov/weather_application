import React, { useEffect } from "react";
import Icon from "../icons+slider/AllTheIcons";

function WeeklyForcast() {

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
  var IconCode = [73, 2, 1, 2, 3, 1, 55];

  var MinTemp = [25, 24, 23, 20, 21, 22, 22];

  var MaxTemp = [38, 34, 32, 32, 33, 34, 33];

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
      (MinTemp[i] - findMinTemperature(MinTemp)) *
      (100 / (findMaxTemperature(MaxTemp) - findMinTemperature(MinTemp)));
    precentMinTemp[i] = x;
  }

  for (let i = 0; i < MaxTemp.length; i++) {
    let x;
    x =
      (MaxTemp[i] - MinTemp[i]) *
      (100 / (findMaxTemperature(MaxTemp) - findMinTemperature(MinTemp)));
    amountOfTemp[i] = x;
  }

  return (
    <div>
      <div className="boxColor parent-div relative flex box-border mb-4 mx-auto h-fit bg-black bg-opacity-5 rounded-2xl ">
        <span className="flex whitespace-nowrap">
          <div className="flex pl-4 pt-2 text-xs mt-0.5 text-white text-opacity-60">
            <Icon name="calendar-top" />
            <p className="font-medium pl-1">7-DAY FORCAST</p>
          </div>
        </span>
        <div className="text-white font-medium mt-8 mb-2 -ml-32 pl-4">
          {CurrentDays.map((day, index) => (
            <div key={index} id={index} className="">
              <hr className="mt-1.5 h-px w-full border-0 bg-white opacity-20" />
              <span className="flex flex-row whitespace-nowrap mt-1.5  ">
                <h1 className="text-lg w-18 ">{CurrentDays[index]}</h1>
                <div className="mt-0.5 w-16 ">
                  <Icon name={IconCode[index]} />
                </div>
                <h1 className="flex w-9 text-white text-opacity-70">
                  {MinTemp[index]}&deg;
                </h1>
                <div className="sliderBg mt-2.5 relative mr-3" type="range">
                  {index === 0 ? (
                    <input
                      className="slider absolute mr-2.5"
                      style={{
                        left: `${precentMinTemp[index]}%`,
                        width: `${amountOfTemp[index]}%`,
                      }}
                      value={30}
                      min={findMinTemperature(MinTemp)}
                      max={findMaxTemperature(MaxTemp)}
                      type="range"
                    />
                  ) : (
                    <div
                      className="slider absolute mr-2.5"
                      style={{
                        left: `${precentMinTemp[index]}%`,
                        width: `${amountOfTemp[index]}%`,
                      }}
                      min={findMinTemperature(MinTemp)}
                      max={findMaxTemperature(MaxTemp)}
                      type="range"
                    />
                  )}
                </div>
                <h1 className="flex">{MaxTemp[index]}&deg;</h1>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeeklyForcast;
