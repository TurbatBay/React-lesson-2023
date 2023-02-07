import React from "react";
import Book from "./Book";
import { useContext } from "react";
import { BookContext } from "../contexts/bookContext";

// The component that displays the list of books
export default function Books() {
  // Use the BookContext to retrieve the book data
  const list = useContext(BookContext);

  // Map the book data to the Book component and display the list of books
  return (
    <ul>
      {list.map((item, index) => {
        return <Book key={index} item={item} />;
      })}
    </ul>
  );
}
