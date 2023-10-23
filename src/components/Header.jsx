import {useState} from "react";
import { WeatherData } from "../components/WeatherData";
import Condition from "../icons+slider/Condition";

function Header() {
  const {
    CurrentTemperature,
    WeatherIcon,
    MaxTempToday,
    MinTempToday,
  } = WeatherData();

  let location = "My Location";

  return (
    <div className="flex flex-col justify-center items-center mt-16 mb-16 text-white ">
      <var className="not-italic text-3xl font-normal">{location}</var>
      <span className="flex pl-5 text-8xl font-extralight">
        <p>{Math.round(CurrentTemperature)}</p>
        <p className="text-7xl pt-1">&deg;</p>
      </span>
      <var id="condition" className="not-italic text-xl font-medium">
        <p>
          <Condition IconCode={WeatherIcon} />
        </p>
      </var>
      <h1 className="flex text-xl font-medium">
        H:<p>{Math.round(MaxTempToday)}</p>
        <span className="text-xl">&deg;</span> L:
        <p>{Math.round(MinTempToday)}</p>
        <span className="text-xl">&deg;</span>
      </h1>
    </div>
  );
}

{
  /* <Condition IconCode={1} /> */
}

export default Header;
