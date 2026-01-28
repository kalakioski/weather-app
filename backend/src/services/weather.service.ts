import axios from 'axios';
import { env } from '../config/env';

export async function fetchWeather(city: string) {
  const res = await axios.get(
    'https://api.openweathermap.org/data/2.5/weather',
    {
      params: {
        q: city,
        appid: env.OPENWEATHER_API_KEY,
        units: 'metric',
      },
    },
  );

  return res.data;
}
