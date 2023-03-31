export const boardInitialState = {
  positions: [
    ["wR", "wk", "wB", "wQ", "wK", "wB", "wk", "wR"],
    ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
    ["bR", "bk", "bB", "bQ", "bK", "bB", "bk", "bR"],
  ],
};
const boardReducer = (state = boardInitialState, action) => {
  switch (action.type) {
    case "DRAW_POSITIONS":
      return {
        ...state,
        positions: updatePiecePosition(
          action.id,
          action.oldPosition,
          action.newPosition,
          state.positions
        ),
      };
    default:
      return state;
  }
};

const updatePiecePosition = (id, oldPosition, newPosition, positions) => {
  const oldPositionX = oldPosition.charAt(0) - 1;
  const oldPositionY = oldPosition.charAt(2) - 1;
  const newPositionX = newPosition.charAt(0) - 1;
  const newPositionY = newPosition.charAt(2) - 1;

  const positionsCopy = [...positions];
  const newPositionsYCopy = [...positionsCopy[newPositionY]];
  newPositionsYCopy[newPositionX] = id;
  const oldPositionsYCopy = [...positionsCopy[oldPositionY]];
  oldPositionsYCopy[oldPositionX] = "";
  positionsCopy[newPositionY] = newPositionsYCopy;
  positionsCopy[oldPositionY] = oldPositionsYCopy;
  return positionsCopy;
};

export default boardReducer;
