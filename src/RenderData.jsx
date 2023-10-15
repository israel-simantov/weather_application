import React, { useState, useEffect } from "react";
import { GetWeather } from "./components/WeatherData";

export let CurrentTemp = null;
export let IconCodeNow = null;
export let UVIndexNow = null;
export let SunriseStemp = null;
export let SunsetStemp = null;
export let WindDirection = 270;
export let FeelsLikeTemp = null;
export let Precipitation = null;
export let VisibilityNow = null;
export let HumidityNow = null;
export let DewPointNow = null;
export let CloudCoverPercent = null;
export let HourlyIcon = [];
export let HourlyTemp = [];
export var DailyIconCode = [];
export var MinTemperature = [];
export var MaxTemperature = [];
export var IsDay = [];

function RenderData() {
  GetWeather(31.8, 35.2, Intl.DateTimeFormat().resolvedOptions().timezone)
    .then(renderWeather)
    .catch((e) => {
      // console.error('e');
    });

  function renderWeather({ current, hourly, daily }) {
    renderCurrentWeather(current);
    renderHourlyWeather(hourly);
    renderDailyWeather(daily);
  }

  function setValue(selector, value, { parent = document } = {}) {
    parent.querySelector(`[data-${selector}]`).textContent = value;
  }

  function renderCurrentWeather(current) {
    CurrentTemp = current.CurrentTemp;
    IconCodeNow = current.IconCode;
    UVIndexNow = current.UVIndex;
    SunriseStemp = current.Sunrise;
    SunsetStemp = current.Sunset;
    WindDirection = current.WindDirection;
    FeelsLikeTemp = current.FeelsLikeTemp;
    Precipitation = current.PrecipSum;
    VisibilityNow = current.Visibility;
    HumidityNow = current.Humidity;
    DewPointNow = current.DewPoint;
    CloudCoverPercent = current.CloudCover;

    setValue("current-temp", current.CurrentTemp);
    setValue("today-max-temp", current.HighTemp);
    setValue("today-min-temp", current.LowTemp);
    setValue("wind-now", current.WindSpeed);
    setValue("gusts-now", current.WindGusts);
  }

  function renderHourlyWeather(hourly) {
    // console.log(hourly.Temp);

    for (let i = 0; i <= 25; i++) {
      HourlyIcon[i] = hourly.HourIconCode[i];
      HourlyTemp[i] = hourly.Temp[i]
      IsDay[i]=hourly.Isday[i];
    }

    

    return null;
  }

  function renderDailyWeather(daily) {
    for (let i = 0; i <= 6; i++) {
      MinTemperature[i] = daily.MinTemp[i];
      MaxTemperature[i] = daily.MaxTemp[i];
      DailyIconCode[i] = daily.IconCode[i];
    }

    return null;
  }

  return null;
}

export default RenderData;

//----------------------------------------------------------------------------------------------------------------------------------------
// most important

//reload the arrays better.

//weekly temperature slide bar.

// uv index condition.

// precipitation expection.

// least important



// 31.8,35.2 = jerusalem,israel
// 61.3175, -147.1223 = south-west,south america

// GetWeather(31.8,35.2, Intl.DateTimeFormat().resolvedOptions().timezone).then((data) => {
//   console.log(data);
// })
