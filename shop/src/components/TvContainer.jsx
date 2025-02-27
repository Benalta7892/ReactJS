/* eslint-disable react/prop-types */

import { connect } from "react-redux";
import tv from "../images/tv.png";
import { buyTv } from "../redux/tv/actionTv";

function TvContainer(props) {
  console.log(props);

  return (
    <div className="container">
      <img src={tv} alt="tv" />
      <p>
        Disponibilité : <span id="count-tv">{props.tv}</span>
      </p>
      <button onClick={() => props.buyTv()}>Acheter</button>
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
    buyTv: () => dispatch(buyTv()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TvContainer);
