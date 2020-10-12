import React from "react";
import { ReactComponent as CloseButtonIcon } from "./assets/CloseButtonIcon.svg";
import { StyledOpener } from "./styled";

export default function Cloaser({ onClick }) {
  return (
    <StyledOpener onClick={onClick}>
      <CloseButtonIcon className="burger" />
      {/* {!openNavTablet && <Arrow className="arrow" />} */}
    </StyledOpener>
  );
}
