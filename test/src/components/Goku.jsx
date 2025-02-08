import React, { Component } from "react";
import goku from "../goku.png";
import handleClicks from "./handleClicks";

class Goku extends Component {
  render() {
    const { backGround, clickHandler } = this.props;

    return (
      <div className={`col ${backGround}`}>
        <img onClick={clickHandler} src={goku} alt="goku" className="img-fluid	h-50" />
        <br />
      </div>
    );
  }
}

export default handleClicks(Goku);
