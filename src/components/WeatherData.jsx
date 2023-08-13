import React from "react";
import axios from "axios";

export function GetWeather(lat, lon, timezone) {
  return axios
    .get(
      "https://api.open-meteo.com/v1/forecast?latitude=45.53&longitude=-100.428&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation,weathercode,cloudcover,cloudcover_low,cloudcover_mid,cloudcover_high,visibility,windspeed_10m,winddirection_10m,windgusts_10m,uv_index&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_hours,precipitation_probability_max&current_weather=true&timeformat=unixtime&timezone=Europe%2FMoscow&past_days=1",
      {
        params: {
          latitude: lat,
          longitude: lon,
          timezone,
        },
      }
    )
    .then(({ data }) => {
      // return data
      return {
        current: parseCurrentweather(data),
        daily: parseDailyweather(data),
        hourly: parseHourlyweather(data),
      };
    });
}

function parseCurrentweather({ current_weather, daily, hourly }) {
  const CurrentTemperature = current_weather.temperature;
  const TimeNow = current_weather.time;
  const WeatherIcon = current_weather.weathercode;
  const WhichDay = current_weather.is_day;
  const WindSpeedNow = current_weather.windspeed;
  const WindDirectionNow = current_weather.winddirection;

  const MaxTempToday = daily.temperature_2m_max[1];
  const MinTempToday = daily.temperature_2m_min[1];
  const SunriseTime = daily.sunrise[1];
  const SunsetTime = daily.sunset[1];
  const PrecipitationSum = daily.precipitation_sum[1];

  const UVIndexNow = hourly.uv_index[25];
  const WindGustsNow = hourly.windgusts_10m[25];
  const FeelLikeTemperature = hourly.apparent_temperature[25];
  const VisibilityNow = hourly.visibility[25];
  const Humidity_2m = hourly.relativehumidity_2m[25];
  const DewTemp = hourly.dewpoint_2m[25];

  // : StartUVIndex ,
  //   : EndUVIndex ,
  // : NextRain ,

  return {
    CurrentTemp: Math.round(CurrentTemperature),
    Time: TimeNow,
    IconCode: WeatherIcon,
    Day: WhichDay,
    WindSpeed: Math.round(WindSpeedNow),
    WindDirection: Math.round(WindDirectionNow),

    HighTemp: Math.round(MaxTempToday),
    LowTemp: Math.round(MinTempToday),
    UVIndex: Math.round(UVIndexNow),
    Sunset: SunsetTime,
    Sunrise: SunriseTime,
    WindGusts: Math.round(WindGustsNow),
    FeelsLikeTemp: Math.round(FeelLikeTemperature),
    PrecipSum: PrecipitationSum,
    Visibiliry: VisibilityNow,
    Humidity: Math.round(Humidity_2m),
    DewPoint: Math.round(DewTemp),
  };
}

function parseDailyweather({ daily }) {
  return daily.time.map((time, index) => {
    return {
      TimeStamp: (time + 86400) * 1000,
      IconCode: daily.weathercode[index + 1],
      MinTemp: Math.round(daily.temperature_2m_min[index + 1]),
      MaxTemp: Math.round(daily.temperature_2m_max[index + 1]),
    };
  });
}

function parseHourlyweather({ hourly, current_weather }) {
  return hourly.time.map((time, index) => {
    return {
      TimeStemp: time * 1000,
      IconCode: hourly.weathercode[index],
      temp: Math.round(hourly.temperature_2m[index]),
    };
  });
}
// .filter(({TimeStamp}) => TimeStamp >= current_weather.time *1000)
