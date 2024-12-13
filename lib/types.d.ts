import { actions } from '@/src/app/boardContext/boardConstants';
import { Dispatch } from 'react';

export type ActionsType =
  | { type: 'rotate_left' }
  | { type: 'rotate_right' }
  | { type: 'move' }
  | { type: 'place'; payload?: { x: number; y: number } };

interface PositionType {
  x: number;
  y: number;
}

export interface StateType {
  position: Position;
  direction: number;
  boardSize: number;
  totalMoves: number;
}

export interface BoardContextType {
  state: State;
  dispatch: Dispatch<ActionsType>;
}

export type ButtonConfig = {
  type: string;
  action: keyof typeof actions;
  keyBind: string;
};
