import { StateType } from '@/lib/types';
import { ButtonConfig } from '@/lib/types';

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
  totalMoves: 0,
};

export const listOfButtons: ButtonConfig[] = [
  {
    type: 'Left',
    action: actions.rotate_left,
    keyBind: 'ArrowLeft',
  },
  {
    type: 'Move',
    action: actions.move,
    keyBind: 'ArrowUp',
  },
  {
    type: 'Right',
    action: actions.rotate_right,
    keyBind: 'ArrowRight',
  },
];
