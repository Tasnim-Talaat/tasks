import React, { Component } from "react";

export default class About extends Component {
  render() {
    console.log(this.props);
    return <h1>{this.props.sayHello}</h1>;
  }
}
