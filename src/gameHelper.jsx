export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
  return Array.from(
    Array(STAGE_HEIGHT),
    () =>
      //create a empty array
      new Array(STAGE_WIDTH).fill(0, "clear") //arrow func to create a new array and fill it with 0, and clear
  );
};
