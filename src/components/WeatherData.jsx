import React from "react";
import axios from "axios";

export function GetWeather(lat, lon, timezone) {
  return axios
    .get(
      "https://api.open-meteo.com/v1/forecast?&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,weathercode,cloudcover,visibility,windspeed_10m,winddirection_10m,windgusts_10m,uv_index,uv_index_clear_sky,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&current_weather=true&timeformat=unixtime&timezone=Europe%2FMoscow",
      {
        params: {
          latitude: lat,
          longitude: lon,
          timezone,
        },
      }
    )
    .then(({ data }) => {
      // return data; //-> only fo seeing all the API data
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

  const MaxTempToday = daily.temperature_2m_max[0];
  const MinTempToday = daily.temperature_2m_min[0];
  const SunriseTime = daily.sunrise[0];
  const SunsetTime = daily.sunset[0];
  const PrecipitationSum = daily.precipitation_sum[0];

  const UVIndexNow = hourly.uv_index[0];
  const WindGustsNow = hourly.windgusts_10m[0];
  const FeelLikeTemperature = hourly.apparent_temperature[0];
  const VisibilityNow = hourly.visibility[0];
  const Humidity_2m = hourly.relativehumidity_2m[0];
  const DewTemp = hourly.dewpoint_2m[0];
  const CloudCoverNow = hourly.cloudcover[0];

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
    Visibility: VisibilityNow,
    Humidity: Math.round(Humidity_2m),
    DewPoint: Math.round(DewTemp),
    CloudCover: CloudCoverNow,
  };
}

function parseDailyweather({ daily }) {
  const MinTemperature = daily.temperature_2m_min;
  const MaxTemperature = daily.temperature_2m_max;
  const DailyIconCode = daily.weathercode;

  for (let i = 0; i <= 6; i++) {
    MinTemperature[i] = Math.round(MinTemperature[i]);
    MaxTemperature[i] = Math.round(MaxTemperature[i]);
  }

  return {
    IconCode: DailyIconCode,
    MinTemp: MinTemperature,
    MaxTemp: MaxTemperature,
  };
}

function parseHourlyweather({ hourly }) {
  const Temp = hourly.temperature_2m.slice(0, 26);
  const HourIconCode = hourly.weathercode.slice(0, 26);
  const IsDay = hourly.is_day.slice(0,26);

  // console.log(IsDay);

  for (let i = 0; i <= 24; i++) {
    Temp[i] = Math.round(Temp[i]);
  }

  return {
    HourIconCode: HourIconCode,
    Temp: Temp,
    Isday: IsDay,
  };
}

// .filter(({TimeStamp}) => TimeStamp >= current_weather.time *1000)
