import React, { useState } from 'react'
import axios from 'axios';

const Movie = () => {
    const [movie,setMovie] = useState("");
    const [data,setData] = useState([]);

    const submitHandler=(e)=>{
        e.preventDefault()
        // console.log(movie);
        axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=263d22d8`)
        .then((response)=>{
            console.log(response.data.Search,"response")
            setData(response.data.Search);
            setMovie("")
        }).catch((err)=>{
            console.log(err,"error")
        })
    }
 const download=(url)=>{
    console.log(url);
    // response.arrayBuffer().then()
    fetch(url).then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png");
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });

 }
  return (
    <div>
        <center>
            <h1>Seacrch faviourate movies name</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="movie" value={movie} onChange={(e)=>setMovie(e.target.value)} placeholder='search'/>
                <input type='submit' value="Search"/>
            </form>
            <div className='row'>
                {data && data.map((item,index)=>(
                    <div className='col-md-4'>
                    <div key={item.imdbID} className="card" style={{"width": "18rem"}}>
                            <img src={item.Poster} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.Title}</h5>
                                <p className="card-text">{item.Year}</p>
                                <a className="btn btn-primary" onClick={()=>download(item.Poster)}>Download </a>
                            </div>
                    </div> 
                    </div> 
                ))}
            </div>
             
        </center>
    </div>
  )
}

export default Movie