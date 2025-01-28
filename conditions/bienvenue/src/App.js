import "./App.css";
import Result from "./Game";
import Button from "./CustomBtn";

function App() {
  const sayHello = () => alert("Hello World");
  return (
    <div className="App">
      <Result />
      <Button sayHello={sayHello} btnStyle={{ backgroundColor: "yellow", color: "blue" }}>
        Say Hello
      </Button>
    </div>
  );
}

export default App;
