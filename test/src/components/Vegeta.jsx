import React, { Component } from "react";
import vegeta from "../vegeta.png";

class Vegeta extends Component {
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
        <img src={vegeta} alt="vegeta" className="img-fluid	h-50" />
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

export default Vegeta;
