import Keyboard from "react-simple-keyboard";
import React, { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
import { AddRemoveCharacter } from "../../logics/addCharacter";
import { removeCharacter } from "../../logics/removeCharacter";
import { confirmWord } from "../../logics/confirmWord";
import styled from "styled-components";
import "simple-keyboard/build/css/index.css";

function KeyboardBox() {
  const { data, setData, seed } = useContext(PageContext);
  const onKeyPress = (text) => {
    if (text === "{bksp}") {
      removeCharacter(data, setData);
    } else if (text === "{enter}") {
      confirmWord(data, setData, seed);
    } else if (/^[A-z]+$/.test(text)) {
      AddRemoveCharacter(data, setData, text);
    }
  };
  return (
    <Wrapper>
      <Keyboard layoutName={"default"} onKeyPress={onKeyPress} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
`;

export default KeyboardBox;
