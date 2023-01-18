import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Accordian from "./component/Accordian";
import Panel from "./component/Panel";
import Index from "./component/Index";
import ToasterPage from "./component/ToasterPage";
import HomePage from "./component/HomePage";
import Login from "./component/Login";
import Register from "./component/Register";
import Header from "./component/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Accordian />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
