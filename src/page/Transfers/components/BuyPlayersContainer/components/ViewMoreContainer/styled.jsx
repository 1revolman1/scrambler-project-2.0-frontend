import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../../assets/Arrow.svg";
export const StyledTextArrow = styled.div`
  position: relative;
`;

export const StyledArrow = styled(Arrow)`
  position: absolute;
  right: 20px;
  transition: 0.3s;
  transform: ${({ open }) =>
    open
      ? "translate(0, -50%) rotate(0deg)"
      : "translate(0, -50%) rotate(180deg)"};
  display: none;
  top: 50%;
  @media screen and (max-width: 426px) {
    display: block;
  }
`;

export const StyledContainer = styled.section`
  h1 {
    position: relative;
    text-align: center;
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.005em;
    @media screen and (max-width: 426px) {
      padding-right: 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Gilroy", sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 15px;
      line-height: 41px;
      letter-spacing: 0.005em;

      background: #ffffff;
      border: 1px solid #000000;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
      border-radius: 5px;
    }
  }
`;

export const StyledButton = styled.div`
  margin: 40px auto 10px;
  max-width: 240px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  svg {
    transition: 1s;
    transform: rotate(270deg);
    margin: 0 27px;
  }
  &[data-last="true"] {
    cursor: not-allowed;
    * {
      cursor: not-allowed;
    }
    svg {
      transform: rotate(90deg);
    }
  }
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: transparent;
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20.25px;
    line-height: 100%;
    text-align: center;
    letter-spacing: 0.015em;
    color: #000000;
  }
`;

export const StyledViewMoreContainer = styled.section`
  display: ${({ open }) => (open ? "block" : "none")};
`;
