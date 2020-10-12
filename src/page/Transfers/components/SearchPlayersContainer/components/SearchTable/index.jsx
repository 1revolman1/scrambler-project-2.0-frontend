import React, { useMemo, useState } from "react";
import Filter from "./components/Filter";
// easy to create sorter by this
// how to make sorting by range - https://codesandbox.io/s/github/tannerlinsley/react-table/tree/master/examples/filtering
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
import {
  StyledTable,
  StyledTableContainer,
  StyledThead,
  StyledTbody,
  StyledTh,
  StyledTd,
  StyledTrTh,
  StyledTrTd,
  StyledSelect,
  StyledSelectContainer,
  StyledSorted,
} from "./styled";
// import { ReactComponent as Icon } from "../../../../../../assets/img/SimpleArrow.svg";

function DefaultColumnFilter({
  column: { Header, id, preFilteredRows, setFilter },
}) {
  const handleChange = (selectedOption) => {
    setFilter((selectedOption && selectedOption.value) || undefined);
  };
  const itemCheck = function itemCheck(item, tmpArray) {
    if (tmpArray.indexOf(item.value) === -1) {
      tmpArray.push(item.value);
      return true;
    }
    return false;
  };
  const options = useMemo(() => {
    let tmpArray = [];
    const option = preFilteredRows
      .map(({ values }) => {
        return { value: values[id], label: values[id] };
      })
      .filter((item) => itemCheck(item, tmpArray))
      .sort((a, b) => a.value - b.value);
    return option;
  }, [preFilteredRows]);
  return (
    <StyledSelectContainer>
      <StyledSelect
        onChange={handleChange}
        options={options}
        placeholder={`${Header}`}
        isClearable={true}
        classNamePrefix="react-select"
      />
    </StyledSelectContainer>
  );
}
export default React.memo(function Table({
  columns,
  data,
  pageCount: controlledPageCount,
  getUserToSell,
}) {
  const [clicked, setClicked] = useState(null);
  const filterTypes = React.useMemo(
    () => ({
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );
  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    gotoPage,
    pageCount,
    // Get the state from the instance
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
      initialState: { pageIndex: 0, pageSize: 50 },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  // Listen for changes in pagination and use the state to fetch our new data

  return (
    <>
      <Filter headerGroups={headerGroups} />
      <StyledTableContainer>
        <StyledTable {...getTableProps()}>
          <StyledThead>
            {headerGroups.map((headerGroup) => (
              <StyledTrTh {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <StyledTh
                    type={column.Header}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <StyledSorted type="fromMaxToMin" />
                        ) : (
                          <StyledSorted type="fromMinToMax" />
                        )
                      ) : (
                        <StyledSorted />
                      )}
                    </span>
                  </StyledTh>
                ))}
              </StyledTrTh>
            ))}
          </StyledThead>
          <StyledTbody {...getTableBodyProps()}>
            {page.map((row) => {
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
                          setClicked(row.id);
                          getUserToSell(cell.row.original);
                        }}
                        type={cell.column.Header}
                        titleCell={cell.column.Header === "Number"}
                        {...cell.getCellProps()}
                      >
                        {cell.column.Header === "Potential"
                          ? `${cell.row.original.potential_min}-${cell.row.original.potential_max}`
                          : cell.render("Cell")}
                      </StyledTd>
                    );
                  })}
                </StyledTrTd>
              );
            })}
          </StyledTbody>
        </StyledTable>
      </StyledTableContainer>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>
      </div>
    </>
  );
});
