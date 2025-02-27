/* eslint-disable react/prop-types */
import { useState } from "react";
import { connect } from "react-redux";
import tv from "../images/tv.png";
import { buyTv } from "../redux/tv/actionTv";

function TvContainer(props) {
  console.log(props);

  const [totalTv, setTotalTv] = useState(1);

  return (
    <div className="container">
      <img src={tv} alt="tv" />
      <p>
        Disponibilité : <span id="count-tv">{props.tv}</span>
      </p>

      <div className="btn-container">
        <button onClick={() => props.buyTv(totalTv)}>Acheter</button>
        <input type="number" value={totalTv} onChange={(e) => setTotalTv(e.target.value)} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tv: state.television.tv,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyTv: (totalTv) => dispatch(buyTv(totalTv)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TvContainer);
