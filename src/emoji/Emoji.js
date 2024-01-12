import React, { useEffect, useState } from 'react'
import emojiData from './Emoji.json'
const Emoji = () => {
    const [search,setSearch] = useState("");
    const [data,setData] = useState([]);

    useEffect(()=>{
        console.log(search,"search");
        const newData = emojiData.filter((emoji)=> emoji.title.toLowerCase().includes(
            search.toLowerCase()
        ))
        setData(newData)
     },[search])
    
  return (
    <div> 
        <center>
            <form>
                <input type='text' name="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Type emoji....' />
                {/* <input type="submit" name="search"/> */}
            </form>
        </center>
        <div>
            {
                data.map((item)=>(
                    <div>
                    <div className="card">
                    <div className="card-body" onClick={( )=>{navigator.clipboard.writeText(item.symbol); alert("Emoji copied")}}>
                        {item.symbol}  {item.title}
                    </div>
                    </div>
                </div>
                ))
            }
       </div>
    </div>
  )
}

export default Emoji