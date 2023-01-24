import React from "react";
import { useState } from "react";
export default function Counter(props) {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);
  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }

  let className = "card";
  if (hover) {
    className += " hover";
  }
  if (props.isFancy) {
    className += " fancy";
  }
  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{count}</h1>
      <button onClick={handleClick}>Add one</button>
      <input type="radio" />
    </div>
  );
}
