import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("%c render() du PureComponent enfant simple", "color: green;");

    return <div>PureComponent</div>;
  }
}

export default PureComp;
