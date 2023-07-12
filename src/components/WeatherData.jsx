import React from 'react'
import axios from 'axios'

// https://api.open-meteo.com/v1/forecast?latitude=31.769&longitude=35.2163&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation,rain,weathercode,visibility,windspeed_10m,winddirection_10m,windgusts_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_hours,winddirection_10m_dominant&current_weather=true&timeformat=unixtime&timezone=Europe%2FMoscow

export function GetWeather(lat, lon, timezone) {
  return axios.get('https://api.open-meteo.com/v1/forecast?latitude=31.769&longitude=35.2163&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation,rain,weathercode,visibility,windspeed_10m,winddirection_10m,windgusts_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_hours,winddirection_10m_dominant&current_weather=true&timeformat=unixtime&timezone=Europe%2FMoscow', {params: {
    latitude: lat,
    longitude: lon,
    timezone,
  }})
}

