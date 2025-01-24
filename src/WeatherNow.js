import React from 'react';
import './WeatherNow.css';
import {getWeatherIcon} from './WeatherIcons';

const WeatherNow = ({currentWeather, cityName}) => {
  if (!currentWeather) return null;

    const {is_day, temperature_2m, weather_code, wind_speed_10m, wind_direction_10m, relative_humidity_2m} = currentWeather;

  return (
    <div className="weather-now">
      <h2>{cityName}</h2>
      <div className="weather-now-content">
        <div className="weather-icon">{getWeatherIcon(weather_code, is_day)}</div>
        <p>Temperatura: {temperature_2m}°C</p>
        <p>Wilgotność: {relative_humidity_2m}%</p>
        <p>Wiatr: {wind_speed_10m} km/h, kierunek {wind_direction_10m}°</p>
      </div>
    </div>
  );
};

export default WeatherNow;
