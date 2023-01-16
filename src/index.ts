import { httpServer } from './http_server/createServer.js';
import { mouse } from '@nut-tree/nut-js';

const HTTP_PORT = 8182;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);
