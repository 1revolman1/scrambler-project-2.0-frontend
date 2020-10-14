import styled, { css } from "styled-components";
import { ReactComponent as Info } from "./assets/info.svg";

export const StyledInfo = styled(Info)`
  position: absolute;
  left: 4px;
  top: 4px;
`;

export const StyledPlayerCard = styled.div`
  cursor: pointer;
  max-width: 400px;
  position: relative;
  width: 100%;
  padding: 15px 45px 24px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.26);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  margin: 20px auto;

  @media screen and (max-width: 426px) {
    padding: 20px 15px;
    margin: 20px 0;
  }
  > h5 {
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #000000;
    text-align: center;
    margin-bottom: 10px;
  }
  ${({ selectPlayer }) => {
    if (selectPlayer) {
      return css`
        &.data-${selectPlayer} {
          background: var(--main-active-color);
          > h5 {
            color: white;
          }
          p {
            /* border: none; */
          }
          svg {
            circle {
              fill: white;
            }
          }
        }
      `;
    }
  }}
`;

export const StyledInfoText = styled.p`
  user-select: none;
  display: flex;
  width: 100%;
  background: #ffffff;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 5px;

  font-family: "Gilroy", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14.22px;
  line-height: 100%;
  text-align: center;
  letter-spacing: 0.015em;
  color: #000000;
  justify-content: center;
  padding: 13px 10px;
`;
