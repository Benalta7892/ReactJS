import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("%c render() du PureComponent enfant simple", "color: green;");

    return (
      <>
        <p>
          <span className="green">Pure Component : </span>
          {this.props.name}
        </p>
      </>
    );
  }
}

export default PureComp;
