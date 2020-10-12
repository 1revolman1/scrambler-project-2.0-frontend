import styled, { css } from "styled-components";

export const StyledPagination = styled.section`
  margin: 10px 0;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-style: hidden;
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

  @media screen and (max-width: 426px) {
    ${({ type }) => {
      if (type === "W" || type === "L" || type === "D" || type === "GD") {
        return css`
          display: none;
        `;
      }
    }}
  }

  /* @media screen and (max-width: 425px) {
    padding: 0;
  } */
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
    if (type === "W") {
      return css`
        @media screen and(max-width:425px) {
          display: none;
        }
      `;
    }
    if (type === "L") {
      return css`
        @media screen and(max-width:425px) {
          display: none;
        }
      `;
    }
    if (type === "GD") {
      return css`
        @media screen and(max-width:425px) {
          display: none;
        }
      `;
    }
  }}
`;

export const StyledTrTd = styled.tr`
  border-bottom: 1px solid #bdbdbd;
  background: white;
  ${({ clicked }) => {
    return css`
      &.row-number-${clicked} {
        background: #0e4afb;
        pointer-events: none;
        [type="PTS"] {
          span {
            background: white;
            color: black;
          }
        }
        * {
          color: #ffffff;
        }
      }
    `;
  }}
  &.clicked {
    background: #0e4afb;
    * {
      color: #ffffff;
    }
  }
  &:last-of-type {
    border-bottom: 0px solid #bdbdbd;
  }
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
  /* background: white; */
  /* @media screen and (max-width: 425px) {
    padding: 0;
  } */
  @media screen and (max-width: 426px) {
    ${({ type }) => {
      if (type === "W" || type === "L" || type === "D" || type === "GD") {
        return css`
          display: none;
        `;
      }
    }}
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
    if (type === "NO" || type === "POS") {
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
