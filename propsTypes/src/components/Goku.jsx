import goku from "../assets/goku.png";
import countHits from "../hoc/countHits";
import { PropTypes } from "prop-types";
import CustomBtn from "../customComponents/CustomBtn";
import CustomTable from "../customComponents/CustomTable";

const Goku = ({ name, addOneHit, hocState, life }) => {
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   addOneHit: PropTypes.func.isRequired,
  //   hocState: PropTypes.shape({ hits: PropTypes.number.isRequired }).isRequired,
  //   life: PropTypes.number.isRequired,
  // };

  const lifeValue =
    life > 0 ? (
      <td>{life} %</td>
    ) : (
      <td>
        <span className="badge bg-danger">Mort</span>
      </td>
    );

  return (
    <div className="col">
      <img src={goku} alt="Vegeta" height="400px" />
      <br />
      {life > 0 ? (
        <CustomBtn clickHandler={addOneHit} classes="btn btn-success m-3">{`${name} Frappe`}</CustomBtn>
      ) : (
        <CustomBtn classes="btn btn-danger m-3 disabled">Mort</CustomBtn>
      )}

      <CustomTable hocStateObjProp={hocState} lifeValueProp={lifeValue} />
    </div>
  );
};

Goku.propTypes = {
  name: PropTypes.string.isRequired,
  addOneHit: PropTypes.func.isRequired,
  hocState: PropTypes.shape({ hits: PropTypes.number.isRequired }).isRequired,
  life: PropTypes.number.isRequired,
};

const GokuWithHits = countHits(Goku, 20);

export default GokuWithHits;
