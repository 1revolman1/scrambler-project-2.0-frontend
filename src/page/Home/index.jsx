import React, { useEffect } from "react";
import {
  StyledNewWrapper,
  StyledContainer,
  StyledBlockContainer,
  Loader,
} from "./styled";
import IpContainer from "./components/IpContainer";
import LastKnownTorrent from "./components/LastKnownTorrent";
import IpContainerExpanded from "./components/IpContainerExpanded";
import { useDispatch, useSelector } from "react-redux";
import { homeGetHomeData } from "../../redux/actions/Home";
import { home_data, isHomeDataLoading } from "../../redux/selector/Home";

export default function Home() {
  //REDUX
  const dispatch = useDispatch();
  const homeData = useSelector(home_data);
  const isLoading = useSelector(isHomeDataLoading);
  //REDUX
  useEffect(() => {
    dispatch(homeGetHomeData());
  }, []);
  useEffect(() => {
    console.log(homeData);
  }, [homeData]);

  if (isLoading)
    return <Loader type="Bars" color="#00BFFF" height={100} width={100} />;
  else
    return (
      <StyledNewWrapper>
        <h1>Scrambler Project 2.0</h1>
        <StyledBlockContainer>
          {homeData && homeData.ipdata && (
            <StyledContainer className="first">
              {homeData.ipdata.ip && <IpContainer ip={homeData.ipdata.ip} />}
              <IpContainerExpanded ipdata={homeData.ipdata} />
            </StyledContainer>
          )}
          {homeData && homeData.torrent && (
            <StyledContainer className="second">
              <LastKnownTorrent data={homeData.torrent} />
            </StyledContainer>
          )}
        </StyledBlockContainer>
      </StyledNewWrapper>
    );
}
