import React from "react";
import { GetWeather } from "./components/WeatherData";

export let CurrentTemp= null;
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


function RenderData() {
  // 31.8,35.2
  // GetWeather(-6.52, -37.24, Intl.DateTimeFormat().resolvedOptions().timezone).then((data) => {
  //   console.log(data);
  // })

  GetWeather(31.8,35.2, Intl.DateTimeFormat().resolvedOptions().timezone)
    .then(renderWeather)
    .catch((e) => {
      // console.error('e');
    });

  function renderWeather({ current, daily, hourly }) {
    renderCurrentWeather(current);
    // renderDailyWeather(daily)
    // renderHourlyWeather(hourly)
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
    

    setValue("current-temp", current.CurrentTemp);
    setValue("today-max-temp", current.HighTemp);
    setValue("today-min-temp", current.LowTemp);
    setValue("wind-now", current.WindSpeed);
    setValue("gusts-now", current.WindGusts)
  }

  return null;
}

export function iconCode() {
  return RenderData().then((IconCodeNow) => IconCodeNow);
}

export default RenderData;
