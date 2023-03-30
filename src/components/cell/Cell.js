import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { whitePieces, blackPieces } from "./ChessPieces";

const Cell = ({ number }) => {
  const cellNumber = calculateCellNumber(number);
  const boardInitialState = useSelector((state) => state?.boardReducer);
  const [piece, setPiece] = useState(null)

  useEffect(() => {
    setPiece(getCurrentPiece(cellNumber, boardInitialState))
  }, [boardInitialState])


  return <div draggable="true">{piece}</div>;
};
export default Cell;

function calculateCellNumber(number) {
  return `${(number + 1) % 8 === 0 ? 8 : (number + 1) % 8}-${(number + 1) % 8 === 0 ? (number + 1) / 8 : Math.floor((number + 1) / 8) + 1}`;
}
function getCurrentPiece (cellNumber, boardState){
    console.log(cellNumber)
    const pieces = Object.entries(boardState.whites).concat(Object.entries(boardState.blacks));
    // console.log(pieces)
    const foundPiece = pieces.find(p => p[1] === cellNumber);
    console.log(foundPiece)

    if (foundPiece == undefined) {
        return null;
    }else {
        if(foundPiece[0].includes('white')) {
            return extractPieceElement(whitePieces, foundPiece[0]);
        }else {
            return extractPieceElement(blackPieces, foundPiece[0]);
        }
    }
}

function extractPieceElement(pieces, foundPiece) {
    return Object.entries(pieces).filter(p => foundPiece.includes(p[0])).map(p => p[1])[0]
}


