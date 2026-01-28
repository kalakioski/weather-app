import { FastifyReply, FastifyRequest } from 'fastify';
import { fetchWeather } from '../services/weather.service';

export async function getWeather(
  request: FastifyRequest<{ Params: { city: string } }>,
  reply: FastifyReply,
) {
  const { city } = request.params;
  const data = await fetchWeather(city);
  return data;
}
