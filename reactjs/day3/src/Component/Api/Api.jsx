import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import All from '../All/All';
import People from '../People/People';


export default function Api({pro}) {
       const [trending,setTrending]=useState([])
    
       async function getTrending(){
        let {data}= await Axios.get(
                `https://api.themoviedb.org/3/trending/${pro}/day?api_key=1bf47475bba9e0be71cfa3327952331a`
        )
        setTrending(data.results)
       }
       useEffect(()=>{

        getTrending()

       
       },[pro])

         return <>
  <div className="container py-5">
        <div className="row gy-3 py-5">

{        trending.map((movie,index)=>
                pro === "all" ?
             <All movies={movie} />: pro === "movie" ?<People movies={movie} /> :''
             )}   

   
      </div>
      </div>
  </>
}
