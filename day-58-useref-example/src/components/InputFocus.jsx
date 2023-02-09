import React from "react";
import { useRef } from "react";

export default function InputFocus() {
  const inputUseRef = useRef(null);

  function handleFocus() {
    console.log("focus clicked");
    inputUseRef.current.focus();
  }
  function handleBlur() {
    console.log("Blur clicked");
    inputUseRef.current.blur();
  }
  return (
    <>
      <input type="text" ref={inputUseRef} />
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleBlur}>Blur</button>
    </>
  );
}
