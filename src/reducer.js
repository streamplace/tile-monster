import { INIT_GRID } from "./actions";
import cellReducer from "./cellReducer";

const initialState = {
  grid: []
};

export default function rootReducer(state = initialState, action) {
  state = {
    ...state,
    grid: state.grid.map((row, y) => {
      return row.map((cell, x) => {
        return cellReducer(cell, action);
      });
    })
  };
  // state.grid.forEach((row, y) => {
  //   row.forEach((cell, x) => {
  //     state.grid[y][x] = cellReducer(cell, {
  //       type: INIT_GRID,
  //       x,
  //       y
  //     });
  //   });
  // });

  if (action.type === INIT_GRID) {
    const { width, height } = action;
    const newGrid = [];
    for (let y = 0; y < height; y++) {
      newGrid[y] = [];
      for (let x = 0; x < width; x++) {
        newGrid[y][x] = cellReducer(undefined, {
          type: INIT_GRID,
          x,
          y
        });
      }
    }
    return {
      ...state,
      grid: newGrid
    };
  }
  return state;
}
