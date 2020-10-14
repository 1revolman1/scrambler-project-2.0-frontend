import React from "react";
import { ReactComponent as Lobby } from "../../assets/Lobby.svg";
import { ReactComponent as Team } from "../../assets/Team.svg";
import { ReactComponent as Torrent } from "../../assets/Torrent1.svg";
import { ReactComponent as Arrow } from "../../../../assets/img/SimpleArrow.svg";
import { StyledSideNav, StyledSummary, StyledNavLinks } from "./styled";

export default React.memo(function Menu({
  isOnMain,
  isSideOpen,
  isLeftOpen,
  openLeftPanel,
}) {
  return (
    <StyledSideNav data-left={isLeftOpen} data-sideopen={isSideOpen}>
      <StyledSummary
        data-left={isLeftOpen}
        className={isOnMain ? "isOnMain" : ""}
        onClick={openLeftPanel}
      >
        <p>Navigation</p>
        <Arrow />
      </StyledSummary>
      <StyledNavLinks
        exact
        to="/"
        activeClassName="selected"
        href="#"
        data-content="Lobby"
      >
        <Lobby />
        <span>Lobby</span>
      </StyledNavLinks>
      <StyledNavLinks
        activeClassName="selected"
        to="/nickname"
        href="#"
        data-content="Nickname"
      >
        <Team />
        <span>Nickname</span>
      </StyledNavLinks>
      <StyledNavLinks
        activeClassName="selected"
        to="/torrent"
        href="#"
        data-content="Torrent"
      >
        <Torrent data-type="torrent"/>
        <span>Torrent</span>
      </StyledNavLinks>
    </StyledSideNav>
  );
});
