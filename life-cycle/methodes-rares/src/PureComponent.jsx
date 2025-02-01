import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("%c render() du PureComponent enfant simple", "color: green;");

    return (
      <div>
        <p>
          <span className="green">Pure Component : </span>
          {this.props.name}
        </p>
      </div>
    );
  }
}

export default PureComp;
