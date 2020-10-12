import styled from "styled-components";

export const StyledTableContainer = styled.section`
  & > h4 {
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #949494;
    margin-bottom: 30px;
  }
  margin-bottom: 23px;
`;

export const StyledContainer = styled.div`
  box-sizing: border-box;
  border-radius: 15px;
  > div {
    background: #000000;
    border-radius: 20px;
    padding: 10px 50px;
    width: fit-content;
    margin-bottom: 15px;
    span {
      font-family: "Space Mono", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 100%;
      text-align: center;
      letter-spacing: -0.03em;
      color: #ffffff;
    }
  }
`;
