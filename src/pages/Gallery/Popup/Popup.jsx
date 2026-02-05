import {useState} from "react";

import Selected from "../Selected/Selected";
import DownloadBtn from "../Btns/DownloadBtn"

import "./Popup.css"

export default function Popup({popupUrl, setPopupUrl, isPC}) {

  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {popupUrl != null && (

      <div
        id="PopupScreenBlock"
        onClick={() =>
        {
          setPopupUrl(null)
          setLoaded(false)
        }}
      >

        <div id="Popup">

          <Selected selectedUrl={popupUrl}/>

          {isPC ?
            null
          :
            <DownloadBtn selectedUrl={popupUrl}/>
          }

          <p
            style=
            {{
              position:"fixed",
              top:"0%",
              right:"5%",
              color:"rgb(250,250,240)",
              fontSize:"10vmin",
              zIndex:"999",
              cursor:"default",
              touchAction:"none"
            }}
            onClick={() =>
            {
              setPopupUrl(null)
              setLoaded(false)
            }}
            >
            ×
          </p>

        </div>

      </div>

      )}
    </>
  );
}
