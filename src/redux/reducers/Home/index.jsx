import { handleActions } from "../../helpers/immer";
import * as action from "../../actions/Home";
const initialValue = {
  data: null,
  loading: false,
};
export const home = handleActions(
  {
    [action.homedata_loading]: (draft) => {
      draft.loading = true;
    },
    [action.homedata]: (draft, { payload }) => {
      draft.data = payload.data;
      draft.loading = false;
    },
  },
  initialValue
);
