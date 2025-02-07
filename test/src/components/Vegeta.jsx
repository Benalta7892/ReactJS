import React, { Component } from "react";
import vegeta from "../vegeta.png";

class Vegeta extends Component {
  render() {
    return (
      <div className="col">
        <img src={vegeta} alt="vegeta" className="img-fluid h-50" />
        <br />
      </div>
    );
  }
}

export default Vegeta;
