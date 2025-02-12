import "./App.css";
import Profile from "./components/Profile1";

function App() {
  return (
    <div className="container">
      <h1 className="text-center">useMemo()</h1>

      <button className="btn btn-info mb-3">Increment</button>

      <button className="btn btn-dark mb-3 float-right">Increment</button>

      <Profile />
    </div>
  );
}

export default App;
