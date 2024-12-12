import { actions } from './boardConstants';
import { StateType, ActionsType } from '@/lib/types';

// TODO: add case for moving robot and placing robot in new cell

export const boardReducer = (state: StateType, action: ActionsType) => {
  console.log('reducer with action', action);
  console.log('current state:', state);

  switch (action.type) {
    case actions.rotate_left:
      return {
        ...state,
        direction: (state.direction + 270) % 360,
      };
    case actions.rotate_right:
      return {
        ...state,
        direction: (state.direction + 90) % 360,
      };
    default:
      return state;
  }
};
