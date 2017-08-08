import {
  TURN_BLUE,
  TURN_BROWN,
  TURN_GREEN,
  TURN_GREY,
  INIT_GRID
} from "./actions";

const initialState = {};

export default function cellReducer(state = initialState, action) {
  if (action.type === INIT_GRID) {
    return {
      ...state,
      x: action.x,
      y: action.y,
      clickedNum: 0
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
      backgroundColor: "#3fa9d3",
      clickedNum: 1
    };
  }

  if (action.type === TURN_BROWN) {
    return {
      ...state,
      backgroundColor: "#A8530C  ",
      clickedNum: 2
    };
  }

  if (action.type === TURN_GREEN) {
    return {
      ...state,
      backgroundColor: "#DAF7A6",
      clickedNum: 3
    };
  }
  if (action.type === TURN_GREY) {
    return {
      ...state,
      backgroundColor: "#eee",
      clickedNum: 0
    };
  }

  return state;
}
