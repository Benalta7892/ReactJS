/* eslint-disable react/prop-types */
import phone from "../images/phone.png";
import { connect } from "react-redux";
// import store from "../redux/store";
import { buyPhone } from "../redux/phone/actionPhone";

function PhoneComponent(props) {
  console.log(props);

  return (
    <div className="container">
      <img src={phone} alt="phone" />
      <p>
        Disponibilité : <span id="count-phone">{props.phones}</span>
      </p>
      <button onClick={() => props.buyPhone()}>Acheter</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    phones: state.phones,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyPhone: () => dispatch(buyPhone()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);
