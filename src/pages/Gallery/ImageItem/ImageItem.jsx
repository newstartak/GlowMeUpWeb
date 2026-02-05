import { useState } from "react"

import "./ImageItem.css"

export default function ImageItem({selectedImgRef, url, setPopupUrl, children})
{
  const char_name = url.split('/').pop().split('.')[0].split('_')[1];

  const [loaded, setLoaded] = useState(false);

  return(

      <div
        className="ImageItem"
        onClick={() => {setPopupUrl(url)} }

        style=
        {{
          opacity: loaded ? "1" : "0"
        }}
      >

        <img
          ref={selectedImgRef}

          src={url}
          alt={char_name}

          onLoad={() => setLoaded(true)}

          draggable={false}
          loading="lazy"
        />

        <div className="textBG" />

        <div
          className="text"
        >
          {char_name}
        </div>
        
        {children}

      </div>

  )
}