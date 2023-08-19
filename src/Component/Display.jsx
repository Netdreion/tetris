import { useState } from "react";
import { StyledDisplay } from "./styles/StyledDisplay";

function DisPlay({ gameOver, text }) {
  return <StyledDisplay gameOver={gameOver}> {text}</StyledDisplay>;
}

export default DisPlay;
