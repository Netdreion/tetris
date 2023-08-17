import { useState } from "react";

import { StyledCell } from "./styles/StyledCell";
import { Tetrominos } from "../tetrominos";

const Cell = ({ type }) => {
  return (
    <StyledCell type={"L"} color={Tetrominos[type].color}>
      "L"
    </StyledCell>
  );
};

export default Cell;
