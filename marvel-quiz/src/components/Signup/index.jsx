import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const data = {
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [loginData, setLoginData] = useState(data);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setLoginData({ ...data });
        navigate("/welcome");
      })
      .catch((error) => {
        setError(error);
        setLoginData({ ...data });
      });
  };

  const { pseudo, email, password, confirmPassword } = loginData;

  const btn =
    pseudo === "" || email === "" || password === "" || password !== confirmPassword ? (
      <button disabled>Inscription</button>
    ) : (
      <button>Inscription</button>
    );

  // Gestion erreurs
  const errorMsg = error !== "" && <span>{error.message}</span>;

  return (
    <div className="sign-up-login-box">
      <div className="sl-container">
        <div className="form-box-left-signup"></div>
        <div className="form-box-right">
          <div className="form-content">
            {errorMsg}

            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required />
                <label htmlFor="pseudo">Pseudo</label>
              </div>

              <div className="input-box">
                <input onChange={handleChange} value={email} type="email" id="email" autoComplete="off" required />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-box">
                <input
                  onChange={handleChange}
                  value={password}
                  type="password"
                  id="password"
                  autoComplete="off"
                  required
                />
                <label htmlFor="password">Mot de passe</label>
              </div>

              <div className="input-box">
                <input
                  onChange={handleChange}
                  value={confirmPassword}
                  type="password"
                  id="confirmPassword"
                  autoComplete="off"
                  required
                />
                <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
              </div>
              {btn}
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
export default Signup;
