import React, { Component } from "react";

class SimpleComp extends Component {
  render() {
    console.log("%c render() du composant enfant simple", "color: yellow;");

    return (
      <>
        <p>
          <span className="yellow">Simple Component : </span>
          {this.props.name}
        </p>
      </>
    );
  }
}

export default SimpleComp;
