import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

const Login = (props) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btn, setBtn] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (password.length > 5 && email !== "") {
      setBtn(true);
    } else if (btn) {
      setBtn(false);
    }
  }, [email, password, btn]);

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setEmail("");
        setPassword("");
        navigate("/welcome", { replace: true });
      })
      .catch((error) => {
        setError(error);
        setEmail("");
        setPassword("");
      });
  };

  return (
    <div className="sign-up-login-box">
      <div className="sl-container">
        <div className="form-box-left-login"></div>
        <div className="form-box-right">
          <div className="form-content">
            {error !== "" && <span>{error.message}</span>}

            <h2>Connexion</h2>
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

              <div className="input-box">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  autoComplete="off"
                  required
                />
                <label htmlFor="password">Mot de passe</label>
              </div>
              {<button disabled={btn ? false : true}>Connextion</button>}
            </form>

            <div className="link-container">
              <Link to="/signup" className="simple-link">
                Nouveau sur Marvel Quiz ? Inscrivez-vous maintenant.
              </Link>
              <br />
              <Link to="/forgetpassword" className="simple-link">
                Mot de passe oublié ? Récupérez-le ici.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
