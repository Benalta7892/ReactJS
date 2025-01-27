import { Component } from "react";

class Result extends Component {
  state = {
    name: "Mario",
    winner: true,
  };

  render() {
    if (this.state.winner) {
      return <h1>Bravo {this.state.name}</h1>;
    } else {
      return <h1>Raté !</h1>;
    }
  }
}

export default Result;
