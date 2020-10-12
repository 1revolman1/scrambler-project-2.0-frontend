import styled, { css } from "styled-components";
import { ReactComponent as Cross } from "./assets/cross.svg";
import { ReactComponent as Send } from "./assets/Send.svg";

export const StyledText = styled.p``;

export const StyledSend = styled(Send)`
  position: relative;
  right: 40px;
  cursor: pointer;
  transition: 0.5s;
  ${({ clickPopUpSend }) => {
    if (clickPopUpSend)
      return css`
        transform: scale(0);
      `;
  }}/* animation:  2s linear infinite; */
`;
export const StyledPopUpConfirmation = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  transform: translateX(calc(-100% - 20px));
  /* background: red; */
  background: #ffffff;
  border: 2px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 22px;
  > p {
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14.22px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.015em;
    color: #000000;
    text-align: center;
    user-select: none;
  }
  ${({ clickPopUpSend }) => {
    if (clickPopUpSend) {
      return css`
        transform: translateX(calc(0%));
      `;
    }
  }}
`;

export const StyledInput = styled.input`
  /* overflow: hidden; */
  /* position: relative; */
  width: 100%;
  position: relative;
  background: #ffffff;
  border: 2px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 5px;

  font-family: "Gilroy", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14.22px;
  line-height: 100%;
  letter-spacing: 0.015em;
  color: #949494;

  padding: 13px 43px 13px 8px;
`;

export const StyledPopUpInputContainer = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const StyledCross = styled(Cross)`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`;

export const StyledPopUpBlock = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 34px 44px 25px;

  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.26);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`;
export const StyledPopUp = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: red;
  z-index: 11;
  background: rgba(0, 0, 0, 0.3);
  ${({ needtoshow }) => {
    if (needtoshow)
      return css`
        display: flex;
        justify-content: center;
        align-items: center;
      `;
  }}
`;
