import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import Users from "./pages/Users";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xxl">
        <div className="App">
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
