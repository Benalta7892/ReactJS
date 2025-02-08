import React, { Component } from "react";
import frieza from "../frieza.png";

class Frieza extends Component {
  state = {
    bg: "",
  };

  handleClick = () => {
    this.setState({
      bg: "bg-danger",
    });
  };
  render() {
    return (
      <div className={`col ${this.state.bg}`}>
        <img onClick={this.handleClick} src={frieza} alt="frieza" className="img-fluid	h-50" />
        <br />
      </div>
    );
  }
}

export default Frieza;
