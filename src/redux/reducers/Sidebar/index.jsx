import { handleActions } from "../../helpers/immer";
import * as action from "../../actions/Sidebar";
const initialValue = {
  leftPanel: false,
  rightPanel: false,
  sideNav: false,
  data: {
    cash: null,
    ranking: null,
  },
  loading: false,
};

export const sidebar = handleActions(
  {
    [action.openRightPanel]: (draft, { payload }) => {
      draft.rightPanel = payload.view;
    },
    [action.openLeftPanel]: (draft, { payload }) => {
      draft.leftPanel = payload.view;
    },
    [action.openSideNavigation]: (draft, { payload }) => {
      draft.sideNav = payload.view;
    },
    //---------------GET DATA FOR SIDEBAR-----------------
    [action.getDataForSidebar]: (draft, { payload }) => {
      draft.loading = false;
      draft.data.cash = payload.current_cash;
      draft.data.ranking = payload.ranking;
    },
    [action.dataForSidebarLoaded]: (draft, { payload }) => {
      draft.loading = true;
    },
  },
  initialValue
);
