import { Duplex } from 'stream';

import { mouse, Button, Point, straightTo } from '@nut-tree/nut-js';

export async function drawCircle(command: string, args: string[], stream: Duplex) {
  const radius = Number(args[0]);
  const step = (2 * Math.PI) / 180;
  const end = (360 * Math.PI) / 180;
  const position = await mouse.getPosition();

  await mouse.pressButton(Button.LEFT);

  for (let angle = 0; angle <= end; angle += step) {
    const x = position.x + radius * Math.sin(angle);
    const y = position.y + radius - radius * Math.cos(angle);

    await mouse.move(straightTo(new Point(x, y)));
  }

  await mouse.releaseButton(Button.LEFT);

  stream.write(command);
}
