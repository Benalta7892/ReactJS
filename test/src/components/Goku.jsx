import React, { Component } from "react";
import goku from "../goku.png";

class Goku extends Component {
  state = {
    bg: "",
  };

  handleClick = () => {
    this.setState({
      bg: "bg-success",
    });
  };

  render() {
    return (
      <div className={`col ${this.state.bg}`}>
        <img onClick={this.handleClick} src={goku} alt="goku" className="img-fluid	h-50" />
        <br />
      </div>
    );
  }
}

export default Goku;
