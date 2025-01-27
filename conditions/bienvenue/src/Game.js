import { Component } from "react";
import Button from "./CustomBtn";

class Result extends Component {
  state = {
    name: "Mario",
    winner: true,
  };

  changeState = () => this.setState({ winner: !this.state.winner });

  render() {
    const classColor = this.state.winner ? "alert-success" : "alert-danger";

    const succes = {
      backgroundColor: "green",
      color: "black",
    };

    const danger = {
      backgroundColor: "red",
      borderRadius: "50px",
    };

    return (
      <div className="container p-4">
        <div className={`alert ${classColor}`} role="alert">
          {this.state.winner ? `Bravo ${this.state.name}` : `Raté !`}
        </div>

        <button onClick={this.changeState} className="btn btn-primary">
          Change State
        </button>

        <Button btnStyle={succes}>Cliquez ici</Button>
        <Button btnStyle={danger}>Cliquez ici</Button>
        <Button btnStyle={{ backgroundColor: "blue" }}>Cliquez ici</Button>
      </div>
    );
  }
}

export default Result;
