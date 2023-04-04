import React from "react";

export default function Input({ label, value, onChange }) {
  return (
    <>
      <form>
        <label>
          {label}
          <input type="text" name="name" onChange={onChange} value={value} />
        </label>
      </form>
    </>
  );
}
