import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherNow from './WeatherNow';
import WeatherForecast from './WeatherForecast';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');
  const [coordinates, setCoordinates] = useState({ latitude: 50.27, longitude: 19.16 }); // Domyślnie Sosnowiec

  const fetchWeather = async (latitude, longitude) => {
    try {
      const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
        params: {
          latitude,
          longitude,
          daily: ['temperature_2m_min', 'temperature_2m_max', 'windspeed_10m_max', 'winddirection_10m_dominant'],
          current_weather: true,
          timezone: 'auto',
        },
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error('Błąd podczas pobierania danych pogodowych:', error);
    }
  };

  const fetchCoordinates = async () => {
    try {
      const response = await axios.get('https://geocoding-api.open-meteo.com/v1/search', {
        params: { name: location },
      });
      if (response.data.results && response.data.results.length > 0) {
        const { latitude, longitude } = response.data.results[0];
        setCoordinates({ latitude, longitude });
        fetchWeather(latitude, longitude);
      } else {
        alert('Nie znaleziono miejscowości!');
      }
    } catch (error) {
      console.error('Błąd podczas wyszukiwania miejscowości:', error);
    }
  };

  useEffect(() => {
    // Pobieranie pogody dla domyślnej lokalizacji na start
    fetchWeather(coordinates.latitude, coordinates.longitude);
  }, [coordinates]);

  return (
    <div className="app-container">
      <h1>Prognoza Pogody</h1>
      <div className="location-search">
        <input
          type="text"
          placeholder="Wpisz nazwę miejscowości"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={fetchCoordinates}>🔍</button>
      </div>
      {weatherData ? (
        <>
          <WeatherNow currentWeather={weatherData.current_weather} />
          <WeatherForecast dailyForecast={weatherData.daily} />
        </>
      ) : (
        <p>Ładowanie danych...</p>
      )}
    </div>
  );
};

export default App;
