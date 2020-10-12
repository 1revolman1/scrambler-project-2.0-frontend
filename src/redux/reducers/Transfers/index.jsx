import { handleActions } from "../../helpers/immer";
import * as action from "../../actions/Transfers";
const initialValue = {
  showFilter: false,
  buy: {
    data: null,
    loading: false,
    selectedPlayer: null,
    selectedPlayerLoading: false,
  },
  sell: {
    data: null,
    loading: false,
    selectedPlayer: null,
    selectedPlayerLoading: false,
  },
  searchPlayer: {
    data: [],
    offerToBuyLoading: null,
    loading: null,
    selectedIndex: null,
  },
};

export const transfers = handleActions(
  {
    [action.showUnShowFilter]: (draft, { payload }) => {
      draft.showFilter = payload.filter;
    },
    [action.setUserWithOfferToBuy]: (draft, { payload }) => {
      const indexInData = draft.searchPlayer.data.findIndex(
        (element) => element._id === payload.user._id
      );
      if (indexInData !== -1) draft.searchPlayer.selectedIndex = indexInData;
    },
    //--------------BUY------------------------
    [action.getDataToBuyLoading]: (draft, { payload }) => {
      draft.buy.loading = true;
    },
    [action.getDataToBuy]: (draft, { payload }) => {
      //TODO: Negotiate with back-end to simplify
      draft.buy.data = payload.data;
      draft.buy.loading = false;
    },
    [action.getDataToBuyLoading]: (draft, { payload }) => {
      draft.buy.loading = true;
    },
    [action.setLoadingStateForSelectingPlayerInBuy]: (draft, { payload }) => {
      draft.buy.selectedPlayerLoading = true;
    },
    [action.selectPlayerToBuy]: (draft, { payload }) => {
      draft.buy.selectedPlayer = payload;
      draft.buy.selectedPlayerLoading = false;
    },
    [action.readMessageFromSellerInBuy]: (draft, { payload }) => {
      const indexInData = draft.buy.data.findIndex(
        (element) => element.player === payload.name
      );
      if (indexInData !== -1)
        draft.buy.data[indexInData].messageFromSeller = payload.message;
    },
    [action.declineTransfer]: (draft, { payload }) => {
      if (payload.message === "Success operation!") {
        draft.buy.selectedPlayer.transfer = false;
      }
      draft.buy.selectedPlayer.messageOffer = payload.message;
      // const indexInData = draft.buy.data.findIndex(
      //   (element) => element.player === payload.name
      // );
      // if (indexInData !== -1) draft.buy.data[indexInData].transfer = false;
      // draft.buy.data[indexInData].declineTransfer = true;
    },
    [action.confirmTransfer]: (draft, { payload }) => {
      if (payload.message === "Success operation!") {
        draft.buy.selectedPlayer.transfer = true;
      }
      draft.buy.selectedPlayer.messageOffer = payload.message;
      // const indexInData = draft.buy.data.findIndex(
      //   (element) => element.player === payload.name
      // );
      // if (indexInData !== -1) draft.buy.data[indexInData].transfer = true;
      // draft.buy.data[indexInData].confirmTransfer = true;
    },
    [action.acceptOffer]: (draft, { payload }) => {
      if (payload.message === "Success operation!") {
        draft.buy.selectedPlayer.offer = true;
      }
      draft.buy.selectedPlayer.messageOffer = payload.message;
      // const indexInData = draft.buy.data.findIndex(
      //   (element) => element._id === payload.transferID
      // );
      // if (indexInData !== -1) draft.buy.data[indexInData].offer = true;
    },
    [action.rejectOffer]: (draft, { payload }) => {
      if (payload.message === "Success operation!") {
        draft.buy.selectedPlayer.offer = false;
      }
      draft.buy.selectedPlayer.messageOffer = payload.message;
      // const indexInData = draft.buy.data.findIndex(
      //   (element) => element._id === payload.transferID
      // );
      // if (indexInData !== -1) draft.buy.data[indexInData].offer = false;
    },
    [action.createNewSalaryOffer]: (draft, { payload }) => {
      if (payload.message === "Success operation!") {
        draft.buy.selectedPlayer.newOffer = true;
      }
      draft.buy.selectedPlayer.messageOffer = payload.message;
      // const indexInData = draft.buy.data.findIndex(
      //   (element) => element.player === payload.name
      // );
      // if (indexInData !== -1) {
      //   draft.buy.data[indexInData].newOffer = true;
      //   draft.buy.data[indexInData].offerCounter = payload.counter;
      // }
    },
    //----------------SELL-----------------------
    [action.getDataToSellLoading]: (draft, { payload }) => {
      draft.sell.loading = true;
    },
    [action.getDataToSell]: (draft, { payload }) => {
      draft.sell.data = payload.data;
      draft.sell.loading = false;
    },
    [action.setLoadingStateForSelectingPlayerInSell]: (draft, { payload }) => {
      draft.sell.selectedPlayerLoading = true;
    },
    [action.selectPlayerToSell]: (draft, { payload }) => {
      draft.sell.selectedPlayer = payload;
      draft.sell.selectedPlayerLoading = false;
      // const indexInData = draft.sell.data.findIndex(
      //   (element) => element.player === payload.player.player
      // );
      // if (indexInData !== -1) draft.sell.selectedIndex = indexInData;
    },
    [action.acceptOfferInSell]: (draft, { payload }) => {
      if (payload.message === "Success operation!") {
        draft.sell.selectedPlayer.offer = true;
      }
      draft.sell.selectedPlayer.messageOffer = payload.message;
      // const indexInData = draft.sell.data.findIndex(
      //   (element) => element.player === payload.name
      // );
      // if (indexInData !== -1) draft.sell.data[indexInData].offer = true;
    },
    [action.declineOfferInSell]: (draft, { payload }) => {
      if (payload.message === "Success operation!") {
        draft.sell.selectedPlayer.offer = false;
        draft.sell.selectedPlayer.message = payload.message;
      }
      draft.sell.selectedPlayer.messageOffer = payload.messageFromServer;
      // const indexInData = draft.sell.data.findIndex(
      //   (element) => element.player === payload.name
      // );
      // if (indexInData !== -1) draft.sell.data[indexInData].offer = false;
    },
    [action.changeCashAmountOfOfferInSell]: (draft, { payload }) => {
      if (payload.message === "Success operation!") {
        draft.sell.selectedPlayer.cashOffer = true;
        draft.sell.selectedPlayer.offerCounter = payload.counterOffer;
      }
      draft.sell.selectedPlayer.messageOffer = payload.message;
      // const indexInData = draft.sell.data.findIndex(
      //   (element) => element.player === payload.name
      // );
      // if (indexInData !== -1) {
      //   draft.sell.data[indexInData].cashOffer = true;
      //   draft.sell.data[indexInData].offerCounter = payload.counter;
      // }
    },
    [action.cancelSellTransfer]: (draft, { payload }) => {
      if (payload.message === "Success operation!") {
        draft.sell.selectedPlayer.transfer = false;
      }
      draft.sell.selectedPlayer.messageOffer = payload.message;
    },
    //--------------------SEARCH----------------------
    [action.getDataToSearchPlayer]: (draft, { payload }) => {
      draft.searchPlayer.data = payload.data;
      draft.searchPlayer.loading = false;
    },
    [action.getDataToSearchPlayerLoading]: (draft, { payload }) => {
      draft.searchPlayer.loading = true;
    },
    [action.setCreateNewOfferSearchLoading]: (draft, { payload }) => {
      draft.searchPlayer.offerToBuyLoading = false;
    },
    [action.setCreateNewOfferSearch]: (draft, { payload }) => {
      // playerID;
      const indexInData = draft.searchPlayer.data.findIndex(
        (element) => element._id === payload.playerID
      );
      if (indexInData !== -1)
        if (!payload.textError) {
          draft.searchPlayer.data[indexInData].createNewOffer = true;
          draft.searchPlayer.data[indexInData].messageAboutOffer = payload.text;
          draft.searchPlayer.data[indexInData].offerToBuyLoading = true;
        } else {
          draft.searchPlayer.data[indexInData].createNewOffer = false;
          draft.searchPlayer.data[indexInData].messageAboutOffer =
            payload.textError;

          draft.searchPlayer.data[indexInData].offerToBuyLoading = true;
        }
    },
  },
  initialValue
);
