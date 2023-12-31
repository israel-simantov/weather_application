import React from "react";
import { Day } from "../DayOrNight";
import { WeatherData } from "../components/WeatherData";

const Condition = ({ IconCode }) => {
  const { DayNightNow } = WeatherData();
  switch (IconCode) {
    case 0:
      if (DayNightNow) {
        return "Sunny";
      } else if (!DayNightNow) {
        return "Clear";
      } else {
        return "clear";
      }
    case 1:
      if (DayNightNow) {
        return "Mostly Sunny";
      } else if (!DayNightNow) {
        return "Mainly clear";
      } else {
        return "Mainly clear";
      }

    case 2:
      return "partly cloudy";
    case 3:
      return "Cloudy";
    case 45:
      return "Fog";
    case 48:
      return "Freezing Fog";
    case 51:
    case 53:
      return "Drizzle";
    case 55:
      return "Rain";
    case 56:
    case 57:
      return "Hail";
    case 61:
    case 63:
      return "Rain";
    case 65:
      return "Heavy Rain";
    case 66:
      return "Hail";
    case 67:
      return "heavy Hail";
    case 71:
    case 73:
      return "Snow";
    case 75:
      return "Heavy Snow";
    case 77:
      return "Snow grains";
    case 80:
    case 81:
      return "Rain showers";
    case 82:
      return "Heavy Rain showers";
    case 85:
      return "Snow showers";
    case 86:
      return "Heavy Snow showers";
    case 95:
    case 96:
    case 99:
      return "Thunderstorm ";
    default:
      return "";
  }
};

export default Condition;
