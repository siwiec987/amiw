import {WiDaySunny, WiDaySunnyOvercast, WiDayCloudy, WiFog, WiDayShowers, WiDayRain, WiSnowflakeCold, WiDayThunderstorm} from "react-icons/wi";
import {WiNightClear, WiNightAltPartlyCloudy, WiNightAltCloudy, WiNightShowers, WiNightRain, WiNightThunderstorm} from "react-icons/wi";

export const getWeatherIcon = (weatherCode, isDay) => {

    switch (weatherCode) {
        case 0: // Clear sky
            return isDay ? <WiDaySunny /> : <WiNightClear />;
        case 1: // Mainly clear
            return isDay ? <WiDaySunnyOvercast /> : <WiNightAltPartlyCloudy />;
        case 2: // Partly cloudy
        case 3: // Overcast
            return isDay ? <WiDayCloudy /> : <WiNightAltCloudy />;
        case 45: // Fog
        case 48: // Depositing rime fog
            return <WiFog />;
        case 51: // Drizzle: Light
        case 53: // Drizzle: Moderate
        case 55: // Drizzle: Dense intensity
            return isDay ? <WiDayShowers /> : <WiNightShowers />;
        case 61: // Rain: Slight
        case 63: // Rain: Moderate
        case 65: // Rain: Heavy intensity
            return isDay ? <WiDayRain /> : <WiNightRain />;
        case 71: // Snow fall: Slight
        case 73: // Snow fall: Moderate
        case 75: // Snow fall: Heavy intensity
            return <WiSnowflakeCold />;
        case 95: // Thunderstorm: Slight or moderate
        case 96: // Thunderstorm with slight hail
        case 99: // Thunderstorm with heavy hail
            return isDay ? <WiDayThunderstorm /> : <WiNightThunderstorm />;
        default:
            return "unknown";
    }
};