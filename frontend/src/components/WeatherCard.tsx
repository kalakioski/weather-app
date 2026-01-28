import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiFog,
  WiThunderstorm,
} from 'react-icons/wi';
import type { WeatherData } from '../types/WeatherData';

type Props = {
  data: WeatherData;
};

function getIcon(main: string, size = 150) {
  switch (main) {
    case 'Clear':
      return <WiDaySunny size={size} />;
    case 'Clouds':
      return <WiCloudy size={size} />;
    case 'Rain':
      return <WiRain size={size} />;
    case 'Snow':
      return <WiSnow size={size} />;
    case 'Fog':
    case 'Mist':
    case 'Haze':
      return <WiFog size={size} />;
    case 'Thunderstorm':
      return <WiThunderstorm size={size} />;
    default:
      return <WiDaySunny size={size} />;
  }
}

export function WeatherCard({ data }: Props) {
  const temp = Math.round(data.main.temp);

  return (
    <div>
      <h2>
        {data.name}, {data.sys.country}
      </h2>

      {getIcon(data.weather[0].main)}
      <p style={{ fontSize: '20px' }}>{data.weather[0].description}</p>

      <h2>{temp}°C</h2>

      <div
        style={{
          display: 'flex',
          gap: 16,
          justifyContent: 'center',
          fontSize: '20px',
        }}
      >
        <span>💧 {data.main.humidity}%</span>
        <span>💨 {data.wind.speed} m/s</span>
      </div>
    </div>
  );
}
