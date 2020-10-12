import styled, { css } from "styled-components";

export const StyledOpenFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > span {
    margin: 0 18px;
    font-family: "Gilroy", sans-serif;
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;
    color: #333333;
  }
`;

export const StyledOpenFilterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: -5px 7px 4px rgba(0, 0, 0, 0.03);
`;

export const StyledFilterContainer = styled.section`
  width: 100%;
  margin-bottom: 30px;
`;
export const StyledManipulatorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${({ openFilter }) => {
    if (openFilter === "false") {
      return css`
        display: none;
      `;
    }
  }}
`;
