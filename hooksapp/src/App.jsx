import "./App.css";
import Profile from "./components/Profile1";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(1);
  const [profile, setProfile] = useState({});

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

  const isOverTen = () => {
    console.log("Je suis dans isOverTen");

    return count > 10;
  };

  return (
    <div className="container">
      <h1 className="text-center">useMemo()</h1>

      {isOverTen() && (
        <div className="alert alert-danger" role="alert">
          Stop !
        </div>
      )}

      <button className="btn btn-info mb-3" onClick={() => setCount(count + 1)}>
        Incrementer {count}
      </button>

      <button className="btn btn-dark mb-3 float-end">Modifier</button>

      <Profile count={count} profile={profile} />
    </div>
  );
}

export default App;
