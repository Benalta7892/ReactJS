import React, { Component } from "react";
import vegeta from "./vegeta.png";
import countHits from "./countHits";

class Vegeta extends Component {
  render() {
    const { name, addOneHit, hocState } = this.props;

    return (
      <div className="col">
        <img src={vegeta} alt="vegeta" className="img-fluid h-50" />
        <br />
        <button onClick={addOneHit} className="btn btn-success m-3">
          {name} Frappe
        </button>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Coups</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hocState.hits}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default countHits(Vegeta);
