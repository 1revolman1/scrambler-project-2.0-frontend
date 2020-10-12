import React from "react";
import { StyledRightBlock, StyledCross } from "./styled";
import { Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
export default React.memo(function RightSideBlock({
  isRightOpen,
  sidebarOpenRightPanel,
}) {
  return (
    <StyledRightBlock
      className="right-sidebar"
      data-right={isRightOpen}
    >
      <StyledCross onClick={() => sidebarOpenRightPanel(false)} />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </StyledRightBlock>
  );
});
