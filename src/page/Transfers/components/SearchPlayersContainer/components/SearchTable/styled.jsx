import styled, { css } from "styled-components";
import Select from "react-select";
import { ReactComponent as Sorted } from "./assets/sorted.svg";

export const StyledSorted = styled(Sorted)`
  margin-left: 5px;

  ${({ type }) => {
    if (type === "fromMinToMax") {
      return css`
        path:first-of-type {
          display: none;
        }
      `;
    }
    if (type === "fromMaxToMin") {
      return css`
        path:last-of-type {
          display: none;
        }
      `;
    }
  }}
`;

export const StyledManipulator = styled.div`
  margin-bottom: 27px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > h3 {
    font-family: "Gilroy", sans-serif;
    font-size: 34px;
    line-height: 41px;
    font-weight: 900;
    letter-spacing: 0.005em;
    color: #333333;
  }
`;
export const StyledSelectContainer = styled.div`
  width: 100%;
  /* width: 20%; */
  /* max-width: 235px; */
  /* flex: 1 0 19%; */
  margin: 5px;
  > input {
    border: none;
  }
  @media screen and (max-width: 1204px) {
    flex: none;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    max-width: inherit;
  }
`;

export const StyledSelect = styled(Select)`
  .react-select__control {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.06));
  }
  .react-select__placeholder {
    font-family: "Gilroy", sans-serif;
    font-size: 14.222px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: rgba(0, 0, 0, 0.5);
  }
  .react-select__option {
    font-family: "Gilroy", sans-serif;
  }
`;

export const StyledTableContainer = styled.section`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-style: hidden;
  @media screen and (max-width: 767px) {
    [type="Age"],
    [type="Position"],
    [type="Form"],
    [type="Status"] {
      display: none;
    }
    th[type="Potential"] {
      border-top-right-radius: 9px;
      border-bottom-right-radius: 9px;
    }
  }
`;

export const StyledThead = styled.thead`
  ${({ display }) => {
    if (display === "none")
      return css`
        display: none;
      `;
  }}
`;

export const StyledTbody = styled.tbody`
  /* border-top: 12px solid #e5e5e5; */
  &::before {
    content: "";
    display: block;
    height: 15px;
  }
`;

export const StyledTrTh = styled.tr``;

export const StyledTh = styled.th`
  padding: 12px 0 12px;
  background: black;
  font-family: "Gilroy", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 26px;
  letter-spacing: 1px;
  color: #ffffff;
  text-transform: uppercase;
  @media screen and (max-width: 425px) {
    font-size: 11px;
  }
  &:first-of-type {
    border-top-left-radius: 9px;
    border-bottom-left-radius: 9px;
  }
  &:last-of-type {
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
  }
  ${({ display, titleNumberName, type }) => {
    if (titleNumberName)
      return css`
        display: none;
      `;
    if (display === "none")
      return css`
        display: none;
      `;
    if (type === "Number") {
      return css`
        width: 5%;
        min-width: 50px;
      `;
    }
    if (type === "Name") {
      return css`
        width: 15%;
        min-width: 105px;
      `;
    }
    if (type === "Team") {
      return css`
        text-align: left;
      `;
    }
  }}
`;

export const StyledTrTd = styled.tr`
  border-bottom: 1px solid #bdbdbd;
  background: white;
  &:last-of-type {
    border-bottom: 0px solid #bdbdbd;
  }
  ${({ clicked }) => {
    return css`
      &.row-number-${clicked} {
        background: #0e4afb;
        * {
          color: #ffffff;
        }
      }
    `;
  }}
`;

export const StyledTd = styled.td`
  text-align: center;
  padding: 10px;
  font-family: "Gilroy", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  width: 100px;
  @media screen and (max-width: 425px) {
    font-size: 13px;
  }
  ${({ titleCell, type }) => {
    if (titleCell)
      return css`
        text-align: left;
      `;
    if (type === "PTS") {
      return css`
        span {
          background: rgba(14, 74, 251, 0.1);
          border: 1px solid rgba(187, 199, 234, 0.45);
          border-radius: 5px;
          padding: 0 11px;
        }
      `;
    }
    if (type === "NO") {
      return css`
        width: 60px;
        opacity: 0.5;
      `;
    }
    if (type === "Team") {
      return css`
        text-align: left;
        width: inherit;
      `;
    }
  }}
`;
