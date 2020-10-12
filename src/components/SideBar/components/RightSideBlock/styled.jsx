import styled from "styled-components";
import { ReactComponent as Cross } from "./assets/Cross.svg";

export const StyledCross = styled(Cross)`
  position: absolute;
  top: 35px;
  right: 35px;
  width: 14px;
  height: 14px;
  cursor: pointer;
`;
export const StyledRightBlock = styled.aside`
  padding: 50px 20px 100px 20px;
  max-height: calc(100vh - 94px);
  z-index: 9;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 94px;
  height: 100%;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  transition: 0.5s;
  width: 25%;
  max-width: 468px;
  /* transform: translate3d(0%, 0, 0); */
  @media screen and (max-width: 1100px) {
    top: 89px;
  }
  @media screen and (max-width: 426px) {
    padding: 50px 10px 100px 10px;
    top: 69px;
    max-height: calc(100vh - 69px);
  }
  @media screen and (max-width: 1100px) {
    width: 100%;
    max-width: inherit;
  }
  &[data-right="false"] {
    transform: translate3d(100%, 0, 0);
  }
`;
