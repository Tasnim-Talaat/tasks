import React, { Component } from "react";

export default class Child extends Component {
  render() {
    let { id, count, name, price, onSale  } = this.props.productInfo;
    // console.log(this.props.productCount);
let x ;
   
    return (
      <>
        <div className="col-md-4">
          <div className="product bg-info p-2 rounded shadow position-relative">
            <h3>Name: {name}</h3>
            <h4>Price: {price}</h4>
           <input type="text" id='editCount' className='form-control d-none' onInput={(e)=>{
            console.log(e.target.value)
           x=e.target.value
          }
            
            } placeholder={count} />
           {x == null?(<h4 className={count < 20 ? "text-danger" : ""} id='count'>Count: {count}</h4>):(<h4 className={x < 20 ? "text-danger" : ""} id='count'>Count: {x}</h4>)}
            
            {onSale ? (
              <div className="bg-danger text-white p-2 position-absolute top-0 end-0">
                <span>Sale</span>
              </div>
            ) : (
              ""
            )}

            <button
              onClick={() => this.props.delete(this.props.productIndex)}
              className="btn btn-danger btn-sm w-100 my-2"
            >
              Delete
            </button>
            <button onClick={()=> {
                            // console.log(this.props.productIndex);
                            // console.log(              document.querySelectorAll('#count')[1]
                            // );
              document.querySelectorAll('#count')[this.props.productIndex].classList.add('d-none')
           document.querySelectorAll('#editCount')[this.props.productIndex].classList.remove('d-none')
           document.querySelectorAll('#save')[this.props.productIndex].classList.remove('d-none')
           document.querySelectorAll('#update')[this.props.productIndex].classList.add('d-none')
          }
          }
             className="btn btn-success btn-sm w-100 my-2" id='update'>
              Update Count
            </button>
            <button onClick={()=> {
              document.querySelectorAll('#count')[this.props.productIndex].classList.remove('d-none')
              document.querySelectorAll('#editCount')[this.props.productIndex].classList.add('d-none')
              document.querySelectorAll('#update')[this.props.productIndex].classList.remove('d-none')
              document.querySelectorAll('#save')[this.props.productIndex].classList.add('d-none')
              this.props.update(this.props.productIndex,x)
              console.log(x);

            }
          }
             className="btn btn-danger btn-sm w-100 my-2 d-none" id='save'>
              Save Count
            </button>
          </div>
        </div>
      </>
    );
  }
}
