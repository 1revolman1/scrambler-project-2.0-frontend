import React from "react";
import { StyledContainer, StyledAdviceContainer } from "./styled";

import Advice from "./components/Advice";

// const theam = ["WHITE", "BLACK"];

export default function AdviceComponent() {
  return (
    <StyledContainer>
      <h6>Learnings from last match</h6>
      <StyledAdviceContainer>
        <Advice theam="WHITE" />
        <Advice theam="BLACK" />
        <Advice theam="BLACK" />
        <Advice theam="WHITE" />
      </StyledAdviceContainer>
    </StyledContainer>
  );
}
