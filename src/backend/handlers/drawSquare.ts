import { Duplex } from 'stream';

import { mouse, down, left, right, up, Button } from '@nut-tree/nut-js';

export async function drawSquare(command: string, args: string[], stream: Duplex): Promise<void> {
  const width = Number(args[0]);

  await mouse.pressButton(Button.LEFT);

  await mouse.move(right(width));
  await mouse.move(down(width));
  await mouse.move(left(width));
  await mouse.move(up(width));

  await mouse.releaseButton(Button.LEFT);

  stream.write(command);
}
