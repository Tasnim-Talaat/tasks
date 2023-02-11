import React from 'react'

import './Home.css'
import film1 from './film1.jpg'
import film2 from './film2.jpg'
import film3 from './film3.jpg'
export default function Home() {
  return <>
  <div className="banner position-relative">
    <div className="overlay d-flex justify-content-center align-items-center text-white">
      <div className="caption ">
        <h3> Welcome To React Router</h3>
      </div>

      </div>
      <div className="container position-absolute images  ">
        <div className="row ">
          <div className="col-md-4">
          <img src={film1}  className='w-100 rounded shadow' alt="" />

          </div>
          <div className="col-md-4">
          <img src={film2}  className='w-100 rounded shadow ' alt="" />

          </div>
          <div className="col-md-4">
          <img src={film3}  className='w-100 rounded shadow' alt="" />

          </div>
      </div>
    </div>
  </div>
  </>
}
