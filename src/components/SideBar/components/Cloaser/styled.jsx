import styled, { css } from "styled-components";

export const StyledOpener = styled.div`
  top: 0;
  left: 36px;
  font-size: 36px;
  padding: 0;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: none;
  transition: 0.3s;
  &:hover {
    color: #f1f1f1;
  }
  .burger {
    transition: 0.3s;
    margin-right: 17px;
  }
  .arrow {
    transition: all 0.3s linear;
  }
  @media screen and (max-width: 1100px) {
    display: block;
  }
  ${({ isSideOpen }) => {
    if (isSideOpen) {
      return css`
        .arrow {
          transform: scale(1);
        }
      `;
    } else {
      return css`
        .arrow {
          transform: scale(-1);
        }
      `;
    }
  }}
  @media screen and (max-height: 450px) {
    font-size: 18px;
  }
`;
