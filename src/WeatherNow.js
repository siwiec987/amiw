import React from 'react';
import './WeatherNow.css';
import {getWeatherIcon} from './WeatherIcons';

const WeatherNow = ({currentWeather, cityName}) => {
  if (!currentWeather) return null;

    const isDay = currentWeather.is_day
    const temperature = currentWeather.temperature_2m
    const weatherCode = currentWeather.weather_code
    const windSpeed = currentWeather.wind_speed_10m
    const windDirection = currentWeather.wind_direction_10m

  return (
    <div className="weather-now">
      <h2>{cityName}</h2>
      <div className="weather-now-content">
        <div className="weather-icon">{getWeatherIcon(weatherCode, isDay)}</div>
        <p>Temperatura: {temperature}°C</p>
        <p>Wiatr: {windSpeed} km/h, kierunek {windDirection}°</p>
      </div>
    </div>
  );
};

export default WeatherNow;
