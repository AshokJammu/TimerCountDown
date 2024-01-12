import React, { useState,useEffect } from 'react'
import axios from 'axios';
import Pagination from './Pagination';
const Display = () => {
    const [data,setData] = useState([]);
    const [perPage,setPerPage] = useState([])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response)=>{
            // console.log(response.data.slice(0,10))
            setData(response.data);
            setPerPage(response.data.slice(0,10));
        }).catch((err)=>{
            console.log(err,"error")
        },[])
    })
  return (
    <div className='App'>
        {
            data.length >= 1 ? 
            <div>
                {perPage.map((item)=>(
                    <div key={item.id} className='card'>
                        <div className="card-body">
                            {item.title}
                        </div>
                        
                    </div>
                ))}
            </div> : <p>Data not loaded</p>
        }

        <Pagination data= {data}/>
    </div>
  )
}

export default Display