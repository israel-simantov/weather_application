import React from "react";
import { WeatherData } from "./components/WeatherData";


function LoadingScreen() {
  const {SunriseStemp, SunsetStemp, DayNightNow} = WeatherData();


  return (
    <div>
      {DayNightNow ? (
        <>
          <div
            className="flex justify-center items-center h-screen"
            style={{
              background:
                "linear-gradient(to bottom, rgb(57, 106, 200) 0%,rgb(50, 120, 190) 30%,rgb(50, 120, 190) 60%,rgb(90, 155, 220) 100%)",
            }}
          />
        </>
      ) : null}
      {!DayNightNow && (
        <>
          <div
            className="flex justify-center items-center h-screen"
            style={{
              background:
                "linear-gradient(to bottom, rgb(57, 106, 200) 0%,rgb(50, 120, 190) 30%,rgb(50, 120, 190) 60%,rgb(90, 155, 220) 100%)",
            }}
          />
        </>
      )}
    </div>
  );
}

export default LoadingScreen;

// linear-gradient(to bottom, rgb(13 ,15 ,37) 0%, rgb(13 ,15 ,37) 60%, rgb(45 ,55 ,83) 100%)
