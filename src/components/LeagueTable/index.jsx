import React, { useState } from "react";
import { useTable } from "react-table";
import {
  StyledTable,
  StyledThead,
  StyledTbody,
  StyledTh,
  StyledTd,
  StyledTrTh,
  StyledTrTd,
} from "./styled";

export default function TableContainer({
  columns,
  data,
  canSelectPlayer = false,
  getTeamInfo = (e) => console.log(e),
}) {
  const [clicked, setClicked] = useState(null);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
  } = useTable({
    columns,
    data,
  });

  return (
    <>
      <StyledTable {...getTableProps()}>
        <StyledThead>
          {headerGroups.map((headerGroup) => (
            <StyledTrTh {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <StyledTh type={column.Header} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </StyledTh>
              ))}
            </StyledTrTh>
          ))}
        </StyledThead>
        <StyledTbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <StyledTrTd
                className={`row-number-${row.id}`}
                clicked={clicked}
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => {
                  return (
                    <StyledTd
                      onClick={() => {
                        if (!canSelectPlayer) return;
                        setClicked(row.id);
                        getTeamInfo(cell.row.original);
                      }}
                      type={cell.column.Header}
                      titleCell={cell.column.Header === "Number"}
                      {...cell.getCellProps()}
                    >
                      {(() => {
                        if (
                          cell.column.Header === "NO" ||
                          cell.column.Header === "POS"
                        )
                          return String("0" + cell.value).slice(-2);
                        else if (cell.column.Header === "PTS")
                          return <span>{cell.render("Cell")}</span>;
                        else return cell.render("Cell");
                      })()}
                    </StyledTd>
                  );
                })}
              </StyledTrTd>
            );
          })}
        </StyledTbody>
      </StyledTable>
    </>
  );
}
