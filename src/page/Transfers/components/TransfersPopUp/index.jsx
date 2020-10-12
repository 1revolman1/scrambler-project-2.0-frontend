import React, { useState } from "react";
import {
  StyledPopUp,
  StyledPopUpBlock,
  StyledCross,
  StyledPopUpInputContainer,
  StyledInput,
  StyledPopUpConfirmation,
  StyledSend,
  StyledText,
} from "./styled";

export default function PopUp({ status, needToShowPopUp, setNeedToShowPopUp }) {
  const [clickPopUpSend, setClickPopUpSend] = useState(false);
  const dataSetInformation = {
    1: "Offer",
    2: "Salary per week",
    7: "Salary per week",
  };
  return (
    <StyledPopUp needtoshow={needToShowPopUp}>
      <StyledPopUpBlock>
        <StyledCross onClick={() => setNeedToShowPopUp(false)} />
        {(+status === 1 || +status === 2 || +status === 7) && (
          <StyledPopUpInputContainer>
            <StyledInput
              placeholder={
                (+status === 1 || +status === 2 || +status === 7) &&
                dataSetInformation[status]
              }
              type="text"
            ></StyledInput>
            <StyledSend
              clickPopUpSend={clickPopUpSend}
              onClick={() => setClickPopUpSend(true)}
            />
            <StyledPopUpConfirmation clickPopUpSend={clickPopUpSend}>
              <p>Sent!</p>
            </StyledPopUpConfirmation>
          </StyledPopUpInputContainer>
        )}
        {+status === 3 && (
          <StyledPopUpInputContainer>
            <StyledText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui earum
              ab, at illo voluptatem architecto dolorem tempora, non porro vel
              quo officiis culpa, cum in asperiores repellendus ratione
              aspernatur tempore.
            </StyledText>
          </StyledPopUpInputContainer>
        )}
      </StyledPopUpBlock>
    </StyledPopUp>
  );
}
