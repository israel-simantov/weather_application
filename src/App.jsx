import React from 'react'
import Header from "./components/Header";
import HourlyForcast from './components/Hourly-Forcast';
import { GetWeather } from './components/WeatherData';
import WeeklyForcast from './components/Weekly-Forcast';
import Extras from './components/Extras';

GetWeather(31.8,35.2, Intl.DateTimeFormat().resolvedOptions().timezone).then(res => {
  console.log(res.data)
})

function App() {

  console.clear();

  return (
    <div>
      
      <Header />
      <HourlyForcast />
      <WeeklyForcast />
      <Extras />
    </div>
    
  )
}

export default App
