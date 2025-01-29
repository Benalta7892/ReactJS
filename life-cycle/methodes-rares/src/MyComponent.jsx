import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "SpiderMan",
    };
    // console.log("Je suis dans le construtor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("%c getDerivedStateFromProps lancée", "color: red; background: yellow; font-size: 15px");

    console.log(props);
    console.log(state);

    return null;
  }

  forcerChangement = () => {
    this.forceUpdate(() => {
      console.log("Je force le changement");
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Je suis dans shouldComponentUpdate()");
    return true;
  }

  render() {
    console.log("Je suis dans le render()");

    return (
      <div>
        <p>Nom : {this.state.name}</p>
        <p>Age : {this.props.age}</p>
        <button onClick={this.forcerChangement}>Forcer</button>
      </div>
    );
  }
}

export default MyComponent;
