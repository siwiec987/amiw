import {WiDaySunny, WiDaySunnyOvercast, WiCloudy, WiFog, WiDayShowers, WiDayRain, WiSnowflakeCold, WiDayThunderstorm, WiAlien} from "react-icons/wi";
import {WiNightClear, WiNightAltPartlyCloudy, WiNightShowers, WiNightRain, WiNightThunderstorm} from "react-icons/wi";

export function getWeatherIcon(weatherCode, isDay) {
    switch (weatherCode) {
        case 0:
        case 1:
            return isDay ? <WiDaySunny /> : <WiNightClear />;
        case 2:
        return isDay ? <WiDaySunnyOvercast /> : <WiNightAltPartlyCloudy />;
        case 3:
            return <WiCloudy />;
        case 45:
        case 48:
            return <WiFog />;
        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
        case 80:
        case 81:
        case 82:
            return isDay ? <WiDayShowers /> : <WiNightShowers />;
        case 61:
        case 63: 
        case 65: 
        case 66:
        case 67:
            return isDay ? <WiDayRain /> : <WiNightRain />;
        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
            return <WiSnowflakeCold />;
        case 95:
        case 96:
        case 98:
        case 99:
            return isDay ? <WiDayThunderstorm /> : <WiNightThunderstorm />;
        default:
            return <WiAlien />;
    }
};