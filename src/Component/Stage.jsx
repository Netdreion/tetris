import { useState } from "react";
import Cell from "./Cell";

function Stage({ stage }) {
  return (
    <div>
      {stage.map(
        (
          row // map the stage prop passed in to create cell
        ) => row.map((cell, x) => <Cell key={x} type={cell[0]} />)
      )}
    </div>
  );
}

export default Stage;
