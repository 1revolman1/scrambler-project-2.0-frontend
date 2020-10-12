import React from "react";

import usePortal from "react-useportal";

import { useDispatch, useSelector } from "react-redux";
import { sidebarOpenRightPanel } from "../../../../../../../../redux/actions/Sidebar";
import { transferShowUnshowFilter } from "../../../../../../../../redux/actions/Transfers";
import {
  isFilterShown,
  getSelectedPlayerByIndexInSearchable,
} from "../../../../../../../../redux/selector/Transfers";

import { ReactComponent as Icon } from "../../../../../../../../assets/img/SimpleArrow.svg";
import {
  StyledManipulatorContainer,
  StyledFilterContainer,
  StyledOpenFilterContainer,
  StyledOpenFilterButton,
} from "./styled";
export default React.memo(function Filter({ headerGroups }) {
  const dispatch = useDispatch();
  const isFilterVisible = useSelector(isFilterShown);
  const playerThatOfferedToBuy = useSelector(
    getSelectedPlayerByIndexInSearchable
  );
  const { Portal } = usePortal({
    // test-vale
    bindTo:
      // document && document.querySelector(".test-vale"),
      document && document.querySelector(".right-sidebar .filter-container"),
  });

  return (
    <StyledFilterContainer>
      <StyledOpenFilterContainer>
        <span>Filter</span>
        <StyledOpenFilterButton
          onClick={() => {
            dispatch(sidebarOpenRightPanel(true));
            // if we didn't get info about player and if after next click we didn't see in right sidebar ANYTHING - we exit from function
            if (!playerThatOfferedToBuy && !isFilterVisible === false) return;
            dispatch(transferShowUnshowFilter(!isFilterVisible));
          }}
        >
          <Icon
            style={{
              transform: isFilterVisible ? "rotate(90deg)" : "rotate(-90deg)",
            }}
          />
        </StyledOpenFilterButton>
      </StyledOpenFilterContainer>
      <Portal>
        <StyledManipulatorContainer openFilter={isFilterVisible.toString()}>
          {headerGroups.map((headerGroup) =>
            headerGroup.headers.map((column, index) => {
              return column.canFilter
                ? column.render("Filter", { key: index, data: column })
                : null;
            })
          )}
        </StyledManipulatorContainer>
      </Portal>
    </StyledFilterContainer>
  );
});
