import Fastify from 'fastify';
import cors from '@fastify/cors';
import weatherRoutes from './routes/weather.route';

export async function buildApp() {
  const app = Fastify({ logger: true });

  await app.register(cors, {
    origin: 'http://localhost:5173',
  });

  app.register(weatherRoutes, { prefix: '/api/weather' });

  return app;
}
