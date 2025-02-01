import React, { Component } from "react";
import SimpleComp from "./SimpleComponent";
import PureComp from "./PureComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "SpiderMan",
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Je suis dans shouldComponentUpdate décide FALSE");

    console.log(this.state.name);
    console.log(nextState);

    if (this.state.name !== nextState.name) {
      return true;
    }
    return false;
  }

  changeToBatMan = () => {
    this.setState({
      name: "BatMan",
    });
  };

  render() {
    console.log("%c RENDER() DU COMPOSANT PARENT", "color: red;");

    return (
      <div>
        <SimpleComp />
        <PureComp />

        <button onClick={this.changeToBatMan}>Changer en BatMan</button>
      </div>
    );
  }
}

export default ParentComponent;
