import React from 'react';
import './WeatherNow.css'; // Stylizacja komponentu

const WeatherNow = ({ currentWeather }) => {
  if (!currentWeather) return null;

  const { temperature, windspeed, winddirection, weathercode } = currentWeather;

  // Funkcja do interpretacji kodów pogodowych na ikony/tekst
  const getWeatherIcon = (weatherCode) => {
    switch (weatherCode) {
      case 0:
        return '☀️'; // Słonecznie
      case 1:
      case 2:
      case 3:
        return '🌤️'; // Częściowe zachmurzenie
      case 61:
      case 63:
      case 65:
        return '🌧️'; // Deszcz
      default:
        return '🌫️'; // Inne
    }
  };

  return (
    <div className="weather-now">
      <h2>Aktualna pogoda</h2>
      <div className="weather-now-content">
        <div className="weather-icon">{getWeatherIcon(weathercode)}</div>
        <p>Temperatura: {temperature}°C</p>
        <p>Wiatr: {windspeed} km/h, kierunek {winddirection}°</p>
      </div>
    </div>
  );
};

export default WeatherNow;
