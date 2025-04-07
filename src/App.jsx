import React, { useEffect, useState } from 'react'

import axios from "axios";

const useMousePointer = () => {
      const [mousePoint, setMousePoint] = useState({x: 0, y: 0});

      const handleMousemove = (e) =>{
        setMousePoint({ x: e.clientX, y: e.clientY})
      }

    useEffect(() =>{

          window.addEventListener("mousemove", handleMousemove)
      return () =>{
        window.removeEventListener("mousemove", handleMousemove)
      }
         

    }, [])

    return mousePoint

    }


function App() {

   const mousePoint  = useMousePointer();


   return (
    <div>
      Your mouse position { mousePoint.x} { mousePoint.y}
    </div>
   )

}
 
export default App
