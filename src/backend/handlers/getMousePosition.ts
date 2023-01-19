import { Duplex } from 'stream';

import { mouse } from '@nut-tree/nut-js';

export async function getMousePosition(
  command: string,
  _args: string[],
  stream: Duplex,
): Promise<void> {
  const position = await mouse.getPosition();

  stream.write(`${command} ${position.x},${position.y}`);
}
