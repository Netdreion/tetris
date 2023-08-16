import Cell from "./Cell";
import React from "react";
import { StyledStage } from "./styles/StyledStage";

const Stage = ({ stage }) => {
  <StyledStage>
    {stage.map(
      (
        row // map the stage prop passed in to create cell
      ) => row.map((cell, x) => <Cell key={x} type={cell[0]} />)
    )}
  </StyledStage>;
};

export default Stage;
