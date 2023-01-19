import { httpServer } from './http_server/createServer.js';
import { WebSocketServer, createWebSocketStream } from 'ws';
import { HANDLERS } from './backend/utils/shared.js';

const HTTP_PORT = 8080;

const wsServer = new WebSocketServer({ server: httpServer });

wsServer.on('connection', async (ws) => {
  console.log('WebSocket connnection is started!');

  const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

  duplex.on('data', async (data: string) => {
    console.log('received: %s', data);

    const [command, ...args]: string[] = data.split(' ');

    HANDLERS[command](command, args, duplex);
  });

  duplex.on('close', () => console.log('WebSocket connnection is closed!'));
});

wsServer.on('close', () => console.log('WebSocket Server is closed!'));

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
