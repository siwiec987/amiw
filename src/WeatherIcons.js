import { TiWeatherSunny, TiWeatherPartlySunny, TiWeatherShower } from "react-icons/ti";

export const getWeatherIcon = (weatherCode) => {
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