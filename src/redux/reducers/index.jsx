import { combineReducers } from "redux";

import { counter } from "./Counter";
import { sidebar } from "./Sidebar";
import { transfers } from "./Transfers";

export const rootReducer = combineReducers({
  counter,
  sidebar,
  transfers,
});
