import { TURN_BLUE, INIT_GRID } from "./actions";

const initialState = {};

export default function cellReducer(state = initialState, action) {
  if (action.type === INIT_GRID) {
    return {
      ...state,
      x: action.x,
      y: action.y
    };
  }

  /**
   * EVERYTHING ABOVE THIS POINT HAPPENS TO EVERY SINGLE CELL
   */
  if (action.x !== state.x) {
    return state;
  }
  if (action.y !== state.y) {
    return state;
  }
  /**
   * EVERYTHING BELOW THIS POINT ONLY HAPPENS IF action.x === state.x and action.y === state.y
   */

  if (action.type === TURN_BLUE) {
    return {
      ...state,
      backgroundColor: "blue"
    };
  }

  return state;
}
