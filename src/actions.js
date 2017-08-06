export const INIT_GRID = "INIT_GRID";
export const initGrid = (width, height) => {
  return {
    type: INIT_GRID,
    width,
    height
  };
};

export const TURN_BLUE = "TURN_BLUE";
export const turnBlue = (x, y) => {
  return {
    type: TURN_BLUE,
    x,
    y
  };
};
