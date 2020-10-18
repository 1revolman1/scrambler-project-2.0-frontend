import React from "react";
import { StyledIpBlock, StyledContainer } from "./styled";

export default function IpContainer({ ip }) {
  return (
    <StyledContainer>
      <h2>Информация про IP:</h2>
      <StyledIpBlock>
        <h3>Ваш IP</h3>
        <p>{ip}</p>
      </StyledIpBlock>
    </StyledContainer>
  );
}
