import "./App.css";
import { createContext, useContext } from "react";
import List from "./components/List";
import { ImageContext } from "./context/imageContext";
function App() {
  // const [isLarge, setIsLarge, imageSize] = useContext(ImageContext);
  return (
    <div className="App">
      {/* <label>Use large Images</label>
      <input
        type="checkbox"
        checked={isLarge}
        onChange={() => setIsLarge(!isLarge)}
        // onChange={(e) => {
        //   setIsLarge(e.target.checked ? isLarge : !isLarge);
        // }}
      />

      <hr />
      <List imageSize={imageSize} /> */}
    </div>
  );
}

export default App;
