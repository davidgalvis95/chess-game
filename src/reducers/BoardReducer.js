
export const boardInitialState = {
    whites: {
        whiteLeftRook: "1-1",
        whiteLeftKnight: "2-1",
        whiteLeftBishop: "3-1",
        whiteQueen: "4-1",
        whiteKing: "5-1",
        whiteRightBishop: "6-1",
        whiteRightKnight: "7-1",
        whiteRightRook: "8-1",
        whitePawn1: "1-2",
        whitePawn2: "2-2",
        whitePawn3: "3-2",
        whitePawn4: "4-2",
        whitePawn5: "5-2",
        whitePawn6: "6-2",
        whitePawn7: "7-2",
        whitePawn8: "8-2",
    },
    blacks:{
        blackLeftRook: "1-8",
        blackLeftKnight: "2-8",
        blackLeftBishop: "3-8",
        blackKing: "4-8",
        blackQueen: "5-8",
        blackRightBishop: "6-8",
        blackRightKnight: "7-8",
        blackRightRook: "8-8",
        blackPawn1: "1-7",
        blackPawn2: "2-7",
        blackPawn3: "3-7",
        blackPawn4: "4-7",
        blackPawn5: "5-7",
        blackPawn6: "6-7",
        blackPawn7: "7-7",
        blackPawn8: "8-7",
    }
};
  
  const boardReducer = (state = boardInitialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default boardReducer;