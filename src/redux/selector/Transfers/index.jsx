import { createSelector } from "reselect";

export const getTransfers = (state) => state.transfers;
export const getBuyData = (state) => state.transfers.buy;
export const getSellData = (state) => state.transfers.sell;
export const getSearchPlayerData = (state) => state.transfers.searchPlayer;

export const isFilterShown = createSelector(
  getTransfers,
  ({ showFilter }) => showFilter
);

//-----------------BUY--------------------

export const getBuyPlayer = createSelector(getBuyData, ({ data }) => data);
export const isBuyLoading = createSelector(
  getBuyData,
  ({ loading }) => loading
);

export const isSelectedPlayerLoading = createSelector(
  getBuyData,
  ({ selectedPlayerLoading }) => selectedPlayerLoading
);
export const getSelectedPlayerInBuy = createSelector(
  getBuyData,
  ({ selectedPlayer }) => selectedPlayer
);

// export const getSelectedPlayerIndexInBuy = createSelector(
//   getBuyData,
//   ({ selectedIndex }) => selectedIndex
// );
// export const getSelectedPlayerByIndexInBuy = createSelector(
//   getBuyData,
//   ({ selectedIndex, data }) => {
//     return data[selectedIndex];
//   }
// );
//---------------------SELL-------------------------
export const getSellPlayer = createSelector(getSellData, ({ data }) => data);
export const isSellLoading = createSelector(
  getSellData,
  ({ loading }) => loading
);
export const isSelectedPlayerLoadingInSell = createSelector(
  getSellData,
  ({ selectedPlayerLoading }) => selectedPlayerLoading
);
export const getSelectedPlayerInSell = createSelector(
  getSellData,
  ({ selectedPlayer }) => selectedPlayer
);

// export const getSelectedPlayerIndexInSell = createSelector(
//   getSellData,
//   ({ selectedIndex }) => selectedIndex
// );
// export const getSelectedPlayerByIndexInSell = createSelector(
//   getSellData,
//   ({ selectedIndex, data }) => data[selectedIndex]
// );

//----------------------SEARCH------------------------
export const getSearchPlayer = createSelector(
  getSearchPlayerData,
  ({ data }) => data
);
export const getSearchPlayerLoading = createSelector(
  getSearchPlayerData,
  ({ loading }) => loading
);

export const getSelectedPlayerByIndexInSearchable = createSelector(
  getSearchPlayerData,
  ({ selectedIndex, data }) => data[selectedIndex]
);
export const isCreateNewOffer = createSelector(
  getSearchPlayerData,
  ({ offerToBuyLoading }) => offerToBuyLoading
);
