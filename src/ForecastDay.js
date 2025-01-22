import React from 'react';
import './ForecastDay.css';
import {getWeatherIcon} from './WeatherIcons'

const ForecastDay = ({date, weatherCode, minTemp, maxTemp, windSpeed, windDirection}) => {
  return (
    <div className="forecast-day">
      <h3>{new Date(date).toLocaleDateString()}</h3>
      <div className='forecast-day-content'>
        <div className="weather-icon">{getWeatherIcon(weatherCode)}</div>
        <p>Min: {minTemp}°C</p>
        <p>Max: {maxTemp}°C</p>
        <p>Wiatr: {windSpeed} km/h, kierunek {windDirection}°</p>
      </div>
    </div>
  );
};

export default ForecastDay;
