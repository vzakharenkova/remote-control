import { Duplex } from 'stream';

import { getMousePosition } from '../handlers/getMousePosition.js';
import { moveMouse } from '../handlers/moveMouse.js';

interface Handlers {
  [key: string]: (command: string, args: string[], stream: Duplex) => void;
}

export const HANDLERS: Handlers = {
  mouse_up: (command, args, stream) => moveMouse(command, args, stream),
  mouse_down: (command, args, stream) => moveMouse(command, args, stream),
  mouse_left: (command, args, stream) => moveMouse(command, args, stream),
  mouse_right: (command, args, stream) => moveMouse(command, args, stream),
  mouse_position: (command, args, stream) => getMousePosition(command, args, stream),
};
