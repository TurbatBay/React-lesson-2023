import React from "react";
import Users from "./pages/Users";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
