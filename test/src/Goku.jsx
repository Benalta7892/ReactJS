import React, { Component } from "react";
import goku from "./goku.png";
import countHits from "./countHits";

class Goku extends Component {
  render() {
    const { name, addOneHit, hocState, life } = this.props;

    return (
      <div className="col">
        <img src={goku} alt="goku" className="img-fluid	h-50 " />
        <br />
        <button onClick={addOneHit} className="btn btn-success m-3">
          {name} Frappe
        </button>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Coups</th>
              <th scope="col">Vie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hocState.hits}</td>
              <td>{life} %</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default countHits(Goku);
