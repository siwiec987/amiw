import React from 'react';
import './ForecastDay.css';

const ForecastDay = ({ date, minTemp, maxTemp, windSpeed, windDirection }) => {
  return (
    <div className="forecast-day">
      <h3>{new Date(date).toLocaleDateString()}</h3>
      <p>Min: {minTemp}°C</p>
      <p>Max: {maxTemp}°C</p>
      <p>Wiatr: {windSpeed} km/h, kierunek {windDirection}°</p>
    </div>
  );
};

export default ForecastDay;
