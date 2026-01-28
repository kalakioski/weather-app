export async function getWeather(city: string) {
  const res = await fetch(`http://localhost:3000/api/weather/${city}`);

  if (!res.ok) {
    throw new Error('City not found');
  }

  return res.json();
}
