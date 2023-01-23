import React from "react";
import { useState } from "react";
export default function Counter() {
  const [counter, setCounter] = useState(0);
  function handleClick() {
    setCounter(counter + 1);
  }
  function changeColor() {
    console.log("changeColor activated");
  }
  return (
    <div className="container">
      <div className="card-container" onPointerEnter={changeColor}>
        <p>{counter}</p>
        <button onClick={handleClick}>Add one</button>
      </div>
    </div>
  );
}
