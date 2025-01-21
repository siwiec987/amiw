import React from 'react';
import ForecastDay from './ForecastDay';
import './WeatherForecast.css'; // Stylizacja

const WeatherForecast = ({ dailyForecast }) => {
  if (!dailyForecast) return null;

  const { temperature_2m_min, temperature_2m_max, windspeed_10m_max, time, winddirection_10m_dominant } = dailyForecast;

  return (
    <div className="weather-forecast">
      <h2>Prognoza na 7 dni</h2>
      <div className="forecast-grid">
        {time.map((date, index) => (
          <ForecastDay
            key={date}
            date={date}
            minTemp={temperature_2m_min[index]}
            maxTemp={temperature_2m_max[index]}
            windSpeed={windspeed_10m_max[index]}
            windDirection={winddirection_10m_dominant[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
