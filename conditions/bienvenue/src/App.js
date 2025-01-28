import "./App.css";
import Result from "./components/Game";
import Button from "./components/CustomBtn";

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
