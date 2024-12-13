import { StateType } from '@/lib/types';
import { ButtonConfig } from '@/lib/types';

export enum actions {
  rotate_left = 'rotate_left',
  rotate_right = 'rotate_right',
  move = 'move',
  place = 'place',
}

export const initialState: StateType = {
  position: { x: 0, y: 0 },
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

export const listOfInstructions = [
  '1. Click on any cell to place the robot (note: placing the robot in a new cell will reset the total move count to 0)',
  "2. Click the 'Move' button or press 'Up' arrow key to move the robot in the direction it's facing",
  "3a. Click the 'Left/Right' buttons or use 'Left/Right' arrow keys to change the robot's direction",
  '3b. Right rotates the direction 90deg clockwise. Left rotates the direction 90deg counter-clockwise',
];
