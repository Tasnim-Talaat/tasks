import React, { Component } from "react";
import Child from "../Child/Child";

export default class Parent extends Component {
  state = {
    products: [
      { id: 1, name: "Toshiba", price: 1000, count: 50, onSale: true },
      { id: 2, name: "Oppo Reno5", price: 8000, count: 100, onSale: false },
      { id: 3, name: "Oppo Reno6", price: 10000, count: 20, onSale: false },
      { id: 4, name: "Apple", price: 20000, count: 10, onSale: true },
      { id: 5, name: "Macbook", price: 30000, count: 15, onSale: false },
      { id: 6, name: "Dell", price: 5000, count: 17, onSale: true },
    ],
  };

  deleteProduct = (productIndex) => {
    // console.log(`Delete ${productIndex}`);
    // 1-DeepCopy
    // console.log(myProduct);
    // console.log(this.state.products[productIndex].count);
    let myProduct = [...this.state.products];

    // 2-Action
    myProduct.splice(productIndex, 1);
    // 3-setState
    this.setState({ products: myProduct });
  };
  updateProduct = (productIndex,counts) => {

    // 1-DeepCopy
    let myProducts = [...this.state.products];
    // console.log(myProducts[productIndex].count);
    // let myCount=myProducts[productIndex].count

    // // 2-Action
    console.log(counts, 'counts');
    myProducts[productIndex].count=counts
    console.log(myProducts[productIndex].count  , 'action')  ;
    
    // // 3-setState
    this.setState({ products: myProducts });

  };

  render() {
    // console.log("Render Method");
    
    return (
      <>
        <div className="container py-3 bg-dark">
          <h1 className=" bg-danger rounded shadow p-2">Parent Component</h1>
          <div className="row g-5">
            {this.state.products.map((product, index) => (
              <Child
                delete={this.deleteProduct}
                productInfo={product}
                productIndex={index}
                update={this.updateProduct}

              />
            ))
            }
          </div>
        </div>
      </>
    );
  }
}
