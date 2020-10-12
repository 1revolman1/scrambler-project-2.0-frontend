import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledSideNav = styled.nav`
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 10; /* Stay on top */
  top: 94px; /* Stay at the top */
  left: 0;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  /* overflow-x: hidden; Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s;
  overflow: auto;
  /* overflow-y: auto; */
  padding-bottom: 100px !important;
  @media screen and (max-width: 1100px) {
    top: 89px;
  }
  @media screen and (max-width: 426px) {
    top: 69px;
  }
  @media screen and (max-height: 450px) {
    padding-top: 15px;
  }
  span {
    transition: all 0.3s linear;
  }
  &[data-sideopen="false"] {
    width: 100px;
    padding: 34px 15px 0;
    @media screen and (max-width: 1100px) {
      width: 100%;
      z-index: 2;
      /* -100% */
      transform: translate3d(-100%, 0, 0);
      /* transform: translate3d(0,-100%, 0); */
    }
    span {
      width: 0;
      opacity: 0;
    }
  }
  &[data-sideopen="true"] {
    width: 305px;
    padding: 34px 24px 0 17px;
    @media screen and (max-width: 1100px) {
      &[data-left="true"] {
        /* transform: translate3d(100%, 0, 0); */
        transform: translate3d(-100%, 0, 0);
      }
      &[data-left="false"] {
        width: 100%;
        z-index: 2;
      }
    }
  }
`;
export const StyledSummary = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    transform: scale(-1);
    cursor: pointer;
  }
  &.isOnMain {
    user-select: none;
    * {
      user-select: none;
    }
    &::before {
      width: 100%;
      text-align: center;
    }
    svg {
      display: none;
    }
  }
  p {
    font-family: "Gilroy", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 41px;
    color: #000000;
  }
  @media screen and (min-width: 1101px) {
    justify-content: center;
    p {
      width: 0;
      opacity: 0;
    }
  }
  &[data-left="true"] {
    opacity: 0;
    user-select: none;
    width: 0;
  }
`;
export const StyledNavLinks = styled(NavLink)`
  position: relative;
  display: flex !important;
  align-items: center;
  text-decoration: none;
  font-family: "Gilroy", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12.642px;
  line-height: 100%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  display: block;
  transition: 0.3s;
  margin: 24px 0;
  padding: 15px 21px;
  user-select: none;
  &.blocked {
    pointer-events: none;
    opacity: 0.3;
  }
  &.selected {
    background: #0e4afb;
    pointer-events: none;
    box-shadow: -2px 5px 7px rgba(14, 74, 251, 0.13);
    border-radius: 4px;
    color: #ffffff;
    span {
      color: #ffffff;
      opacity: 1;
    }
    svg {
      path {
        fill: transparent;
        stroke: white;
      }
    }
  }
  svg {
    transition: all 0.3s linear;
    margin-right: 36px;
    path {
      stroke: black;
    }
  }
  span {
    display: none;
    color: #000000;
    opacity: 0.5;
    @media screen and (max-width: 1100px) {
      display: block;
    }
  }
  @media screen and (max-height: 450px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1101px) {
    /* padding: 15px 21px; */
    /* padding: 27% 20%; */
    padding: 30% 25%;
    justify-content: center;
    &::before {
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translate(-50%, 0);
      content: attr(data-content);
      font-family: "Gilroy", sans-serif;
      font-weight: 500;
      font-size: 10px;
      line-height: 101%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: #808080;
    }
    svg {
      margin: 0;
    }
  }
`;
