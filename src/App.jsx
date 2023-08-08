import React from 'react'
import Header from "./components/Header";
import HourlyForcast from './components/Hourly-Forcast';
import WeeklyForcast from './components/Weekly-Forcast';
import Extras from './components/Extras';

import RenderData from './RenderData';



function App() {

  return (
    <div> 
      <RenderData />
      <Header />
      <HourlyForcast />
      <WeeklyForcast />
      <Extras />

    </div>
    
  )
}

export default App
