import React, {useState } from 'react'

export default function Product() {
 
   const [products, setProducts]=useState([
    { id: 1, name: "Toshiba", price: 1000, count: 50, onSale: true },
    { id: 2, name: "Oppo Reno5", price: 8000, count: 100, onSale: false },
    { id: 3, name: "Oppo Reno6", price: 10000, count: 20, onSale: false },
    { id: 4, name: "Apple", price: 20000, count: 10, onSale: true },
    { id: 5, name: "Macbook", price: 30000, count: 15, onSale: false },
    { id: 6, name: "Dell", price: 5000, count: 17, onSale: true },
  ])
  

 
  let [Product,setProduct]=useState({})
  let [count,setCount]=useState(0)

  function decProduct(idProduct){

    setCount(products[idProduct].count--)
   }

  function incProduct(idProduct){
    setCount(products[idProduct].count++)
  }
  
  function delProduct(idProduct){
    setProduct(products.splice(idProduct,1))
    console.log(products)
  }

  return (
    <div className="container bg-dark p-5">
        <div className="row g-4 ">
               {products.map((prod, index) => 
              <div className="col-md-4">
              <div className="product bg-info p-2 rounded shadow position-relative">
                <h3>Name: {prod.name}</h3>
                <h4>Price: {prod.price}</h4>
                <div className="d-flex justify-content-evenly">
                <i className="btn btn-success fa-solid fa-plus py-2 fs-5" onClick={()=>incProduct(index)}></i>
             
                
              <h4 className={prod.count < 20 ? "text-danger" : ""} id='count'>Count: {prod.count}</h4>
                
                {prod.onSale ? (
                  <div className="bg-danger text-white p-2 position-absolute top-0 end-0">
                    <span>Sale</span>
                  </div>
                ) : (
                  ""
                )}
                <i className="btn btn-success fa-solid fa-minus py-2 fs-5" onClick={()=>decProduct(index)}></i>
                </div>
                <button className="btn btn-danger btn-sm w-100 my-2"  onClick={()=>delProduct(index)}>
                  Delete
                </button>
              </div>
            </div>
              )
        }
        </div>
    </div>
  )
}
