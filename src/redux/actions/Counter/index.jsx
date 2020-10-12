import { createAction } from "redux-act";

export const increase = createAction("increase some value");
export const decrease = createAction("decrease some value");

export const counterIncrease = (increment) => async (dispatch) => {
  dispatch(increase({ increment }));
};
export const counterDecrease = (increment) => async (dispatch) => {
  dispatch(decrease({ increment }));
};
