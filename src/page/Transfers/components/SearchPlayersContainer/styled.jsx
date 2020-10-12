import styled from "styled-components";
import Select from "react-select";
import Loader from "react-loader-spinner";
export const StyledContainer = styled.section`
  width: 100%;
`;

export const StyledSelectContainer = styled.div`
  width: 100%;
  /* width: 20%; */
  /* max-width: 235px; */
  /* flex: 1 0 19%; */
  margin: 5px;
  > input {
    border: none;
  }
  @media screen and (max-width: 1204px) {
    flex: none;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    max-width: inherit;
  }
`;

export const StyledSelect = styled(Select)`
  .react-select__placeholder {
    font-family: "Gilroy", sans-serif;
    font-size: 14.222px;
    line-height: 20px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: rgba(0, 0, 0, 0.5);
  }
  .react-select__option {
    font-family: "Gilroy", sans-serif;
  }
`;

export const StyledLoader = styled(Loader)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
