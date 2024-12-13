import { actions } from './boardConstants';
import { StateType, ActionsType } from '@/lib/types';

export const boardReducer = (state: StateType, action: ActionsType) => {
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
    case actions.move:
      // Using Math.max/min in each case to prevent the robot from going off the grid
      const newPosition = { ...state.position };
      const newTotalMoves = state.totalMoves;
      switch (state.direction) {
        // North
        case 0:
          newPosition.y = Math.max(0, state.position.y - 1);
          break;
        // East
        case 90:
          newPosition.x = Math.min(state.boardSize - 1, state.position.x + 1);
          break;
        // South
        case 180:
          newPosition.y = Math.min(state.boardSize - 1, state.position.y + 1);
          break;
        // West
        case 270:
          newPosition.x = Math.max(0, state.position.x - 1);
          break;
      }

      const didPositionChange =
        newPosition.x !== state.position.x ||
        newPosition.y !== state.position.y;

      return {
        ...state,
        position: newPosition,
        //increment totalMoves only if the position of the robot changed
        totalMoves: didPositionChange ? newTotalMoves + 1 : state.totalMoves,
      };
    case actions.place:
      return {
        ...state,
        position: action.payload,
        totalMoves: 0,
      };
    default:
      return state;
  }
};
