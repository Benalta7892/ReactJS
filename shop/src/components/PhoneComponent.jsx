import phone from "../images/phone.png";

function PhoneComponent() {
  return (
    <div className="container">
      <img src={phone} alt="phone" />
      <p>
        Disponibilité :<span id="count-phone"></span>
      </p>
      <button>Acheter</button>
    </div>
  );
}
export default PhoneComponent;
