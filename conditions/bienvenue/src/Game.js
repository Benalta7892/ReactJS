import { Component } from "react";

class Result extends Component {
  state = {
    name: "Mario",
    winner: true,
  };

  render() {
    if (this.state.winner) {
      return (
        <div>
          <h1>Bravo {this.state.name}</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Raté !</h1>
        </div>
      );
    }
  }
}

export default Result;
