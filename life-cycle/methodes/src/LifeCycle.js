import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Toto",
      step: 1,
    };
    console.log(`Etape ${this.state.step} : Je suis dans le constructor()`);
  }

  componentDidMount() {
    console.log(`Etape ${this.state.step} : Je suis dans le componentDidMount()`);
  }

  render() {
    console.log(`Etape ${this.state.step} : Je suis dans le render()`);

    return (
      <div>
        {console.log(`Etape ${this.state.step} : Mise à jour DOM`)}
        <p>Chargement : {this.state.step}</p>
        <p>Nom : {this.state.name}</p>

        <ChildComponent />
      </div>
    );
  }
}

export default LifeCycle;
