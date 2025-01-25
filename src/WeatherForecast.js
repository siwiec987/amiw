import React from 'react';
import ForecastDay from './ForecastDay';
import './WeatherForecast.css';

function WeatherForecast({ dailyForecast }) {
  if (!dailyForecast) return null;

  const {weather_code, temperature_2m_min, temperature_2m_max, wind_speed_10m_max, time, wind_direction_10m_dominant} = dailyForecast;

  return (
    <div className="weather-forecast">
      <h2>Prognoza na 7 dni</h2>
      <div className="forecast-grid">
        {time.map((date, index) => (
          <ForecastDay
            key={date}
            date={date}
            weatherCode={weather_code[index]}
            minTemp={temperature_2m_min[index]}
            maxTemp={temperature_2m_max[index]}
            windSpeed={wind_speed_10m_max[index]}
            windDirection={wind_direction_10m_dominant[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
