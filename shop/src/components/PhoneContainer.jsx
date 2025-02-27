/* eslint-disable react/prop-types */

// import phone from "../images/phone.png";
// import { useSelector, useDispatch } from "react-redux";
// import { buyPhone } from "../redux/phone/actionPhone";

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

import { useState } from "react";
import phone from "../images/phone.png";
import { connect } from "react-redux";
import { buyPhone } from "../redux/phone/actionPhone";

function PhoneComponent(props) {
  console.log(props);

  const [totalPhone, setTotalPhone] = useState(1);

  return (
    <div className="container">
      <img src={phone} alt="phone" />
      <p>
        Disponibilité : <span id="count-phone">{props.phones}</span>
      </p>

      <div className="btn-container">
        <button onClick={() => props.buyPhone(totalPhone)}>Acheter</button>
        <input type="number" value={totalPhone} onChange={(e) => setTotalPhone(e.target.value)} />
      </div>
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
    buyPhone: (totalPhone) => dispatch(buyPhone(totalPhone)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);
