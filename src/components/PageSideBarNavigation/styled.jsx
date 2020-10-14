import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLinksContainer = styled.section`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 12px 37px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  text-decoration: none;
  font-family: "Gilroy", sans-serif;
  font-size: 15px;
  line-height: 100%;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: #000000;
  margin: 10px 0;
  /* margin: 10px 15px; */
  transition: 0.3s;
  text-align: center;
  min-width: 180px;
  width: fit-content;
  &:first-of-type {
    /* margin-left: 0; */
  }
  &:last-of-type {
    /* margin-right: 0; */
  }
  &.active-button {
    background: var(--main-active-color);
    color: #ffffff;
    @media screen and (min-width: 1101px) {
      pointer-events: none;
    }
    /* font-weight: bold;
    background: #f2c94c; */
  }
  @media screen and (max-width: 1100px) {
    margin: 10px auto;
    width: 100%;
  }
`;
