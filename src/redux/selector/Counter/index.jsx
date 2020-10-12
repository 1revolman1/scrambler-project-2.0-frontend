import { createSelector } from "reselect";

export const getCounter = (state) => state.counter;

export const counter = createSelector(getCounter, ({ counter }) => counter);
