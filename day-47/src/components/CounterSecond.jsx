import React from "react";
import { useState } from "react";
export default function CounterSecond() {
  const [counter, setCounter] = useState(0);
  function handleClick() {
    setCounter(counter + 1);
  }
  return (
    <div className="container">
      <div className="card-container">
        <p>{counter}</p>
        <button onClick={handleClick}>Add one</button>
      </div>
    </div>
  );
}
