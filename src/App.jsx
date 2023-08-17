import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HourlyForcast from "./components/Hourly-Forcast";
import WeeklyForcast from "./components/Weekly-Forcast";
import Extras from "./components/Extras";
import LoadingScreen from "./LoadingPage";
import { CurrentTemp } from "./RenderData";

import RenderData from "./RenderData";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInterval = setInterval(() => {
      if (CurrentTemp !== null) {
        console.log(CurrentTemp);
        setIsLoading(false);
        clearInterval(fetchInterval);
      }
    }, 50);

    return () => clearInterval(fetchInterval);
  }, []);

  return (
    <div className="max-w-xsm mx-auto">
      {isLoading ? (
        <>
          <LoadingScreen />
          <RenderData />
        </>
      ) : null}
      {!isLoading && (
        <>
          <RenderData />
          <Header />
          <HourlyForcast />
          <WeeklyForcast />
          <Extras />
        </>
      )}
    </div>
  );
}

export default App;
