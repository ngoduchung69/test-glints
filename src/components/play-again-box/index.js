import styled from "styled-components";
import { Button } from "antd";
import { useCallback, useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
import { randomSeed } from "../../logics/randomSeed";

const PlayAgainBox = () => {
  const { setData, setSeed } = useContext(PageContext);
  const playAgain = useCallback(() => {
    setSeed(randomSeed);
    setData([]);
  }, [randomSeed, setData, setSeed]);
  return (
    <Wrapper>
      <Button onClick={playAgain}>Play Again</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export default PlayAgainBox;
