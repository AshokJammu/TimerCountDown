import React, { useEffect, useState } from 'react'
import Display from './Display';
const Timer = () => {
    const endTime = new Date('January 15,2024 00:00:00').getTime();
    const [currentTime,setCurrentTime] = useState(new Date().getTime());
    const gap = endTime -currentTime;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const remaingDays = Math.floor(gap/days);
    const remainingHours = Math.floor((gap%days) / hours);
    const remaingMinutes = Math.floor((gap%hours) / minutes);
    const remaingSeconds = Math.floor((gap%minutes) / seconds);

    useEffect(()=>{
        setTimeout(()=>setCurrentTime(new Date().getTime()),1000)
    },[currentTime])
  return (
    <div>
        <center>
            <Display days={remaingDays}
            hours={remainingHours} minutes={remaingMinutes}
            seconds={remaingSeconds}
            />
        </center>
         
    </div>
  )
}

export default Timer