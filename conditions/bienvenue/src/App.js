// import "./App.css";
// import Result from "./components/Game";
// import Btn from "./components/CustomBtn";
import Welcome from "./components/Welcome";
import Template from "./components/Template";
import Buttons from "./components/Buttons";

function App() {
  const sayHello = () => alert("Hello World");
  return (
    <>
      {/* <Result />
      <Btn changeState={sayHello} btnStyle={{ backgroundColor: "yellow", color: "blue" }}>
        Say Hello
      </Btn> */}
      <Template />
      <Welcome />
      <Buttons />
    </>
  );
}

export default App;
