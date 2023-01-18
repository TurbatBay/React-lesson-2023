import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Accordian from "./component/Accordian";
import Panel from "./component/Panel";
import Index from "./component/Index";
import ToasterPage from "./component/ToasterPage";
import HomePage from "./component/HomePage";
import Login from "./component/Login";
function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Routes>
        {/* <Route path="/" element={<Accordian />} /> */}
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
