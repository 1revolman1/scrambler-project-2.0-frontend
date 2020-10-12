import { createSelector } from "reselect";

export const getSidebar = (state) => state.sidebar;

export const isRightPanelOpen = createSelector(
  getSidebar,
  ({ rightPanel }) => rightPanel
);
export const isLeftPanelOpen = createSelector(
  getSidebar,
  ({ leftPanel }) => leftPanel
);
export const isSideNavOpen = createSelector(
  getSidebar,
  ({ sideNav }) => sideNav
);

export const isLoaded = createSelector(getSidebar, ({ loading }) => loading);
export const dataForSidebar = createSelector(getSidebar, ({ data }) => data);
