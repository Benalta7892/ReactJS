import React, { Component } from "react";
import goku from "./goku.png";
import countHits from "./countHits";

class Goku extends Component {
  render() {
    const { name, addOneHit, hocState } = this.props;

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

export default countHits(Goku);
