import { createContext } from "react";
import { useState } from "react";
const ImageContext = createContext(null);

const ImageContextProvider = ({ children }) => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <ImageContextProvider value={[isLarge, setIsLarge, imageSize]}>
      {children}
    </ImageContextProvider>
  );
};

export { ImageContext, ImageContextProvider };
