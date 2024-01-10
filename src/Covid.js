import React,{ useEffect, useState }  from 'react'
import axios from 'axios'
const Covid = () => {
    const [data,setData] = useState([]);

  useEffect(()=>{
      axios.get(`https://data.covid19india.org/data.json`)
      .then((response)=>{
        console.log(response.data.statewise,"response");
        setData(response.data.statewise)
      }).catch((err)=>{
        console.log("error",err)
      })
  },[])
  return (
    <div>
    <center>
      <h1>Covid-19 Dashboard</h1>
    <table className="table table-success table-striped-columns">
      <thead className="thead-dark">
        <tr>
          <th>State</th>
          <th>Active</th>
          <th>Confirmed</th>
          <th>Deaths</th>
          <th>Recovered</th>
          <th>LastUpdate</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item)=>(
            <tr>
              <td>{item.state}</td>
              <td>{item.active}</td>
              <td>{item.confirmed}</td>
              <td>{item.deaths}</td>
              <td>{item.recovered}</td>
              <td>{item.lastupdatedtime}</td>
            </tr>
          ))
        }
        <tr>
          <td>
          </td>
        </tr>
      </tbody>
    </table>
    </center>
  </div>

)
}

export default Covid