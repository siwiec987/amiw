import React from 'react';
import { TiWeatherSunny, TiWeatherPartlySunny, TiWeatherShower } from "react-icons/ti";
import './WeatherNow.css';

const WeatherNow = ({currentWeather, cityName}) => {
  if (!currentWeather) return null;

  const { temperature, windspeed, winddirection, weathercode } = currentWeather;

  // Funkcja do interpretacji kodów pogodowych na ikony
  const getWeatherIcon = (weatherCode) => {
    switch (weatherCode) {
      case 0:
        return <TiWeatherSunny />; // Słonecznie
      case 1:
      case 2:
      case 3:
        return <TiWeatherPartlySunny />; // Częściowe zachmurzenie
      case 61:
      case 63:
      case 65:
        return <TiWeatherShower />; // Deszcz
      default:
        return '🌫️'; // Inne
    }
  };

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
