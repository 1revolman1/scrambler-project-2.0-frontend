import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyledSelectContainer,
  StyledSelect,
  StyledLoader,
  StyledContainer,
} from "./styled";
import SearchTable from "./components/SearchTable";
import {
  transferGetDataToSearchable,
  transferSetUserWithOfferToBuy,
  transferShowUnshowFilter,
  // transferGetPaginatedDataFromSearchable,
} from "../../../../redux/actions/Transfers";
import { sidebarOpenRightPanel } from "../../../../redux/actions/Sidebar";
import {
  getSearchPlayer,
  getSearchPlayerLoading,
} from "../../../../redux/selector/Transfers";

function NumberRangeColumnFilter({ column: { Header, setFilter } }) {
  const handleChange = (selectedOption) => {
    const [min, max] = (selectedOption && selectedOption.value.split("-")) || [
      undefined,
      undefined,
    ];
    setFilter(() => [+min || undefined, +max || undefined]);
  };

  const options = [
    { value: "0-25", label: "0-25" },
    { value: "26-50", label: "26-50" },
    { value: "51-75", label: "51-75" },
    { value: "76-100", label: "76-100" },
  ];
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
function NumberRangeColumnFilterForPotential({
  column: { Header, setFilter },
  ...props
}) {
  const handleChange = (selectedOption) => {
    const [min, max] = (selectedOption && selectedOption.value.split("-")) || [
      undefined,
      undefined,
    ];
    setFilter(() => [+min || undefined, +max || undefined]);
  };

  const options = [
    { value: "0-25", label: "0-25" },
    { value: "26-50", label: "26-50" },
    { value: "51-75", label: "51-75" },
    { value: "76-100", label: "76-100" },
  ];
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
export default function SearchPlayersContainer() {
  const dispatch = useDispatch();
  const serverData = useSelector(getSearchPlayer);
  const isLoading = useSelector(getSearchPlayerLoading);
  // const data = useMemo(() => makeData(1000), []);
  const setDataToRightPanel = function (original) {
    dispatch(sidebarOpenRightPanel(true));
    dispatch(transferShowUnshowFilter(false));
    dispatch(transferSetUserWithOfferToBuy(original));
  };
  const data = useMemo(() => {
    return serverData.length > 0
      ? serverData.map(
          ({
            first_name,
            last_name,
            potential_min,
            potential_max,
            form,
            listed,
            ...other
          }) => {
            return {
              ...other,
              potential_min,
              potential_max,
              name: `${last_name} ${first_name}`,
              // potential: `${potential_min}-${potential_max}`,
              form: `${form * 100}%`,
              statusField: listed ? "Listed for sаlе" : "Not listed for sale",
            };
          }
        )
      : [];
  }, [isLoading]);
  // const data = useMemo(() => {
  //   return serverData.length > 0
  //     ? serverData.map(
  //         ({
  //           first_name,
  //           last_name,
  //           potential_min,
  //           potential_max,
  //           form,
  //           listed,
  //           ...other
  //         }) => {
  //           return {
  //             ...other,
  //             name: `${last_name} ${first_name}`,
  //             potential: `${potential_min}-${potential_max}`,
  //             form: `${form * 100}%`,
  //             statusField: listed ? "Listed for sаlе" : "Not listed for sale",
  //           };
  //         }
  //       )
  //     : [];
  // }, [serverData]);
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      { Header: "Age", accessor: "age" },
      { Header: "Position", accessor: "fav_position" },
      {
        Header: "Rating",
        accessor: "rating",
        Filter: NumberRangeColumnFilter,
        filter: "between",
      },
      {
        Header: "Potential",
        accessor: "potential_max",
        Filter: NumberRangeColumnFilterForPotential,
        filter: "between",
      },
      { Header: "Form", accessor: "form" },
      { Header: "Status", accessor: "statusField" },
    ],
    []
  );

  useEffect(() => {
    if (serverData.length === 0) dispatch(transferGetDataToSearchable());
  }, []);
  if (isLoading || serverData.length === 0)
    return (
      <StyledLoader type="Bars" color="#00BFFF" height={100} width={100} />
    );
  else
    return (
      <StyledContainer>
        <SearchTable
          columns={columns}
          data={data}
          getUserToSell={setDataToRightPanel}
        />
      </StyledContainer>
    );
}
