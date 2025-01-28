import { Component } from "react";
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";

class Result extends Component {
  state = {
    name: "Mario",
    winner: true,
  };

  changeState = () => this.setState({ winner: !this.state.winner });

  render() {
    const classColor = this.state.winner ? "success" : "danger";

    return (
      <>
        <Alert variant={classColor} className="text-center">
          {this.state.winner ? `Bravo ${this.state.name}` : `Raté !`}
        </Alert>

        <Button onClick={this.changeState} variant="success" style={{ display: "block", margin: "5px auto" }}>
          Change State
        </Button>
      </>
    );
  }
}

export default Result;
