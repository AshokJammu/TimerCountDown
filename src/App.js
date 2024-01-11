import React, { useEffect, useState } from "react"

import Covid from "./Covid";
import GoogleLogin from "./GoogleLogin";
import Timer from './Timer'
import Movie from './Movie'
const App=()=>{
  
  return(
    <div>
      <center>
        {/* <Covid /> */}
        {/* <GoogleLogin /> */}
        {/* <Timer /> */}
        <Movie />
      </center>
    </div>
  )
}

export default App;