import React, { Component } from "react";
import frieza from "../frieza.png";

class Frieza extends Component {
  render() {
    return (
      <div className="col">
        <img src={frieza} alt="frieza" className="img-fluid	h-50" />
        <br />
      </div>
    );
  }
}

export default Frieza;
