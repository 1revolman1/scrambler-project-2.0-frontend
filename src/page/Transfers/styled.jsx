import styled from "styled-components";
import { StyledWrapper } from "../styled";

export const StyledContainer = styled(StyledWrapper)`
  @media screen and (max-width: 426px) {
    flex-direction: column;
  }
`;
