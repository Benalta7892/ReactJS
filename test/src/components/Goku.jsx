import React, { Component } from "react";
import goku from "../goku.png";

class Goku extends Component {
  state = {
    hits: 0,
  };

  addOne = () => {
    this.setState((prevState) => {
      return {
        hits: prevState.hits + 1,
      };
    });
  };

  render() {
    return (
      <div className="col">
        <img src={goku} alt="goku" className="img-fluid	h-50" />
        <br />

        <button onClick={this.addOne} className="btn btn-success m-3">
          {this.props.name}
        </button>

        <table className="table table-striped">
          <thead>
            <tr>
              <th className="col">Coups</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.hits}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Goku;
