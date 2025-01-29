import React, { Component } from "react";

class SimpleComp extends Component {
  render() {
    console.log("%c render() du composant enfant simple", "color: yellow;");

    return <div>SimpleComponent</div>;
  }
}

export default SimpleComp;
