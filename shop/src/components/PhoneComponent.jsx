import phone from "../images/phone.png";
import { connect } from "react-redux";

function PhoneComponent(props) {
  return (
    <div className="container">
      <img src={phone} alt="phone" />
      <p>
        Disponibilité : <span id="count-phone">{props.phones}</span>
      </p>
      <button>Acheter</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    phones: state.phones,
  };
};

export default connect(mapStateToProps)(PhoneComponent);
