import React, { Component } from "react";
import About from "../About/About";

export default class Home extends Component {
  state = {
    message: "Welcome To React",
  };
  welcome() {
    console.log("Hello");
  }
  render() {
    // binding
    // props 
    return (
      <>
        <h1>Home Component</h1>;
        <About sayHello={this.state.message} />
      </>
    );
  }
}
