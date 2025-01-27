import "./App.css";
import Result from "./Game";
import Button from "./CustomBtn";

function App() {
  return (
    <div className="App">
      <Result />
      <Button btnStyle={{ backgroundColor: "yellow", color: "blue" }}>Btn de App.js</Button>
    </div>
  );
}

export default App;
