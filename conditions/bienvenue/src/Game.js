import { Component } from "react";

class Result extends Component {
  state = {
    name: "Mario",
    winner: true,
  };

  handleState = () => {
    if (this.state.winner) {
      this.setState({
        winner: false,
      });
    } else {
      this.setState({
        winner: true,
      });
    }

    console.log(this.state.winner);
  };

  render() {
    return (
      <div>
        {this.state.winner && <h1 className="alert alert-success">Bravo {this.state.name}</h1>}
        {!this.state.winner && <h1 className="alert alert-danger">Raté! {this.state.name}</h1>}

        <button onClick={this.handleState} className="btn btn-primary">
          Change State
        </button>
      </div>
    );
  }
}

export default Result;
