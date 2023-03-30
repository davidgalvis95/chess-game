import {
  TbChessKing,
  TbChessKingFilled,
  TbChessQueen,
  TbChessQueenFilled,
  TbChessBishop,
  TbChessBishopFilled,
  TbChessKnight,
  TbChessKnightFilled,
  TbChessRook,
  TbChessRookFilled,
  TbChess,
  TbChessFilled,
} from "react-icons/tb";

export const whitePieces = {
  Rook: <TbChessRook />,
  Knight: <TbChessKnight />,
  Bishop: <TbChessBishop />,
  Queen: <TbChessQueen />,
  King: <TbChessKing />,
  Pawn: <TbChess />,
};

export const blackPieces = {
  Rook: <TbChessRookFilled />,
  Knight: <TbChessKnightFilled />,
  Bishop: <TbChessBishopFilled />,
  Queen: <TbChessQueenFilled />,
  King: <TbChessKingFilled />,
  Pawn: <TbChessFilled />,
};
