export const INIT_GRID = "INIT_GRID";
export const initGrid = (width, height) => {
  return {
    type: INIT_GRID,
    width,
    height
  };
};

export const EXPORT_GRID = "EXPORT_GRID";
export const exportGrid = (width, height) => {
  return {
    type: EXPORT_GRID,
    width,
    height
  };
};
export const CREATE_MOUNTAIN = "CREATE_MOUNTAIN";
export const creMount = (width, height) => {
  return {
    type: CREATE_MOUNTAIN,
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

export const TURN_BROWN = "TURN_BROWN";
export const turnBrown = (x, y) => {
  return {
    type: TURN_BROWN,
    x,
    y
  };
};

export const TURN_GREEN = "TURN_GREEN";
export const turnGreen = (x, y) => {
  return {
    type: TURN_GREEN,
    x,
    y
  };
};

export const TURN_GREY = "TURN_GREY";
export const turnGrey = (x, y) => {
  return {
    type: TURN_GREY,
    x,
    y
  };
};
