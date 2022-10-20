import { useState, createContext } from "react";
import { randomSeed } from "../logics/randomSeed";

const PageContext = createContext();

function PageProvider(props) {
  const [data, setData] = useState([]);
  const [seed, setSeed] = useState(randomSeed());
  return (
    <PageContext.Provider value={{ data, setData, seed, setSeed }}>
      {props.children}
    </PageContext.Provider>
  );
}

export { PageContext, PageProvider };
