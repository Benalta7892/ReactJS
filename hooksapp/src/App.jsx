import "./App.css";
import Profile from "./components/Profile1";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(1);
  const [profile, setProfile] = useState({});
  const [dark, setDark] = useState(false);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [count]);

  const goDark = () => {
    setDark(!dark);

    if (!dark) {
      document.body.classList.add("bg-secondary");
    } else {
      document.body.classList.remove("bg-secondary");
    }
  };

  const classBtnTheme = dark ? "btn-light" : "btn-dark";
  const textBtnTheme = dark ? "Rendre clair" : "Rendre sombre";

  const memoizedValue = useMemo(() => {
    console.log("Je suis dans isOverTen");

    return count > 10;
  }, [count]);

  console.log(memoizedValue);

  return (
    <div className="container">
      <h1 className="text-center">useMemo()</h1>

      {memoizedValue && (
        <div className="alert alert-danger" role="alert">
          Stop !
        </div>
      )}

      <button className="btn btn-info mb-3" onClick={() => setCount(count + 1)}>
        Incrementer {count}
      </button>

      <button className={`btn ${classBtnTheme} mb-3 float-end`} onClick={goDark}>
        {textBtnTheme}
      </button>

      <Profile count={count} profile={profile} />
    </div>
  );
}

export default App;
