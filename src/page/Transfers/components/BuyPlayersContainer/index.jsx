import React, { useEffect, useMemo, useState } from "react";
import { StyledContainer, StyledNewLoader } from "./styled";

import ViewMoreContainer from "./components/ViewMoreContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  getBuyPlayer,
  isBuyLoading,
} from "../../../../redux/selector/Transfers";
import { transferGetDataToBuy } from "../../../../redux/actions/Transfers";
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

// type: 0 stilll outstanding
// type: 1 is completed

export default function BuyPlayersContainer() {
  //REDUX
  const dispatch = useDispatch();
  const buyPlayer = useSelector(getBuyPlayer);
  const isLoad = useSelector(isBuyLoading);

  //REDUX
  const [selectPlayer, setSelectPlayer] = useState(false);
  const outstanding = useMemo(() => {
    if (buyPlayer) return buyPlayer.filter((player) => player.type === 0);
    else return [];
  }, [buyPlayer]);
  const completed = useMemo(() => {
    if (buyPlayer) return buyPlayer.filter((player) => player.type === 1);
    else return [];
  }, [buyPlayer]);
  //TODO: Need to ask backender about generating data.
  //TODO: Need to think about reloading all transfers after making changes at right sidebar
  // useEffect(() => {
  //   if (!buyPlayer) dispatch(transferGetDataToBuy());
  // }, []);
  // useEffect(() => {
  //   if (!buyPlayer) dispatch(transferGetDataToBuy());
  // }, [buyPlayer]);
  useEffect(() => {
    if (!isLoad) dispatch(transferGetDataToBuy());
  }, []);
  if (isLoad) {
    return (
      <StyledNewLoader type="Bars" color="#00BFFF" height={100} width={100} />
    );
  } else
    return (
      <>
        <StyledContainer className="first">
          {outstanding && outstanding.length > 0 && (
            <ViewMoreContainer
              sellOrBuy="buy"
              title="Outstanding"
              data={outstanding}
              selectPlayer={selectPlayer}
              setSelectPlayer={setSelectPlayer}
            />
          )}
        </StyledContainer>
        <StyledContainer className="second">
          {completed && completed.length > 0 && (
            <ViewMoreContainer
              sellOrBuy="buy"
              title="Completed"
              data={completed}
              selectPlayer={selectPlayer}
              setSelectPlayer={setSelectPlayer}
            />
          )}
        </StyledContainer>
      </>
    );
}
