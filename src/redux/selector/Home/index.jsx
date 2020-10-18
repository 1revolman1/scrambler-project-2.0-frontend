import { createSelector } from "reselect";

export const getHome = (state) => state.home;

export const home_data = createSelector(getHome, ({ data }) => data);
export const isHomeDataLoading = createSelector(
  getHome,
  ({ loading }) => loading
);
