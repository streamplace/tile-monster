import { INIT_GRID, EXPORT_GRID } from "./actions";
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
  if (action.type === EXPORT_GRID) {
    const { width, height } = action;
    const savedGrid = [];
    for (let y = 0; y < height; y++) {
      savedGrid[y] = [];
      for (let x = 0; x < width; x++) {
        savedGrid[y][x] = cellReducer({
          type: EXPORT_GRID,
          x,
          y
        });
      }
    }
    console.log(JSON.stringify(savedGrid));
  }
  return state;
}
