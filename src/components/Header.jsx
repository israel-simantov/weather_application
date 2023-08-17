import react from "react";
import { GetWeather } from "./WeatherData";
import Condition from "../icons+slider/Condition";
import { IconCodeNow } from "../RenderData";

function Header() {
  let location = "My Location";
  let currentTemp = "--";
  let minTempToday = "--";
  let maxTempToday = "--";

  if (IconCodeNow === "null") {
    console.log("Icon Code null" + IconCodeNow);
  }

  // console.log(IconCodeNow);

  return (
    <div className="flex flex-col justify-center items-center mt-16 mb-16 text-white">
      <var className="not-italic text-3xl font-normal">{location}</var>
      <span className="flex pl-5 text-8xl font-extralight">
        <p data-current-temp>{currentTemp}</p>
        <p className="text-7xl pt-1">&deg;</p>
      </span>
      <var id="condition" className="not-italic text-xl font-medium">
        <p>
          <Condition IconCode={IconCodeNow} />
        </p>
      </var>
      <h1 className="flex text-xl font-medium">
        H:<p data-today-max-temp>{maxTempToday}</p>
        <span className="text-xl">&deg;</span> L:
        <p data-today-min-temp>{minTempToday}</p>
        <span className="text-xl">&deg;</span>
      </h1>
    </div>
  );
}

{
  /* <Condition IconCode={1} /> */
}

export default Header;
