import styled from "styled-components";
import { StyledContentContainer } from "../../styled";

export const StyledContainer = styled(StyledContentContainer)``;
export const StyledIpBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.03);
  border-radius: 5px;
  padding: 30px 0;
  h3 {
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    color: #000000;
    margin-bottom: 9px;
  }
  p {
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 32.437px;
    line-height: 41px;
    letter-spacing: 0.005em;
    color: #171717;
    margin-bottom: 9px;
  }
`;
