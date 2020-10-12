import { createAction } from "redux-act";
// import makeDataBuy from "./makeDataBuy";
// import makeDataSell from "./makeDataSell";
// import makeDataSearch from "./makeDataSearch";
import {
  transfer_buying,
  league_players,
  transfer_buying_acceptCounter,
  transfer_buying_rejectCounter,
  transfer_buying_confirmTransfer,
  transfer_buying_declineTransfer,
  transfer_buying_offerPlayer,
  transfer_buying_cancelTransfer,
  transfer_selling,
  transfer_selling_acceptOffer,
  transfer_selling_rejectOffer,
  transfer_selling_cancelTransfer,
  transfer_buying_createNewOffer,
} from "../../../service/links";

export const showUnShowFilter = createAction("show/unshow transfers filter");
export const setUserWithOfferToBuy = createAction("set user with offer to buy");
export const deleteUserWithOfferToBuy = createAction(
  "delete user with offer to buy"
);

export const transferShowUnshowFilter = (filter) => async (dispatch) => {
  dispatch(showUnShowFilter({ filter }));
};

export const transferSetUserWithOfferToBuy = (user) => async (dispatch) => {
  dispatch(setUserWithOfferToBuy({ user }));
};
export const transferDeleteUserWithOfferToBuy = () => async (dispatch) => {
  dispatch(deleteUserWithOfferToBuy());
};

// ------------------------------------BUY--------------------------

export const getDataToBuy = createAction("get transfers buy data");
export const getDataToBuyLoading = createAction(
  "set loading state for buy data"
);
export const selectPlayerToBuy = createAction("select player in transfers buy");
export const transferGetDataToBuy = () => async (dispatch) => {
  dispatch(getDataToBuyLoading());
  let response1 = await fetch(transfer_buying, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
  });

  if (response1.status === 200) {
    let data = await response1.json();
    data = data.sort(function (a, b) {
      if (
        a.status === 2 ||
        a.status === 4 ||
        a.status === 6 ||
        a.status === 7
      ) {
        return -1;
      }
      if (
        a.status !== 2 ||
        a.status !== 4 ||
        a.status !== 7 ||
        a.status !== 7
      ) {
        return 1;
      }
      return 0;
    });
    dispatch(
      getDataToBuy({
        data,
      })
    );
  }
  // dispatch(getDataToBuy({ data: makeDataBuy(100) }));
};

export const setLoadingStateForSelectingPlayerInBuy = createAction(
  "set loading state for selecting state in buy"
);

export const transferSelectPlayerInBuy = (player) => async (dispatch) => {
  dispatch(setLoadingStateForSelectingPlayerInBuy());
  let response1 = await fetch(league_players + player.player._id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
  });

  if (response1.status === 200) {
    let data = await response1.json();
    dispatch(selectPlayerToBuy({ ...player, ...data }));
  }
};

export const acceptOffer = createAction("accept buy offer");
export const transferAcceptOffer = (transferID) => async (dispatch) => {
  // /transfer/selling / acceptOffer
  let response1 = await fetch(transfer_buying_acceptCounter, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
    body: JSON.stringify({ transferID }),
  });
  if (response1.status === 200) {
    const message = "Success operation!";
    window.location.reload();
    dispatch(acceptOffer({ message, transferID }));
  } else if (response1.status === 403) {
    const message = "Not allowed!";
    dispatch(acceptOffer({ message, transferID }));
  } else if (response1.status === 405) {
    const message =
      "Transfer window is closed. Try again once the window opens Friday night";
    dispatch(acceptOffer({ message, transferID }));
  }
  // dispatch(acceptOffer({ name }));
};

export const rejectOffer = createAction("reject buy offer");
export const transferRejectOffer = (transferID, message) => async (
  dispatch
) => {
  // /transfer/selling/rejectOffer
  // fetch()
  let response1 = await fetch(transfer_buying_rejectCounter, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
    body: JSON.stringify({ transferID, message }),
  });
  if (response1.status === 200) {
    const message = "Success operation!";
    window.location.reload();

    dispatch(rejectOffer({ message, transferID }));
  } else if (response1.status === 403) {
    const message = "Not allowed!";
    dispatch(rejectOffer({ message, transferID }));
  } else if (response1.status === 405) {
    const message =
      "Transfer window is closed. Try again once the window opens Friday night";
    dispatch(rejectOffer({ message, transferID }));
  }
};

export const confirmTransfer = createAction("confirm transfer");
export const transferConfirmAction = (transferID, cash, fee_offer) => async (
  dispatch
) => {
  // if (cash >= fee_offer) {
  let response1 = await fetch(transfer_buying_confirmTransfer, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
    body: JSON.stringify({ transferID }),
  });
  if (response1.status === 200) {
    const message = "Success operation!";
    window.location.reload();

    dispatch(confirmTransfer({ message, transferID }));
  } else if (response1.status === 403) {
    const message = "Not allowed!";
    dispatch(confirmTransfer({ message, transferID }));
  } else if (response1.status === 405) {
    const message =
      "Transfer window is closed. Try again once the window opens Friday night";
    dispatch(confirmTransfer({ message, transferID }));
  }
  // }
  // else{
  //   const message="You "
  //         dispatch(confirmTransfer({ message, transferID }));

  // }
};
export const declineTransfer = createAction("decline transfer");
export const transferRequestForDeclineTransfer = (transferID) => async (
  dispatch
) => {
  // /transfer/buying / declineTransfer
  // fetch()
  let response1 = await fetch(transfer_buying_declineTransfer, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
    body: JSON.stringify({ transferID }),
  });
  if (response1.status === 200) {
    const message = "Success operation!";
    window.location.reload();

    dispatch(declineTransfer({ message, transferID }));
  } else if (response1.status === 403) {
    const message = "Not allowed!";
    dispatch(declineTransfer({ message, transferID }));
  } else if (response1.status === 405) {
    const message =
      "Transfer window is closed. Try again once the window opens Friday night";
    dispatch(declineTransfer({ message, transferID }));
  }
};

export const createNewSalaryOffer = createAction("create new salary offer");
export const transferCreateNewSalaryOffer = (transferID, offer) => async (
  dispatch
) => {
  let response1 = await fetch(transfer_buying_offerPlayer, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
    body: JSON.stringify({ transferID, offer }),
  });
  if (response1.status === 200) {
    const message = "Success operation!";
    window.location.reload();

    dispatch(createNewSalaryOffer({ message, transferID }));
  } else if (response1.status === 403) {
    const message = "Not allowed!";
    dispatch(createNewSalaryOffer({ message, transferID }));
  } else if (response1.status === 404) {
    const message = "Wrong data";
    dispatch(createNewSalaryOffer({ message, transferID }));
  } else if (response1.status === 405) {
    const message =
      "Transfer window is closed. Try again once the window opens Friday night";
    dispatch(createNewSalaryOffer({ message, transferID }));
  }
  // dispatch(createNewSalaryOffer({ id, counter }));
};

export const readMessageFromSellerInBuy = createAction(
  "read message from seller in buy"
);
export const requestInBuyTextMessageFromSeller = (name) => async (dispatch) => {
  const message =
    Math.random() +
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  dispatch(readMessageFromSellerInBuy({ message, name }));
  // setTimeout(() => {
  //   dispatch(readMessageFromSellerInBuy({ message, name }));
  // }, 5000);
};

export const cancelBuyTransfer = createAction("cancel transfer for buy");
export const transferRequestForCancelTransfer = (transferID) => async (
  dispatch
) => {
  // /transfer/buying / declineTransfer
  // fetch()
  let response1 = await fetch(transfer_buying_cancelTransfer, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
    body: JSON.stringify({ transferID }),
  });
  if (response1.status === 200) {
    const message = "Success operation!";
    window.location.reload();
    dispatch(declineTransfer({ message, transferID }));
  } else if (response1.status === 403) {
    const message = "Not allowed!";
    dispatch(declineTransfer({ message, transferID }));
  } else if (response1.status === 405) {
    const message =
      "Transfer window is closed. Try again once the window opens Friday night";
    dispatch(declineTransfer({ message, transferID }));
  }
};

//---------------------------SELL--------------------------------

export const getDataToSell = createAction("get transfers sell data");
export const getDataToSellLoading = createAction(
  "set loading state for sell data"
);

export const transferGetDataToSell = () => async (dispatch) => {
  dispatch(getDataToSellLoading());
  let response1 = await fetch(transfer_selling, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
  });

  if (response1.status === 200) {
    let data = await response1.json();
    //it's return you data, where the notification-card will be first
    data = data.sort(function (a, b) {
      if (a.status === 1) {
        return -1;
      }
      if (a.status !== 1) {
        return 1;
      }
      return 0;
    });

    dispatch(getDataToSell({ data }));
  }
};

export const selectPlayerToSell = createAction(
  "select player in transfers sell"
);
export const setLoadingStateForSelectingPlayerInSell = createAction(
  "set loading state for selecting state in sell"
);
export const transferSelectPlayerInSell = (player) => async (dispatch) => {
  dispatch(setLoadingStateForSelectingPlayerInSell());
  let response1 = await fetch(league_players + player.player._id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
  });

  if (response1.status === 200) {
    let data = await response1.json();
    // console.log({ ...player, ...data });
    dispatch(selectPlayerToSell({ ...player, ...data }));
  }
};

export const acceptOfferInSell = createAction("accept offer in sell");
export const changeCashAmountOfOfferInSell = createAction(
  "change amount of cash in sell's offer"
);
export const declineOfferInSell = createAction("decline offer in sell");
export const transferAcceptOfferInSell = (transferID) => async (dispatch) => {
  // dispatch(acceptOfferInSell({ name }));
  let response1 = await fetch(transfer_selling_acceptOffer, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
    body: JSON.stringify({ transferID }),
  });
  if (response1.status === 200) {
    const message = "Success operation!";
    window.location.reload();

    dispatch(acceptOfferInSell({ message, transferID }));
  } else if (response1.status === 403) {
    const message = "Not allowed!";
    dispatch(acceptOfferInSell({ message, transferID }));
  } else if (response1.status === 405) {
    const message =
      "Transfer window is closed. Try again once the window opens Friday night";
    dispatch(acceptOfferInSell({ message, transferID }));
  }
};
export const transferChangeCashAmountOfOfferInSell = (
  transferID,
  counterOffer
) => async (dispatch) => {
  let response1 = await fetch(
    `https://cleats.herokuapp.com/transfer/selling/counterOffer`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      credentials: "include",
      body: JSON.stringify({ transferID, counterOffer }),
    }
  );
  if (response1.status === 200) {
    const message = "Success operation!";
    window.location.reload();

    dispatch(
      changeCashAmountOfOfferInSell({ message, transferID, counterOffer })
    );
  } else if (response1.status === 403) {
    const message = "Not allowed!";
    dispatch(
      changeCashAmountOfOfferInSell({ message, transferID, counterOffer })
    );
  } else if (response1.status === 405) {
    const message =
      "Transfer window is closed. Try again once the window opens Friday night";
    dispatch(
      changeCashAmountOfOfferInSell({ message, transferID, counterOffer })
    );
  }
};
export const transferDeclineOfferInSell = (transferID, message) => async (
  dispatch
) => {
  let response1 = await fetch(transfer_selling_rejectOffer, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
    body: JSON.stringify({ transferID, message }),
  });
  if (response1.status === 200) {
    const messageFromServer = "Success operation!";
    window.location.reload();
    dispatch(declineOfferInSell({ messageFromServer, transferID, message }));
  } else if (response1.status === 403) {
    const messageFromServer = "Not allowed!";
    dispatch(declineOfferInSell({ messageFromServer, transferID, message }));
  } else if (response1.status === 405) {
    const messageFromServer =
      "Transfer window is closed. Try again once the window opens Friday night";
    dispatch(declineOfferInSell({ messageFromServer, transferID, message }));
  }
};
export const cancelSellTransfer = createAction("cancel transfer for sell");
export const transferRequestForCancelTransferInSell = (transferID) => async (
  dispatch
) => {
  // /transfer/selling/cancelTransfer
  // fetch()
  let response1 = await fetch(transfer_selling_cancelTransfer, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
    body: JSON.stringify({ transferID }),
  });
  if (response1.status === 200) {
    const message = "Success operation!";
    window.location.reload();
    dispatch(cancelSellTransfer({ message, transferID }));
  } else if (response1.status === 403) {
    const message = "Not allowed!";
    dispatch(cancelSellTransfer({ message, transferID }));
  } else if (response1.status === 405) {
    const message =
      "Transfer window is closed. Try again once the window opens Friday night";
    dispatch(cancelSellTransfer({ message, transferID }));
  }
};

// --------------------PLAYER---------------------------------

export const getDataToSearchPlayer = createAction(
  "get data for searchable players to transfers"
);
export const getDataToSearchPlayerLoading = createAction(
  "load data for searchable players to transfers"
);
export const transferGetDataToSearchable = () => async (dispatch) => {
  dispatch(getDataToSearchPlayerLoading());
  let response = await fetch(league_players, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
  });
  if (response.status === 200) {
    let { players, team } = await response.json();
    const data = players.map((player) => {
      return { ...player, myTeam: player.team._id === team };
    });
    dispatch(getDataToSearchPlayer({ data }));
  }
};
export const setCreateNewOfferSearch = createAction("create new offer");
export const setCreateNewOfferSearchLoading = createAction(
  "creating new offer loading"
);
export const transferSetCreateNewOfferSearch = (playerID, offer) => async (
  dispatch
) => {
  dispatch(setCreateNewOfferSearchLoading());
  let response = await fetch(transfer_buying_createNewOffer, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    credentials: "include",
    body: JSON.stringify({ playerID, offer }),
  });
  if (response.status === 200) {
    const text = "Sent!";
    dispatch(setCreateNewOfferSearch({ playerID, text }));
  } else if (response.status === 405) {
    const textError =
      "Transfer window is closed. Try again once the window opens Friday night";
    dispatch(setCreateNewOfferSearch({ playerID, textError }));
  } else {
    const textError = "You already have an outstanding offer on this player";
    dispatch(setCreateNewOfferSearch({ playerID, textError }));
  }
};
