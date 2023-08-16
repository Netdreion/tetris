import { useState } from "react";

import { StyledCell } from "./styles/StyledCell";
import {TETROMINOS} from "../tetrominos"

const Cell({type})=> {
   <StyledCell type={'L'} color={TETROMINOS[type].color}>"L"</StyledCell>
}

export default Cell;
