import "./App.css";
import ClassState from "./components/ClassState";
import FunctionState from "./components/FunctionState";

function App() {
  return (
    <>
      <h1 className="text-center">Les Hooks : useState</h1>
      <ClassState />
      <hr />
      <FunctionState />
    </>
  );
}

export default App;
