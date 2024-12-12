// TODO: add action for placing robot in new cell
import { Dispatch } from 'react';

export interface Actions {
  rotate_left: string;
  rotate_right: string;
  move: string;
}

interface Position {
  x: number;
  y: number;
}

// TODO: add totalMoves state

export interface State {
  position: Position;
  direction: number;
  boardSize: number;
}

export interface BoardContextType {
  state: State;
  dispatch: Dispatch<Actions>;
}
