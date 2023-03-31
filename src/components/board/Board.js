import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cell from "../cell/Cell";
import classes from "./Board.module.css";

const Board = () => {
  const { positions } = useSelector((state) => state?.boardReducer);
  const [joinedBoardState, setJoinedBoardState] = useState(
    joinBoardState(positions)
  );

  useEffect(() => {
    setJoinedBoardState(joinBoardState(positions));
  }, [positions]);

  return (
    <div className={classes.board}>
      <Grid container columns={{ xs: 16 }}>
        {Array.from(Array(64)).map((_, index) => (
          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            key={`${(index + 1) % 8 === 0 ? 8 : (index + 1) % 8}-${
              Math.floor((index + 1) / 8) + 1
            }`}
          >
            <div>
              <Cell number={index} pieceId={joinedBoardState[index]} />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Board;

const joinBoardState = (positions) => {
  return [...positions].reduce(
    (joinedRows, currentRow) => joinedRows.concat(currentRow),
    []
  );
};
