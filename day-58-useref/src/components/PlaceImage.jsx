import React from "react";
import { getImageUrl } from "./Utils";
import { useContext } from "react";
import { ImageContext } from "../context/imageContext";
export default function PlaceImage({ place }) {
  const [isLarge, setIsLarge, imageSize] = useContext(ImageContext);
  return (
    <>
      <img
        src={getImageUrl(place)}
        alt={place.name}
        width={imageSize}
        height={imageSize}
      />
    </>
  );
}
