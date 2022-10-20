import React from "react";
import styled from "styled-components";
import { renderColor } from "../../logics/renderColor";

const WordBox = ({ guess, result }) => {
  return <Wrapper color={renderColor(result)}>{guess}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => `1px solid ${props.color}`};
  padding: 10px;
  font-size: 30px;
  margin: 10px;
  min-height: 80px;
  min-width: 50px;
`;

export default WordBox;
