import { Routes, Route, Router } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import Users from "./pages/Users";
import Product from "./pages/Product";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./pages/HomePage";
import Topbar from "./scenes/global/Topbar";
import Sidebars from "./scenes/global/Sidebars";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Topbar setIsSidebar={setIsSidebar} />
          <main className="content">
            <Sidebars isSidebar={isSidebar} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/users" element={<Users />} />
              <Route path="/product" element={<Product />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
