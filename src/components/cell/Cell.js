import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { whitePieces, blackPieces } from "../../pieces/ChessPieces";
import Piece from "./Piece";
import classes from "./Cell.module.css";

const Cell = ({ number, pieceId }) => {
  const cellNumber = calculateCellNumber(number);
  const [piece, setPiece] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setPiece(getCurrentPiece(pieceId));
  }, [pieceId]);

  const calculateCellClass = () => {
    const positionNumbers = cellNumber.split("-");
    if (positionNumbers[1] % 2 === 0) {
      return positionNumbers[0] % 2 === 0
        ? classes.darkCell
        : classes.whiteCell;
    } else {
      return positionNumbers[0] % 2 === 0
        ? classes.whiteCell
        : classes.darkCell;
    }
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
    console.log("Dragging over " + cellNumber);
  };

  const handleOnDrop = (e) => {
    let transferedId = JSON.parse(e.dataTransfer.getData("pieceData"));
    dispatch({
      type: "DRAW_POSITIONS",
      id: transferedId.id,
      oldPosition: transferedId.oldPosition,
      newPosition: cellNumber,
    });
  };

  return (
    <div
      droppable={1}
      onDragOver={(e) => handleOnDragOver(e)}
      onDrop={(e) => handleOnDrop(e)}
      className={calculateCellClass()}
    >
      <Piece id={pieceId} currentPosition={cellNumber}>
        {piece}
      </Piece>
    </div>
  );
};
export default Cell;

function calculateCellNumber(number) {
  return `${(number + 1) % 8 === 0 ? 8 : (number + 1) % 8}-${
    (number + 1) % 8 === 0 ? (number + 1) / 8 : Math.floor((number + 1) / 8) + 1
  }`;
}

function getCurrentPiece(pieceId) {
  if (pieceId === "") {
    return null;
  } else if (pieceId.charAt(0) === "w") {
    return whitePieces[pieceId];
  } else {
    return blackPieces[pieceId];
  }
}
