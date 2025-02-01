import React, { Component } from "react";
import SimpleComp from "./SimpleComponent";
import PureComp from "./PureComponent";
import FunctionComp from "./FunctionComp";
import Button from "./Button";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "SpiderMan",
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Je suis dans shouldComponentUpdate décide TRUE");

  //   // console.log(this.state.name);
  //   // console.log(nextState);

  //   // if (this.state.name !== nextState.name) {
  //   //   return true;
  //   // }
  //   return true;
  // }

  changeToBatMan = () => {
    this.setState({
      name: "BatMan",
    });
  };

  render() {
    console.log("%c RENDER() DU COMPOSANT PARENT", "color: red;");

    return (
      <>
        <p>
          <span className="red">Parent Component : </span>
          {this.state.name}
        </p>

        <SimpleComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <FunctionComp name={this.state.name} />

        <Button changeToBatMan={this.changeToBatMan} />
      </>
    );
  }
}

export default ParentComponent;
