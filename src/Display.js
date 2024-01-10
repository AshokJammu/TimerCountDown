import React from 'react'

const Display = ({days,hours,minutes,seconds}) => {
  return (
    <div> 
        <h1>CountDown Timer</h1>
        <h2>Festival offers ends in</h2>
        <div className="table-responsive">
        <table className='table  table-bordered'>
            <tbody >
                <tr className='table-dark'>
                    <th>{days}</th>  
                    <th>{hours}</th>  
                    <th>{minutes}</th>  
                    <th>{seconds}</th>  
                </tr>
                <tr>
                    <td>DAYS</td>
                    <td>HOURS</td>
                    <td>MINUTES</td>
                    <td>SECONDS</td>
                </tr>
            </tbody>
        </table>
        </div >
    </div>
  )
}

export default Display