import React, { useEffect, useMemo, useState } from "react";
import { StyledContainer, StyledNewLoader } from "./styled";

import ViewMoreContainer from "./components/ViewMoreContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  getSellPlayer,
  isSellLoading,
} from "../../../../redux/selector/Transfers";
import { transferGetDataToSell } from "../../../../redux/actions/Transfers";

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

export default function SellPlayersContainer() {
  //REDUX
  const dispatch = useDispatch();
  const sellPlayer = useSelector(getSellPlayer);
  const isLoad = useSelector(isSellLoading);
  //REDUX
  const [selectPlayer, setSelectPlayer] = useState(false);
  const outstanding = useMemo(() => {
    if (sellPlayer) return sellPlayer.filter((player) => player.type === 0);
    else return [];
  }, [sellPlayer]);
  const completed = useMemo(() => {
    if (sellPlayer) return sellPlayer.filter((player) => player.type === 1);
    else return [];
  }, [sellPlayer]);
  // useEffect(() => {
  //   if (!sellPlayer) dispatch(transferGetDataToSell());
  // }, []);
  useEffect(() => {
    if (!isLoad) dispatch(transferGetDataToSell());
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
              sellOrBuy="sell"
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
              sellOrBuy="sell"
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
