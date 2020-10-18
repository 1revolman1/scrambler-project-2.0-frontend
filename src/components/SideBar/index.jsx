import React, { useEffect, useState, useRef } from "react";
import { StyledMain } from "./styled";
import { useLocation } from "react-router-dom";
import { StyledContainerLoader, StyledLoader } from "../../page/styled";
import Header from "./components/Header";
import LeftSideBlock from "./components/LeftSideBlock";
import RightSideBlock from "./components/RightSideBlock";
import Menu from "./components/Menu";
import { useDispatch, useSelector } from "react-redux";
import {
  sidebarOpenLeftPanel,
  sidebarOpenRightPanel,
  sidebarOpenSideNavigation,
} from "../../redux/actions/Sidebar";
import {
  isLeftPanelOpen,
  isRightPanelOpen,
  isSideNavOpen,
} from "../../redux/selector/Sidebar";

//https://www.w3schools.com/howto/howto_js_sidenav.asp
//https://negomi.github.io/react-burger-menu/
function SideBar({ children }) {
  const [isOnMain, setOnMain] = useState(false);
  const windowSize = useRef(window && window.innerWidth > 1100 ? true : false);
  //REDUX
  const dispatch = useDispatch();
  const isRightOpen = useSelector(isRightPanelOpen);
  const isLeftOpen = useSelector(isLeftPanelOpen);
  const isSideOpen = useSelector(isSideNavOpen);
  //REDUX
  const location = useLocation();

  const openSideNav = function () {
    isRightOpen && dispatch(sidebarOpenRightPanel(false));
    isLeftOpen && dispatch(sidebarOpenLeftPanel(false));
    dispatch(sidebarOpenSideNavigation(!isSideOpen));
  };
  const openLeftPanel = function () {
    if (location.pathname === "/" || location.pathname === "/finance")
      return null;
    if (isRightOpen) dispatch(sidebarOpenRightPanel(false));
    //Close BURGER, if you open close left menu
    if (isSideNavOpen) dispatch(sidebarOpenSideNavigation(false));
    dispatch(sidebarOpenLeftPanel(!isLeftOpen));
  };
  const resizeFunction = function () {
    dispatch(sidebarOpenSideNavigation(false));
    dispatch(sidebarOpenRightPanel(false));
    dispatch(sidebarOpenLeftPanel(false));
  };

  useEffect(() => {
    window.addEventListener("resize", resizeFunction);
    return () => window.removeEventListener("resize", resizeFunction);
  }, []);
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        dispatch(sidebarOpenLeftPanel(false));
        dispatch(sidebarOpenRightPanel(false));
        dispatch(sidebarOpenSideNavigation(false));

        setOnMain(true);
        break;
      case "/finance":
        dispatch(sidebarOpenLeftPanel(false));
        dispatch(sidebarOpenRightPanel(false));
        dispatch(sidebarOpenSideNavigation(false));
        setOnMain(true);
        break;
      case "/league/table":
        dispatch(sidebarOpenLeftPanel(true));
        // dispatch(sidebarOpenLeftPanel(windowSize.current));
        dispatch(sidebarOpenRightPanel(windowSize.current));
        dispatch(sidebarOpenSideNavigation(false));
        break;
      case "/team/strategy":
        dispatch(sidebarOpenRightPanel(windowSize.current));
        dispatch(sidebarOpenSideNavigation(false));
        dispatch(sidebarOpenLeftPanel(true));
        // dispatch(sidebarOpenLeftPanel(windowSize.current));
        break;
      default:
        dispatch(sidebarOpenLeftPanel(true));
        // dispatch(sidebarOpenLeftPanel(windowSize.current));
        setOnMain(false);
        dispatch(sidebarOpenRightPanel(false));
        dispatch(sidebarOpenSideNavigation(false));
    }
  }, [location]);

  return (
    <>
      <Header
        location={location}
        onClick={openSideNav}
        openleftpanel={openLeftPanel}
      />
      <Menu
        isSideOpen={isSideOpen}
        isOnMain={isOnMain}
        isLeftOpen={isLeftOpen}
        openLeftPanel={openLeftPanel}
      />
      <LeftSideBlock leftPanel={isLeftOpen} openLeftPanel={openLeftPanel} />
      <StyledMain
        data-right={isRightOpen}
        data-left={isLeftOpen}
        data-sideopen={isSideOpen}
      >
        {children}
      </StyledMain>
      <RightSideBlock
        isRightOpen={isRightOpen}
        sidebarOpenRightPanel={(state) => {
          dispatch(sidebarOpenRightPanel(state));
        }}
      />
    </>
  );
}
export default React.memo(SideBar);
