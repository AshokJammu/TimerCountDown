import React, { useEffect, useState } from "react"

import Covid from "./Covid";
import GoogleLogin from "./GoogleLogin";
import Timer from './Timer'
const App=()=>{
  
  return(
    <div>
      <center>
        {/* <Covid /> */}
        {/* <GoogleLogin /> */}
        <Timer />
      </center>
    </div>
  )
}

export default App;