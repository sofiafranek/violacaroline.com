const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

console.info(`⚡️  starting server (mode: ${dev ? 'develop' : 'production'})`);

const startup = async () => {
  // create nextjs instance
  const app = next({ dev });
  const port = parseInt(process.env.PORT, 10) || 8082;
  await app.prepare();

  // create express server
  const server = express();

  server.all('*', app.getRequestHandler());

  // start server!
  server.listen(port);

  console.info(`🚀 NextJS Server ready at http://localhost:${port}`);
};

startup();
