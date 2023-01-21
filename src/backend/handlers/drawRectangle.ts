import { Duplex } from 'stream';

import { mouse, Button, straightTo, Point } from '@nut-tree/nut-js';

export async function drawRectangle(
  command: string,
  args: string[],
  stream: Duplex,
): Promise<void> {
  const width = Number(args[0]);
  const length = Number(args[1] || args[0]);
  const position = await mouse.getPosition();

  await mouse.pressButton(Button.LEFT);

  await mouse.move(straightTo(new Point(position.x + width, position.y)));
  await mouse.move(straightTo(new Point(position.x + width, position.y + length)));
  await mouse.move(straightTo(new Point(position.x, position.y + length)));
  await mouse.move(straightTo(new Point(position.x, position.y)));

  await mouse.releaseButton(Button.LEFT);

  stream.write(command);
}
