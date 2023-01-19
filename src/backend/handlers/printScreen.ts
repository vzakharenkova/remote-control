import { Duplex } from 'stream';

import { screen, mouse, Region } from '@nut-tree/nut-js';
import Jimp from 'jimp';

const SC_SIDE_LENGTH = 200;

export async function printScreen(command: string, _args: string[], stream: Duplex) {
  const position = await mouse.getPosition();

  try {
    const sc = await screen
      .grabRegion(
        new Region(
          position.x - SC_SIDE_LENGTH / 2,
          position.y - SC_SIDE_LENGTH / 2,
          SC_SIDE_LENGTH,
          SC_SIDE_LENGTH,
        ),
      )
      .then((img) => img.toRGB());

    const buffer = await new Jimp(sc).getBufferAsync(Jimp.MIME_PNG);

    stream.write(`${command} ${buffer.toString('base64')}`);
  } catch {
    stream.write('coordinates_outside_of_display');
  }
}
