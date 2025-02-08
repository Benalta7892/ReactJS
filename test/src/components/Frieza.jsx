import React, { Component } from "react";
import frieza from "../frieza.png";
import handleClicks from "./handleClicks";

class Frieza extends Component {
  render() {
    const { backGround, clickHandler } = this.props;

    return (
      <div className={`col ${backGround}`}>
        <img onClick={clickHandler} src={frieza} alt="frieza" className="img-fluid	h-50" />
        <br />
      </div>
    );
  }
}

export default handleClicks(Frieza);
