import React, { Component } from "react";
import goku from "./goku.png";

class Goku extends Component {
  render() {
    return (
      <div className="col">
        <img src={goku} alt="goku" className="img-fluid	h-50" />
        <br />
      </div>
    );
  }
}

export default Goku;
