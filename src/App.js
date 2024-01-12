import React, { useEffect, useState } from "react"

import Covid from "./Covid";
import GoogleLogin from "./GoogleLogin";
import Timer from './Timer'
import Movie from './Movie'
import Emoji from "./emoji/Emoji";
import Pagination from "./pagination/Pagination";
import Display from "./pagination/Display";
const App=()=>{
  
  return(
    <div>
      <center>
        {/* <Covid /> */}
        {/* <GoogleLogin /> */}
        {/* <Timer /> */}
        {/* <Movie /> */}
        {/* <Emoji /> */}
        <Display  />
      </center>
    </div>
  )
}

export default App;