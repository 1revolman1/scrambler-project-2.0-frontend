import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StyledPlayerCard, StyledInfoText, StyledInfo } from "./styled";
import {
  transferSelectPlayerInBuy,
  transferSelectPlayerInSell,
} from "../../../../redux/actions/Transfers";
import { sidebarOpenRightPanel } from "../../../../redux/actions/Sidebar";
// const proto = [
//   {
//     _id: "string",
//     type: 0,
//     player: "string",
//     sending_team: "string",
//     receiving_team: "string",
//     transfer_fee_offer: 0,
//     status: 0,
//     createdAt: "2020-09-06T19:32:33.189Z",
//   },
// ];

// messageForDeclineTransfer

export default function PlayerCard({
  sellOrBuy = "buy",
  type = 0,
  status = 1,
  className,
  player: { name, _id },
  selectPlayer,
  setSelectPlayer,
  ...props
}) {
  const dispatch = useDispatch();
  const BUYdataSetInformation = {
    1: "Offer sent. Pending seller response",
    2: "Clubs agreed on transfer fee. Negotiating with player now",
    3: "Offer rejected by seller",
    4: "Counter-offer received. Respond now!",
    5: "Salary offer sent to player",
    6: "Player accepted offer! Let's finalize",
    7: "Player rejected offer. Let's make a new offer!",
    8: "Transfer completed!",
    9: "We canceled this deal",
    10: "Deal canceled. We ran out of $$$",
    11: "You rejected counter offer ",
    12: "Transfer canceled",
    13: "Transfer canceled (transfer window closed)",
  };
  const SELLdataSetInformation = {
    1: "Offer received. Respond now!",
    2: "Accepted offer. Buyer will reach out to player",
    3: "We killed this deal",
    4: "Counter-offer sent to buyer",
    5: "Accepted offer. Buyer is in talks with player",
    6: "Player accepted offer! Pending closing",
    7: "Accepted offer. Buyer is in talks with player",
    8: "Transfer completed!",
    9: "Canceled by buyer",
    10: "Canceled - buyer ran out of funds",
    11: "Buyer rejected your counter offer ",
    12: "Transfer canceled",
    13: "Transfer canceled (transfer window closed)",
  };
  const [typeOfCard] = useState(
    sellOrBuy === "buy" ? BUYdataSetInformation : SELLdataSetInformation
  );
  const selectUser = function (player) {
    dispatch(sidebarOpenRightPanel(true));
    if (sellOrBuy === "buy") {
      dispatch(transferSelectPlayerInBuy(player));
    } else {
      dispatch(transferSelectPlayerInSell(player));
    }
  };
  const sendToReduxCurrentPlayer = function () {
    setSelectPlayer(className);
    const playerToSidebar = { ...props, status, type, player: { name, _id } };
    selectUser(playerToSidebar);
    // selectUser({
    //   player,
    //   club: props.club,
    //   age: props.age,
    //   transfer_fee_offer: props.transfer_fee_offer,
    //   rating: props.rating,
    //   potential: props.potential,
    //   salary: props.salary,
    //   status,
    //   sellOrBuy,
    // });
  };

  return (
    <>
      <StyledPlayerCard
        selectPlayer={selectPlayer}
        className={`data-${className}`}
        status={status}
        type={type}
        onClick={sendToReduxCurrentPlayer}
      >
        {(function () {
          if (
            sellOrBuy === "buy" &&
            (+status === 2 || +status === 4 || +status === 6 || +status === 7)
          ) {
            return <StyledInfo />;
          } else if (sellOrBuy === "sell" && +status === 1) {
            return <StyledInfo />;
          }
        })()}
        <h5>{name}</h5>
        <StyledInfoText>{typeOfCard[status]}</StyledInfoText>
      </StyledPlayerCard>
      {/* {(+status === 7 || +status === 2 || +status === 3) && (
        <PopUp
          status={status}
          // needToShowPopUp={true}
          // setNeedToShowPopUp={setNeedToShowPopUp}
        />
      )} */}
    </>
  );
}
