import styled from "styled-components";

export const StyledContainer = styled.section`
  width: 100%;
  > h6 {
    font-family: "Space Mono", sans-serif;
    font-style: italic;
    font-weight: bold;
    font-size: 19px;
    line-height: 26px;
    letter-spacing: -0.03em;
    color: #000000;
    margin-bottom: 11px;
  }
  margin-bottom: 23px;
`;

export const StyledAdviceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-height: 436px;
  overflow: auto;
`;
