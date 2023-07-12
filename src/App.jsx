import React from 'react'
import Header from "./components/Header";
import HourlyForcast from './components/Hourly-Forcast';
import { GetWeather } from './components/WeatherData';

GetWeather(10,10, Intl.DateTimeFormat().resolvedOptions().timezone).then(res => {
  console.log(res.data)
})

function App() {

  return (
    <div>
      <Header />
      <HourlyForcast />

    </div>
    
  )
}

export default App
