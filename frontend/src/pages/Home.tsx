import { useState } from 'react';
import { getWeather } from '../api/weatherApi';
import { SearchBox } from '../components/SearchBox';
import { WeatherCard } from '../components/WeatherCard';
import type { WeatherData } from '../types/WeatherData';

export default function Home() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function search(city: string) {
    try {
      setError(null);
      setLoading(true);
      const res = await getWeather(city);
      setData(res);
    } catch (err: Error | unknown) {
      const message = err instanceof Error ? err.message : 'Failed to fetch';
      setError(message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        backgroundColor: '#2e2e4e',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '700px',
        padding: '30px 0 30px 0',
        width: '500px',
      }}
    >
      <h1>🌤 Weather App</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '30px 0 30px 0',
        }}
      >
        <SearchBox onSearch={search} loading={loading} />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {data && <WeatherCard data={data} />}
    </div>
  );
}
