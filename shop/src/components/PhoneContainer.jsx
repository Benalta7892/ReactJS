/* eslint-disable react/prop-types */

// import phone from "../images/phone.png";
// import { useSelector, useDispatch } from "react-redux";
// import { buyPhone } from "../redux/phone/actionPhone";
// // import store from "../redux/store";

// function PhoneContainer() {
//   const phones = useSelector((state) => state.phones);
//   const dispatch = useDispatch();

//   return (
//     <div className="container">
//       <img src={phone} alt="phone" />
//       <p>
//         Disponibilité : <span id="count-phone">{phones}</span>
//       </p>
//       <button onClick={() => dispatch(buyPhone())}>Acheter</button>
//     </div>
//   );
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyPhone: () => dispatch(buyPhone()),
//   };
// };

// export default PhoneContainer;

import phone from "../images/phone.png";
import { connect } from "react-redux";
// import store from "../redux/store";
import { buyPhone } from "../redux/phone/actionPhone";

function PhoneComponent(props) {
  // console.log(props);

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
    phones: state.phone.phones,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyPhone: () => dispatch(buyPhone()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);
