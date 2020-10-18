import { createAction } from "redux-act";
import { home } from "../../../service/links";

export const homedata = createAction("get home data");
export const homedata_loading = createAction("set loading state for home data");

export const homeGetHomeData = () => async (dispatch) => {
  dispatch(homedata_loading());
  let response = await fetch(home, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  if (response.status === 200) {
    let data = await response.json();
    dispatch(homedata({ data }));
  }
};
