import React, { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import "./styles.css";

export default function App() {
  const [state, setState] = useState(1);
  const [page, setpage] = useState(0);

  const handleClick = () => {
    setState(state + 1);
  };
  const handleSclick = () => {
    setState(state - 1);
  };
  switch (state) {
    case 1:
      return (
        <div className="App">
          <Form1 />
          <button value={page} onClick={handleClick}>
            Next
          </button>
        </div>
      );
    case 2:
      return (
        <div className="App">
          <Form2 />
          <button value={page} onClick={handleSclick}>
            back
          </button>
        </div>
      );
    default:
      break;
  }
}
