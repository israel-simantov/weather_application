import React from "react";
import Icon from "../icons+slider/AllTheIcons";
import campass from "../icons+slider/campass2.png";
import windArrow from "../icons+slider/IMG_9161_adobe_express.png";

import {
  CurrentTemp,
  FeelsLikeTemp,
  Precipitation,
  VisibilityNow,
  HumidityNow,
  DewPointNow,
  CloudCoverPercent,
  
} from "../RenderData";
import { Day } from "../DayOrNight";

var sky;

if (CloudCoverPercent >= 70) {
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

const Extras1 = () => {
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
      <div className="grid grid-cols-2 grid-rows-2 gap-3 h-90 mb-2 md:grid-cols-4 md:grid-rows-1 md:h-45 pr-2">
        {/* FEELS LIKE */}
        <div className="rounded-2xl md:pr-1" 
        style={{ background: `${sky}` }}
        >
          <span className="flex mt-3 ml-0.5">
            <Icon name="fl-temp-top" />
            <h1 className="text-white text-opacity-70 font-medium text-xs">
              FEELS LIKE
            </h1>
          </span>
          <h1 className="ml-3 mt-3 h-24 text-3xl text-white">
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
            <h1 className="ml-3 text-3xl text-white">{PrecipitationSum}</h1>
            <h1 className="ml-1 text-3xl text-white">{PrecipitationUnits}</h1>
          </span>
          <p className="ml-3 text-lg font-base text-white h-15">
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
          <span className="flex mt-3 h-24">
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
          <span className="flex mt-3 h-24">
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
