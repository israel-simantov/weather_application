import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HourlyForcast from "./components/Hourly-Forcast";
import WeeklyForcast from "./components/Daily-Forcast";
import Extras from "./components/Extras";
import Extras1 from "./components/Extras1";
import LoadingScreen from "./LoadingPage";
import { CloudCoverPercent, CurrentTemp, HourlyTemp } from "./RenderData";
import RenderData from "./RenderData";
import { Day } from "./DayOrNight";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  var sky;

  if (CloudCoverPercent >= 70) {
    if (Day) {
      sky =
        "linear-gradient(to bottom, rgb(150, 165, 180) 0%, rgb(135, 150, 165) 60%, rgb(120, 130, 150) 100% )";
    } else if (!Day) {
      sky =
        "linear-gradient(to bottom, rgb(50, 65, 80) 0%, rgb(50, 65, 80) 60%, rgb(35, 45, 65) 100% )";
    }
  } else if (Day) {
    sky =
      "linear-gradient(to bottom,rgb(57, 106, 200) 0%,rgb(50, 120, 190) 30%,rgb(50, 120, 190) 60%,rgb(90, 155, 220) 100%)";
  } else if (!Day) {
    sky =
      "linear-gradient(to bottom, rgb(25 ,30 ,65) 0%, rgb(25 ,30 ,65) 60%, rgb(75 ,85 ,110) 100% )";
  }

  useEffect(() => {
    var index = 0;
    const fetchInterval = setInterval(() => {
      index++;

      if (CurrentTemp !== undefined) {
        setIsLoading(false);
        clearInterval(fetchInterval);
      }

      // if (HourlyTemp[0] !== undefined) {
      //   setIsLoading(false);
      //   clearInterval(fetchInterval);
      // }

      if (index >= 50) {
        setIsLoading(false);
        clearInterval(fetchInterval);
      }
    }, 50);

    return () => clearInterval(fetchInterval);
  }, []);

  return (
    <div className="max-w-screen mx-auto">
      {isLoading ? (
        <>
          <LoadingScreen />
          <RenderData />
        </>
      ) : null}
      {!isLoading && (
        <>
          <div
            id="Container"
            className="max-w-screen px-4 mx-auto h-screen overflow-y-scroll "
            style={{
              background: `${sky}`,
            }}
          >
            <RenderData />
            <Header />
            <div className="xl:w-3/4 xl:mx-auto">
              <HourlyForcast />
            </div>
            <div className="xl:w-3/4 xl:mx-auto">
              <div className="mx-auto md:w-50% md:pr-2 md:mx-0">
                <WeeklyForcast />
              </div>
              <div className="mx-auto md:w-50% md:-mt-91 md:ml-51% md:pr-4 xl:w-50%">
                <Extras />
              </div>
            </div>
            <div className="md:-mt-2 xl:w-3/4 xl:mx-auto">
              <Extras1 />
            </div>
            <p className="text-white text-opacity-70 font-medium text-xs mt-5 mb-16 mx-auto justify-center items-center flex">
              Data provided by{" "}
              <a
                href="https://open-meteo.com/en/docs"
                className="underline mx-1"
              >
                {" "}
                open-meteo{" "}
              </a>{" "}
              API
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
