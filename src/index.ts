import { WebSocketServer, createWebSocketStream } from 'ws';

import { httpServer } from './http_server/createServer.js';
import { blue, HANDLERS, yellow } from './backend/utils/shared.js';

const HTTP_PORT = 8080;

const wsServer = new WebSocketServer({ server: httpServer });

wsServer.on('connection', async (ws) => {
  console.log(blue(`WebSocket connnection is started on port ${HTTP_PORT}`));

  const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

  duplex.on('data', async (data: string) => {
    console.log(yellow('received: %s'), data);

    const [command, ...args]: string[] = data.split(' ');

    HANDLERS[command](command, args, duplex);
  });

  duplex.on('close', () => console.log(blue('WebSocket connnection is closed!')));
});

wsServer.on('close', () => console.log(blue('WebSocket Server is closed!')));

httpServer.on('close', () => {
  wsServer.clients.forEach((client) => client.terminate());
  console.log('HTTP server is closed!');
});

process.on('SIGINT', () => {
  wsServer.clients.forEach((client) => client.terminate());
  httpServer.close();
  process.exit();
});

httpServer.listen(HTTP_PORT, () => {
  console.log(`Start static http server on the ${HTTP_PORT} port!`);
});
