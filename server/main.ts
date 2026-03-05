import type { AddressInfo } from 'node:net';
import { serve } from '@hono/node-server';
import app from './app.js';

const getPort = (): number => {
  const envPort = process.env.PORT ?? process.env.API_PORT;
  if (!envPort) {
    return 3301;
  }

  const parsedPort = Number.parseInt(envPort, 10);
  if (Number.isNaN(parsedPort)) {
    return 3301;
  }

  return parsedPort;
};

const port = getPort();

const server = serve({ fetch: app.fetch, port }, (info: AddressInfo) => {
  console.log(`Server running on http://localhost:${info.port}`);
});

server.on('error', (error: NodeJS.ErrnoException) => {
  if (error.code === 'EADDRINUSE') {
    console.error(
      `Port ${port} is already in use. Stop the existing process or run with PORT=<other-port>.`,
    );
    process.exit(1);
  }
});
