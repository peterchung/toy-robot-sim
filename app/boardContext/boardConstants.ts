import { State, Actions } from '@/lib/types';

export const actions: Actions = {
  rotate_left: 'rotate_left',
  rotate_right: 'rotate_right',
  move: 'move',
};

export const initialState: State = {
  position: { x: 0, y: 0 },
  direction: 0,
  boardSize: 5,
};
