import { Duplex } from 'stream';

import { drawCircle } from '../handlers/drawCircle.js';
import { drawRectangle } from '../handlers/drawRectangle.js';
import { getMousePosition } from '../handlers/getMousePosition.js';
import { moveMouse } from '../handlers/moveMouse.js';
import { printScreen } from '../handlers/printScreen.js';

interface Handlers {
  [key: string]: (command: string, args: string[], stream: Duplex) => void;
}

export const HANDLERS: Handlers = {
  mouse_up: (command, args, stream) => moveMouse(command, args, stream),
  mouse_down: (command, args, stream) => moveMouse(command, args, stream),
  mouse_left: (command, args, stream) => moveMouse(command, args, stream),
  mouse_right: (command, args, stream) => moveMouse(command, args, stream),
  mouse_position: (command, args, stream) => getMousePosition(command, args, stream),
  draw_square: (command, args, stream) => drawRectangle(command, args, stream),
  draw_rectangle: (command, args, stream) => drawRectangle(command, args, stream),
  draw_circle: (command, args, stream) => drawCircle(command, args, stream),
  prnt_scrn: (command, args, stream) => printScreen(command, args, stream),
};

export function red(str: string): string {
  return `\x1b[31m${str}\x1b[0m`;
}

export function yellow(str: string): string {
  return `\x1b[33m${str}\x1b[0m`;
}

export function blue(str: string): string {
  return `\x1b[36m${str}\x1b[0m`;
}
