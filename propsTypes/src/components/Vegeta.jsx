import { Component } from "react";
import vegeta from "../assets/vegeta.jpg";
import countHits from "../hoc/countHits";
import { PropTypes } from "prop-types";

class Vegeta extends Component {
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   addOneHit: PropTypes.func.isRequired,
  //   hocState: PropTypes.shape({ hits: PropTypes.number.isRequired }).isRequired,
  //   life: PropTypes.number.isRequired,
  // };

  render() {
    const { name, addOneHit, hocState, life } = this.props;

    const lifeValue =
      life > 0 ? (
        <td>{life} %</td>
      ) : (
        <td>
          <span className="badge badge-danger">Mort</span>
        </td>
      );

    const button =
      life > 0 ? (
        <button onClick={addOneHit} className="btn btn-success m-3">{`${name} Frappe`}</button>
      ) : (
        <button className="btn btn-danger m-3 disabled">Mort</button>
      );

    return (
      <div className="col">
        <img src={vegeta} alt="Vegeta" height="400px" />
        <br />
        {button}

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col"> Coups</th>
              <th scope="col"> Vie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hocState.hits}</td>
              {lifeValue}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Vegeta.propTypes = {
  name: PropTypes.string.isRequired,
  addOneHit: PropTypes.func.isRequired,
  hocState: PropTypes.shape({ hits: PropTypes.number.isRequired }).isRequired,
  life: PropTypes.number.isRequired,
};

const VegetaWithHits = countHits(Vegeta, 10);

export default VegetaWithHits;
