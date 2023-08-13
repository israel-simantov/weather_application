import React from 'react'
import { GetWeather } from './components/WeatherData';

function RenderData() {

// GetWeather(31.8,35.2, Intl.DateTimeFormat().resolvedOptions().timezone).then((data) => {
//   console.log(data);
// })


GetWeather(31.8,35.2, Intl.DateTimeFormat().resolvedOptions().timezone).then(renderWeather).catch(e => {
  // console.error('e');
  
})

function renderWeather({current, daily, hourly}){
    renderCurrentWeather(current)
    // renderDailyWeather(daily)
    // renderHourlyWeather(hourly)
    
}
  
function setValue(selector, value, {parent = document} = {}){
    parent.querySelector(`[data-${selector}]`).textContent = value
}
  

  
function renderCurrentWeather(current) {
  // console.log(current.IconCode);
  setValue('current-temp', current.CurrentTemp )
  setValue('today-max-temp', current.HighTemp)
  setValue('today-min-temp', current.LowTemp)
  setValue('icon-code', current.IconCode)
  
  // export const IconCodeCondition=current.IconCode
}




// function renderDailyWeather(daily){
//   
// }

    // let currentTemp=current.CurrentTemp

  return 
}

export default RenderData
