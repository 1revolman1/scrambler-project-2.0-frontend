import styled from "styled-components";
import { StyledLoader } from "../../../styled";

export const StyledNewLoader = styled(StyledLoader)`
  position: absolute;
`;

export const StyledContainer = styled.div`
  height: 100%;
  h1 {
    text-overflow: ellipsis;
    overflow: hidden;
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.005em;
    color: #000000;
    text-align: center;
  }
  &.first {
    width: 23.5%;
    &:empty {
      display: none;
    }
    /* flex: 1; */
    @media (min-width: 48em) {
      flex: 1;
      width: 23.5%;
      margin: 0 25px;
    }
    @media screen and (max-width: 450px) {
      width: 100%;
      flex: none;
      margin: 0;
    }
    @media screen and (min-width: 451px) and (max-width: 1024px) {
      width: 100%;
      flex: none;
      margin: 0;

      /* flex: 1;
      width: 35%;
      margin: 0 15px; */
    }
  }
  &.second {
    width: 46%;
    &:empty {
      display: none;
    }
    /* flex: 2.5; */
    @media (min-width: 48em) {
      /* flex: 2.5; */
      flex: 1;
      width: 48%;
      margin: 0 10px;
      margin-right: 0;
    }
    @media screen and (max-width: 450px) {
      width: 100%;
      flex: none;
    }
    @media screen and (min-width: 451px) and (max-width: 1024px) {
      width: 100%;
      flex: none;

      /* flex: 2;
      width: 58%;
      margin: 0 4px; */
    }
  }
`;
