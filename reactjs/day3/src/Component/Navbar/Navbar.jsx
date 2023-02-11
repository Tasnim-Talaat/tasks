import React , {useEffect, useState } from 'react'

import { Link, Outlet } from "react-router-dom";
import Api from '../Api/Api'
import Home from '../Home/Home';

export default function Navbar() {
  var  [x,setX]=useState('') 
  function getName(e){
    setX(e.target.getAttribute('sub'))
    console.log(x)
  }

  return <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top end-0 top-0">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Movie</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" sub='home' onClick={(e)=>getName(e)} to="/">Home</Link>
        </li>
        
                              <li className="nav-item">
                                <Link className='nav-link text-capitalize'  sub='all' onClick={(e)=>getName(e)}  to="/api/all">   All                         
                    </Link>
                                        </li>
                              <li className="nav-item">
                                <Link className='nav-link text-capitalize' sub='movie' onClick={(e)=>getName(e)}   to="/api/movie">   Movie                         
                    </Link>
                                        </li>
                              <li className="nav-item">
                                <Link className='nav-link text-capitalize' sub='people' onClick={(e)=>getName(e)}   to='/api/people'>     People                       
                    </Link>
                                        </li>

      </ul>
     
    </div>
  </div>
</nav>
{console.log('xxxx',x)}
{x === "all" || x=== "movie" || x=== "people"? <Api 
pro={x}/>:<Home />}


  </>
}
