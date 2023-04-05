import { createContext } from "react";
import { DATA } from "../data/data";

// Create a context for the book data
const BookContext = createContext(null);

// The BookProvider component that provides the book data to its children components
const BookProvider = ({ children }) => {
  console.log(DATA);
  return <BookContext.Provider value={DATA}>{children}</BookContext.Provider>;
};

// Export the BookContext and the BookProvider components
export { BookContext, BookProvider };
