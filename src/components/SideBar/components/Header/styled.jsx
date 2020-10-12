import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  z-index: 4;
  width: 100%;
  padding: 19px 0 19px 36px;
  min-height: 90px;
  background: #ffffff;
  border: 1px solid #e9e9e9;
  @media screen and (max-width: 1100px) {
    padding: 10px 24px 10px 36px;
    justify-content: space-between;
  }
  @media screen and (max-width: 426px) {
    min-height: 70px;
    padding: 19px 24px 19px 36px;
  }
`;

