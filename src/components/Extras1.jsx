import React from "react";
import Icon from "../icons+slider/AllTheIcons";
import { Day } from "../DayOrNight";
import { WeatherData } from "./WeatherData";

const Extras1 = () => {
  const {
    CurrentTemperature,
    PrecipitationSum,
    FeelLikeTemperature,
    VisibilityNow,
    Humidity_2m,
    DewTemp,
    CloudCoverNow,
    WeeklyPrecipitation,
  } = WeatherData();

  var sky;

  if (CloudCoverNow >= 70) {
    if (Day) {
      sky = "rgba(0, 0, 0, 0.05)";
    } else if (!Day) {
      sky = "rgba(0, 0, 0, 0.1)";
    }
  } else if (Day) {
    sky = "rgba(25, 50, 100, 0.2)";
  } else if (!Day) {
    sky = "rgba(0, 0, 75, 0.2)";
  }

  // FEELS LIKE

  let FLTemp = Math.round(FeelLikeTemperature);
  let Temperature = CurrentTemperature;
  let reasonFLTemp;

  if (FLTemp === Temperature) {
    reasonFLTemp = "Similer to the actual temperature.";
  } else if (FLTemp > Temperature) {
    reasonFLTemp = "Humidity is making it feel warmer.";
  } else if (FLTemp < Temperature) {
    reasonFLTemp = "Wind is making it feel colder.";
  }

  // PRECIPITATION

  let precipSum = PrecipitationSum;
  let PrecipitationUnits;
  let expectedPrecipitation = "";

  if (precipSum <= 99) {
    PrecipitationUnits = "mm";
  } else if (precipSum <= 100 && precipSum < 1000) {
    PrecipitationUnits = "cm";
    precipSum = precipSum / 10;
  } else if (precipSum <= 1000) {
    PrecipitationUnits = "m";
    precipSum = precipSum / 1000;
  }

  function getCurrentTime() {
    const currentTime = new Date();
    return currentTime;
  }
  const currentTime = getCurrentTime();

  let today = currentTime.getDay();
  console.log(WeeklyPrecipitation);

  let x = null;
  let y = null;
  for (let i = 0; i <= 6; i++) {
    if (WeeklyPrecipitation[i] > 0) {
      x = today + i;
      y = i;
      break;
    }
  }
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

  if (x === null || y === null) {
    expectedPrecipitation = "None expected in next 7 days.";
  } else if (x !== null && y !== null) {
    let units;
    WeeklyPrecipitation[y] = Math.round(WeeklyPrecipitation[y]);
    if (WeeklyPrecipitation[y] <= 99) {
      units = "mm";
    } else if (WeeklyPrecipitation[y] <= 100 && WeeklyPrecipitation[y] < 1000) {
      units = "cm";
      WeeklyPrecipitation[y] = WeeklyPrecipitation[y] / 10;
    } else if (WeeklyPrecipitation[y] <= 1000) {
      units = "m";
      WeeklyPrecipitation[y] = WeeklyPrecipitation[y] / 1000;
    }

    if (x === today) {
      expectedPrecipitation =
        WeeklyPrecipitation[y] + " " + units + " expected in next 24h.";
    } else {
      expectedPrecipitation =
        "Next expected is " +
        WeeklyPrecipitation[y] +
        " " +
        units +
        " in " +
        days[x] +
        ".";
    }
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

  let Humidity = Humidity_2m;
  let DewPoint = DewTemp;

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 gap-3 h-90 mb-2 md:grid-cols-4 md:grid-rows-1 md:h-45 pr-2">
        {/* FEELS LIKE */}
        <div className="rounded-2xl md:pr-1" style={{ background: `${sky}` }}>
          <span className="flex mt-3 ml-0.5">
            <Icon name="fl-temp-top" />
            <h1 className="text-white text-opacity-70 font-medium text-xs">
              FEELS LIKE
            </h1>
          </span>
          <h1 className="ml-3 mt-3 h-22 text-3xl text-white">
            {FLTemp}
            <span className="font-normal">&deg;</span>
          </h1>
          <h1 className="text-white text-xs pr-6 ml-3">{reasonFLTemp}</h1>
        </div>
        {/* PRECIPITATION */}
        <div className="rounded-2xl" style={{ background: `${sky}` }}>
          <span className="flex mt-3 ml-0.5">
            <Icon name="drop-top" />
            <h1 className="text-white text-opacity-70 font-medium text-xs">
              PRECIPITATION
            </h1>
          </span>
          <span className="flex mt-3">
            <h1 className="ml-3 text-3xl text-white">{precipSum}</h1>
            <h1 className="ml-1 text-3xl text-white">{PrecipitationUnits}</h1>
          </span>
          <p className="ml-3 text-lg font-base text-white h-13">
            Today from Midnight
          </p>
          <h1 className="text-white text-xs ml-3">{expectedPrecipitation}</h1>
        </div>
        {/* VISIBILITY */}
        <div
          className="rounded-2xl  xl:ml-2 md:ml-1"
          style={{ background: `${sky}` }}
        >
          <span className="flex mt-3 ml-0.5">
            <Icon name="eye-top" />
            <h1 className="text-white text-opacity-70 font-medium text-xs">
              VISIBILITY
            </h1>
          </span>
          <span className="flex mt-3 h-22">
            <h1 className="ml-3 text-3xl text-white">{VisibilityDistance}</h1>
            <h1 className="ml-1 text-3xl text-white">{VisibilityUnit}</h1>
          </span>
          <h1 className=" text-white text-xs ml-3 ">{VisibilityCondition}</h1>
        </div>
        {/* HUMIDITY */}
        <div className="rounded-2xl" style={{ background: `${sky}` }}>
          <span className="flex mt-3 ml-0.5">
            <Icon name="humidity-top" />
            <h1 className="text-white text-opacity-70 font-medium text-xs">
              HUMIDITY
            </h1>
          </span>
          <span className="flex mt-3 h-22">
            <h1 className="ml-3 text-3xl text-white">{Humidity}%</h1>
          </span>
          <p className="text-white text-xs ml-3 pr-6">
            The dew point is {DewPoint}&deg; right now
          </p>
        </div>
      </div>
    </>
  );
};

export default Extras1;
