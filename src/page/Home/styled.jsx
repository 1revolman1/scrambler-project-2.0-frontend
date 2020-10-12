import styled from "styled-components";
import { StyledWrapper } from "../styled";


export const StyledNewWrapper = styled(StyledWrapper)`
  flex-direction: column;
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
