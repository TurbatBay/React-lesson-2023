import React from "react";
import Books from "./components/Books";
import { BookProvider } from "./contexts/bookContext";
export default function BooksList() {
  return (
    <div>
      <BookProvider>
        <Books />
      </BookProvider>
    </div>
  );
}
