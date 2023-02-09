import React from "react";
import { useRef, useState } from "react";
export default function Stopwatch() {
  const [now, setNow] = useState(0);
  const [startTime, setStartTime] = useState(0);

  const timeRef = useRef(0);

  function handleStart() {
    setStartTime(Date.now());
    timeRef.current = setInterval(() => {
      setNow(Date.now());
    }, 1000);
  }

  function handleStop() {
    clearInterval(timeRef.current);
  }

  //   const timer = Math.floor((now - startTime) / 1000);
  const timer = Math.floor(now - startTime < 0 ? 0 : (now - startTime) / 1000);
  return (
    <>
      <div>Stopwatch</div>
      <h1>{timer}</h1>
      <button onClick={() => handleStart()}>start</button>
      <button onClick={() => handleStop()}>stop</button>
    </>
  );
}
