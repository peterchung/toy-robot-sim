import { actions } from './boardConstants';
import { State, Actions } from '@/lib/types';

// TODO: add case for moving robot and placing robot in new cell

export const boardReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case actions.rotate_left:
      return {
        ...state,
        direction: (state.direction + 270) % 360,
      };
    case actions.rotate_right:
      return {
        ...state,
        directions: (state.direction + 90) % 360,
      };
    default:
      return state;
  }
};
