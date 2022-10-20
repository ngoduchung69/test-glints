import React, { memo } from "react";
import styled from "styled-components";
import * as configs from "../../configs/constants";
import WordBox from "./WordBox";

const WordRow = ({ data }) => {
  const { dataArray } = data;
  let words = [];
  for (let x = 0; x < configs.CHARACTER_QUANTITY; x++) {
    words[x] = dataArray[x] || "";
  }
  return (
    <Wrapper>
      {words.map((word) => {
        if (typeof word === "object") {
          const { guess, result } = word;
          return <WordBox guess={guess} result={result} />;
        } else {
          return <WordBox guess={word} />;
        }
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default memo(WordRow, function(prevProps, nextProps) {
  if(nextProps.data.calledApi) {
    return true
  } else {
    return false
  }
});
