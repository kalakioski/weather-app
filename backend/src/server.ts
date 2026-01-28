import { buildApp } from './app';

async function start() {
  const app = await buildApp();

  app.listen({ port: 3000, host: '0.0.0.0' }, () => {
    console.log('Server is running at http://localhost:3000');
  });
}

start();
