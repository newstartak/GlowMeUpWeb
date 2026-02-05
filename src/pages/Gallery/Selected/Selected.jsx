import { useEffect, useRef } from "react";

import ImageItem from "../ImageItem/ImageItem.jsx";
import Rotate from "./Rotate.jsx";

import "./Selected.css"

export default function Selected({ selectedUrl })
{
  const selectedImgRef = useRef(null);

  const AnimSec = 1;

  // 선택 이미지 변경 시 애니메이션 실행
  useEffect(() =>
  {
    const img = selectedImgRef?.current;

    if(img == null)
    {
      return;
    }

    img.style.setProperty("--sec", `${AnimSec}s`);

    img.classList.add("selectedAnim");

    const timer = setTimeout(() =>
    {
      img.classList.remove("selectedAnim");
    }, AnimSec * 1000);

    return (() => 
    {
      clearTimeout(timer)
    })

  }, [selectedUrl]);

  return (
    <>
      {selectedUrl ?

        <div id="Selected">

          <ImageItem
            selectedImgRef={selectedImgRef}

            key = {selectedUrl.split("?")[0]}
            url = {selectedUrl}
            setSelectedUrl = {() => {}}
          >
            <Rotate selectedImgRef={selectedImgRef}/>
          </ImageItem>
          
        </div>

      : null}
    </>
  );
}