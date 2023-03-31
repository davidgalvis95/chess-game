import {King as BKing} from "./darks/King";
import {Queen as BQueen} from "./darks/Queen";
import {Bishop as BBishop} from "./darks/Bishop";
import {Knight as BKnight} from "./darks/Knight";
import {Rook as BRook} from "./darks/Rook";
import {Pawn as BPawn} from "./darks/Pawn";
import {King as WKing} from "./whites/King";
import {Queen as WQueen} from "./whites/Queen";
import {Bishop as WBishop} from "./whites/Bishop";
import {Knight as WKnight} from "./whites/Knight";
import {Rook as WRook} from "./whites/Rook";
import {Pawn as WPawn} from "./whites/Pawn";

export const whitePieces = {
  wR: <WRook/>,
  wk: <WKnight/>,
  wB: <WBishop/>,
  wQ: <WQueen/>,
  wK: <WKing />,
  wp: <WPawn/>,
};

export const blackPieces = {
  bR: <BRook/>,
  bk: <BKnight/>,
  bB: <BBishop/>,
  bQ: <BQueen/>,
  bK: <BKing />,
  bp: <BPawn/>,
};
