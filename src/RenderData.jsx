import React from "react";
import { GetWeather } from "./components/WeatherData";

export let IconCodeNow = null;
export let UVIndexNow = null;
export let SunriseStemp = null;
export let SunsetStemp = null;
export let TimeStemp = null

function RenderData() {
  // GetWeather(31.8,35.2, Intl.DateTimeFormat().resolvedOptions().timezone).then((data) => {
  //   console.log(data);
  // })

  GetWeather(31.8, 35.2, Intl.DateTimeFormat().resolvedOptions().timezone)
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
    IconCodeNow = current.IconCode;
    UVIndexNow = current.UVIndex;
    SunriseStemp = current.Sunrise;
    SunsetStemp = current.Sunset;
    TimeStemp = current.Time;
    console.log(TimeStemp);

    setValue("current-temp", current.CurrentTemp);
    setValue("today-max-temp", current.HighTemp);
    setValue("today-min-temp", current.LowTemp);
  }

  return null;
}

export function iconCode() {
  return RenderData().then((IconCodeNow) => IconCodeNow);
}

export default RenderData;
