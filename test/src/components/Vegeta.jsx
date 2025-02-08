import React, { Component } from "react";
import vegeta from "../vegeta.png";

class Vegeta extends Component {
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
        <img onClick={this.handleClick} src={vegeta} alt="vegeta" className="img-fluid h-50" />
        <br />
      </div>
    );
  }
}

export default Vegeta;
