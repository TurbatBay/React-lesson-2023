import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
function App() {
  const [form, setForm] = useState("");

  function handleInput(e) {
    setForm(e.target.value);
    console.log(form);
  }
  return (
    <div className="App">
      <Input label="First" value={form} onChange={handleInput} />
      <Input label="Second" value={form} onChange={handleInput} />
    </div>
  );
}

export default App;
