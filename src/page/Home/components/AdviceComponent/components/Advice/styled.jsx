import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  flex: 1 1 calc(48% - 30px);
  margin: 5px;
  padding: 20px;
  padding-top: 31px;
  padding-bottom: 31px;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 15px;
  /* max-width: 130px; */
  h6 {
    font-family: "Space Mono", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -0.03em;
    text-align: left;
    color: #000000;
    margin-bottom: 9px;
  }
  p {
    font-family: "Space Mono", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -0.03em;
    text-align: left;
    color: #979797;
  }
  ${({ theam }) => {
    if (theam === "WHITE") {
      return css`
        border: 1px solid #333333;
        h6 {
          color: #000000;
        }
        p {
          color: #000000;
          letter-spacing: 0.01em;
        }
      `;
    }
    if (theam === "BLACK") {
      return css`
        border: 1px solid #bdbdbd;
        background: #333333;
        h6 {
          color: #f2c94c;
        }
        p {
          font-weight: bold;
          color: #ffffff;
          letter-spacing: -0.03em;
        }
      `;
    }
  }}
`;
