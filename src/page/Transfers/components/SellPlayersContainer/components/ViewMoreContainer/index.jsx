import React, { useEffect, useRef, useState } from "react";
import {
  StyledContainer,
  StyledButton,
  StyledViewMoreContainer,
  StyledArrow,
  StyledTextArrow,
} from "./styled";
import { ReactComponent as SimpleArrow } from "../../../../../../assets/img/SimpleArrow.svg";
import PlayerCard from "../../../PlayerCard";

export default function ViewMoreContainer({
  title,
  data,
  selectPlayer,
  setSelectPlayer,
}) {
  const postsPerPage = useRef(window && window.innerWidth < 426 ? 3 : 20);
  // const [selectPlayer, setSelectPlayer] = useState(false);
  const [posts, setPosts] = useState([]);
  const [next, setNext] = useState(window && window.innerWidth < 426 ? 3 : 20);
  const [last, setLast] = useState(false);
  const [openMod, setOpenMod] = useState(true);

  const loopWithSlice = (start, end) => {
    if (last) return;
    const newPosts = data.slice(start, end);
    const oldPosts = data.slice(0, start);
    const OldNewPosts = oldPosts.map((elm, index) => {
      return { ...elm, ...data[index] };
    });
    const arrayForHoldingPosts = [...OldNewPosts, ...newPosts];
    setLast(newPosts.length < postsPerPage.current);
    setPosts(arrayForHoldingPosts);
  };
  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage.current);
    setNext(next + postsPerPage.current);
  };
  useEffect(() => {
    if (data.length > 0 && next === postsPerPage.current) {
      loopWithSlice(0, postsPerPage.current);
    }
  }, [data]);
  // if (data.length > 0)
  return (
    <StyledContainer>
      <StyledTextArrow>
        <h1
          onClick={() => {
            if (window && window.innerWidth < 426) setOpenMod(!openMod);
          }}
        >
          {title}
        </h1>
        <StyledArrow open={openMod} />
      </StyledTextArrow>
      <StyledViewMoreContainer open={openMod}>
        {posts.length > 0 &&
          posts.map(({ player, status, ...props }, index) => (
            <PlayerCard
              sellOrBuy="sell"
              className={`${index}index-${title}`}
              player={player}
              status={status}
              key={`${index}index-${title}` + Math.random()}
              selectPlayer={selectPlayer}
              setSelectPlayer={setSelectPlayer}
              {...props}
            />
          ))}
        <StyledButton data-last={last} onClick={handleShowMorePosts}>
          <SimpleArrow />
          <button>{last ? "All data" : "Load more"}</button>
          <SimpleArrow />
        </StyledButton>
      </StyledViewMoreContainer>
    </StyledContainer>
  );
  // else return null;
}
