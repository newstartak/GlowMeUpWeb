import { Routes, Route } from "react-router-dom"
import "./App.css"

import Gallery from "@/pages/Gallery/Gallery"
import NotFound from "./pages/NotFound/NotFound"

export default function App()
{
  return(

    <Routes>
    
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="*" element={<NotFound />} />
    
    </Routes>

  )
}