import { combineReducers } from "redux";
import { home } from "./Home";
import { sidebar } from "./Sidebar";

export const rootReducer = combineReducers({
  home,
  sidebar,
});
