import React from 'react'


const Pagination = ({data,pageHandler}) => {
    const pageNumbers= []
    for(let i=1;i<Math.ceil(data.length/10)+1;i++){
        pageNumbers.push(i)
    }

    return(
        <div>   
                {pageNumbers.map((page)=>(
                     <button className='btn btn-outline-primary' onClick={()=>pageHandler(page)}>{page}</button>
                ))}  
        </div>
    )
}

export default Pagination