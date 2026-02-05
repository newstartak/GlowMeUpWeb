import ImageItem from "../ImageItem/ImageItem.jsx";

import "./ImageList.css";
import "./ListScrollBar.css";

export default function ImageList({ images, setPopupUrl })
{
  return (
    <>
      {images.length > 0 ? (
        <div id="ImageList">
          {images.map((url) => (
            <ImageItem
              key={url.split("?")[0]}
              url={url}
              setPopupUrl={setPopupUrl}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}
