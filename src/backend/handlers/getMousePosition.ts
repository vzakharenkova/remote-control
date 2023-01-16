import { Duplex } from 'stream';

import { mouse } from '@nut-tree/nut-js';

export async function getMousePosition(_command: string, _args: string[], stream: Duplex) {
  const position = await mouse.getPosition();

  stream.write(`mouse_position ${position.x},${position.y}`);
}
