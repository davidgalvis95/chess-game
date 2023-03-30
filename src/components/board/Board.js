import { Grid } from "@mui/material";
import Cell from "../cell/Cell"




const Board = () => {
    return (
        <div>
        <Grid container columns={{ xs:16 }}>
          {Array.from(Array(64)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={`${(index+1) % 8 === 0? 8 :(index+1) % 8}-${Math.floor((index+1) / 8)+1}`}>
              <div>
                <Cell number={index}/>  
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    )
}

export default Board