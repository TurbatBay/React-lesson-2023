import { useState } from "react";
import "./App.css";
import Anime from "./components/Anime";
import Input from "./components/Input";
import Button from "./components/Button";
import { Tooltip } from "react-bootstrap";
import TopAnime from "./components/TopAnime";
function App() {
  const [form, setForm] = useState("");

  function handleInput(e) {
    setForm(e.target.value);
    console.log(form);
  }
  return (
    <div className="App">
      {/* <Input label="First" value={form} onChange={handleInput} />
      <Input label="Second" value={form} onChange={handleInput} /> */}
      {/* <Button />
      <Anime /> */}
      <TopAnime />
    </div>
  );
}

export default App;
