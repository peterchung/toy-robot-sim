import { StateType } from '@/lib/types';

export const actions = {
  rotate_left: 'rotate_left',
  rotate_right: 'rotate_right',
  move: 'move',
  place: 'place',
} as const;

export const initialState: StateType = {
  position: { x: 0, y: 4 },
  direction: 0,
  boardSize: 5,
};
