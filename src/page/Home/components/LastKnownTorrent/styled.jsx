import styled from "styled-components";
import { StyledContentContainer } from "../../styled";

export const StyledContainer = styled(StyledContentContainer)``;

export const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.03);
  border-radius: 5px;
  padding: 30px 10px;
  h3 {
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 9px;
  }
  p {
    user-select: none;
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    line-height: 41px;
    letter-spacing: 0.005em;
    color: #171717;
    margin-bottom: 9px;
  }
`;

export const StyledTorrentBlock = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 11px 9px;
  ul {
    width: 100%;
    li {
      list-style: none;
      margin: 5px 0;

      font-family: "Gilroy", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #000000;
      span {
        font-family: "Gilroy", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
        margin-right: 5px;
      }
    }
  }
`;
