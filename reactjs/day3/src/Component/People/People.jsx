import React from 'react'

export default function People({movies:{title ,vote_average,poster_path}}) {
  return <>

<div className="col-md-3 py-2 " >
                 <div className="item rounded shadow position-relative">
                 
                  <div className="bg-danger text-white p-2 position-absolute top-0 end-0">
                    <span>{vote_average}</span>
                  </div>
                         <div className="image">
                                 <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className='w-100' alt="" />
                         </div>
                       
                 </div>
           </div>
    </>
  
}
