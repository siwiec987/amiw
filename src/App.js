import React, { useState, useEffect } from 'react';
import WeatherNow from './WeatherNow';
import WeatherForecast from './WeatherForecast';
import { CiSearch } from "react-icons/ci";
import './App.css';
import { createContext } from 'react';

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');
  const [cityName, setCityName] = useState('Sosnowiec');
  const [coordinates, setCoordinates] = useState({ latitude: 50.27, longitude: 19.16 }); // Domyślnie Sosnowiec

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  }

  const fetchWeather = async (latitude, longitude) => {
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,weather_code,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_direction_10m_dominant&timezone=auto`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
      console.log(data.current);
      console.log(data.daily);
    } catch (error) {
      console.error('Błąd podczas pobierania danych pogodowych:', error);
    }
  };

  const fetchCoordinates = async () => {
    try {
      const url = `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const {latitude, longitude, name} = data.results[0];
        setCoordinates({latitude, longitude});
        setCityName(name);
        fetchWeather(latitude, longitude);
      } else {
        alert('Nie znaleziono miejscowości!');
      }
    } catch (error) {
      console.error('Błąd podczas wyszukiwania miejscowości:', error);
    }
  };

  useEffect(() => {
    fetchWeather(coordinates.latitude, coordinates.longitude);
  }, [coordinates]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="app-container" id={theme}>
        <div className="location-search">
          <input
            type="text"
            placeholder="Wpisz nazwę miejscowości"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button className='search-button' onClick={fetchCoordinates}><CiSearch /></button>
        </div>
        <button className="theme-toggle-button" onClick={toggleTheme}></button>
          {weatherData ? (
            <>
              <WeatherNow currentWeather={weatherData.current} cityName={cityName}/>
              <WeatherForecast dailyForecast={weatherData.daily} />
            </>
          ) : (
            <p>Ładowanie danych...</p>
          )}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;