import { handleActions } from "../../helpers/immer";
import * as action from "../../actions/Counter";
const initialValue = {
  counter: 0,
};
export const counter = handleActions(
  {
    [action.increase]: (draft, { payload }) => {
      draft.counter = draft.counter + payload.increment;
    },
    [action.decrease]: (draft, { payload }) => {
      draft.counter = draft.counter - payload.increment;
    },
  },
  initialValue
);
