interface Actions {
  rotate_left: string;
  rotate_right: string;
  move: string;
}

interface Position {
  x: number;
  y: number;
}

interface State {
  position: Position;
  direction: number;
  boardSize: number;
}

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
