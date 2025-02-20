import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Logout = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      console.log("Deconnexion");
      signOut(auth)
        .then(() => {
          console.log("Vous etes deconnecté");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        })
        .catch((error) => {
          console.log("Oups");
        });
    }
  }, [checked]);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className="logout-container">
      <label className="switch">
        <input onChange={handleChange} type="checkbox" checked={checked} />
        <span className="slider round" data-tooltip-id="my-tooltip" data-tooltip-content="Déconnexion"></span>
      </label>
      <Tooltip id="my-tooltip" place="left" effect="solid" />
    </div>
  );
};
export default Logout;
