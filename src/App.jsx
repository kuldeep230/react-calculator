import { useState } from "react";
import "./App.css";
import * as math from "mathjs";
import Button from "./components/NumButtons";
import ClearButton from "./components/ClearButton";
import InputArea from "./components/InputArea";

function App() {
  let [inputText, setInputText] = useState("");

  const addToInput = (val) => {
    setInputText(inputText + val);
  };

  const handleEqual = (val) => {
    setInputText(math.evaluate(inputText));
  };

  return (
    <div className="app">
      <div className="calc-wrapper">
        <h1>Basic Calculator</h1>
        <InputArea>{inputText}</InputArea>
        <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={handleEqual}>=</Button>
          <Button handleClick={addToInput}>+</Button>
        </div>
        <ClearButton handleClear={() => setInputText("")}>Clear</ClearButton>
      </div>
    </div>
  );
}
export default App;
