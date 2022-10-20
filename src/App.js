import React from "react";
import "simple-keyboard/build/css/index.css";
import KeyboardBox from "./components/keyboards";
import WordsBox from "./components/words-box";
import "antd/dist/antd.css";
import PlayAgainBox from "./components/play-again-box";

function App() {
  return (
    <div className="App">
      <PlayAgainBox />
      <WordsBox />
      <KeyboardBox />
    </div>
  );
}

export default App;
