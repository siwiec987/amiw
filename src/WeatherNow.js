import React from 'react';
import './WeatherNow.css';
import {getWeatherIcon} from './WeatherIcons';

const WeatherNow = ({currentWeather, cityName}) => {
  if (!currentWeather) return null;

  const { temperature, windspeed, winddirection, weathercode } = currentWeather;

  return (
    <div className="weather-now">
      <h2>{cityName}</h2>
      <div className="weather-now-content">
        <div className="weather-icon">{getWeatherIcon(weathercode)}</div>
        <p>Temperatura: {temperature}°C</p>
        <p>Wiatr: {windspeed} km/h, kierunek {winddirection}°</p>
      </div>
    </div>
  );
};

export default WeatherNow;
