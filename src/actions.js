export const INIT_GRID = "INIT_GRID";
export const initGrid = (width, height) => {
  return {
    type: INIT_GRID,
    width,
    height
  };
};

export const TURN_BLUE = "TURN_BLUE";
export const turnBlue = (x, y, clickedNum) => {
  return {
    type: TURN_BLUE,
    x,
    y,
    clickedNum
  };
};

export const TURN_BROWN = "TURN_BROWN";
export const turnBrown = (x, y, clickedNum) => {
  return {
    type: TURN_BROWN,
    x,
    y,
    clickedNum
  };
};

export const TURN_GREEN = "TURN_GREEN";
export const turnGreen = (x, y, clickedNum) => {
  return {
    type: TURN_GREEN,
    x,
    y,
    clickedNum
  };
};

export const TURN_GREY = "TURN_GREY";
export const turnGrey = (x, y, clickedNum) => {
  return {
    type: TURN_GREY,
    x,
    y,
    clickedNum
  };
};
