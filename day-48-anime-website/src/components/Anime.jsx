import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Anime() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("My anime component");
    setCount(count + 1);
    console.log(count);
  }, []);
  function handleClick() {
    console.log("You Clucked me");
  }
  return (
    <>
      <h1>Day-48 - UseEffect with Anime</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        ClickMe
      </button>
    </>
  );
}
