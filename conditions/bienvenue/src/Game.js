import { Component } from "react";

class Result extends Component {
  state = {
    name: "Mario",
    winner: true,
  };

  render() {
    return this.state.winner ? <h1>Bravo {this.state.name}</h1> : <h1>Raté !</h1>;
  }
}

export default Result;
