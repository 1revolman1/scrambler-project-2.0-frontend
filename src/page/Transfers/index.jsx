import React, { useEffect } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { StyledContainer } from "./styled";
import SearchPlayerContainer from "./components/SearchPlayersContainer";
import BuyPlayerContainer from "./components/BuyPlayersContainer";
import SellPlayerContainer from "./components/SellPlayersContainer";

export default function Transfers() {
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/transfers") {
      history.push("/transfers/buy-players");
    }
  }, []);
  return (
    <StyledContainer>
      <Switch>
        <Route
          path="/transfers/search-players"
          component={SearchPlayerContainer}
        />
        <Route path="/transfers/buy-players" component={BuyPlayerContainer} />
        <Route path="/transfers/sell-players" component={SellPlayerContainer} />
      </Switch>
    </StyledContainer>
  );
}
