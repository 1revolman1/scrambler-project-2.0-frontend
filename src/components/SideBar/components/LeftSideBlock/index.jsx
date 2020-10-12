import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  StyledRightSideBlock,
  StyledArrow,
  StyledRelativeContainer,
} from "./styled";

import TransfersSide from "./pages/Transfers";
export default React.memo(function LeftSideBlock({ leftPanel, openLeftPanel }) {
  return (
    <StyledRightSideBlock data-left={leftPanel}>
      <StyledRelativeContainer>
        <StyledArrow onClick={openLeftPanel} />
        <Switch>
          <Route path="/transfers" component={TransfersSide} />
        </Switch>
      </StyledRelativeContainer>
    </StyledRightSideBlock>
  );
});
