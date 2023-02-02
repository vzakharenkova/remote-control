import { mouse, down, Point, left, right, up } from '@nut-tree/nut-js';

import { Duplex } from 'stream';

interface DirectionHandlers {
  [key: string]: (px: number) => Promise<Point[]>;
}

const directionHandlers: DirectionHandlers = {
  down: (px: number) => down(px),
  up: (px: number) => up(px),
  left: (px: number) => left(px),
  right: (px: number) => right(px),
};

export async function moveMouse(command: string, args: string[], stream: Duplex): Promise<void> {
  const direction = command.split('_')[1];

  await mouse.move(directionHandlers[direction](Number(args[0])));

  stream.write(command);
}
