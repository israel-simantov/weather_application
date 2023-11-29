import { useState, useEffect } from "react";

export function WeatherData() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [DayNightNow, setDayNightNow] = useState(null);
  const [CurrentTemperature, setCurrentTemperature] = useState(null);
  const [WeatherIcon, setWeatherIcon] = useState(null);
  const [WindSpeedNow, setWindSpeedNow] = useState(null);
  const [WindDirectionNow, setWindDirectionNow] = useState(null);
  const [MaxTempToday, setMaxTempToday] = useState(null);
  const [MinTempToday, setMinTempToday] = useState(null);
  const [SunriseStemp, setSunriseStemp] = useState(null);
  const [SunsetStemp, setSunsetStemp] = useState(null);
  const [PrecipitationSum, setPrecipitationSum] = useState(null);
  const [UVIndexNow, setUVIndexNow] = useState(null);
  const [WindGustsNow, setWindGustsNow] = useState(null);
  const [FeelLikeTemperature, setFeelLikeTemperature] = useState(null);
  const [VisibilityNow, setVisibilityNow] = useState(null);
  const [Humidity_2m, setHumidity_2m] = useState(null);
  const [DewTemp, setDewTemp] = useState(null);
  const [CloudCoverNow, setCloudCoverNow] = useState(null);

  const [HourlyTemp, setHourlyTemp] = useState([]);
  const [HourIconCode, setHourIconCode] = useState([]);
  const [IsDay, setIsDay] = useState([]);
  const [UVIndex24, setUVIndex24] = useState([]);

  const [MinTemperature, setMinTemperature] = useState([]);
  const [MaxTemperature, setMaxTemperature] = useState([]);
  const [DailyIconCode, setDailyIconCode] = useState([]);
  const [WeeklyPrecipitation, setWeeklyPrecipitation] = useState([]);

  let hasLoaded = false;

  // useEffect(() => {
  navigator.geolocation.getCurrentPosition(PositionSuccess, PositionError);
  // }, []);


  const OpenMeteo_URL =
    "https://api.open-meteo.com/v1/forecast?latitude=31&longitude=35.2&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,weathercode,cloudcover,visibility,windspeed_10m,winddirection_10m,windgusts_10m,uv_index,uv_index_clear_sky,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&current_weather=true&timeformat=unixtime&timezone=Europe%2FMoscow";

  function PositionSuccess({ coords }) {
    // console.log(coords);
    const OpenMeteo_URL = `https://api.open-meteo.com/v1/forecast?latitude=${
      coords.latitude
    }&longitude=${
      coords.longitude
    }&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,weathercode,cloudcover,visibility,windspeed_10m,winddirection_10m,windgusts_10m,uv_index,uv_index_clear_sky,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&current_weather=true&timeformat=unixtime&timezone=${
      Intl.DateTimeFormat().resolvedOptions().timezone
    }`;
  }
  

  function PositionError() {
    alert(
      "There was an Error getting your location. please allow us to use your location and refresh the page."
    );
  }

  
  
  function getCurrentTime() {
    const currentTime = new Date();
    return currentTime;
  }
  const currentTime = getCurrentTime();
  var CurrentHour = currentTime.getHours();

  async function getWeather() {
    const Response = await fetch(OpenMeteo_URL);
    const data = await Response.json();
    setDayNightNow(data.current_weather.is_day);
    setCurrentTemperature(Math.round(data.current_weather.temperature));
    setWeatherIcon(data.current_weather.weathercode);
    setWindSpeedNow(Math.round(data.current_weather.windspeed));
    setWindDirectionNow(data.current_weather.winddirection);
    setMaxTempToday(Math.round(data.daily.temperature_2m_max[0]));
    setMinTempToday(Math.round(data.daily.temperature_2m_min[0]));
    setSunriseStemp(data.daily.sunrise[0]);
    setSunsetStemp(data.daily.sunset[0]);
    //not accurate(need fixing)
    setPrecipitationSum(Math.round(data.daily.precipitation_sum[0]));
    setUVIndexNow(Math.round(data.hourly.uv_index[CurrentHour]));
    setWindGustsNow(Math.round(data.hourly.windgusts_10m[CurrentHour]));
    setFeelLikeTemperature(
      Math.round(data.hourly.apparent_temperature[CurrentHour])
    );
    setVisibilityNow(data.hourly.visibility[CurrentHour]);
    setHumidity_2m(data.hourly.relativehumidity_2m[CurrentHour]);
    setDewTemp(Math.round(data.hourly.dewpoint_2m[CurrentHour]));
    setCloudCoverNow(data.hourly.cloudcover[CurrentHour]);

    setHourlyTemp(
      data.hourly.temperature_2m.slice(CurrentHour, CurrentHour + 26)
    );
    setHourIconCode(
      data.hourly.weathercode.slice(CurrentHour, CurrentHour + 26)
    );
    setIsDay(data.hourly.is_day.slice(CurrentHour, CurrentHour + 26));
    setUVIndex24(
      data.hourly.uv_index_clear_sky.slice(CurrentHour, CurrentHour + 26)
    );

    setMinTemperature(data.daily.temperature_2m_min);
    setMaxTemperature(data.daily.temperature_2m_max);
    setDailyIconCode(data.daily.weathercode);
    setWeeklyPrecipitation(data.daily.precipitation_sum);

    setDataLoaded(true);
  }

  useEffect(() => {
    if(!dataLoaded) {
        getWeather();
    }
}, [dataLoaded]);

  return {
    DayNightNow,
    CurrentTemperature,
    WeatherIcon,
    WindSpeedNow,
    WindDirectionNow,
    MaxTempToday,
    MinTempToday,
    SunriseStemp,
    SunsetStemp,
    PrecipitationSum,
    UVIndexNow,
    WindGustsNow,
    FeelLikeTemperature,
    VisibilityNow,
    Humidity_2m,
    DewTemp,
    CloudCoverNow,
    HourlyTemp,
    HourIconCode,
    IsDay,
    MinTemperature,
    MaxTemperature,
    DailyIconCode,
    WeeklyPrecipitation,
    UVIndex24,
  };
}
