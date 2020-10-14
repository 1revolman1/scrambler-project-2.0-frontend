import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../../assets/img/SimpleArrow.svg";

export const StyledArrow = styled(Arrow)`
  position: absolute;
  right: 0px;
  top: 5px;
  cursor: pointer;
`;

export const StyledRelativeContainer = styled.div`
  position: relative;
`;
export const StyledRightSideBlock = styled.aside`
  overflow: auto;
  position: fixed;
  z-index: 9;
  max-height: calc(100vh - 89px);
  overflow: auto;
  top: 89px;
  height: 100%;
  transition: all 0.5s, opacity 0.3s;
  border: 1px solid #dcdcdc;
  padding: 30px 2% 50px;
  background: white;
  h4 {
    margin-right: 20px;
  }

  @media screen and (max-width: 426px) {
    padding: 34px 24px 0 17px;
    top: 69px;
    max-height: calc(100vh - 69px);
  }
  &[data-left="true"] {
    /* Navigation and additional pop up opened */
    left: 100px;
    width: 270px;
    /* width: 377px; */
    @media screen and (max-width: 1100px) {
      left: 0;
      width: 100%;
    }
  }
  &[data-left="false"] {
    /* Navigation closed - additional pop up closed */
    left: 100px;
    width: 270px;
    transform: translate3d(-100%, 0, 0);
    /* width: 377px; */
    @media screen and (max-width: 1100px) {
      left: 0;
      transform: translate3d(100%, 0, 0);

      /* left: 200%; */
      width: 100%;
    }
  }
`;
