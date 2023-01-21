import { Duplex } from 'stream';

import { mouse, down, left, right, up, Button } from '@nut-tree/nut-js';

export async function drawRectangle(
  command: string,
  args: string[],
  stream: Duplex,
): Promise<void> {
  const width = Number(args[0]);
  const length = Number(args[1] || args[0]);

  await mouse.pressButton(Button.LEFT);

  await mouse.move(right(width));
  await mouse.move(down(length));
  await mouse.move(left(width));
  await mouse.move(up(length));

  await mouse.releaseButton(Button.LEFT);

  stream.write(command);
}
