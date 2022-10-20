import React, { useContext } from "react";
import styled from "styled-components";
import * as configs from "../../configs/constants";
import { PageContext } from "../../contexts/PageContext";
import WordRow from "./WordRow";

const WordsBox = () => {
  const { data } = useContext(PageContext);
  let RowData = [];
  for (let x = 0; x < configs.LINE_QUANTITY; x++) {
    RowData[x] = data[x] || {
      dataArray: [],
      calledApi: false,
    };
  }
  return (
    <Wrapper>
      {RowData.map((data, index) => (
        <WordRow key={`${index}-wordRow`} data={data} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default WordsBox;
