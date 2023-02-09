import logo from "./logo.svg";
import "./App.css";
import Stopwatch from "./components/Stopwatch";
import InputFocus from "./components/InputFocus";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div className="App">
      {/* <Stopwatch /> */}
      <InputFocus />
      <VideoPlayer />
    </div>
  );
}

export default App;
