import React, { useState,useEffect } from 'react'


const Pagination = ({data}) => {
    const pageNumbers= []
    for(let i=1;i<Math.ceil(data.length/10)+1;i++){
        pageNumbers.push(i)
    }

    return(
        <div>
            <center>
                {pageNumbers.map((page)=>(
                    <div className='row'>
                        <nav aria-label="...">
                            <ul className="pagination pagination-lg">
                                <li className="page-item active" aria-current="page">
                                <span className="page-link">{page}</span>
                                </li>
                                {/* <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li> */}
                            </ul>
                            </nav>
                    </div>
                ))}

                
            </center>
        </div>
    )
}

export default Pagination