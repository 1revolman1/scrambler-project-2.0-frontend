import styled from "styled-components";
import Loader from "react-loader-spinner";

export const StyledLoader = styled(Loader)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const StyledContainerLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: white;
`;
export const StyledWrapper = styled.main`
  /* max-width: 95%; */
  position: relative;
  max-width: 1205px;
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: calc(100vh - 35px);
  > h1 {
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 28.833px;
    line-height: 41px;
    width: 100%;
    text-transform: none;
    margin-bottom: 24px;
    @media (min-width: 48em) {
      margin: 0 25px;
      margin-bottom: 24px;
    }
  }
  @media screen and (max-width: 426px) {
    padding-top: 58px;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
    width: 100%;
  }
  padding-top: 90px;
  @media (min-width: 48em) {
    padding-top: calc(83px + 30px);
    /* padding-top: 141px; */
  }
`;
