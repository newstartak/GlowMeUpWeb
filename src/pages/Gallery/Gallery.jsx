import { useEffect, useState, useRef } from 'react'
import { useSearchParams } from "react-router-dom";

import useImageList from "@/customHooks/useImageList"

import Search from './Search/Search'
import Popup from "./Popup/Popup"
import ImageList from "./ImageList/ImageList"


import logo from "@/assets/logo.png"
import QR from "@/assets/qrcode.png"

import "./Gallery.css"

export default function Gallery()
{
  // 쿼리 스트링으로부터 버킷명 가져오기
  const [searchParams] = useSearchParams();
  let bucket = searchParams.get("bucket") ?? "singapore";

  if(bucket.length == 0)
  {
    bucket = "singapore";
  }
  //===============================


  // 버킷으로부터 이미지 최대 n개 가져오기
  const { images } = useImageList("beautyx", `${bucket}/imgs`, 30);
  //================================
  

  // 검색을 통해 표시할 이미지 필터링
  const [filter, setFilter] = useState();

  const filteredImages = filter?.length > 0 ? images?.filter((img) =>
  {
    const char_name = img.split('/').pop().split('.')[0].split('_')[1];
    return char_name.toLowerCase().includes(filter?.toLowerCase());
  }) : images
  //============================


  // 플랫폼 확인을 통한 UI 분기
  const ua = navigator.userAgent.toLowerCase();

  let isPC = false;

  if(ua.includes("windows") || ua.includes("macintosh"))
  {
    isPC = true;
  }
  //========================

  const [popupUrl, setPopupUrl] = useState(null);


  const didMountRef = useRef(false);

  useEffect(() =>
  {
    if (!didMountRef.current && images != null && images.length > 0)
    {
      didMountRef.current = true;
      return;
    }

    setPopupUrl(images[0]);

  }, [images]);



// 테스트용

// function buildGcsMediaUrl(bucketName, objectName) {
//   const encoded = encodeURIComponent(objectName);
//   return `https://storage.googleapis.com/storage/v1/b/${bucketName}/o/${encoded}?alt=media`;
// }

// const [text, setText] = useState("");
//   useEffect(() => {
//     const url = buildGcsMediaUrl("beautyx", "test/json.json");

//     console.log(url)

//     fetch(url)
//       .then(async (r) => {
//         if (!r.ok) throw new Error(String(r.status));
//         return await r.text();
//       })
//       .then(setText)
//       .catch((e) => setText("fail " + String(e)));
//   }, []);

// =====



  return (
    <div id="Gallery">

      <div id="Header">
        
        <img id="Logo" src={logo}/>

        {isPC ?
          <img src={QR} id="QR"/>
        :
          <Search input={filter} setFilter={setFilter} />
        }

      </div>

      <div id="Body">

        {/* {text} */}

        <ImageList images={filteredImages} setPopupUrl={setPopupUrl} />

      </div>

      <Popup popupUrl={popupUrl} setPopupUrl={setPopupUrl} isPC={isPC}/>
    
    </div>
  )
}