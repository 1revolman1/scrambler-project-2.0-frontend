import React, { useRef } from "react";
import PageSideBarNavigation from "../../../../../PageSideBarNavigation";
export default function TransfersSide() {
  const links = useRef([
    { to: "/transfers/buy-players", text: "Buy players" },
    { to: "/transfers/sell-players", text: "Sell players" },
    { to: "/transfers/search-players", text: "Search players" },
  ]);
  return (
    <>
      <h4>Transfers</h4>
      <PageSideBarNavigation links={links.current} />
    </>
  );
}
