import React, { useRef } from "react";
import { StyledContainer, StyledIpBlock, StyledTorrentBlock } from "./styled";
import MapContainer from "../MapContainer";

export default function IpContainerExpanded({ ipdata }) {
  const block = useRef(null);
  return (
    <StyledContainer>
      <h2>Expanded IP info:</h2>
      <StyledIpBlock>
        <StyledTorrentBlock ref={block}>
          <ul>
            {ipdata.continent && (
              <li>
                <span>Континент:</span> {ipdata.continent}
              </li>
            )}
            {ipdata.coutry && (
              <li>
                <span>Страна:</span> {ipdata.coutry}
              </li>
            )}
            {ipdata.city && (
              <li>
                <span>Город:</span> {ipdata.city}
              </li>
            )}
            {ipdata.time_zone && (
              <li>
                <span>Временная зона:</span> {ipdata.time_zone}
              </li>
            )}
            {ipdata.postal_code && (
              <li>
                <span>Почтовый код:</span> {ipdata.postal_code}
              </li>
            )}
            {ipdata.org && (
              <li>
                <span>Владелец:</span> {ipdata.org}
              </li>
            )}
            {ipdata.latitude && ipdata.longitude && (
              <li>
                <span>Предположительное место:</span>
                <MapContainer
                  block={block}
                  latitude={ipdata.latitude}
                  longitude={ipdata.longitude}
                />
              </li>
            )}
          </ul>
        </StyledTorrentBlock>
      </StyledIpBlock>
    </StyledContainer>
  );
}
