import {
  TURN_BLUE,
  TURN_BROWN,
  TURN_GREEN,
  TURN_GREY,
  INIT_GRID,
  EXPORT_GRID,
  CREATE_MOUNTAIN
} from "./actions";

const initialState = {};

/* counter 1 to 600, for 1 through 9 join 00 at beginning, 
for 10 - 99 join 0 at begining,*/

export default function cellReducer(state = initialState, action) {
  if (action.type === INIT_GRID) {
    let number = 1 + action.x + 30 * action.y;
    number.toString();
    return {
      ...state,
      x: action.x,
      y: action.y,
      clickedNum: 0,
      number:
        "https://s3-us-west-2.amazonaws.com/acatmoreimages/partials/image_part_" +
        number +
        ".jpg",
      updateTime: new Date().getTime()
    };
  }

  if (action.type === EXPORT_GRID) {
    console.log(JSON.stringify(state));
    return {
      ...state
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
  if (action.type === CREATE_MOUNTAIN) {
    /* x+1, y+1, x-1, x-1, change backgroundColor*/
    console.log("one clicked");
    return {
      ...state,
      backgroundColor: "#A8530C",
      updateTime: new Date().getTime()
    };
  }
  if (action.type === TURN_BLUE) {
    return {
      ...state,
      backgroundColor: "rgba(255,255,255,.2)",
      clickedNum: 2,
      updateTime: new Date().getTime()
    };
  }

  if (action.type === TURN_BROWN) {
    return {
      ...state,
      backgroundColor: "rgba(241,172,11,.4)",
      clickedNum: 3,
      updateTime: new Date().getTime()
    };
  }

  if (action.type === TURN_GREEN) {
    return {
      ...state,
      backgroundColor: "rgba(211,224,23,.4)",
      clickedNum: 1,
      updateTime: new Date().getTime()
    };
  }
  if (action.type === TURN_GREY) {
    return {
      ...state,
      backgroundColor: "rgba(252,2,65,.2)",
      clickedNum: 0,
      updateTime: new Date().getTime()
    };
  }

  return state;
}
