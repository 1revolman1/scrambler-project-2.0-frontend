import React, { useMemo } from "react";
import Table from "../../../../components/LeagueTable";
import { StyledContainer, StyledTableContainer } from "./styled";
// import makeData from "./makeData";
import { useDispatch } from "react-redux";
import { leagueSetTeamInfo } from "../../../../redux/actions/League";
import { sidebarOpenRightPanel } from "../../../../redux/actions/Sidebar";
import { homeShowTips } from "../../../../redux/actions/Home";

export default function TableContainer({ ranking }) {
  const dispatch = useDispatch();
  const addInfoAboutTeam = function (data) {
    dispatch(leagueSetTeamInfo(data));
    dispatch(sidebarOpenRightPanel(true));
    dispatch(homeShowTips(false));
  };
  const data = useMemo(
    () =>
      ranking.map((rank, index) => {
        return { ...rank, number: index + 1 };
      }),
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "POS",
        accessor: "number", // accessor is the "key" in the data
      },
      {
        Header: "Team",
        accessor: "name",
      },
      {
        Header: "W",
        accessor: "win",
      },
      {
        Header: "D",
        accessor: "draw",
      },
      {
        Header: "L",
        accessor: "loss",
      },

      {
        Header: "GD",
        accessor: "gd",
      },
      {
        Header: "PTS",
        accessor: "points",
      },
    ],
    []
  );
  return (
    <StyledTableContainer>
      {/* <h4>League Table</h4> */}
      <StyledContainer>
        <Table
          canSelectPlayer={true}
          getTeamInfo={addInfoAboutTeam}
          data={data}
          columns={columns}
        />
      </StyledContainer>
    </StyledTableContainer>
  );
}
