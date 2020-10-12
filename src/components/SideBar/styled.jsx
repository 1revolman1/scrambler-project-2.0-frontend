import styled, { css } from "styled-components";

//Z-INDEX DATA-GUIDE
//LeftSidebar - 9
//RightSidebar - 9
//SideNav - 10

export const StyledMain = styled.section`
  position: relative;
  transition: margin-left 0.5s, margin-right 0.5s;
  padding: 16px;
  @media screen and (max-width: 1100px) {
    margin: 0 !important;
  }
  &[data-sideopen="true"] {
    &[data-left="true"] {
      &[data-right="true"] {
        /* margin-left: 677px; */
        margin-right: 25%;
        margin-left: calc(270px + 100px);

        /* margin-right: 468px; */
      }
      &[data-right="false"] {
        margin-left: calc(270px + 100px);
      }
    }
    &[data-left="false"] {
      &[data-right="true"] {
        margin-left: 305px;
        margin-right: 25%;
      }
      &[data-right="false"] {
        margin-left: 305px;
      }
    }
  }
  &[data-sideopen="false"] {
    &[data-left="true"] {
      &[data-right="true"] {
        margin-left: calc(270px + 100px);
        /* margin-left: 477px; */
        margin-right: 25%;
        /* margin-right: 468px; */
      }
      &[data-right="false"] {
        margin-left: calc(270px + 100px);
      }
    }
    &[data-left="false"] {
      &[data-right="true"] {
        margin-left: 100px;
        margin-right: 25%;
        /* margin-right: 468px; */
      }
      &[data-right="false"] {
        margin-left: 100px;
      }
    }
  }
`;

export const StyledBackground = styled.div`
  ${({ screenHeight }) => {
    return css`
      height: ${screenHeight};
    `;
  }}
`;
