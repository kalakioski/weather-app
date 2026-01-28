import { FastifyInstance } from 'fastify';
import { getWeather } from '../controllers/weather.controller';

export default async function (app: FastifyInstance) {
  app.get('/:city', getWeather);
}
