import React from "react";
import { useDispatch } from "react-redux";
import { sidebarOpenLeftPanel } from "../../redux/actions/Sidebar";
import { StyledNavLink, StyledLinksContainer } from "./styled";

export default function PageSideBarNavigation({ links }) {
  //REDUX
  const dispatch = useDispatch();
  //REDUX
  return (
    <StyledLinksContainer>
      {links.map(({ to, text }, index) => (
        <StyledNavLink
          onClick={() => {
            //TODO: Change this werid logic for more complicated
            if (window && window.innerWidth < 1100) {
              setTimeout(() => {
                dispatch(sidebarOpenLeftPanel(false));
              }, 300);
            }
          }}
          key={index}
          to={to}
          activeClassName="active-button"
        >
          {text}
        </StyledNavLink>
      ))}
    </StyledLinksContainer>
  );
}
