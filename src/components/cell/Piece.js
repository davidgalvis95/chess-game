import classes from "./Piece.module.css";

const Piece = (props) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData(
      "pieceData",
      JSON.stringify({
        id: props.id,
        oldPosition: props.currentPosition,
      })
    );
  };
  return (
    <div
      className={classes.chessPiece}
      draggable={true}
      onDragStart={(e) => handleDragStart(e)}
    >
      {props.children}
    </div>
  );
};

export default Piece;
