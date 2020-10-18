import React from "react";
import { StyledBlock, StyledContainer, StyledTorrentBlock } from "./styled";

export default function LastKnownTorrent({ data }) {
  return (
    <StyledContainer>
      <h2>Последний торрент по вашему IP:</h2>
      <StyledBlock>
        {data.type && <h3>{data.type}</h3>}
        <StyledTorrentBlock>
          <ul>
            {data.name && (
              <li>
                <span>Имя:</span> {data.name}
              </li>
            )}
            {data.size && (
              <li>
                <span>Размер:</span> {data.size}
              </li>
            )}
            {data.lastData && (
              <li>
                <span>Дата:</span> {data.lastData}
              </li>
            )}
          </ul>
        </StyledTorrentBlock>
        {data.type && data.type === "Фильм" && (
          <p>Кликни, что бы узнать больше....</p>
        )}
      </StyledBlock>
    </StyledContainer>
  );
}
