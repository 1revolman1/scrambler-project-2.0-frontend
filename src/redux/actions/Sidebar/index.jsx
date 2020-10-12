import { createAction } from "redux-act";
import { home_bar } from "../../../service/links";
export const openRightPanel = createAction("open right panel of sidebar");
export const openLeftPanel = createAction("open left panel of sidebar");
export const openSideNavigation = createAction(
  "open side navigation panel of sidebar"
);

export const sidebarOpenRightPanel = (view) => async (dispatch) => {
  dispatch(openRightPanel({ view }));
};
export const sidebarOpenLeftPanel = (view) => async (dispatch) => {
  dispatch(openLeftPanel({ view }));
};
export const sidebarOpenSideNavigation = (view) => async (dispatch) => {
  dispatch(openSideNavigation({ view }));
};
//----------------------------GET DATA FOR SIDEBAR--------------------------

export const getDataForSidebar = createAction(
  "get data for sidebar from backend"
);
export const dataForSidebarLoaded = createAction("set loading for sidebar");

export const sidebarGetDataForSideBar = () => async (dispatch) => {
  // https://cleats.herokuapp.com/home/bar
  dispatch(dataForSidebarLoaded());
  let response1 = await fetch(home_bar, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
  });

  if (response1.status === 200) {
    let {
      ranking,
      cash_summary: { current_cash },
    } = await response1.json();
    current_cash = Math.round(current_cash);
    dispatch(
      getDataForSidebar({
        ranking,
        current_cash,
      })
    );
  }
};
