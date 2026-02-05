import { useEffect } from "react";

import "./Rotate.css"

export default function Rotate({selectedImgRef}) {

  useEffect(() =>
  {
    const img = selectedImgRef?.current;

    const OnDrag = (e) =>
    {
      const rect = img.getBoundingClientRect();
      var x = ((e.clientX) - rect.left - rect.width / 2) / (rect.width / 2);
      var y = -((e.clientY - rect.top - rect.height / 2)) / (rect.height / 2);

      img.style.setProperty("--x", x);
      img.style.setProperty("--y", y);
      img.style.setProperty("--angle", `${(Math.abs(x) + Math.abs(y)) * 5}deg`);
      img.style.setProperty("--distance", "500px");
      img.style.setProperty("--sec", "0.1s");
    };

    const OnDragExit = () =>
    {
      img.style.setProperty("--x", 0);
      img.style.setProperty("--y", 0);
      img.style.setProperty("--angle", "10deg");
      img.style.setProperty("--sec", "0.5s");
    }

    img.addEventListener("pointermove", OnDrag);

    img.addEventListener("pointerleave", OnDragExit);
    
    return () =>
    {
      img.removeEventListener("pointermove", OnDrag);

      img.removeEventListener("pointerleave", OnDragExit);
    };

  }, []);
}
