// TODO: add action for placing robot in new cell
import { actions } from '@/app/boardContext/boardConstants';
import { Dispatch } from 'react';

export type ActionsType =
  | { type: 'rotate_left' }
  | { type: 'rotate_right' }
  | { type: 'move' };

interface PositionType {
  x: number;
  y: number;
}

// TODO: add totalMoves state

export interface StateType {
  position: Position;
  direction: number;
  boardSize: number;
}

export interface BoardContextType {
  state: State;
  dispatch: Dispatch<ActionsType>;
}

export type ButtonConfig = {
  type: string;
  action: keyof typeof actions;
  keyBind?: string;
};
