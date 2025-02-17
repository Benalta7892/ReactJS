import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setError(null);
        setSuccess(`Consultez votre email ${email} pour changer le mot de passe`);
        setEmail("");
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      })
      .catch((error) => {
        setError(error);
        setEmail("");
      });
  };

  const disabled = email === "";

  return (
    <div className="sign-up-login-box">
      <div className="sl-container">
        <div className="form-box-left-forget"></div>
        <div className="form-box-right">
          <div className="form-content">
            {success && (
              <span
                style={{
                  border: "1px solid green",
                  background: "green",
                  color: "#ffffff",
                }}>
                {success}
              </span>
            )}

            {error && <span>{error.message}</span>}

            <h2>Mot de passe oublié ?</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  autoComplete="off"
                  required
                />
                <label htmlFor="email">Email</label>
              </div>

              <button disabled={disabled}>Récupérer</button>
            </form>

            <div className="link-container">
              <Link to="/login" className="simple-link">
                Déjà inscrit ? Connectez-vous.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgetPassword;
