import React, { useState, useEffect } from "react";
import { StyledMap } from "./styled";

export default function MapContainer({ latitude, longitude, block }) {
  const [link, setLink] = useState(
    `https://www.bing.com/maps/embed?h=400&w=${600}&cp=${latitude}~${longitude}&lvl=11&typ=d&sty=r&src=SHELL&FORM=MBEDV8`
  );
  useEffect(() => {
    console.log(block.current, block.current.offsetWidth);
    if (block.current.offsetWidth)
      setLink(
        `https://www.bing.com/maps/embed?h=400&w=${block.current.offsetWidth}&cp=${latitude}~${longitude}&lvl=11&typ=d&sty=r&src=SHELL&FORM=MBEDV8`
      );
  }, []);
  return (
    <StyledMap
      title="Map Container"
      frameborder="0"
      src={link}
      scrolling="no"
    />
  );
}
