import { useState } from "react";

import { StyledCell } from "./styles/StyledCell";
import { Tetrominos } from "../tetrominos";

const Cell = ({ type }) => {
  return (
    <StyledCell type={type} color={Tetrominos[type].color}>
      {type}
    </StyledCell>
  );
};

export default Cell;
