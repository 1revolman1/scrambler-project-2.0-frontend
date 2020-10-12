import React from "react";

import {
  StyledHeader,
} from "./styled";
import Cloaser from "../Cloaser";

export default React.memo(function Header({
  location,
  openleftpanel,
  isleftopen,
  ...props
}) {
  return (
    <StyledHeader>
      <Cloaser {...props} />
    </StyledHeader>
  );
});
