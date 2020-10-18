import styled from "styled-components";
import { StyledWrapper, StyledLoader } from "../styled";
export const Loader = styled(StyledLoader)``;
export const StyledContentContainer = styled.section`
  margin: 10px 0;
  > h2 {
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: #949494;
    margin-bottom: 30px;
  }
`;

export const StyledNewWrapper = styled(StyledWrapper)`
  flex-direction: column;
  h1 {
    width: fit-content;
  }
  .team-name {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 24px;
    @media (min-width: 48em) {
      margin: 0 25px;
      margin-bottom: 24px;
    }
    @media screen and (max-width: 768px) {
      margin: 0 0 24px 0;
    }
    @media screen and (max-width: 426px) {
      margin: 15px 0 24px 0;
    }
    @media screen and (min-width: 769px) {
      margin: 0 20px 25px;
    }
    > img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      margin-right: 15px;
    }
    > h1 {
      margin: 0;
      font-family: "Gilroy", sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 28.833px;
      line-height: 41px;
      width: 100%;
      text-transform: none;

      width: auto;
      @media screen and (max-width: 426px) {
        margin: 0;
      }
      @media screen and (max-width: 768px) {
        margin: 0;
      }
      @media screen and (min-width: 769px) {
      }
    }
  }
`;
export const StyledBlockContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledContainer = styled.div`
  height: 100%;
  margin: 0 20px;
  &.first {
    width: 23.5%;
    flex: 1;
    @media screen and (max-width: 768px) {
      width: 100%;
      flex: none;
      margin: 0;
    }
  }
  &.second {
    width: 46%;
    flex: 1;
    @media screen and (max-width: 768px) {
      width: 100%;
      flex: none;
      margin: 0;
    }
    /* flex: 1;
    width: 48%; */
    margin: 0 10px;
    /* margin-right: 0; */
  }
`;
